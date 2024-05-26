window.onload = () => {
	const forms = document.forms;
	const msgElement = document.querySelector("form>p");

	if (forms !== undefined && forms.length > 0) {
		console.log(`There are ${forms.length} forms page`);
		const form = forms[0];

		if (form.elements.length > 0) {
			form.elements[0].focus();

			setTimeout(() => {
				form.elements[0].blur();
			}, 2500);

			form.elements.namedItem("remark").disabled = true;
		}

		function validateEmail(element, msg) {
			const { value } = element;

			if (value != undefined) {
				if (value?.includes("@") && value?.includes(".")) {
					return true;
				}
			}

			msgElement.style.display = "block";
			msgElement.textContent = msg;
			element.focus();
			return false;
		}

		form.onsubmit = (e) => {
			e.preventDefault();

			for (const element of e.target.elements) {
				switch (element.type) {
					case "email":
						if (!validateEmail(element, "Not a valid e-mail address!")) {
							return false;
						}
						break;
				}
			}
		}
	} else {
		console.error("No forms found");
	}
};
