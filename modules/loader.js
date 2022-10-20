import { $container_results } from "../varDOM.js";
 
 export function loader(){
    $container_results.innerHTML = ""
    $container_results.innerHTML = `
    <div class="container_loader">
    <div class="waveform">
    <div class="waveform__bar"></div>
    <div class="waveform__bar"></div>
    <div class="waveform__bar"></div>
    <div class="waveform__bar"></div>
  </div>
  </div>
    ` 
  }