// -----------------------------------------
// ---  Control Variables                ---
// -----------------------------------------

const maxNumberOfLeftSections = 5;
const maxNumberOfLeftSubSections = 6;
const maxNumberOfRightSections = 5;

const defaultSectionHeading = "Heading";
const defaultListItem = "List Item(s)";
const defaultFreeText = "Free text";

let numberOfLeftSections = 0;
let numberOfLeftSubSections = Array.from(Array(maxNumberOfLeftSections), () => 0);
let numberOfRightSections = 0;
let numberOfRightSubSections = Array.from(Array(maxNumberOfRightSections), () => 0);


// -----------------------------------------
// ---  Work Variables                   ---
// -----------------------------------------

let usernameIn = document.getElementById("usernameIn");
const usernameOut = document.getElementById("usernameOut").innerHTML;
const inputDetailsTitle = document.getElementById("inputDetailsTitle");
const outputDetailsTitle = document.getElementById("outputDetailsTitle");
const inputDetailsKey = document.getElementById("inputDetailsKey");
const outputDetailsKey = document.getElementById("outputDetailsKey");

const userInputsDetailsDynamic = document.getElementById("userInputsDetailsDynamic");
const userInputsDetailsEnd = document.getElementById("userInputsDetailsEnd");

const userOutputsDetailsDynamic = document.getElementById("userOutputsDetailsDynamic");
const userOutputsDetailsEnd = document.getElementById("userOutputsDetailsEnd");

const addSectionDetailsBtn = document.getElementById("addSectionDetailsBtn");
const removeSectionDetailsBtn = document.getElementById("removeSectionDetailsBtn");

const inputMainProfile = document.getElementById("inputMainProfile");
const outputMainProfile = document.getElementById("outputMainProfile");

const userInputsMainDynamic = document.getElementById("userInputsMainDynamic");
const userInputsMainEnd = document.getElementById("uesrInputsMainEnd");

const userOutputsMainDynamic = document.getElementById("userOutputsMainDynamic");
const userOutputsMainEnd = document.getElementById("userOutputsMainEnd");

const addSectionMainBtn = document.getElementById("addSectionMainBtn");
const removeSectionMainBtn = document.getElementById("removeSectionMainBtn");

let downloadPdf = document.getElementById("downloadPdf");

const fontSelect = document.getElementById("fontSelect");


// -----------------------------------------
// ---  DOM manipulation: text           ---
// -----------------------------------------

usernameIn.addEventListener("input", function() {
    document.getElementById("usernameOut").innerHTML = document.getElementById("usernameIn").value;
    if(document.getElementById("usernameIn").value === "") {
        document.getElementById("usernameOut").innerHTML = usernameOut;
    }
});

function fillHTML(input, output) {
	if (input.value === "") {
		output.innerHTML = "";
		output.style.display = "none";
	} else {
		output.innerHTML = input.value;
		output.style.display = "block";
	}
};

inputDetailsTitle.addEventListener("input", () => fillHTML(inputDetailsTitle, outputDetailsTitle));
inputDetailsKey.addEventListener("input", () => fillHTML(inputDetailsKey, outputDetailsKey));



