import setupMenu from "./iframe-menu.js";
import setupCanvas from "./canvas.js";
import setupDragDrop from "./drag-drop.js";

window.onload = () => {
	setupMenu();
	setupCanvas();
	setupDragDrop();
};
