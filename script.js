// -----------------------------------------
// ---  Control Variables                ---
// -----------------------------------------

const maxNumberOfLeftSections = 5;
const maxNumberOfRightSections = 5;

const defaultSectionHeading = "Heading";
const defaultListItem = "List Item(s)";
const defaultFreeText = "Free text";
const defaultEntry = "Entry";
const sectionMarginTop = "10px";

let numberOfLeftSections = 0;
let numberOfLeftSubSections = Array.from(Array(maxNumberOfLeftSections), () => 0);
let numberOfRightSections = 0;
let numberOfRightSubSections = Array.from(Array(maxNumberOfRightSections), () => 0);


// -----------------------------------------
// ---  Work Variables                   ---
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
	newOutputDiv.style.marginTop = `${sectionMarginTop}`;

	const newOutputOne = document.createElement("h3");
	newOutputOne.setAttribute("id", `outputDetailSection${numberOfLeftSections}`);
	newOutputOne.setAttribute("name", `outputDetailSection${numberOfLeftSections}`);
	newOutputOne.innerHTML = `${defaultSectionHeading} ${numberOfLeftSections + 1}`;
	newOutputOne.style.textDecoration = "underline";

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
		// No need to run on the output side since input/output both share the same subsection index flag. 
		if (inputDivDelete.lastChild.nodeName === "DIV") {
			for (let i = 0; i < numberOfLeftSubSections[numberOfLeftSections - 1]; i++) {
				if (inputDivDelete.lastChild.matches(`#inputDetailAutoMiniMiniDiv${numberOfLeftSections - 1}-${i}`)) {
					numberOfLeftSubSections[numberOfLeftSections - 1] -= 1;
					break;
				}
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
				document.getElementById(`outputDetailSection${i}`).innerHTML = `${defaultSectionHeading} ${i + 1}`;
			} else {
				document.getElementById(`outputDetailSection${i}`).innerHTML = document.getElementById(`inputDetailSection${i}`).value;
			}
			if (numberOfLeftSubSections[i] > 0) {
				for (let j = 0; j < numberOfLeftSubSections[i]; j++) {
					// Subheadings input/output
					if (document.getElementById(`inputDetailSubSection${i}-${j}`)) {
						if (document.getElementById(`inputDetailSubSection${i}-${j}`).value === "") {
							document.getElementById(`outputDetailSubSection${i}-${j}`).innerHTML = `${defaultSectionHeading} ${i + 1}-${j + 1}`;
						} else {
							document.getElementById(`outputDetailSubSection${i}-${j}`).innerHTML 
								= document.getElementById(`inputDetailSubSection${i}-${j}`).value;
						}
					}
					
					// List items input/output
					if (document.getElementById(`inputDetailListItemLeft${i}-${j}`)) {
						if (document.getElementById(`inputDetailListItemLeft${i}-${j}`).value === "") {
						document.getElementById(`outputDetailListItemLeft${i}-${j}`).innerHTML = `${defaultListItem} ${i + 1}-${j + 1}`;
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
							document.getElementById(`outputDetailFreeText${i}-${j}`).innerHTML = `${defaultFreeText} ${i + 1}-${j + 1}`;
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
				newOutputSubHeading.innerHTML = `${defaultSectionHeading} ${i + 1}-${numberOfLeftSubSections[i] + 1}`;
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
				newOutputLI1.innerHTML = `${defaultListItem} ${i + 1}-${numberOfLeftSubSections[i] + 1}`;
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
				newFreeText.innerHTML = `${defaultFreeText} ${i + 1}-${numberOfLeftSubSections[i] + 1}`;
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

	const newInputBtnOne = document.createElement("button");
	newInputBtnOne.setAttribute("id", `inputMainRemoveBtn${numberOfRightSections}`);
	newInputBtnOne.setAttribute("disabled", "");
	const newInputBtnOneInner = document.createElement("b");
	newInputBtnOneInner.setAttribute("id", `inputMainRemoveBtnInner${numberOfRightSections}`);
	newInputBtnOneInner.innerHTML = "Remove element";
	newInputBtnOne.appendChild(newInputBtnOneInner);
	newInputDiv.appendChild(newInputBtnOne);

	const newInputBtnTwo = document.createElement("button");
	newInputBtnTwo.setAttribute("id", `inputMainAddEntryBtn${numberOfRightSections}`);
	const newInputBtnTwoInner = document.createElement("b");
	newInputBtnTwoInner.setAttribute("id", `inputMainAddEntryBtnInner${numberOfRightSections}`);
	newInputBtnTwoInner.innerHTML = "Add entry";
	newInputBtnTwo.appendChild(newInputBtnTwoInner);
	newInputDiv.appendChild(newInputBtnTwo);

	userInputsMainDynamic.insertBefore(newInputDiv, userInputsMainEnd);

	// Create userOutputs side HTML elements
	const newOutputDiv = document.createElement("div");
	newOutputDiv.setAttribute("id", `outputMainAutoMiniDiv${numberOfRightSections}`);
	newOutputDiv.style.marginTop = `${sectionMarginTop}`;

	const newDivLineControllerOne = document.createElement("div");
	newDivLineControllerOne.setAttribute("class", "lineController");
	const newDivHorizontalLineOne = document.createElement("div");
	newDivHorizontalLineOne.setAttribute("class", "horizontalLineMain");
	newDivLineControllerOne.appendChild(newDivHorizontalLineOne);
	newOutputDiv.appendChild(newDivLineControllerOne);

	const newOutputOne = document.createElement("h3");
	newOutputOne.setAttribute("id", `outputMainSection${numberOfRightSections}`);
	newOutputOne.setAttribute("name", `outputMainSection${numberOfRightSections}`);
	newOutputOne.innerHTML = `${defaultSectionHeading} ${numberOfRightSections + 1}`;
	newOutputOne.style.fontWeight = "bold";
	newOutputDiv.appendChild(newOutputOne);

	const newDivLineControllerTwo = document.createElement("div");
	newDivLineControllerTwo.setAttribute("class", "lineController");
	const newDivHorizontalLineTwo = document.createElement("div");
	newDivHorizontalLineTwo.setAttribute("class", "horizontalLineMain");
	newDivLineControllerTwo.appendChild(newDivHorizontalLineTwo);
	newOutputDiv.appendChild(newDivLineControllerTwo);

	userOutputsMainDynamic.insertBefore(newOutputDiv, userOutputsMainEnd);

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
		// If there are any inner sub-sections, these need to be accounted for and their respective flags updated.
		// No need to run on the output side since input/output both share the same subsection index flag. 
		if (inputDivDelete.lastChild.nodeName === "DIV") {
			for (let i = 0; i < numberOfRightSubSections[numberOfRightSections - 1]; i++) {
				if (inputDivDelete.lastChild.matches(`#inputMainAutoMiniMiniDiv${numberOfRightSections - 1}-${i}`)) {
					numberOfRightSubSections[numberOfRightSections - 1] -= 1;
					break;
				}
			}
		}
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

userInputsMainDynamic.addEventListener("input", function(e) {
	// Input listener
	if (e.target && e.target.nodeName == "INPUT" || e.target && e.target.nodeName == "TEXTAREA") { 
		for (let i = 0; i < numberOfRightSections; i++) {
			if (document.getElementById(`inputMainSection${i}`).value === "") {
				document.getElementById(`outputMainSection${i}`).innerHTML = `${defaultSectionHeading} ${i + 1}`;
			} else {
				document.getElementById(`outputMainSection${i}`).innerHTML = document.getElementById(`inputMainSection${i}`).value;
			}
			if (numberOfRightSubSections[i] > 0) {
				for (let j = 0; j < numberOfRightSubSections[i]; j++) {
					// Entry input/output
					if (document.getElementById(`inputMainEntry${i}-${j}`)) {
						if (document.getElementById(`inputMainEntry${i}-${j}`).value === "") {
							document.getElementById(`outputMainEntry${i}-${j}`).innerHTML = `${defaultEntry} ${i + 1}-${j + 1}`;
						} else {
							document.getElementById(`outputMainEntry${i}-${j}`).innerHTML 
								= document.getElementById(`inputMainEntry${i}-${j}`).value;
						}
					}

					// Entry Description input/output
					if (document.getElementById(`inputMainEntryDesc${i}-${j}`)) {
						if (document.getElementById(`inputMainEntryDesc${i}-${j}`).value === "") {
							document.getElementById(`outputMainEntryDesc${i}-${j}`).innerHTML = "";
							document.getElementById(`outputMainEntryDesc${i}-${j}`).style.display = "none";
						} else {
							document.getElementById(`outputMainEntryDesc${i}-${j}`).innerHTML 
								= document.getElementById(`inputMainEntryDesc${i}-${j}`).value;
							document.getElementById(`outputMainEntryDesc${i}-${j}`).style.display = "block";
						}
					}
				}
			}
		};
	};
});

userInputsMainDynamic.addEventListener("click", function(e) {
	// Buttons listener
	if (e.target.nodeName === "BUTTON" || e.target.nodeName === "B") {
		for (let i = 0; i < numberOfRightSections; i++) {
			
			if (e.target === document.getElementById(`inputMainRemoveBtn${i}`)
				|| e.target === document.getElementById(`inputMainRemoveBtnInner${i}`)) 
			{
				// Delete userInsputs side HTML elements
				const inputDivDelete = document.getElementById(`inputMainAutoMiniMiniDiv${i}-${numberOfRightSubSections[i] - 1}`);
				while (inputDivDelete.firstchild) {
					inputDivDelete.removeChild(inputDivDelete.lastChild);
				};
				inputDivDelete.remove();

				// Delete userOutputs side HMTL elements
				const outputDivDelete = document.getElementById(`outputMainAutoMiniMiniDiv${i}-${numberOfRightSubSections[i] - 1}`);
				while (outputDivDelete.firstchild) {
					outputDivDelete.removeChild(outputDivDelete.lastChild);
				};
				outputDivDelete.remove();

				// Update flag (notice it's an array here)
				numberOfRightSubSections[i] -= 1;

				// If necessary, update buttons
				const inputMainRemoveBtnActive = document.getElementById(`inputMainRemoveBtn${i}`);
				if (numberOfRightSubSections[i] < maxNumberOfRightSections) {
					if (inputMainRemoveBtnActive.hasAttribute("disabled")) {
						inputMainRemoveBtnActive.removeAttribute("disabled");
					}
				}

				if (numberOfRightSubSections[i] <= 0) {
					inputMainRemoveBtnActive.setAttribute("disabled", "");
				}

				break;
			} 

			else if (e.target === document.getElementById(`inputMainAddEntryBtn${i}`)
					|| e.target === document.getElementById(`inputMainAddEntryBtnInner${i}`)) 
			{
				// Create userInputs side HTML elements
				const newInputDivSub = document.createElement("div");
				newInputDivSub.setAttribute("class", "miniBlock");
				newInputDivSub.setAttribute("id", `inputMainAutoMiniMiniDiv${i}-${numberOfRightSubSections[i]}`);

				const newInputTwo = document.createElement("textarea");
				newInputTwo.setAttribute("id", `inputMainEntry${i}-${numberOfRightSubSections[i]}`);
				newInputTwo.setAttribute("name", `inputMainEntry${i}-${numberOfRightSubSections[i]}`);
				newInputTwo.setAttribute("rows", "1");
				newInputTwo.setAttribute("cols", "60");
				newInputTwo.setAttribute("placeholder", "Entry title");
				newInputDivSub.appendChild(newInputTwo);

				const newInputBreakThree = document.createElement("br");
				newInputBreakThree.setAttribute("id", `newInputMainBreakThree${i}-${numberOfRightSubSections[i]}`);
				newInputDivSub.appendChild(newInputBreakThree);

				const newInputThree = document.createElement("textarea");
				newInputThree.setAttribute("id", `inputMainEntryDesc${i}-${numberOfRightSubSections[i]}`);
				newInputThree.setAttribute("name", `inputMainEntryDesc${i}-${numberOfRightSubSections[i]}`);
				newInputThree.setAttribute("rows", "3");
				newInputThree.setAttribute("cols", "60");
				newInputThree.setAttribute("placeholder", "Entry description (optional");
				newInputDivSub.appendChild(newInputThree);

				const parentOfInputSubSection = document.getElementById(`inputMainRemoveBtn${i}`).parentNode;
				const beforeOfInputSubSection = document.getElementById(`inputMainRemoveBtn${i}`);
				parentOfInputSubSection.insertBefore(newInputDivSub, beforeOfInputSubSection);

				// Create userOutputs side HTML elements
				const newOutputDivSub = document.createElement("div");
				newOutputDivSub.setAttribute("id", `outputMainAutoMiniMiniDiv${i}-${numberOfRightSubSections[i]}`);

				const newEntry = document.createElement("p");
				newEntry.setAttribute("id", `outputMainEntry${i}-${numberOfRightSubSections[i]}`);
				newEntry.setAttribute("name", `outputMainEntry${i}-${numberOfRightSubSections[i]}`);
				newEntry.style.fontWeight = "bold";
				newEntry.style.whiteSpace = "pre-line";
				newEntry.innerHTML = `${defaultEntry} ${i + 1}-${numberOfRightSubSections[i] + 1}`;
				newOutputDivSub.appendChild(newEntry);

				const newEntryDesc = document.createElement("p");
				newEntryDesc.setAttribute("id", `outputMainEntryDesc${i}-${numberOfRightSubSections[i]}`);
				newEntryDesc.setAttribute("name", `outputMainEntryDesc${i}-${numberOfRightSubSections[i]}`);
				newEntryDesc.style.whiteSpace = "pre-line";
				newEntryDesc.style.display = "none";
				newOutputDivSub.appendChild(newEntryDesc);

				const parentOfOutputSubSection = document.getElementById(`outputMainAutoMiniDiv${i}`);
				parentOfOutputSubSection.appendChild(newOutputDivSub);

				// Update flag (notice it's an array here)
				numberOfRightSubSections[i] += 1;

				// If necessary, update buttons
				const inputMainRemoveBtnActive = document.getElementById(`inputMainRemoveBtn${i}`);
				if (numberOfRightSubSections[i] < maxNumberOfRightSections) {
					if (inputMainRemoveBtnActive.hasAttribute("disabled")) {
						inputMainRemoveBtnActive.removeAttribute("disabled");
					}
				}

				if (numberOfRightSubSections[i] <= 0) {
					inputMainRemoveBtnActive.setAttribute("disabled", "");
				}

				break;
			}
		};
	};
});

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