addSectionDetailsBtn.addEventListener("click", function() {
	// Create userInputs side HTML elements
	const newInputDiv = document.createElement("div");
	newInputDiv.setAttribute("class", "miniBlock");
	newInputDiv.setAttribute("id", `inputDetailAutoMiniDiv${numberOfLeftSections}`);

	const newInputOne = document.createElement("input");
	newInputOne.setAttribute("id", `inputDetailSection${numberOfLeftSections}`);
	newInputOne.setAttribute("name", `inputDetailSection${numberOfLeftSections}`);
	newInputOne.setAttribute("type", "text");
	newInputOne.setAttribute("placeholder", "Section heading");

	const newInputBreakOne = document.createElement("br");
	newInputBreakOne.setAttribute("id", `newInputBreakOne${numberOfLeftSections}`)
	const newInputBreakTwo = document.createElement("br");
	newInputBreakTwo.setAttribute("id", `newInputBreakTwo${numberOfLeftSections}`)

	const newInputBtnOne = document.createElement("button");
	newInputBtnOne.setAttribute("id", `inputDetailRemoveBtn${numberOfLeftSections}`);
	newInputBtnOne.setAttribute("disabled", "");
	const newInputBtnOneInner = document.createElement("b");
	newInputBtnOneInner.setAttribute("id", `inputDetailRemoveBtnInner${numberOfLeftSections}`);
	newInputBtnOneInner.innerHTML = "Remove element";
	newInputBtnOne.appendChild(newInputBtnOneInner);

	const newInputBtnTwo = document.createElement("button");
	newInputBtnTwo.setAttribute("id", `inputDetailAddSubheadingBtn${numberOfLeftSections}`);
	const newInputBtnTwoInner = document.createElement("b");
	newInputBtnTwoInner.setAttribute("id", `inputDetailAddSubheadingBtnInner${numberOfLeftSections}`);
	newInputBtnTwoInner.innerHTML = "Add subheading";
	newInputBtnTwo.appendChild(newInputBtnTwoInner);

	const newInputBtnThree = document.createElement("button");
	newInputBtnThree.setAttribute("id", `inputDetailAddListItemsBtn${numberOfLeftSections}`);
	const newInputBtnThreeInner = document.createElement("b");
	newInputBtnThreeInner.setAttribute("id", `inputDetailAddListItemsBtnInner${numberOfLeftSections}`);
	newInputBtnThreeInner.innerHTML = "Add list items";
	newInputBtnThree.appendChild(newInputBtnThreeInner);

	const newInputBtnFour = document.createElement("button");
	newInputBtnFour.setAttribute("id", `inputDetailAddFreeTextBtn${numberOfLeftSections}`);
	const newInputBtnFourInner = document.createElement("b");
	newInputBtnFourInner.setAttribute("id", `inputDetailAddFreeTextBtnInner${numberOfLeftSections}`);
	newInputBtnFourInner.innerHTML = "Add free text";
	newInputBtnFour.appendChild(newInputBtnFourInner);

	newInputDiv.appendChild(newInputOne);
	newInputDiv.appendChild(newInputBreakOne);
	newInputDiv.appendChild(newInputBreakTwo);
	newInputDiv.appendChild(newInputBtnOne);
	newInputDiv.appendChild(newInputBtnTwo);
	newInputDiv.appendChild(newInputBtnThree);
	newInputDiv.appendChild(newInputBtnFour);

	userInputsDetailsDynamic.insertBefore(newInputDiv, userInputsDetailsEnd);

	// Create userOutputs side HTML elements
	const newOutputDiv = document.createElement("div");
	newOutputDiv.setAttribute("id", `outputDetailAutoMiniDiv${numberOfLeftSections}`);

	const newOutputOne = document.createElement("h3");
	newOutputOne.setAttribute("id", `outputDetailSection${numberOfLeftSections}`);
	newOutputOne.setAttribute("name", `outputDetailSection${numberOfLeftSections}`);
	newOutputOne.innerHTML = `${defaultSectionHeading} ${numberOfLeftSections}`;

	newOutputDiv.appendChild(newOutputOne);

	userOutputsDetailsDynamic.insertBefore(newOutputDiv, userOutputsDetailsEnd);

	// Update flag
	numberOfLeftSections += 1;

	// If necessary, update bottons
	if (numberOfLeftSections > 0) {
		if (removeSectionDetailsBtn.hasAttribute("disabled")) {
			removeSectionDetailsBtn.removeAttribute("disabled");
		}
	}

	if (numberOfLeftSections >= maxNumberOfLeftSections) {
		addSectionDetailsBtn.setAttribute("disabled", "");
	}
});

removeSectionDetailsBtn.addEventListener("click", function() {
	// Delete userInsputs side HTML elements
	const inputDivDelete = document.getElementById(`inputDetailAutoMiniDiv${numberOfLeftSections - 1}`);
	while (inputDivDelete.lastChild) {
		// If there are any inner sub-sections, these need to be accounted for and their respective flags updated.
		// Only run once since input/output both share the same subsection index flag. 

		// !! FUTURE !!
		// !! To save computing power, nest the for below in an if here that checks if the lastChild is of nodeName === DIV
		for (let j = 0; j < numberOfLeftSubSections[numberOfLeftSections - 1]; j++) {
			if (inputDivDelete.lastChild.matches(`#inputDetailAutoMiniMiniDiv${numberOfLeftSections - 1}-${j}`)) {
				numberOfLeftSubSections[numberOfLeftSections - 1] -= 1;
				break;
			}
		}
		inputDivDelete.removeChild(inputDivDelete.lastChild);
	};
	inputDivDelete.remove();

	// Delete userOutputs side HMTL elements
	const outputDivDelete = document.getElementById(`outputDetailAutoMiniDiv${numberOfLeftSections - 1}`);
	while (outputDivDelete.firstChild) {
		outputDivDelete.removeChild(outputDivDelete.firstChild);
	};
	outputDivDelete.remove();

	// Update flag
	numberOfLeftSections -= 1;

	// If necessary, update buttons
	if (numberOfLeftSections < maxNumberOfLeftSections) {
		if (addSectionDetailsBtn.hasAttribute("disabled")) {
			addSectionDetailsBtn.removeAttribute("disabled");
		}
	}

	if (numberOfLeftSections <= 0) {
		removeSectionDetailsBtn.setAttribute("disabled", "");
	}
});

