// -- Details side related --
function updateBtnsDetails () {
    if (numberOfLeftSections >= maxNumberOfLeftSections) {
		addSectionDetailsBtn.setAttribute("disabled", "");
	} else {
        addSectionDetailsBtn.removeAttribute("disabled");
    }
}

function addSectionDetail () {
    const _oSectionDetailOptions = {
		elementId: idNumber,
		numberOfLeftSections: numberOfLeftSections,
		elementInputParent: O_USER_INPUTS_DETAILS_DYNAMIC,
		elementInputEnd: O_USER_INPUTS_DETAILS_END,
		elementOutputParent: O_USER_OUTPUTS_DETAILS_DYNAMIC,
		elementOutputEnd: O_USER_OUTPUTS_DETAILS_END,
		sectionMarginTop: S_SECTION_MARGIN_TOP,
		defaultSectionHeading: S_DEFAULT_SECTION_HEADING
	}

	const newSectionDetailBtns = new SectionDetailsBtns(_oSectionDetailOptions);
	newSectionDetailBtns.createHtml();
	idNumber += 1;
	numberOfLeftSections += 1;
    updateBtnsDetails();
}

function addSubheadingDetail (parentInputNode, endInputNode, parentOutput) {
    const _oOptions = {
		elementId: idNumber,
		elementInputParent: parentInputNode,
		elementInputEnd: endInputNode,
		elementOutputParent: parentOutput,
		defaultSectionHeading: defaultSectionSubHeading
	}

	const newSubheading = new DetailsSubheading(_oOptions);
	newSubheading.createHtml();
	idNumber += 1;
    updateBtnsDetails();
}

function addListItemDetail (parentInputNode, endInputNode, parentOutput) {
    const _oOptions = {
		elementId: idNumber,
		elementInputParent: parentInputNode,
		elementInputEnd: endInputNode,
		elementOutputParent: parentOutput,
		defaultListItem: defaultListItem
	}

	const newListItem = new DetailsListItem(_oOptions);
	newListItem.createHtml();
	idNumber += 1;
    updateBtnsDetails();
}

function addFreeText (parentInputNode, endInputNode, parentOutput) {
    const _oOptions = {
		elementId: idNumber,
		elementInputParent: parentInputNode,
		elementInputEnd: endInputNode,
		elementOutputParent: parentOutput,
		defaultFreeText: defaultFreeText
	}

	const newFreeText = new DetailsFreeText(_oOptions);
	newFreeText.createHtml();
	idNumber += 1;
    updateBtnsDetails();
}

// -- Main side related --
function updateBtnsMain () {
    if (iRightSections >= I_MAX_RIGHT_SECTIONS) {
		O_ADD_SECTION_MAIN_BTN.setAttribute("disabled", "");
	} else {
        O_ADD_SECTION_MAIN_BTN.removeAttribute("disabled");
    }
}

function addSectionMain () {
    const _oSectionMainOptions = {
		elementId: iMainId,
		numberOfSections: iRightSections,
		elementInputParent: O_USER_INPUTS_MAIN_DYNAMIC,
		elementInputEnd: O_USER_INPUTS_MAIN_END,
		elementOutputParent: O_USER_OUTPUTS_MAIN_DYNAMIC,
		elementOutputEnd: O_USER_OUTPUTS_MAIN_END,
		sectionMarginTop: S_SECTION_MARGIN_TOP,
		defaultSectionHeading: S_DEFAULT_SECTION_HEADING
	}

	const newSectionDetailBtns = new SectionMainBtns(_oSectionMainOptions);
	newSectionDetailBtns.createHtml();
	iMainId += 1;
	iRightSections += 1;
    updateBtnsMain();
}

function addEntryMain (parentInputNode, endInputNode, parentOutput) {
    const _oOptions = {
		elementId: iMainId,
		elementInputParent: parentInputNode,
		elementInputEnd: endInputNode,
		elementOutputParent: parentOutput,
		defaultEntry: S_DEFAULT_ENTRY
	}

	const newEntry = new MainEntry(_oOptions);
	newEntry.createHtml();
	iMainId += 1;
    updateBtnsMain();
}