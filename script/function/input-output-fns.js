function updateInputOutputPrimitive (input, output) {
	if (input.value === "") {
		output.innerHTML = "";
		output.style.display = "none";
	} else {
		output.innerHTML = input.value;
		output.style.display = "block";
	}
};

function updateInputOutputDetails (e) {
    if (e.target && e.target.nodeName == "INPUT" || e.target && e.target.nodeName == "TEXTAREA") { 
		for (let i = 0; i < idNumber; i++) {
			if (document.getElementById(`inputDetailSection${i}`)) {
				if (document.getElementById(`inputDetailSection${i}`).value === "") {
				document.getElementById(`outputDetailSection${i}`).innerHTML = `${defaultSectionHeading}`;
				} else {
				document.getElementById(`outputDetailSection${i}`).innerHTML 
				= document.getElementById(`inputDetailSection${i}`).value;
				}
			} 
			if (document.getElementById(`inputDetailSubSection${i}`)) {
				if (document.getElementById(`inputDetailSubSection${i}`).value === "") {
					document.getElementById(`outputDetailSubSection${i}`).innerHTML = `${defaultSectionSubHeading}`;
				} else {
					document.getElementById(`outputDetailSubSection${i}`).innerHTML 
					= document.getElementById(`inputDetailSubSection${i}`).value;
				}
			}
			if (document.getElementById(`inputDetailListItemLeft${i}`)) {
				if (document.getElementById(`inputDetailListItemLeft${i}`).value === "") {
				document.getElementById(`outputDetailListItemLeft${i}`).innerHTML = `${defaultListItem}`;
				} else {
					document.getElementById(`outputDetailListItemLeft${i}`).innerHTML 
					= document.getElementById(`inputDetailListItemLeft${i}`).value;
				}
				if (document.getElementById(`inputDetailListItemRight${i}`).value === "") {
					document.getElementById(`outputDetailListItemRight${i}`).style.display = "none";
				} else {
					document.getElementById(`outputDetailListItemRight${i}`).style.display = "inline";
					document.getElementById(`outputDetailListItemRight${i}`).innerHTML 
					= document.getElementById(`inputDetailListItemRight${i}`).value;
				}
			}
			if (document.getElementById(`inputDetailFreeText${i}`)) {
				if (document.getElementById(`inputDetailFreeText${i}`).value === "") {
					document.getElementById(`outputDetailFreeText${i}`).innerHTML = `${defaultFreeText}`;
				} else {
					document.getElementById(`outputDetailFreeText${i}`).innerHTML 
						= document.getElementById(`inputDetailFreeText${i}`).value;
				}
			}
		};
	};
}

function updateInputOutputMain (e) {
    if (e.target && e.target.nodeName == "INPUT" || e.target && e.target.nodeName == "TEXTAREA") { 
		for (let i = 0; i < iMainId; i++) {
			if (document.getElementById(`inputMainSection${i}`)) {
				if (document.getElementById(`inputMainSection${i}`).value === "") {
				document.getElementById(`outputMainSection${i}`).innerHTML = `${S_DEFAULT_SECTION_HEADING}`;
				} else {
				document.getElementById(`outputMainSection${i}`).innerHTML 
				= document.getElementById(`inputMainSection${i}`).value;
				}
			} 
			if (document.getElementById(`inputMainEntry${i}`)) {
				if (document.getElementById(`inputMainEntry${i}`).value === "") {
					document.getElementById(`outputMainEntry${i}`).innerHTML = `${S_DEFAULT_ENTRY}`;
				} else {
					document.getElementById(`outputMainEntry${i}`).innerHTML 
					= document.getElementById(`inputMainEntry${i}`).value;
				}
				if (document.getElementById(`inputMainEntryDesc${i}`).value === "") {
					document.getElementById(`outputMainEntryDesc${i}`).innerHTML = "";
					document.getElementById(`outputMainEntryDesc${i}`).style.display = "none";
				} else {
					document.getElementById(`outputMainEntryDesc${i}`).innerHTML 
					= document.getElementById(`inputMainEntryDesc${i}`).value;
					document.getElementById(`outputMainEntryDesc${i}`).style.display = "block";
				}
			}
		};
	};
}