userInputsDetailsDynamic.addEventListener("input", function(e) {
	// Input listener
	if (e.target && e.target.nodeName == "INPUT" || e.target && e.target.nodeName == "TEXTAREA") { 
		for (let i = 0; i < numberOfLeftSections; i++) {
			if (document.getElementById(`inputDetailSection${i}`).value === "") {
				document.getElementById(`outputDetailSection${i}`).innerHTML = `${defaultSectionHeading} ${i}`;
			} else {
				document.getElementById(`outputDetailSection${i}`).innerHTML = document.getElementById(`inputDetailSection${i}`).value;
			}
			if (numberOfLeftSubSections[i] > 0) {
				for (let j = 0; j < numberOfLeftSubSections[i]; j++) {
					// Subheadings input/output
					if (document.getElementById(`inputDetailSubSection${i}-${j}`)) {
						if (document.getElementById(`inputDetailSubSection${i}-${j}`).value === "") {
							document.getElementById(`outputDetailSubSection${i}-${j}`).innerHTML = `${defaultSectionHeading} ${i}-${j}`;
						} else {
							document.getElementById(`outputDetailSubSection${i}-${j}`).innerHTML 
								= document.getElementById(`inputDetailSubSection${i}-${j}`).value;
						}
					}
					
					// List items input/output
					if (document.getElementById(`inputDetailListItemLeft${i}-${j}`)) {
						if (document.getElementById(`inputDetailListItemLeft${i}-${j}`).value === "") {
						document.getElementById(`outputDetailListItemLeft${i}-${j}`).innerHTML = `${defaultListItem} ${i}-${j}`;
						} else {
							document.getElementById(`outputDetailListItemLeft${i}-${j}`).innerHTML 
								= document.getElementById(`inputDetailListItemLeft${i}-${j}`).value;
						}
						if (document.getElementById(`inputDetailListItemRight${i}-${j}`).value === "") {
							document.getElementById(`outputDetailListItemRight${i}-${j}`).style.display = "none";
						} else {
							document.getElementById(`outputDetailListItemRight${i}-${j}`).style.display = "inline";
							document.getElementById(`outputDetailListItemRight${i}-${j}`).innerHTML 
								= document.getElementById(`inputDetailListItemRight${i}-${j}`).value;
						}
					}

					// Free text input/output
					if (document.getElementById(`inputDetailFreeText${i}-${j}`)) {
						if (document.getElementById(`inputDetailFreeText${i}-${j}`).value === "") {
							document.getElementById(`outputDetailFreeText${i}-${j}`).innerHTML = `${defaultFreeText} ${i}-${j}`;
						} else {
							document.getElementById(`outputDetailFreeText${i}-${j}`).innerHTML 
								= document.getElementById(`inputDetailFreeText${i}-${j}`).value;
						}
					}
				}
			}
		};
	};
});

