var containerDiv = document.getElementById("container");
var svg = d3.select(containerDiv).append("svg"),
    margin = 20,
    diameter = 700;
    g = svg.append("g");

var color = d3.scaleLinear()
    .domain([-1, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);

var pack = d3.pack()
    .size([diameter - margin, diameter - margin])
    .padding(2);

function redraw() {
    // Deals with resizing the window
  var width = containerDiv.clientWidth;
  var height = containerDiv.clientHeight;
  var minspace = Math.min(width, height);
  diameter = Math.max(minspace - 10, 200);
  margin = 10;
  // Use the extracted size to set the size of the SVG element.
  svg
    .attr("width", width)
    .attr("height", height)

  g.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  pack
    .size([diameter - margin, diameter - margin])
    .padding(2);
}

redraw();

// Define the div for the tooltip
var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

d3.json("output.json", function(error, root) {
  if (error) throw error;

  console.log(root);
  d3JSON = {name : "Random"};
  d3JSON.children = [];


  for(var i = 0; i<root.classes.length; i++) {
    var javaClass = root.classes[i];
    console.log(javaClass);
    var classChild = {};
    classChild.name = javaClass.name;
    classChild.children = [];
    if(javaClass.functions){
      for(var j = 0; j<javaClass.functions.length; j++){
        var javaFunc = javaClass.functions[j];
        var funcChild = {};
        funcChild.name = javaFunc.name;
        funcChild.size = javaFunc.methodLines;
        if(!funcChild.size){
          funcChild.size = 1.5; // this means abstract
        }
        classChild.children.push(funcChild);
      }
    }
    classChild.isClass = true;
    classChild.size = javaClass.number_of_lines;
    classChild.fields = javaClass.fields;
    d3JSON.children.push(classChild);
  }

  console.log(d3JSON);

  root = d3.hierarchy(d3JSON)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });



  var focus = root,
      nodes = pack(root).descendants(),
      view;

  var circle = g.selectAll("circle")
    .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
      .style("fill", function(d) {
        if(d.data.size == 1.5) {
          console.log("Reached here");
          return "hsl(0, 57%, 92%)";
        }
        return d.children ? color(d.depth) : null;
      })
      .style("fill-opacity", function(d) { return (d.parent === focus || d === focus || !d.parent) ? 1 : 0.2; })
      .on("mouseover", function(d) {tooltipover(d)})
      .on("mousemove", function(d) {tooltipmove(d)})
      .on("mouseout", tooltipout)
      .on("click", function(d) { if (focus !== d && d.children) zoom(d), d3.event.stopPropagation(); });

  function tooltipover(d) {
    if (d.parent === focus) {
        div.transition()
          .duration(200)
          .style("opacity", .9);
    }
  }

  function tooltipmove(d) {
    console.log(d);
    if (d.parent === focus) {
        // Parent is focus, so show tooltip
        var divOutput = d.data.name + "<br/>";
        var linesToDisplay = 1;
        if(d.data.isClass){
          for(var i=0; i<d.data.fields.length; i++){
            divOutput += d.data.fields[i] + "<br/>";
            linesToDisplay++;
          }
        }
        divOutput += d.data.size
            + " lines";
        linesToDisplay++;
        div.html(divOutput)
            .attr('height', (15*linesToDisplay))
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 38) + "px");
    }
  }

  function tooltipout() {
    div.transition()
      .duration(500)
      .style("opacity", 0);
  }

  var text = g.selectAll("text")
    .data(nodes)
    .enter().append("text")
      .attr("class", "label")
      .style("font-family", "Trebuchet MS")
      .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
      .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
      .text(function(d) { return d.data.name; });

  var node = g.selectAll("circle,text");

  svg
      .style("background", color(-1))
      .on("click", function() { zoom(root); });

  zoomTo([root.x, root.y, root.r * 2 + margin]);

  function zoom(d) {
    var focus0 = focus; focus = d;

    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.selectAll("text")
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
        .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });

    transition.selectAll("circle")
      .style("fill-opacity", function(d) { return (d.parent === focus || d === focus || !d.parent) ? 1 : 0.2; })
  }


  // Redraw based on the new size whenever the browser window is resized.
  window.addEventListener("resize", reziser);

  function reziser() {
      redraw();
      zoomTo([focus.x, focus.y, focus.r * 2 + margin]);
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; })
        .attr("pointer-events", function(d) {return (d.parent === focus) ? "all" : "none"}); //Pointer events only work if parent is focus
    text.style("font-size", diameter / 50 + "px");
  }
});