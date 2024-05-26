export default function setup() {
	// RECTANGLE
	const rectangle = document.getElementById("rectangle");
	const rCtx = rectangle.getContext("2d");

	let size = 200;
	const lineWidth = 5;

	rectangle.width = size + lineWidth * 2;
	rectangle.height = size + lineWidth * 2;
	rCtx.lineWidth = lineWidth;
	rCtx.strokeStyle = "blue";
	rCtx.strokeRect(lineWidth, lineWidth, size, size);

	// FACE
	const face = document.getElementById("face");
	size = 200;
	face.width = size;
	face.height = size;

	const rFace = face.getContext("2d");
	rFace.strokeStyle = "red";
	rFace.lineWidth = 2;
	rFace.arc(size * 0.5, size * 0.5, 60, 0, 2 * Math.PI, true);
	rFace.moveTo(140, 100);
	rFace.arc(100, 100, 40, 0, Math.PI, false);
	rFace.moveTo(85, 80);
	rFace.arc(80, 80, 5, 0, 2 * Math.PI, true);
	rFace.moveTo(125, 80);
	rFace.arc(120, 80, 5, 0, 2 * Math.PI, true);
	rFace.stroke();
}