userInputsDetailsDynamic.addEventListener("click", function(e) {
	// Buttons listener
	if (e.target.nodeName === "BUTTON" || e.target.nodeName === "B") {
		for (let i = 0; i < numberOfLeftSections; i++) {
			
			if (e.target === document.getElementById(`inputDetailRemoveBtn${i}`)
				|| e.target === document.getElementById(`inputDetailRemoveBtnInner${i}`)) 
			{
				// Delete userInsputs side HTML elements
				const inputDivDelete = document.getElementById(`inputDetailAutoMiniMiniDiv${i}-${numberOfLeftSubSections[i] - 1}`);
				while (inputDivDelete.firstchild) {
					inputDivDelete.removeChild(inputDivDelete.lastChild);
				};
				inputDivDelete.remove();

				// Delete userOutputs side HMTL elements
				const outputDivDelete = document.getElementById(`outputDetailAutoMiniMiniDiv${i}-${numberOfLeftSubSections[i] - 1}`);
				while (outputDivDelete.firstchild) {
					outputDivDelete.removeChild(outputDivDelete.lastChild);
				};
				outputDivDelete.remove();

				// Update flag (notice it's an array here)
				numberOfLeftSubSections[i] -= 1;

				// If necessary, update buttons
				const inputDetailRemoveBtnActive = document.getElementById(`inputDetailRemoveBtn${i}`);
				if (numberOfLeftSubSections[i] < maxNumberOfLeftSections) {
					if (inputDetailRemoveBtnActive.hasAttribute("disabled")) {
						inputDetailRemoveBtnActive.removeAttribute("disabled");
					}
				}

				if (numberOfLeftSubSections[i] <= 0) {
					inputDetailRemoveBtnActive.setAttribute("disabled", "");
				}

				break;
			} 

			else if (e.target === document.getElementById(`inputDetailAddSubheadingBtn${i}`)
					|| e.target === document.getElementById(`inputDetailAddSubheadingBtnInner${i}`)) 
			{
				// Create userInputs side HTML elements
				const newInputDivSub = document.createElement("div");
				newInputDivSub.setAttribute("class", "miniBlock");
				newInputDivSub.setAttribute("id", `inputDetailAutoMiniMiniDiv${i}-${numberOfLeftSubSections[i]}`);

				const newInputSubSection = document.createElement("input");
				newInputSubSection.setAttribute("id", `inputDetailSubSection${i}-${numberOfLeftSubSections[i]}`);
				newInputSubSection.setAttribute("name", `inputDetailSubSection${i}-${numberOfLeftSubSections[i]}`);
				newInputSubSection.setAttribute("type", "text");
				newInputSubSection.setAttribute("placeholder", "Section subheading");
				newInputDivSub.appendChild(newInputSubSection);

				const parentOfInputSubSection = document.getElementById(`inputDetailAddSubheadingBtn${i}`).parentNode;
				const beforeOfInputSubSection = document.getElementById(`newInputBreakTwo${i}`);
				parentOfInputSubSection.insertBefore(newInputDivSub, beforeOfInputSubSection);

				// Create userOutputs side HTML elements
				const newOutputDivSub = document.createElement("div");
				newOutputDivSub.setAttribute("id", `outputDetailAutoMiniMiniDiv${i}-${numberOfLeftSubSections[i]}`);

				const newOutputSubHeading = document.createElement("h4");
				newOutputSubHeading.setAttribute("id", `outputDetailSubSection${i}-${numberOfLeftSubSections[i]}`);
				newOutputSubHeading.setAttribute("name", `outputDetailSubSection${i}-${numberOfLeftSubSections[i]}`);
				newOutputSubHeading.innerHTML = `${defaultSectionHeading} ${i}-${numberOfLeftSubSections[i]}`;
				newOutputDivSub.appendChild(newOutputSubHeading);

				const parentOfOutputSubSection = document.getElementById(`outputDetailAutoMiniDiv${i}`);

				parentOfOutputSubSection.appendChild(newOutputDivSub);
				

				// Update flag (notice it's an array here)
				numberOfLeftSubSections[i] += 1;

				// If necessary, update buttons
				const inputDetailRemoveBtnActive = document.getElementById(`inputDetailRemoveBtn${i}`);
				if (numberOfLeftSubSections[i] < maxNumberOfLeftSections) {
					if (inputDetailRemoveBtnActive.hasAttribute("disabled")) {
						inputDetailRemoveBtnActive.removeAttribute("disabled");
					}
				}

				if (numberOfLeftSubSections[i] <= 0) {
					inputDetailRemoveBtnActive.setAttribute("disabled", "");
				}

				break;
			}

			else if (e.target === document.getElementById(`inputDetailAddListItemsBtn${i}`)
					|| e.target === document.getElementById(`inputDetailAddListItemsBtnInner${i}`))
			{
				// Create userInputs side HTML elements
				const newInputDivSub = document.createElement("div");
				newInputDivSub.setAttribute("class", "miniBlock");
				newInputDivSub.setAttribute("id", `inputDetailAutoMiniMiniDiv${i}-${numberOfLeftSubSections[i]}`);

				const newInputListItemLeft = document.createElement("input");
				newInputListItemLeft.setAttribute("id", `inputDetailListItemLeft${i}-${numberOfLeftSubSections[i]}`);
				newInputListItemLeft.setAttribute("name", `inputDetailListItemLeft${i}-${numberOfLeftSubSections[i]}`);
				newInputListItemLeft.setAttribute("type", "text");
				newInputListItemLeft.setAttribute("placeholder", "List item left");
				newInputDivSub.appendChild(newInputListItemLeft);

				const newWhitespace = document.createElement("span");
				newWhitespace.innerHTML = "&emsp;";
				newInputDivSub.appendChild(newWhitespace);

				const newInputListItemRight = document.createElement("input");
				newInputListItemRight.setAttribute("id", `inputDetailListItemRight${i}-${numberOfLeftSubSections[i]}`);
				newInputListItemRight.setAttribute("name", `inputDetailListItemRight${i}-${numberOfLeftSubSections[i]}`);
				newInputListItemRight.setAttribute("type", "text");
				newInputListItemRight.setAttribute("placeholder", "List item right (optional)");
				newInputDivSub.appendChild(newInputListItemRight);

				const parentOfInputSubSection = document.getElementById(`inputDetailAddSubheadingBtn${i}`).parentNode;
				const beforeOfInputSubSection = document.getElementById(`newInputBreakTwo${i}`);
				parentOfInputSubSection.insertBefore(newInputDivSub, beforeOfInputSubSection);

				// Create userOutputs side HTML elements
				const newOutputDivSub = document.createElement("div");
				newOutputDivSub.setAttribute("id", `outputDetailAutoMiniMiniDiv${i}-${numberOfLeftSubSections[i]}`);

				const newOutputUL = document.createElement("ul");
				const newOutputLI1 = document.createElement("li");
				newOutputLI1.setAttribute("id", `outputDetailListItemLeft${i}-${numberOfLeftSubSections[i]}`);
				newOutputLI1.setAttribute("name", `outputDetailListItemLeft${i}-${numberOfLeftSubSections[i]}`);
				newOutputLI1.innerHTML = `${defaultListItem} ${i}-${numberOfLeftSubSections[i]}`;
				newOutputUL.appendChild(newOutputLI1);
				const newOutputLI2 = document.createElement("li");
				newOutputLI2.setAttribute("id", `outputDetailListItemRight${i}-${numberOfLeftSubSections[i]}`);
				newOutputLI2.setAttribute("name", `outputDetailListItemRight${i}-${numberOfLeftSubSections[i]}`);
				newOutputLI2.style.display = "none";
				newOutputUL.appendChild(newOutputLI2);

				newOutputDivSub.appendChild(newOutputUL);

				const parentOfOutputSubSection = document.getElementById(`outputDetailAutoMiniDiv${i}`);

				parentOfOutputSubSection.appendChild(newOutputDivSub);
				
				// Update flag (notice it's an array here)
				numberOfLeftSubSections[i] += 1;

				// If necessary, update buttons
				const inputDetailRemoveBtnActive = document.getElementById(`inputDetailRemoveBtn${i}`);
				if (numberOfLeftSubSections[i] < maxNumberOfLeftSections) {
					if (inputDetailRemoveBtnActive.hasAttribute("disabled")) {
						inputDetailRemoveBtnActive.removeAttribute("disabled");
					}
				}

				if (numberOfLeftSubSections[i] <= 0) {
					inputDetailRemoveBtnActive.setAttribute("disabled", "");
				}

				break;
			}
			else if (e.target === document.getElementById(`inputDetailAddFreeTextBtn${i}`)
					|| e.target === document.getElementById(`inputDetailAddFreeTextBtnInner${i}`))
			{
				// Create userInputs side HTML elements
				const newInputDivSub = document.createElement("div");
				newInputDivSub.setAttribute("class", "miniBlock");
				newInputDivSub.setAttribute("id", `inputDetailAutoMiniMiniDiv${i}-${numberOfLeftSubSections[i]}`);

				const newInputTextArea = document.createElement("textarea");
				newInputTextArea.setAttribute("id", `inputDetailFreeText${i}-${numberOfLeftSubSections[i]}`);
				newInputTextArea.setAttribute("name", `inputDetailFreeText${i}-${numberOfLeftSubSections[i]}`);
				newInputTextArea.setAttribute("rows", "4");
				newInputTextArea.setAttribute("cols", "60");
				newInputTextArea.setAttribute("placeholder", "Free text");
				newInputDivSub.appendChild(newInputTextArea);

				const parentOfInputSubSection = document.getElementById(`inputDetailAddSubheadingBtn${i}`).parentNode;
				const beforeOfInputSubSection = document.getElementById(`newInputBreakTwo${i}`);
				parentOfInputSubSection.insertBefore(newInputDivSub, beforeOfInputSubSection);

				// Create userOutputs side HTML elements
				const newOutputDivSub = document.createElement("div");
				newOutputDivSub.setAttribute("id", `outputDetailAutoMiniMiniDiv${i}-${numberOfLeftSubSections[i]}`);

				const newFreeText = document.createElement("p");
				newFreeText.setAttribute("id", `outputDetailFreeText${i}-${numberOfLeftSubSections[i]}`);
				newFreeText.setAttribute("name", `outputDetailFreeText${i}-${numberOfLeftSubSections[i]}`);
				newFreeText.style.whiteSpace = "pre-line";
				newFreeText.innerHTML = `${defaultFreeText} ${i}-${numberOfLeftSubSections[i]}`;
				newOutputDivSub.appendChild(newFreeText);

				const parentOfOutputSubSection = document.getElementById(`outputDetailAutoMiniDiv${i}`);

				parentOfOutputSubSection.appendChild(newOutputDivSub);
				

				// Update flag (notice it's an array here)
				numberOfLeftSubSections[i] += 1;

				// If necessary, update buttons
				const inputDetailRemoveBtnActive = document.getElementById(`inputDetailRemoveBtn${i}`);
				if (numberOfLeftSubSections[i] < maxNumberOfLeftSections) {
					if (inputDetailRemoveBtnActive.hasAttribute("disabled")) {
						inputDetailRemoveBtnActive.removeAttribute("disabled");
					}
				}

				if (numberOfLeftSubSections[i] <= 0) {
					inputDetailRemoveBtnActive.setAttribute("disabled", "");
				}

				break;
			}
		};
	};
});
	


