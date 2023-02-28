class DetailsListItem extends PrimaryElements {
   
    constructor ({elementId, elementInputParent, elementInputEnd, defaultListItem, elementOutputParent}) {

        super({elementId, elementInputParent, elementInputEnd, elementOutputParent});
        this.sDefaultListItem = defaultListItem;
    }

    createHtml () {
        // Create userInputs side HTML elements
        const newInputDiv = document.createElement("div");
	    newInputDiv.setAttribute("class", "miniMiniBlock");
	    newInputDiv.setAttribute("id", `inputDetailAutoMiniDiv${this.iElementId}`);

        const newInputListItemLeft = document.createElement("input");
        newInputListItemLeft.setAttribute("id", `inputDetailListItemLeft${this.iElementId}`);
        newInputListItemLeft.setAttribute("name", `inputDetailListItemLeft${this.iElementId}`);
        newInputListItemLeft.setAttribute("type", "text");
        newInputListItemLeft.setAttribute("placeholder", "List item left");

        const newWhitespace = document.createElement("span");
        newWhitespace.innerHTML = "&emsp;";

        const newInputListItemRight = document.createElement("input");
        newInputListItemRight.setAttribute("id", `inputDetailListItemRight${this.iElementId}`);
        newInputListItemRight.setAttribute("name", `inputDetailListItemRight${this.iElementId}`);
        newInputListItemRight.setAttribute("type", "text");
        newInputListItemRight.setAttribute("placeholder", "List item right (optional)");

        const newInputBtnRemove = document.createElement("button");
		newInputBtnRemove.setAttribute("id", `inputDetailRemoveBtn${this.iElementId}`);
        newInputBtnRemove.setAttribute("class", "removeBtn");
		const newInputBtnRmoveInner = document.createElement("b");
	    newInputBtnRmoveInner.setAttribute("id", `inputDetailRemoveBtnInner${this.iElementId}`);
		newInputBtnRmoveInner.setAttribute("class", "removeBtnTxt");
        newInputBtnRmoveInner.innerHTML = "X";
		newInputBtnRemove.appendChild(newInputBtnRmoveInner);

        newInputDiv.appendChild(newInputListItemLeft);
        newInputDiv.appendChild(newWhitespace);
        newInputDiv.appendChild(newInputListItemRight);
        newInputDiv.appendChild(newInputBtnRemove);
        this.oElementInputParent.insertBefore(newInputDiv, this.oElementInputEnd);
        
        // Create userOutputs side HTML elements
        const newOutputDiv = document.createElement("div");
        newOutputDiv.setAttribute("id", `outputDetailAutoMiniDiv${this.iElementId}`);

        const newOutputUL = document.createElement("ul");
        const newOutputLI1 = document.createElement("li");
        newOutputLI1.setAttribute("id", `outputDetailListItemLeft${this.iElementId}`);
        newOutputLI1.setAttribute("name", `outputDetailListItemLeft${this.iElementId}`);
        newOutputLI1.innerHTML = `${this.sDefaultListItem}`;
        newOutputUL.appendChild(newOutputLI1);
        const newOutputLI2 = document.createElement("li");
        newOutputLI2.setAttribute("id", `outputDetailListItemRight${this.iElementId}`);
        newOutputLI2.setAttribute("name", `outputDetailListItemRight${this.iElementId}`);
        newOutputLI2.style.display = "none";
        newOutputUL.appendChild(newOutputLI2);

        newOutputDiv.appendChild(newOutputUL);

        this.oElementOutputParent.appendChild(newOutputDiv);
    }
}