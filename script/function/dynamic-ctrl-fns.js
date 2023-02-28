function dynamicBtnControlDetails (e) {
    // Buttons listener
	if (e.target.nodeName === "BUTTON" || e.target.nodeName === "B") {
		for (let i = 0; i < iDetailsId + 1; i++) {
			
			if (e.target === document.getElementById(`inputDetailRemoveBtn${i}`)
				|| e.target === document.getElementById(`inputDetailRemoveBtnInner${i}`)) 
			{
				// Delete userInsputs side HTML elements
				const inputDivDelete = document.getElementById(`inputDetailAutoMiniDiv${i}`);
				while (inputDivDelete.firstChild) {
					inputDivDelete.removeChild(inputDivDelete.lastChild);
				};
				if (inputDivDelete.getAttribute("customtype") === "section") {
					iLeftSections-= 1;
				}
				inputDivDelete.remove();

				// Delete userOutputs side HMTL elements
				const outputDivDelete = document.getElementById(`outputDetailAutoMiniDiv${i}`);
				while (outputDivDelete.firstChild) {
					outputDivDelete.removeChild(outputDivDelete.lastChild);
				};
				outputDivDelete.remove();

				updateBtnsDetails();
				break;
			} 

			else if (e.target === document.getElementById(`inputDetailAddSubheadingBtn${i}`)
					|| e.target === document.getElementById(`inputDetailAddSubheadingBtnInner${i}`)) 
			{	
				const inputParent = document.getElementById(`inputDetailAddSubheadingBtn${i}`).parentNode;
				const inputEnd = document.getElementById(`newInputBreakTwo${i}`);
				const outputParent = document.getElementById(`outputDetailAutoMiniDiv${i}`);
				addSubheadingDetail(inputParent, inputEnd, outputParent);
				break;
			}

			else if (e.target === document.getElementById(`inputDetailAddListItemsBtn${i}`)
					|| e.target === document.getElementById(`inputDetailAddListItemsBtnInner${i}`))
			{
				const inputParent = document.getElementById(`inputDetailAddSubheadingBtn${i}`).parentNode;
				const inputEnd = document.getElementById(`newInputBreakTwo${i}`);
				const outputParent = document.getElementById(`outputDetailAutoMiniDiv${i}`);
				addListItemDetail(inputParent, inputEnd, outputParent);
				break;
			}
            
			else if (e.target === document.getElementById(`inputDetailAddFreeTextBtn${i}`)
					|| e.target === document.getElementById(`inputDetailAddFreeTextBtnInner${i}`))
			{	
				const inputParent = document.getElementById(`inputDetailAddSubheadingBtn${i}`).parentNode;
				const inputEnd = document.getElementById(`newInputBreakTwo${i}`);
				const outputParent = document.getElementById(`outputDetailAutoMiniDiv${i}`);
				addFreeText(inputParent, inputEnd, outputParent);
				break;
			}
		};
	};
};

function dynamicBtnControlMain (e) {
    // Buttons listener
	if (e.target.nodeName === "BUTTON" || e.target.nodeName === "B") {
		for (let i = 0; i < iMainId + 1; i++) {
			
			if (e.target === document.getElementById(`inputMainRemoveBtn${i}`)
				|| e.target === document.getElementById(`inputMainRemoveBtnInner${i}`)) 
			{
				// Delete userInsputs side HTML elements
				const inputDivDelete = document.getElementById(`inputMainAutoMiniDiv${i}`);
				while (inputDivDelete.firstChild) {
					inputDivDelete.removeChild(inputDivDelete.lastChild);
				};
				if (inputDivDelete.getAttribute("customtype") === "section") {
					iRightSections-= 1;
				}
				inputDivDelete.remove();

				// Delete userOutputs side HMTL elements
				const outputDivDelete = document.getElementById(`outputMainAutoMiniDiv${i}`);
				while (outputDivDelete.firstChild) {
					outputDivDelete.removeChild(outputDivDelete.lastChild);
				};
				outputDivDelete.remove();

				updateBtnsMain();
				break;
			} 

			else if (e.target === document.getElementById(`inputMainAddEntryBtn${i}`)
					|| e.target === document.getElementById(`inputMainAddEntryBtnInner${i}`)) 
			{	
				const inputParent = document.getElementById(`inputMainAddEntryBtn${i}`).parentNode;
				const inputEnd = document.getElementById(`newInputMainBreakTwo${i}`);
				const outputParent = document.getElementById(`outputMainAutoMiniDiv${i}`);
				addEntryMain(inputParent, inputEnd, outputParent);
				break;
			}
		};
	};
};