const changeFont = function(font) {
	let element = document.querySelector(".userOutputs");
	element.style.fontFamily = font.value;
}

inputMainProfile.addEventListener("input", () => fillHTML(inputMainProfile, outputMainProfile));

addSectionMainBtn.addEventListener("click", function() {
	// Create userInputs side HTML elements
	const newInputDiv = document.createElement("div");
	newInputDiv.setAttribute("class", "miniBlock");
	newInputDiv.setAttribute("id", `inputMainAutoMiniDiv${numberOfRightSections}`);

	const newInputOne = document.createElement("input");
	newInputOne.setAttribute("id", `inputMainSection${numberOfRightSections}`);
	newInputOne.setAttribute("name", `inputMainSection${numberOfRightSections}`);
	newInputOne.setAttribute("type", "text");
	newInputOne.setAttribute("list", `sectionMainChoices${numberOfRightSections}`);
	newInputOne.setAttribute("placeholder", "Section heading");
	newInputDiv.appendChild(newInputOne);

	const newDatalist = document.createElement("datalist");
	newDatalist.setAttribute("id", `sectionMainChoices${numberOfRightSections}`);
	const optionOne = document.createElement("option");
	optionOne.setAttribute("value", "Employment History");
	newDatalist.appendChild(optionOne);
	const optionTwo = document.createElement("option");
	optionTwo.setAttribute("value", "Education");
	newDatalist.appendChild(optionTwo);
	const optionThree = document.createElement("option");
	optionThree.setAttribute("value", "Skills");
	newDatalist.appendChild(optionThree);
	const optionFour = document.createElement("option");
	optionFour.setAttribute("value", "References");
	newDatalist.appendChild(optionFour);
	newInputDiv.appendChild(newDatalist);

	const newInputBreakOne = document.createElement("br");
	newInputBreakOne.setAttribute("id", `newInputMainBreakOne${numberOfRightSections}`);
	newInputDiv.appendChild(newInputBreakOne);
	const newInputBreakTwo = document.createElement("br");
	newInputBreakTwo.setAttribute("id", `newInputMainBreakTwo${numberOfRightSections}`);
	newInputDiv.appendChild(newInputBreakTwo);

	const newInputTwo = document.createElement("textarea");
	newInputTwo.setAttribute("id", `inputMainEntry${numberOfRightSections}`);
	newInputTwo.setAttribute("name", `inputMainEntry${numberOfRightSections}`);
	newInputTwo.setAttribute("rows", "1");
	newInputTwo.setAttribute("cols", "60");
	newInputTwo.setAttribute("placeholder", "Entry title");
	newInputDiv.appendChild(newInputTwo);

	const newInputBreakThree = document.createElement("br");
	newInputBreakThree.setAttribute("id", `newInputMainBreakThree${numberOfRightSections}`);
	newInputDiv.appendChild(newInputBreakThree);

	const newInputThree = document.createElement("textarea");
	newInputThree.setAttribute("id", `inputMainEntryDesc${numberOfRightSections}`);
	newInputThree.setAttribute("name", `inputMainEntryDesc${numberOfRightSections}`);
	newInputThree.setAttribute("rows", "3");
	newInputThree.setAttribute("cols", "60");
	newInputThree.setAttribute("placeholder", "Entry description (optional");
	newInputDiv.appendChild(newInputThree);

	userInputsMainDynamic.insertBefore(newInputDiv, userInputsMainEnd);

	// Create userOutputs side HTML elements
	// const newOutputDiv = document.createElement("div");
	// newOutputDiv.setAttribute("id", `outputDetailAutoMiniDiv${numberOfLeftSections}`);

	// const newOutputOne = document.createElement("h3");
	// newOutputOne.setAttribute("id", `outputDetailSection${numberOfLeftSections}`);
	// newOutputOne.setAttribute("name", `outputDetailSection${numberOfLeftSections}`);
	// newOutputOne.innerHTML = `${defaultSectionHeading} ${numberOfLeftSections}`;

	// newOutputDiv.appendChild(newOutputOne);

	// userOutputsDetailsDynamic.insertBefore(newOutputDiv, userOutputsDetailsEnd);

	// Update flag
	numberOfRightSections += 1;

	// If necessary, update bottons
	if (numberOfRightSections > 0) {
		if (removeSectionMainBtn.hasAttribute("disabled")) {
			removeSectionMainBtn.removeAttribute("disabled");
		}
	}

	if (numberOfRightSections >= maxNumberOfRightSections) {
		addSectionMainBtn.setAttribute("disabled", "");
	}
});

