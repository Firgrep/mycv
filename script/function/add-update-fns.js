// -- Details side related --
function updateBtnsDetails () {
    if (iLeftSections >= I_MAX_LEFT_SECTIONS) {
		O_ADD_SECTION_DETAILS_BTN.setAttribute("disabled", "");
	} else {
        O_ADD_SECTION_DETAILS_BTN.removeAttribute("disabled");
    }
}

function addSectionDetail () {
    const _oSectionDetailOptions = {
		elementId: iDetailsId,
		numberOfLeftSections: iLeftSections,
		elementInputParent: O_USER_INPUTS_DETAILS_DYNAMIC,
		elementInputEnd: O_USER_INPUTS_DETAILS_END,
		elementOutputParent: O_USER_OUTPUTS_DETAILS_DYNAMIC,
		elementOutputEnd: O_USER_OUTPUTS_DETAILS_END,
		sectionMarginTop: S_SECTION_MARGIN_TOP,
		defaultSectionHeading: S_DEFAULT_SECTION_HEADING
	}

	const newSectionDetailBtns = new SectionDetailsBtns(_oSectionDetailOptions);
	newSectionDetailBtns.createHtml();
	iDetailsId += 1;
	iLeftSections += 1;
    updateBtnsDetails();
}

function addSubheadingDetail (parentInputNode, endInputNode, parentOutput) {
    const _oOptions = {
		elementId: iDetailsId,
		elementInputParent: parentInputNode,
		elementInputEnd: endInputNode,
		elementOutputParent: parentOutput,
		defaultSectionHeading: S_DEFAULT_SUBHEADING
	}

	const newSubheading = new DetailsSubheading(_oOptions);
	newSubheading.createHtml();
	iDetailsId += 1;
    updateBtnsDetails();
}

function addListItemDetail (parentInputNode, endInputNode, parentOutput) {
    const _oOptions = {
		elementId: iDetailsId,
		elementInputParent: parentInputNode,
		elementInputEnd: endInputNode,
		elementOutputParent: parentOutput,
		defaultListItem: S_DEFAULT_LIST_ITEM
	}

	const newListItem = new DetailsListItem(_oOptions);
	newListItem.createHtml();
	iDetailsId += 1;
    updateBtnsDetails();
}

function addFreeText (parentInputNode, endInputNode, parentOutput) {
    const _oOptions = {
		elementId: iDetailsId,
		elementInputParent: parentInputNode,
		elementInputEnd: endInputNode,
		elementOutputParent: parentOutput,
		defaultFreeText: S_DEFAULT_FREE_TEXT
	}

	const newFreeText = new DetailsFreeText(_oOptions);
	newFreeText.createHtml();
	iDetailsId += 1;
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