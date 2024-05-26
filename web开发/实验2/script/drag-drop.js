export default function setup() {
	const dropZone = document.getElementById("dropZone");
	const images = document.querySelectorAll(".images > img");

	// Make images actually draggable
	for (const image of images) {
		image.addEventListener("dragstart", (event) => {
			event.dataTransfer.setData("drop-element-id", event.target.id);
		});
	}

	// Empty function to tell the browser to allow drops
	dropZone.addEventListener("dragover", (event) => {
		event.preventDefault();
	});

	// Move image on drop
	dropZone.addEventListener("drop", (event) => {
		event.preventDefault();
		const data = event.dataTransfer.getData("drop-element-id");
		dropZone.appendChild(document.getElementById(data));
	});
}
