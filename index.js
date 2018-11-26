var svg = d3.select("svg"),
    margin = 20,
    diameter = +svg.attr("width"),
    g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

var color = d3.scaleLinear()
    .domain([-1, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);

var pack = d3.pack()
    .size([diameter - margin, diameter - margin])
    .padding(2);

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
    classChild.size = javaClass.number_of_lines;
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
      .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

  var text = g.selectAll("text")
    .data(nodes)
    .enter().append("text")
      .attr("class", "label")
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
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }
});