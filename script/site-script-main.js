// -----------------------------------------
// ---  Control Constants and Variables  ---
// -----------------------------------------

const I_MAX_LEFT_SECTIONS = 5;
const I_MAX_RIGHT_SECTIONS = 5;

const S_DEFAULT_SECTION_HEADING = "Heading";
const S_DEFAULT_SUBHEADING = "Subheading";
const S_DEFAULT_LIST_ITEM = "List Item(s)";
const S_DEFAULT_FREE_TEXT = "Free text";
const S_DEFAULT_ENTRY = "Entry";
const S_SECTION_MARGIN_TOP = "10px";

let iDetailsId = 0;
let iMainId = 0;
let iLeftSections = 0;
let iRightSections = 0;

// -----------------------------------------
// ---  Work Constants                   ---
// -----------------------------------------
const O_OUTPUT_DETAIL_LINE = document.getElementById("outputDetailLine");
const O_IMG_BORDER = document.getElementById("imgBorderRadiusRange");

const O_BACKGROUND_MAIN_SELECTOR = document.getElementById("backgroundMainSelector");
const O_GRID_COL_TWO = document.getElementsByClassName("gridColTwo")[0];
const O_BACKGROUND_DETAIL_SELECTOR = document.getElementById("backgroundDetailSelector");
const O_GRID_COL_ONE = document.getElementsByClassName("gridColOne")[0];
const O_BACKGROUND_MAIN_CHOICE_END = document.getElementById("backgroundMainChoiceEnd");
const O_BACKGROUND_DETAIL_CHOICE_ONE = document.getElementById("backgroundDetailChoiceOne");
const O_BACKGROUND_MAIN_CHOICE_ONE = document.getElementById("backgroundMainChoiceOne");

const O_INPUT_NAME = document.getElementById("usernameIn");
const O_OUTPUT_NAME = document.getElementById("usernameOut").innerHTML;
const O_INPUT_DETAILS_TITLE = document.getElementById("inputDetailsTitle");
const O_OUTPUT_DETAILS_TITLE = document.getElementById("outputDetailsTitle");
const O_INPUT_DETAILS_KEY = document.getElementById("inputDetailsKey");
const O_OUTPUT_DETAILS_KEY = document.getElementById("outputDetailsKey");

const O_USER_INPUTS_DETAILS_DYNAMIC = document.getElementById("userInputsDetailsDynamic");
const O_USER_INPUTS_DETAILS_END = document.getElementById("userInputsDetailsEnd");
const O_USER_OUTPUTS_DETAILS_DYNAMIC = document.getElementById("userOutputsDetailsDynamic");
const O_USER_OUTPUTS_DETAILS_END = document.getElementById("userOutputsDetailsEnd");
const O_ADD_SECTION_DETAILS_BTN = document.getElementById("addSectionDetailsBtn");

const O_INPUT_MAIN_PROFILE = document.getElementById("inputMainProfile");
const O_OUTPUT_MAIN_PROFILE = document.getElementById("outputMainProfile");

const O_USER_INPUTS_MAIN_DYNAMIC = document.getElementById("userInputsMainDynamic");
const O_USER_INPUTS_MAIN_END = document.getElementById("uesrInputsMainEnd");
const O_USER_OUTPUTS_MAIN_DYNAMIC = document.getElementById("userOutputsMainDynamic");
const O_USER_OUTPUTS_MAIN_END = document.getElementById("userOutputsMainEnd");
const O_ADD_SECTION_MAIN_BTN = document.getElementById("addSectionMainBtn");

const O_USER_INPUTS_DESIGN_TOGGLE_COLLAPSE_BTN = document.getElementById("userInputsDesignToggleCollapseBtn");
const O_USER_INPUTS_DESGIN_COLLAPSE = document.getElementById("userInputsDesignCollapse");
const O_USER_INPUTS_DETAILS_TOGGLE_COLLAPSE_BTN = document.getElementById("userInputsDetailsToggleCollapseBtn");
const O_USER_INPUTS_DETAILS_COLLAPSE = document.getElementById("userInputsDetailsCollapse");
const O_USER_INPUTS_MAIN_TOGGLE_COLLAPSE_BTN = document.getElementById("userInputsMainToggleCollapseBtn");
const O_USER_INPUTS_MAIN_COLLAPSE = document.getElementById("userInputsMainCollapse");

const O_IMG_WARNING = document.getElementById("imgWarning");
const O_DOWNLOAD_PDF_BTN = document.getElementById("downloadPdf");


// ---  DOM manipulation: style          ---
O_IMG_BORDER.addEventListener("change", radiusChange);
O_BACKGROUND_MAIN_SELECTOR.addEventListener("click", (e) => changeMainBackground(e));
O_BACKGROUND_DETAIL_SELECTOR.addEventListener("click", (e) => changeDetailsBackground(e));


// ---  DOM manipulation: text           ---
O_INPUT_NAME.addEventListener("input", () => changeName());
O_INPUT_DETAILS_TITLE.addEventListener("input", () => updateInputOutputPrimitive(O_INPUT_DETAILS_TITLE, O_OUTPUT_DETAILS_TITLE));
O_INPUT_DETAILS_KEY.addEventListener("input", () => updateInputOutputPrimitive(O_INPUT_DETAILS_KEY, O_OUTPUT_DETAILS_KEY));
O_ADD_SECTION_DETAILS_BTN.addEventListener("click", addSectionDetail);
O_USER_INPUTS_DETAILS_DYNAMIC.addEventListener("input", (e) => updateInputOutputDetails(e));
O_USER_INPUTS_DETAILS_DYNAMIC.addEventListener("click", (e) => dynamicBtnControlDetails(e));

O_INPUT_MAIN_PROFILE.addEventListener("input", () => updateInputOutputPrimitive(O_INPUT_MAIN_PROFILE, O_OUTPUT_MAIN_PROFILE));
O_ADD_SECTION_MAIN_BTN.addEventListener("click", addSectionMain);
O_USER_INPUTS_MAIN_DYNAMIC.addEventListener("input", (e) => updateInputOutputMain(e));
O_USER_INPUTS_MAIN_DYNAMIC.addEventListener("click", (e) => dynamicBtnControlMain(e));


// ---  DOM manipulation: image          ---
window.addEventListener("load", imgLoad);


// ---  PDF conversion and download      ---
O_DOWNLOAD_PDF_BTN.addEventListener("click", convertHtmlToPdf);


// ---  DOM manipulation: misc & default ---
O_USER_INPUTS_DESIGN_TOGGLE_COLLAPSE_BTN.addEventListener("click", () => toggleDivCollapseGrid(O_USER_INPUTS_DESGIN_COLLAPSE));
O_USER_INPUTS_DETAILS_TOGGLE_COLLAPSE_BTN.addEventListener("click", () => toggleDivCollapse(O_USER_INPUTS_DETAILS_COLLAPSE));
O_USER_INPUTS_MAIN_TOGGLE_COLLAPSE_BTN.addEventListener("click", () => toggleDivCollapse(O_USER_INPUTS_MAIN_COLLAPSE));

window.onload = clickTheseBtns();