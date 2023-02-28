// -----------------------------------------
// ---  Control Constants and Variables  ---
// -----------------------------------------

const maxNumberOfLeftSections = 5;
const I_MAX_RIGHT_SECTIONS = 5;

const S_DEFAULT_SECTION_HEADING = "Heading";

const defaultSectionSubHeading = "Subheading";
const defaultListItem = "List Item(s)";
const defaultFreeText = "Free text";
const S_DEFAULT_ENTRY = "Entry";

const S_SECTION_MARGIN_TOP = "10px";

let idNumber = 0;
let iMainId = 0;
let numberOfLeftSections = 0;
let iRightSections = 0;

let numberOfLeftSubSections = Array.from(Array(maxNumberOfLeftSections), () => 0);


let numberOfRightSubSections = Array.from(Array(I_MAX_RIGHT_SECTIONS), () => 0);


// -----------------------------------------
// ---  Work Constants                   ---
// -----------------------------------------

const fontSelect = document.getElementById("fontSelect");
const outputDetailLine = document.getElementById("outputDetailLine");
const imgBorderRadiusRange = document.getElementById("imgBorderRadiusRange");

const backgroundMainSelector = document.getElementById("backgroundMainSelector");
const gridColTwo = document.getElementsByClassName("gridColTwo")[0];
const backgroundDetailSelector = document.getElementById("backgroundDetailSelector");
const gridColOne = document.getElementsByClassName("gridColOne")[0];
const backgroundMainChoiceEnd = document.getElementById("backgroundMainChoiceEnd");
const backgroundDetailChoiceOne = document.getElementById("backgroundDetailChoiceOne");
const backgroundMainChoiceOne = document.getElementById("backgroundMainChoiceOne");

const usernameIn = document.getElementById("usernameIn");
const usernameOut = document.getElementById("usernameOut").innerHTML;
const inputDetailsTitle = document.getElementById("inputDetailsTitle");
const outputDetailsTitle = document.getElementById("outputDetailsTitle");
const inputDetailsKey = document.getElementById("inputDetailsKey");
const outputDetailsKey = document.getElementById("outputDetailsKey");

const O_USER_INPUTS_DETAILS_DYNAMIC = document.getElementById("userInputsDetailsDynamic");
const O_USER_INPUTS_DETAILS_END = document.getElementById("userInputsDetailsEnd");

const O_USER_OUTPUTS_DETAILS_DYNAMIC = document.getElementById("userOutputsDetailsDynamic");
const O_USER_OUTPUTS_DETAILS_END = document.getElementById("userOutputsDetailsEnd");

const addSectionDetailsBtn = document.getElementById("addSectionDetailsBtn");



const O_INPUT_MAIN_PROFILE = document.getElementById("inputMainProfile");
const O_OUTPUT_MAIN_PROFILE = document.getElementById("outputMainProfile");

const O_USER_INPUTS_MAIN_DYNAMIC = document.getElementById("userInputsMainDynamic");
const O_USER_INPUTS_MAIN_END = document.getElementById("uesrInputsMainEnd");

const O_USER_OUTPUTS_MAIN_DYNAMIC = document.getElementById("userOutputsMainDynamic");
const O_USER_OUTPUTS_MAIN_END = document.getElementById("userOutputsMainEnd");

const O_ADD_SECTION_MAIN_BTN = document.getElementById("addSectionMainBtn");




const userInputsDesignToggleCollapseBtn = document.getElementById("userInputsDesignToggleCollapseBtn");
const userInputsDesignCollapse = document.getElementById("userInputsDesignCollapse");
const userInputsDetailsToggleCollapseBtn = document.getElementById("userInputsDetailsToggleCollapseBtn");
const userInputsDetailsCollapse = document.getElementById("userInputsDetailsCollapse");
const userInputsMainToggleCollapseBtn = document.getElementById("userInputsMainToggleCollapseBtn");
const userInputsMainCollapse = document.getElementById("userInputsMainCollapse");

const imgWarning = document.getElementById("imgWarning");
const downloadPdf = document.getElementById("downloadPdf");

// -----------------------------------------
// ---  DOM manipulation: style          ---
// -----------------------------------------

const changeFont = function(font) {
	let element = document.querySelector(".userOutputs");
	element.style.fontFamily = font.value;
}

imgBorderRadiusRange.addEventListener("change", function () {
	img = document.getElementById("myImg");
	img.style.borderRadius = `${imgBorderRadiusRange.value}%`;
});

backgroundMainSelector.addEventListener("click", function (e) {
	if (e.target && e.target.matches("input[type='radio']")) {
        if (e.target.value === "backgroundMainOne") {
			gridColTwo.style.backgroundColor = "white";
			if (backgroundMainChoiceEnd.checked) {
				gridColOne.style.backgroundColor = "white";
			}
		}
		else if (e.target.value === "backgroundMainTwo") {
			gridColTwo.style.backgroundColor = "beige";
			if (backgroundMainChoiceEnd.checked) {
				gridColOne.style.backgroundColor = "beige";
			}
		}
		else if (e.target.value === "backgroundMainThree") {
			gridColTwo.style.backgroundColor = "#fbfbf8";
			if (backgroundMainChoiceEnd.checked) {
				gridColOne.style.backgroundColor = "#fbfbf8";
			}
		}
		else if (e.target.value === "gainsboro") {
			gridColTwo.style.backgroundColor = e.target.value;
			if (backgroundMainChoiceEnd.checked) {
				gridColOne.style.backgroundColor = e.target.value;
			}
		}
		else if (e.target.value === "azure") {
			gridColTwo.style.backgroundColor = e.target.value;
			if (backgroundMainChoiceEnd.checked) {
				gridColOne.style.backgroundColor = e.target.value;
			}
		}
    }
});

