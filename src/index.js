import "./styles.css";

import { createGraph } from "./components/network";

function initMain() {
  document.getElementById("app").innerHTML = `
  <h1>Hello Vanilla!</h1>
  <div>
    Info vis 24
    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
  </div>
  `;
}

function initApp() {
  createGraph();
  initMain();
}

initApp();
