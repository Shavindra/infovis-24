// Import the css style sheet
import 'materialize-css/dist/css/materialize.min.css';
import "./styles.scss";
import './overrides.scss';

// Import the functions
import { createGraph } from "./components/network-graph";
import { initFilters } from "./components/filters";
import { initUI } from "./components/ui";
import { emitter } from './components/emitter';

function initMain() {
  document.getElementById("app").innerHTML = ``;
}

// Main function to initialise the app
function initApp() {
  initUI()
  initMain();
  
  // Call the imported the functions
  initFilters();
  createGraph();

  emitter.on('filter:search', (e)=>{
    console.log('emitter', e)
  })
}

// Initialise the app.
initApp();

