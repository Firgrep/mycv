// -----------------------------------------
// ---  DOM manipulation functions: misc ---
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

function clickTheseBtns() {
    O_BACKGROUND_DETAIL_CHOICE_ONE.click();
	O_BACKGROUND_MAIN_CHOICE_ONE.click();
	O_ADD_SECTION_DETAILS_BTN.click();
	O_ADD_SECTION_MAIN_BTN.click();
}