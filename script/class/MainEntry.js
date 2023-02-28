class MainEntry extends PrimaryElements {
    
    constructor ({elementId, elementInputParent, elementInputEnd, defaultEntry, elementOutputParent}) {
        
        super({elementId, elementInputParent, elementInputEnd, elementOutputParent});
        this.sDefaultEntry = defaultEntry;
    }

    createHtml () {
        // Create userInputs side HTML elements
        const newInputDiv = document.createElement("div");
	    newInputDiv.setAttribute("class", "miniBlock");
	    newInputDiv.setAttribute("id", `inputMainAutoMiniDiv${this.iElementId}`);

        const newInputTextArea = document.createElement("textarea");
        newInputTextArea.setAttribute("id", `inputMainEntry${this.iElementId}`);
        newInputTextArea.setAttribute("name", `inputMainEntry${this.iElementId}`);
        newInputTextArea.setAttribute("rows", "1");
        newInputTextArea.setAttribute("cols", "60");
        newInputTextArea.setAttribute("placeholder", "Entry title");

        const newInputDivAfter = document.createElement("div");
        newInputDivAfter.style.display = "inline";
        newInputDivAfter.style.position = "relative";
        const newInputBtnRemove = document.createElement("button");
		newInputBtnRemove.setAttribute("id", `inputMainRemoveBtn${this.iElementId}`);
        newInputBtnRemove.setAttribute("class", "removeBtn");
        newInputBtnRemove.style.position = "absolute";
		const newInputBtnRmoveInner = document.createElement("b");
	    newInputBtnRmoveInner.setAttribute("id", `inputMainRemoveBtnInner${this.iElementId}`);
		newInputBtnRmoveInner.setAttribute("class", "removeBtnTxt");
        newInputBtnRmoveInner.innerHTML = "X";
		newInputBtnRemove.appendChild(newInputBtnRmoveInner);
        newInputDivAfter.appendChild(newInputBtnRemove);

        const newInputBreakThree = document.createElement("br");
		newInputBreakThree.setAttribute("id", `newInputMainBreakThree${this.iElementId}`);
		
        const newInputThree = document.createElement("textarea");
        newInputThree.setAttribute("id", `inputMainEntryDesc${this.iElementId}`);
        newInputThree.setAttribute("name", `inputMainEntryDesc${this.iElementId}`);
        newInputThree.setAttribute("rows", "3");
        newInputThree.setAttribute("cols", "60");
        newInputThree.setAttribute("placeholder", "Entry description (optional");
		
        newInputDiv.appendChild(newInputTextArea);
        newInputDiv.appendChild(newInputDivAfter);
        newInputDiv.appendChild(newInputBreakThree);
        newInputDiv.appendChild(newInputThree);
        this.oElementInputParent.insertBefore(newInputDiv, this.oElementInputEnd);

        // Create userOutputs side HTML elements
        const newOutputDiv = document.createElement("div");
        newOutputDiv.setAttribute("id", `outputMainAutoMiniDiv${this.iElementId}`);

        const newEntry = document.createElement("p");
        newEntry.setAttribute("id", `outputMainEntry${this.iElementId}`);
        newEntry.setAttribute("name", `outputMainEntry${this.iElementId}`);
        newEntry.style.fontWeight = "bold";
        newEntry.style.whiteSpace = "pre-line";
        newEntry.innerHTML = `${this.sDefaultEntry}`;

        const newEntryDesc = document.createElement("p");
        newEntryDesc.setAttribute("id", `outputMainEntryDesc${this.iElementId}`);
        newEntryDesc.setAttribute("name", `outputMainEntryDesc${this.iElementId}`);
        newEntryDesc.style.whiteSpace = "pre-line";
        newEntryDesc.style.display = "none";
        
        newOutputDiv.appendChild(newEntry);
        newOutputDiv.appendChild(newEntryDesc);

        this.oElementOutputParent.appendChild(newOutputDiv);
    }
}