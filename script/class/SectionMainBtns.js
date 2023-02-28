class SectionMainBtns extends PrimaryElements {
    
    constructor ({elementId, elementInputParent, elementInputEnd, sectionMarginTop, defaultSectionHeading, 
                    numberOfSections, elementOutputParent, elementOutputEnd}) {
        
        super({elementId, elementInputParent, elementInputEnd, elementOutputParent, elementOutputEnd});
        this.iSections = numberOfSections;
        this.sSectionMarginTop = sectionMarginTop;
        this.sDefaultSectionHeading = defaultSectionHeading;
    }

    createHtml () {
        // Create userInputs side HTML elements
        const newInputDiv = document.createElement("div");
	    newInputDiv.setAttribute("class", "miniBlock");
	    newInputDiv.setAttribute("id", `inputMainAutoMiniDiv${this.iElementId}`);
        newInputDiv.setAttribute("customtype", "section");

        const newInputOne = document.createElement("input");
        newInputOne.setAttribute("id", `inputMainSection${this.iElementId}`);
        newInputOne.setAttribute("name", `inputMainSection${this.iElementId}`);
        newInputOne.setAttribute("list", `sectionMainChoices${this.iElementId}`);
        newInputOne.setAttribute("type", "text");
        newInputOne.setAttribute("placeholder", "Section heading");

        const newDatalist = document.createElement("datalist");
        newDatalist.setAttribute("id", `sectionMainChoices${this.iElementId}`);
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

        const newInputBtnRemove = document.createElement("button");
		newInputBtnRemove.setAttribute("id", `inputMainRemoveBtn${this.iElementId}`);
        newInputBtnRemove.setAttribute("class", "removeSectionBtn");
		const newInputBtnRmoveInner = document.createElement("b");
	    newInputBtnRmoveInner.setAttribute("id", `inputMainRemoveBtnInner${this.iElementId}`);
        newInputBtnRmoveInner.setAttribute("class", "removeBtnTxt");
		newInputBtnRmoveInner.innerHTML = "Remove Section";
		newInputBtnRemove.appendChild(newInputBtnRmoveInner);

        const newInputBreakOne = document.createElement("br");
        newInputBreakOne.setAttribute("id", `newInputMainBreakOne${this.iElementId}`);
        const newInputBreakTwo = document.createElement("br");
        newInputBreakTwo.setAttribute("id", `newInputMainBreakTwo${this.iElementId}`);
        
        const newInputBtnTwo = document.createElement("button");
        newInputBtnTwo.setAttribute("id", `inputMainAddEntryBtn${this.iElementId}`);
        newInputBtnTwo.setAttribute("class", `addBtn`);
        const newInputBtnTwoInner = document.createElement("b");
        newInputBtnTwoInner.setAttribute("id", `inputMainAddEntryBtnInner${this.iElementId}`);
        newInputBtnTwoInner.setAttribute("class", "addBtnTxt");
        newInputBtnTwoInner.innerHTML = "Add entry";
        newInputBtnTwo.appendChild(newInputBtnTwoInner);

        newInputDiv.appendChild(newInputOne);
        newInputDiv.appendChild(newDatalist);
        newInputDiv.appendChild(newInputBtnRemove);
        newInputDiv.appendChild(newInputBreakOne);
        newInputDiv.appendChild(newInputBreakTwo);
        newInputDiv.appendChild(newInputBtnTwo);
        this.oElementInputParent.insertBefore(newInputDiv, this.oElementInputEnd);

        // Create userOutputs side HTML elements
        const newOutputDiv = document.createElement("div");
        newOutputDiv.setAttribute("id", `outputMainAutoMiniDiv${this.iElementId}`);
        newOutputDiv.style.marginTop = `${this.sSectionMarginTop}`;

        const newDivLineControllerOne = document.createElement("div");
        newDivLineControllerOne.setAttribute("class", "lineController");
        const newDivHorizontalLineOne = document.createElement("div");
        newDivHorizontalLineOne.setAttribute("class", "horizontalLineMain");
        newDivLineControllerOne.appendChild(newDivHorizontalLineOne);

        const newOutputOne = document.createElement("h3");
        newOutputOne.setAttribute("id", `outputMainSection${this.iElementId}`);
        newOutputOne.setAttribute("name", `outputMainSection${this.iElementId}`);
        newOutputOne.innerHTML = `${this.sDefaultSectionHeading}`;
        newOutputOne.style.fontWeight = "bold";

        const newDivLineControllerTwo = document.createElement("div");
        newDivLineControllerTwo.setAttribute("class", "lineController");
        const newDivHorizontalLineTwo = document.createElement("div");
        newDivHorizontalLineTwo.setAttribute("class", "horizontalLineMain");
        newDivLineControllerTwo.appendChild(newDivHorizontalLineTwo);
        
        newOutputDiv.appendChild(newDivLineControllerOne);
        newOutputDiv.appendChild(newOutputOne);
        newOutputDiv.appendChild(newDivLineControllerTwo);

        this.oElementOutputParent.insertBefore(newOutputDiv, this.oElementOutputEnd);
    }
}