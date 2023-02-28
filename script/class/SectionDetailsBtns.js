class SectionDetailsBtns extends PrimaryElements {
    
    constructor ({elementId, elementInputParent, elementInputEnd, sectionMarginTop, defaultSectionHeading, 
                    numberOfLeftSections, elementOutputParent, elementOutputEnd}) {
        
        super({elementId, elementInputParent, elementInputEnd, elementOutputParent, elementOutputEnd});
        this.iLeftSections = numberOfLeftSections;
        this.sSectionMarginTop = sectionMarginTop;
        this.sDefaultSectionHeading = defaultSectionHeading;
    }

    createHtml () {
        // Create userInputs side HTML elements
        const newInputDiv = document.createElement("div");
	    newInputDiv.setAttribute("class", "miniBlock");
	    newInputDiv.setAttribute("id", `inputDetailAutoMiniDiv${this.iElementId}`);
        newInputDiv.setAttribute("customtype", "section");

        const newInputOne = document.createElement("input");
        newInputOne.setAttribute("id", `inputDetailSection${this.iElementId}`);
        newInputOne.setAttribute("name", `inputDetailSection${this.iElementId}`);
        newInputOne.setAttribute("type", "text");
        newInputOne.setAttribute("placeholder", "Section heading");

        const newInputBtnRemove = document.createElement("button");
		newInputBtnRemove.setAttribute("id", `inputDetailRemoveBtn${this.iElementId}`);
        newInputBtnRemove.setAttribute("class", "removeSectionBtn");
		const newInputBtnRmoveInner = document.createElement("b");
	    newInputBtnRmoveInner.setAttribute("id", `inputDetailRemoveBtnInner${this.iElementId}`);
        newInputBtnRmoveInner.setAttribute("class", "removeBtnTxt");
		newInputBtnRmoveInner.innerHTML = "Remove Section";
		newInputBtnRemove.appendChild(newInputBtnRmoveInner);

        const newInputBreakOne = document.createElement("br");
        newInputBreakOne.setAttribute("id", `newInputBreakOne${this.iElementId}`)
        const newInputBreakTwo = document.createElement("br");
        newInputBreakTwo.setAttribute("id", `newInputBreakTwo${this.iElementId}`)

        const newInputBtnTwo = document.createElement("button");
        newInputBtnTwo.setAttribute("id", `inputDetailAddSubheadingBtn${this.iElementId}`);
        newInputBtnTwo.setAttribute("class", `addBtn`);
        const newInputBtnTwoInner = document.createElement("b");
        newInputBtnTwoInner.setAttribute("id", `inputDetailAddSubheadingBtnInner${this.iElementId}`);
        newInputBtnTwoInner.setAttribute("class", `addBtnTxt`);
        newInputBtnTwoInner.innerHTML = "Add subheading";
        newInputBtnTwo.appendChild(newInputBtnTwoInner);

        const newInputBtnThree = document.createElement("button");
        newInputBtnThree.setAttribute("id", `inputDetailAddListItemsBtn${this.iElementId}`);
        newInputBtnThree.setAttribute("class", `addBtn`);
        const newInputBtnThreeInner = document.createElement("b");
        newInputBtnThreeInner.setAttribute("id", `inputDetailAddListItemsBtnInner${this.iElementId}`);
        newInputBtnThreeInner.setAttribute("class", `addBtnTxt`);
        newInputBtnThreeInner.innerHTML = "Add list items";
        newInputBtnThree.appendChild(newInputBtnThreeInner);

        const newInputBtnFour = document.createElement("button");
        newInputBtnFour.setAttribute("id", `inputDetailAddFreeTextBtn${this.iElementId}`);
        newInputBtnFour.setAttribute("class", `addBtn`);
        const newInputBtnFourInner = document.createElement("b");
        newInputBtnFourInner.setAttribute("id", `inputDetailAddFreeTextBtnInner${this.iElementId}`);
        newInputBtnFourInner.setAttribute("class", `addBtnTxt`);
        newInputBtnFourInner.innerHTML = "Add free text";
        newInputBtnFour.appendChild(newInputBtnFourInner);

        newInputDiv.appendChild(newInputOne);
        newInputDiv.appendChild(newInputBtnRemove);
        newInputDiv.appendChild(newInputBreakOne);
        newInputDiv.appendChild(newInputBreakTwo);
        newInputDiv.appendChild(newInputBtnTwo);
        newInputDiv.appendChild(newInputBtnThree);
        newInputDiv.appendChild(newInputBtnFour);
        this.oElementInputParent.insertBefore(newInputDiv, this.oElementInputEnd);

        // Create userOutputs side HTML elements
        const newOutputDiv = document.createElement("div");
        newOutputDiv.setAttribute("id", `outputDetailAutoMiniDiv${this.iElementId}`);
        newOutputDiv.style.marginTop = `${this.sSectionMarginTop}`;

        const newOutputOne = document.createElement("h3");
        newOutputOne.setAttribute("id", `outputDetailSection${this.iElementId}`);
        newOutputOne.setAttribute("name", `outputDetailSection${this.iElementId}`);
        newOutputOne.innerHTML = `${this.sDefaultSectionHeading}`;
        newOutputOne.style.textDecoration = "underline";

        newOutputDiv.appendChild(newOutputOne);

        this.oElementOutputParent.insertBefore(newOutputDiv, this.oElementOutputEnd);
    }
}