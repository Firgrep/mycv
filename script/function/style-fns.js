// -----------------------------------------
// ---  DOM manipulation: style          ---
// -----------------------------------------

function changeFont(font) {
	const element = document.querySelector(".userOutputs");
	element.style.fontFamily = font.value;
};

function radiusChange() {
    const img = document.getElementById("myImg");
	img.style.borderRadius = `${O_IMG_BORDER.value}%`;
};

function detailsPanelColorToggle(i) {
	switch (i) {
		case 0:
			O_GRID_COL_ONE.style.color = "black";
			O_OUTPUT_DETAIL_LINE.style.backgroundColor = "black";
			break;
		case 1:
			O_GRID_COL_ONE.style.color = "white";
			O_OUTPUT_DETAIL_LINE.style.backgroundColor = "white";
			break;
	}
};

function changeMainBackground(e) {
    if (e.target && e.target.matches("input[type='radio']")) {
        if (e.target.value === "backgroundMainOne") {
			O_GRID_COL_TWO.style.backgroundColor = "white";
			if (O_BACKGROUND_MAIN_CHOICE_END.checked) {
				O_GRID_COL_ONE.style.backgroundColor = "white";
			}
		}
		else if (e.target.value === "backgroundMainTwo") {
			O_GRID_COL_TWO.style.backgroundColor = "beige";
			if (O_BACKGROUND_MAIN_CHOICE_END.checked) {
				O_GRID_COL_ONE.style.backgroundColor = "beige";
			}
		}
		else if (e.target.value === "backgroundMainThree") {
			O_GRID_COL_TWO.style.backgroundColor = "#fbfbf8";
			if (O_BACKGROUND_MAIN_CHOICE_END.checked) {
				O_GRID_COL_ONE.style.backgroundColor = "#fbfbf8";
			}
		}
		else if (e.target.value === "gainsboro") {
			O_GRID_COL_TWO.style.backgroundColor = e.target.value;
			if (O_BACKGROUND_MAIN_CHOICE_END.checked) {
				O_GRID_COL_ONE.style.backgroundColor = e.target.value;
			}
		}
		else if (e.target.value === "azure") {
			O_GRID_COL_TWO.style.backgroundColor = e.target.value;
			if (O_BACKGROUND_MAIN_CHOICE_END.checked) {
				O_GRID_COL_ONE.style.backgroundColor = e.target.value;
			}
		}
    }
};

function changeDetailsBackground(e) {
    if (e.target && e.target.matches("input[type='radio']")) {
        if (e.target.value === "backgroundDetailOne") {
			O_GRID_COL_ONE.style.backgroundColor = "navy";
			detailsPanelColorToggle(1);
		}
		else if (e.target.value === "backgroundDetailTwo") {
			O_GRID_COL_ONE.style.backgroundColor = "crimson";
			detailsPanelColorToggle(1);
		}
		else if (e.target.value === "backgroundDetailThree") {
			O_GRID_COL_ONE.style.backgroundColor = "#007E81";
			detailsPanelColorToggle(1);
		}
		else if (e.target.value === "steelblue") {
			O_GRID_COL_ONE.style.backgroundColor = e.target.value;
			detailsPanelColorToggle(1);
		}
		else if (e.target.value === "goldenrod") {
			O_GRID_COL_ONE.style.backgroundColor = e.target.value;
			detailsPanelColorToggle(1);
		}
		else if (e.target.value === "springgreen") {
			O_GRID_COL_ONE.style.backgroundColor = e.target.value;
			detailsPanelColorToggle(0);
		}
		else if (e.target.value === "backgroundDetailEnd") {
			const elem = window.getComputedStyle(O_GRID_COL_TWO);
			O_GRID_COL_ONE.style.backgroundColor = elem.getPropertyValue("background-color");
			detailsPanelColorToggle(0);
		}
    }
};