removeSectionMainBtn.addEventListener("click", function() {
	// Delete userInsputs side HTML elements
	const inputDivDelete = document.getElementById(`inputMainAutoMiniDiv${numberOfRightSections - 1}`);
	while (inputDivDelete.lastChild) {
		inputDivDelete.removeChild(inputDivDelete.lastChild);
	};
	inputDivDelete.remove();

	// Delete userOutputs side HMTL elements
	const outputDivDelete = document.getElementById(`outputMainAutoMiniDiv${numberOfRightSections - 1}`);
	while (outputDivDelete.firstChild) {
		outputDivDelete.removeChild(outputDivDelete.firstChild);
	};
	outputDivDelete.remove();

	// Update flag
	numberOfRightSections -= 1;

	// If necessary, update buttons
	if (numberOfRightSections < maxNumberOfRightSections) {
		if (addSectionMainBtn.hasAttribute("disabled")) {
			addSectionMainBtn.removeAttribute("disabled");
		}
	}

	if (numberOfRightSections <= 0) {
		removeSectionMainBtn.setAttribute("disabled", "");
	}
});

// -----------------------------------------
// ---  DOM manipulation: image          ---
// -----------------------------------------
window.addEventListener("load", function() {
	document.querySelector("input[type='file']").addEventListener("change", function() {
		if (this.files && this.files[0]) {
			const img = document.querySelector("img");
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

	doc.addFileToVFS("open-sans.ttf", openSansB64);
	doc.addFont("open-sans.ttf", "Open Sans", "normal");

	doc.addFileToVFS("roboto-mono.ttf", robotoMonoB64);
	doc.addFont("roboto-mono.ttf", "Roboto Mono", "normal");

	doc.addFileToVFS("arial.ttf", arialB64);
	doc.addFont("arial.ttf", "Arial", "normal");
	
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