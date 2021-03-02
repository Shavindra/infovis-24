import * as d3 from "d3";
// Import data
// `sampleData` can be named anything.
// usage:
//  d3.json(sampleData)
import sampleData from "../data/sample-data.json";

export function createGraph() {
  console.log("Creating graph...");

  d3.select("#graph")
    .append("svg")
    .attr("width", 50)
    .attr("height", 50)
    .append("circle")
    .attr("cx", 25)
    .attr("cy", 25)
    .attr("r", 25)
    .style("fill", sampleData[0].colour);
}
