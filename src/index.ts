import animate from "./Init";
import writeLine from "./Line";
import WebGL from "./WebGL";

if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate();
  writeLine();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container")?.appendChild(warning);
}
