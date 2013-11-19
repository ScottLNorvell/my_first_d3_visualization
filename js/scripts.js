// based on OMG particles found here:
// http://bl.ocks.org/mbostock/1062544
var w = window.innerWidth,
    h = window.innerHeight,
    z = d3.scale.category10(),
    i = 0;

var svg = d3.select("#monster-box").append("svg:svg")
    .attr("width", w)
    .attr("height", h)
    .style("pointer-events", "all")
    .on("mousemove", particle);

var blacks = ["#242424", "#1B1B1B", "#1A1110", "#222222"];
var duration = 4000;
var grow = 65;
function particle() {
  var m = d3.mouse(this);

  svg.append("svg:circle")
      .attr("cx", m[0])
      .attr("cy", m[1])
      .attr("r", 1e-6)
      // .style("stroke", "#111111")
      .style("fill", blacks[0])
      .style("stroke-opacity", 1)
    .transition()
      .duration(duration)
      .ease(Math.sqrt)
      .attr("r", grow)
      .attr("cx", m[0]-Math.random() * 100)
      .style("stroke-opacity", 1e-6)
      .style("fill-opacity", 1e-6)
      .remove();
  
  svg.append("svg:circle")
      .attr("cx", m[0])
      .attr("cy", m[1])
      .attr("r", 1e-6)
      // .style("stroke", "#111111")
      .style("fill", blacks[1])
      .style("stroke-opacity", 1)
    .transition()
      .duration(duration)
      .ease(Math.sqrt)
      .attr("r", grow)
      .attr("cx", m[0]+Math.random() * 100)
      .style("stroke-opacity", 1e-6)
      .style("fill-opacity", 1e-6)
      .remove();

  svg.append("svg:circle")
      .attr("cx", m[0])
      .attr("cy", m[1])
      .attr("r", 1e-6)
      // .style("stroke", "#111111")
      .style("fill", blacks[2])
      .style("stroke-opacity", 1)
    .transition()
      .duration(duration)
      .ease(Math.sqrt)
      .attr("r", grow)
      .attr("cy", m[1]-Math.random() * 100)
      .style("stroke-opacity", 1e-6)
      .style("fill-opacity", 1e-6)
      .remove();
  
  svg.append("svg:circle")
      .attr("cx", m[0])
      .attr("cy", m[1])
      .attr("r", 1e-6)
      // .style("stroke", "#111111")
      .style("fill", blacks[3])
      .style("stroke-opacity", 1)
    .transition()
      .duration(duration)
      .ease(Math.sqrt)
      .attr("r", grow)
      .attr("cy", m[1]+Math.random() * 100)
      .style("stroke-opacity", 1e-6)
      .style("fill-opacity", 1e-6)
      .remove();
}