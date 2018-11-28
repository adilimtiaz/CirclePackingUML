var containerDiv = document.getElementById("container");
var svg = d3.select(containerDiv).append("svg"),
    margin = 20,
    diameter = 700;
    g = svg.append("g");

var color = d3.scaleLinear()
    .domain([-1, 5])
    .range(["hsl(181,80%,80%)", "hsl(260,30%,40%)"])
    .interpolate(d3.interpolateHcl);

var pack = d3.pack()
    .size([diameter - margin, diameter - margin])
    .padding(2);

// Define the div for the info
var infobox = d3.select("body").append("div")
    .attr("class", "info")
    .style("opacity", 0);

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

  infobox.style("left", width / 2 - 100 + "px");
}

redraw();

// Define the div for the tooltip
var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

function getRootNodes(outputJSON){
    let rootNodes = [];
    outputJSON.classes.forEach((outputJSONClass)=>{
        if(outputJSONClass.part_of.length == 0){
            rootNodes.push(getClassNode(outputJSONClass, outputJSON.classes));
        }
    });

    console.log(rootNodes);
    return rootNodes;
}

function getClassNode(outputJSONClass, outputJSONClasses) {
    let classNode = {
        name: outputJSONClass.name,
        size: outputJSONClass.number_of_lines,
        fields: outputJSONClass.fields,
        isClass: true
    };
    let funcNodes = getFunctionsForClassNode(outputJSONClass);
    let subClassNodes = getSubclassNodesForClassNode(outputJSONClass, outputJSONClasses);

    if (funcNodes.length > 0 || subClassNodes.length > 0) {
        classNode.children = [];
        funcNodes.forEach((node) => {
            classNode.children.push(node);
        });

        subClassNodes.forEach((node) => {
           classNode.children.push(node);
        });
    }

    return classNode;
}

function getSubclassNodesForClassNode(outputJSONClass, outputJSONClasses) {
    let subclassNodes = [];
    if (outputJSONClass.extended_by.length > 0) {
        outputJSONClass.extended_by.forEach((extendedClassName) => {
            let extendedClassJSON = _.find(outputJSONClasses, {name: extendedClassName});
            let extendedClassNode = getClassNode(extendedClassJSON, outputJSONClasses);
            subclassNodes.push(extendedClassNode);
        });
    }

    if (outputJSONClass.implemented_by.length > 0) {
        outputJSONClass.implemented_by.forEach((extendedClassName) => {
            let implementedClassJSON = _.find(outputJSONClasses, {name: extendedClassName});
            let implementedClassNode = getClassNode(implementedClassJSON, outputJSONClasses);
            subclassNodes.push(implementedClassNode);
        });
    }

    return subclassNodes;
}

function getFunctionsForClassNode(outputJSONClass) {
    let funcNodes = [];
    outputJSONClass.functions.forEach((outputFunc) => {
       let funcNode = {
           name: outputFunc.name,
           size: outputFunc.methodLines,
           outputFuncJSON: outputFunc
       };
       if(! funcNode.size){
           funcNode.size = 1.5; // Abstract
       }
       funcNodes.push(funcNode);
    });
    return funcNodes;
}

d3.json("output1.json", function(error, root) {
  if (error) throw error;

  let d3JSON = {name : "Ultimate Big Daddy"};
  d3JSON.children = getRootNodes(root);
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
          if(d.data.size == 1.5) { // Abstract function
            return "hsl(0, 57%, 92%)";
          }
          if(d.data.isClass && !d.data.size){
            return "hsl(150, 63%, 67%)";
          }
        return d.children ? color(d.depth) : null;
      })
      .style("fill-opacity", function(d) { return (d.parent === focus || d === focus || !d.parent) ? 1 : 0.2; })
      .on("mouseover", function(d) {tooltipover(d)})
      .on("mousemove", function(d) {tooltipmove(d)})
      .on("mouseout", tooltipout)
      .on("click", function(d) { if (focus !== d && d.children) zoom(d), d3.event.stopPropagation(); });

  function addInfoBox(d) {
    infobox.transition()
      .duration(200)
      .style("opacity", .9);

    divOutput = "In Class: " + d.data.name;

    infobox.html(divOutput)
        .attr('height', 20)
        .style("left", containerDiv.clientWidth / 2 - 100 + "px")
        .style("top", 20 + "px");
  }

  function removeInfoBox(d) {
    infobox.transition()
      .duration(200)
      .style("opacity", 0);
  }

  function tooltipover(d) {
    if (d.parent === focus) {
        div.transition()
          .duration(200)
          .style("opacity", .9);
        tooltipmove(d);
    }
  }

  function tooltipmove(d) {
    console.log(d);
    if (d.parent === focus) {
        // Parent is focus, so show tooltip
        var linesToDisplay = 1;
        var divOutput = "";
        if(d.data.isClass) {
          divOutput += d.data.size ? "Class " : "External Library ";
          divOutput += d.data.name + "<br/>  <p style=\"text-align:left\">";
          linesToDisplay += 2; //Paragraph tag creates 2 line breaks
          for(var i=0; i<d.data.fields.length; i++){
            divOutput += d.data.fields[i] + "<br/>";
            linesToDisplay++;
          }
          divOutput += "</p>";
          divOutput += d.data.size ? (d.data.size + " lines") : "";
      } else {
          divOutput = "Function <br/> <p style=\"text-align:left\">";
          modifiers = "<p style=\"text-align:left\">"
          for(var i=0; i<d.data.outputFuncJSON.methodModifiers.length; i++){
              modifiers += d.data.outputFuncJSON.methodModifiers[i] + " ";
          }
          info = modifiers + d.data.outputFuncJSON.name + "(" + d.data.outputFuncJSON.parameters + ")" + " : " + d.data.outputFuncJSON.return_type + "<br/>";
          divOutput += info;
          linesToDisplay++;
          divOutput += "</p>";
          divOutput += d.data.size == 1.5 ? "" : (d.data.size  + " lines");
      }
        linesToDisplay++;
        div.html(divOutput)
            .attr('height', (15*linesToDisplay))
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 8 - (15*linesToDisplay)) + "px");
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
      .style("fill-opacity", function(d) {return d.parent === root ? 1 : 0;})
      .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
      .text(function(d) {
          cutoff = d.r / 4 * (root.r/ focus.r);
          if (cutoff <= d.data.name.length) {
              if (cutoff > 3) {
                  return d.data.name.substr(0, cutoff - 1) + "…";
              }
              return "…";
          }
          return d.data.name;
      });

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

    if (focus !== root) {
      addInfoBox(focus);
    } else {
      removeInfoBox(focus);
    }
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
    originaltext = text;
    text.style("font-size", diameter / 50 + "px")
        .text(function(d) {
            cutoff = d.parent === focus ? d.r / 4 * (root.r/ focus.r) :  d.r / 4;
            if (cutoff <= d.data.name.length) {
                if (cutoff > 3) {
                    return d.data.name.substr(0, cutoff - 1) + "…";
                }
                return "…";
            }
            return d.data.name;
        });
  }
});
