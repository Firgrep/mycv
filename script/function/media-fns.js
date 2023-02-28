// -----------------------------------------
// ---  DOM manipulation: image          ---
// -----------------------------------------

function imgLoad() {
    document.querySelector("input[type='file']").addEventListener("change", function() {
		if (this.files && this.files[0]) {
			const img = document.getElementById("myImg");
			const reader = new FileReader(); //FileReader is used instead of URL.createObjectURL since the latter is blocked by the browser upon download
			reader.onload = (e) => {
				img.src = e.target.result;
				img.style.maxWidth = "150px";
				img.style.maxHeight = "150px";
				img.style.justifySelf = "center";
				img.style.borderRadius = "25px";
				img.style.visibility = "visible";
			};
			reader.readAsDataURL(this.files[0]);
			O_IMG_BORDER.removeAttribute("disabled");
			O_IMG_BORDER.style.visibility = "visible";
			O_IMG_WARNING.style.display = "none";
		}
	});
}

function convertHtmlToPdf(e) {
	e.preventDefault();
	window.jsPDF = window.jspdf.jsPDF;
	let doc = new jsPDF({
		orientation: 'p',
 		unit: 'px',
 		format: [793.7, 1122.51],
		hotfixes: ["px_scaling"],
		
	});
	
	doc.addFileToVFS("sorts-mill-goudy.ttf", sortsMillGoudyB64);
	doc.addFont("sorts-mill-goudy.ttf", "Sorts Mill Goudy", "normal");

	doc.addFileToVFS("merriweather.ttf", merriweatherB64);
	doc.addFont("merriweather.ttf", "Merriweather", "normal");
	doc.addFileToVFS("merriweather-900.ttf", merriweatherBoldB64);
	doc.addFont("merriweather-900.ttf", "Merriweather", "bold");

	doc.addFileToVFS("open-sans.ttf", openSansB64);
	doc.addFont("open-sans.ttf", "Open Sans", "normal");
	doc.addFileToVFS("open-sans-800.ttf", openSansBoldB64);
	doc.addFont("open-sans-800.ttf", "Open Sans", "bold");

	doc.addFileToVFS("roboto-mono.ttf", robotoMonoB64);
	doc.addFont("roboto-mono.ttf", "Roboto Mono", "normal");
	doc.addFileToVFS("roboto-mono-700.ttf", robotoMonoBoldB64);
	doc.addFont("roboto-mono-700.ttf", "Roboto Mono", "bold");

	doc.addFileToVFS("arial.ttf", arialB64);
	doc.addFont("arial.ttf", "Arial", "normal");
	doc.addFileToVFS("arial-bold.ttf", arialBoldB64);
	doc.addFont("arial-bold.ttf", "Arial", "bold");
	
	const pdfjs = document.querySelector('#deploy');
	
	doc.html(pdfjs, {
		callback: function(doc) {
			doc.save(`myCV ${O_INPUT_NAME.value}.pdf`);
		},
		x: 0,
		y: 0,
	});
}