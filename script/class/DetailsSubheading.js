class DetailsSubheading extends PrimaryElements {
    
    constructor ({elementId, elementInputParent, elementInputEnd, defaultSectionHeading, elementOutputParent}) {

        super({elementId, elementInputParent, elementInputEnd, elementOutputParent});
        this.sDefaultSectionHeading = defaultSectionHeading;
    }

    createHtml () {
        // Create userInputs side HTML elements
        const newInputDiv = document.createElement("div");
	    newInputDiv.setAttribute("class", "miniMiniBlock");
	    newInputDiv.setAttribute("id", `inputDetailAutoMiniDiv${this.iElementId}`);

        const newInputSubSection = document.createElement("input");
        newInputSubSection.setAttribute("id", `inputDetailSubSection${this.iElementId}`);
        newInputSubSection.setAttribute("name", `inputDetailSubSection${this.iElementId}`);
        newInputSubSection.setAttribute("type", "text");
        newInputSubSection.setAttribute("placeholder", "Section subheading");

        const newInputBtnRemove = document.createElement("button");
		newInputBtnRemove.setAttribute("id", `inputDetailRemoveBtn${this.iElementId}`);
        newInputBtnRemove.setAttribute("class", "removeBtn");
		const newInputBtnRmoveInner = document.createElement("b");
	    newInputBtnRmoveInner.setAttribute("id", `inputDetailRemoveBtnInner${this.iElementId}`);
		newInputBtnRmoveInner.setAttribute("class", "removeBtnTxt");
        newInputBtnRmoveInner.innerHTML = "X";
		newInputBtnRemove.appendChild(newInputBtnRmoveInner);

        newInputDiv.appendChild(newInputSubSection);
        newInputDiv.appendChild(newInputBtnRemove);
        this.oElementInputParent.insertBefore(newInputDiv, this.oElementInputEnd);

        // Create userOutputs side HTML elements
        const newOutputDiv = document.createElement("div");
        newOutputDiv.setAttribute("id", `outputDetailAutoMiniDiv${this.iElementId}`);

        const newOutputSubHeading = document.createElement("h4");
		newOutputSubHeading.setAttribute("id", `outputDetailSubSection${this.iElementId}`);
		newOutputSubHeading.setAttribute("name", `outputDetailSubSection${this.iElementId}`);
		newOutputSubHeading.innerHTML = `${this.sDefaultSectionHeading}`;
        newOutputSubHeading.style.fontWeight = "bold";
		newOutputDiv.appendChild(newOutputSubHeading);

        this.oElementOutputParent.appendChild(newOutputDiv);
    }
}