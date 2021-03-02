import "./styles.css";

import { createGraph } from "./components/network-graph";

function initMain() {
  document.getElementById("app").innerHTML = `
  <h1>Hello Vanilla!</h1>
  <div>
    Info vis team 25
    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
  </div>
  `;
}

// Function to initialise the app
function initApp() {
  createGraph();
  initMain();

  // Other functions
}

// Initialise the app.
initApp();

