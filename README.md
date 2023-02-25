# myCV :: README

An interactive serverless web app that allows users to create a simple, yet stylish and effective CV. Includes PDF generation and export using the jsPDF library. myCV was built to primarily to practice vanilla JavaScript but with utility in mind. Moreover, since it is a practice project, no usage has been made of additional libraries such as jquery, bootstrap, HTML templates, etc., such that all the structure, styling and scripting has been written largely from scratch (with the exception jsPDF and the icons). 

## How to use (user agent)

To begin using myCV, simply start putting in your name and other details into the various boxes in the workspace to the right. What you type in will automaically appear in your template document on the left. Add/remove sections as desired. Each new section will open a subpanel on the right side that allows for further subheadings, list items, and other supporting elements. Each panel on the right can be collapsed to allow you to to work on the relevant section of the document without having to scroll. 

Upload a picture of yourself and use the roundness toggler in the design panel to apply rounded corners to your image or to make it wholly round. Modify the styling of your document to fit your personality by changing the left and right panel colors in the design panel. It is also possible to set the left panel to the color of the right (main) panel if a single color is preferred. Lastly, you can alter the document font.

When you're finished, simply click the Download PDF button at the bottom to retreive your CV!

NOTE! myCV is designed for and currently supports single page CVs. Adding content beyond the single page document template will generate additional pages that do not inherit the selected backgrounds. Future versions may include some sort of warning system for the user on this. 

## Technical information

The only necessary element on the CV template is one's name, but apart from this the user agent is free to customize their CV on myCV as they wish. The myCV template is structured along two panels, one on each side. Dynamic buttons allow the user agent to add up to five sections on each panel with an unlimited number of subsections, list items, free text, enties or other supporting text. The interactivity is written in JavaScript and uses the browser to run the various functions. In effect, the whole code is run on the frontend. 

## Libaries used

jsPDF has been used for the .pdf generation and export. The jsPDF object parameters have been customized to fit exactly the HTML on the page, which should be an approriately sized. Additional fonts have been imported into jsPDF to support a wider selection. 

Font Awesome for the icons.
