export default function setup() {
	const iframe = document.querySelector("iframe");
	const links = document.querySelectorAll("header > nav a");

	for (const link of links) {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			iframe.src = link.href;
		});
	}
}
