// Import the css style sheet
import "./styles.css";

// Import the functions
import { createGraph } from "./components/network-graph";
import { initFilters } from "./components/filters";

function initMain() {
  document.getElementById("app").innerHTML = `
  <h1>Hello Vanilla!</h1>
  <div>
    Info vis team 25
    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
  </div>
  `;
}

// Main function to initialise the app
function initApp() {
  initMain();
  
  // Call the imported the functions
  initFilters();
  createGraph();
}

// Initialise the app.
initApp();

