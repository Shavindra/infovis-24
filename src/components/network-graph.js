import * as d3 from "d3";

export function createGraph() {
  d3.select("#graph")
    .append("svg")
    .attr("width", 50)
    .attr("height", 50)
    .append("circle")
    .attr("cx", 25)
    .attr("cy", 25)
    .attr("r", 25)
    .style("fill", "red");
}
