class DetailsFreeText extends PrimaryElements {
    
    constructor ({elementId, elementInputParent, elementInputEnd, defaultFreeText, elementOutputParent}) {
        
        super({elementId, elementInputParent, elementInputEnd, elementOutputParent});
        this.sDefaultFreeText = defaultFreeText;
    }

    createHtml () {
        // Create userInputs side HTML elements
        const newInputDiv = document.createElement("div");
	    newInputDiv.setAttribute("class", "miniBlock");
	    newInputDiv.setAttribute("id", `inputDetailAutoMiniDiv${this.iElementId}`);

        const newInputTextArea = document.createElement("textarea");
        newInputTextArea.setAttribute("id", `inputDetailFreeText${this.iElementId}`);
        newInputTextArea.setAttribute("name", `inputDetailFreeText${this.iElementId}`);
        newInputTextArea.setAttribute("rows", "4");
        newInputTextArea.setAttribute("cols", "60");
        newInputTextArea.setAttribute("placeholder", "Free text");

        const newInputDivAfter = document.createElement("div");
        newInputDivAfter.style.display = "inline";
        newInputDivAfter.style.position = "relative";
        const newInputBtnRemove = document.createElement("button");
		newInputBtnRemove.setAttribute("id", `inputDetailRemoveBtn${this.iElementId}`);
        newInputBtnRemove.setAttribute("class", "removeBtn");
        newInputBtnRemove.style.position = "absolute";
		const newInputBtnRmoveInner = document.createElement("b");
	    newInputBtnRmoveInner.setAttribute("id", `inputDetailRemoveBtnInner${this.iElementId}`);
		newInputBtnRmoveInner.setAttribute("class", "removeBtnTxt");
        newInputBtnRmoveInner.innerHTML = "X";
		newInputBtnRemove.appendChild(newInputBtnRmoveInner);
        newInputDivAfter.appendChild(newInputBtnRemove);

        newInputDiv.appendChild(newInputTextArea);
        newInputDiv.appendChild(newInputDivAfter);
        this.oElementInputParent.insertBefore(newInputDiv, this.oElementInputEnd);

        // Create userOutputs side HTML elements
        const newOutputDiv = document.createElement("div");
        newOutputDiv.setAttribute("id", `outputDetailAutoMiniDiv${this.iElementId}`);

        const newFreeText = document.createElement("p");
        newFreeText.setAttribute("id", `outputDetailFreeText${this.iElementId}`);
        newFreeText.setAttribute("name", `outputDetailFreeText${this.iElementId}`);
        newFreeText.style.whiteSpace = "pre-line";
        newFreeText.innerHTML = `${this.sDefaultFreeText}`;

        newOutputDiv.appendChild(newFreeText);

        this.oElementOutputParent.insertBefore(newOutputDiv, this.oElementOutputEnd);
    }
}