const detailsPanelColorToggle = function(i) {
	switch (i) {
		case 0:
			gridColOne.style.color = "black";
			outputDetailLine.style.backgroundColor = "black";
			break;
		case 1:
			gridColOne.style.color = "white";
			outputDetailLine.style.backgroundColor = "white";
			break;
	}
};

backgroundDetailSelector.addEventListener("click", function (e) {
	if (e.target && e.target.matches("input[type='radio']")) {
        if (e.target.value === "backgroundDetailOne") {
			gridColOne.style.backgroundColor = "navy";
			detailsPanelColorToggle(1);
		}
		else if (e.target.value === "backgroundDetailTwo") {
			gridColOne.style.backgroundColor = "crimson";
			detailsPanelColorToggle(1);
		}
		else if (e.target.value === "backgroundDetailThree") {
			gridColOne.style.backgroundColor = "#007E81";
			detailsPanelColorToggle(1);
		}
		else if (e.target.value === "steelblue") {
			gridColOne.style.backgroundColor = e.target.value;
			detailsPanelColorToggle(1);
		}
		else if (e.target.value === "goldenrod") {
			gridColOne.style.backgroundColor = e.target.value;
			detailsPanelColorToggle(1);
		}
		else if (e.target.value === "springgreen") {
			gridColOne.style.backgroundColor = e.target.value;
			detailsPanelColorToggle(0);
		}
		else if (e.target.value === "backgroundDetailEnd") {
			const elem = window.getComputedStyle(gridColTwo);
			gridColOne.style.backgroundColor = elem.getPropertyValue("background-color");
			detailsPanelColorToggle(0);
		}
    }
});

// -----------------------------------------
// ---  DOM manipulation: text           ---
// -----------------------------------------

usernameIn.addEventListener("input", function() {
    document.getElementById("usernameOut").innerHTML = document.getElementById("usernameIn").value;
    if(document.getElementById("usernameIn").value === "") {
        document.getElementById("usernameOut").innerHTML = usernameOut;
    }
});

inputDetailsTitle.addEventListener("input", () => updateInputOutputPrimitive(inputDetailsTitle, outputDetailsTitle));
inputDetailsKey.addEventListener("input", () => updateInputOutputPrimitive(inputDetailsKey, outputDetailsKey));

addSectionDetailsBtn.addEventListener("click", addSectionDetail);
O_USER_INPUTS_DETAILS_DYNAMIC.addEventListener("input", (e) => updateInputOutputDetails(e));
O_USER_INPUTS_DETAILS_DYNAMIC.addEventListener("click", (e) => dynamicBtnControlDetails(e));


O_INPUT_MAIN_PROFILE.addEventListener("input", () => updateInputOutputPrimitive(O_INPUT_MAIN_PROFILE, O_OUTPUT_MAIN_PROFILE));

O_ADD_SECTION_MAIN_BTN.addEventListener("click", addSectionMain);

O_USER_INPUTS_MAIN_DYNAMIC.addEventListener("input", (e) => updateInputOutputMain(e));

O_USER_INPUTS_MAIN_DYNAMIC.addEventListener("click", (e) => dynamicBtnControlMain(e));


// -----------------------------------------
// ---  DOM manipulation: image          ---
// -----------------------------------------
window.addEventListener("load", function() {
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
			imgBorderRadiusRange.removeAttribute("disabled");
			imgBorderRadiusRange.style.visibility = "visible";
			imgWarning.style.display = "none";
		}
	});
  });

// -----------------------------------------
// ---  PDF conversion and download      ---
// -----------------------------------------
function convertHTMLToPDF(e) {
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
			doc.save(`myCV ${usernameIn.value}.pdf`);
		},
		x: 0,
		y: 0,
	});
}

downloadPdf.addEventListener("click", convertHTMLToPDF);

// -----------------------------------------
// ---  DOM manipulation: misc & default ---
// -----------------------------------------
function toggleDivCollapse (target) {
	for (let i = 0; i < target.childNodes.length; i++) {
		if (target.childNodes[i].nodeName === "DIV") {
			if (target.childNodes[i].style.display === "none") {
				target.childNodes[i].style.display = "block";
			} else {
				target.childNodes[i].style.display = "none";
			}
		}
	}
};

function toggleDivCollapseGrid (target) {
	for (let i = 0; i < target.childNodes.length; i++) {
		if (target.childNodes[i].nodeName === "DIV") {
			if (target.childNodes[i].style.display === "none") {
				target.childNodes[i].style.display = "grid";
			} else {
				target.childNodes[i].style.display = "none";
			}
		}
	}
};

userInputsDesignToggleCollapseBtn.addEventListener("click", () => toggleDivCollapseGrid(userInputsDesignCollapse));
userInputsDetailsToggleCollapseBtn.addEventListener("click", () => toggleDivCollapse(userInputsDetailsCollapse));
userInputsMainToggleCollapseBtn.addEventListener("click", () => toggleDivCollapse(userInputsMainCollapse));

window.onload = function () {
	backgroundDetailChoiceOne.click();
	backgroundMainChoiceOne.click();
	addSectionDetailsBtn.click();
	addSectionMainBtn.click();
};