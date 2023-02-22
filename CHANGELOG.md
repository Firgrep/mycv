# CHANGELOG

## 0.9.1 Alpha
Updates:
* Altered the font-weight on document panels. 

## 0.9 Alpha
Updates:
* Basic functionality is in place. Manual testing of the interactivity shows everything to be working as expected.

## Future tasks
Immediate priority:
* Host myCV. The plan is to use github pages to host this program, but need to resolve DNS issues with the main repo first. (The initial hosting through github pages prior to DNS change worked fine.)
* Functionality for small window devices. myCV will not support small windows, but this should still be displayed somehow.
* Add header and footer for the page, perhaps a landing page along with additional information.
* Create myCV examples to use for the site and to offer the user agent some ideas and possible inspiration. 

Possible ideas for the future:
* Style buttons, radios, etc. further.
* Add a button to select font size on the template document from certain ranges. 
* Add a warning system, or a barrier, for when the user agent exceeds the document template space. 
* Add information bubbles.
* Refactor code. Right now the bulk of the JS code is in a single file. It could be split into seperate files for easier overview, but there are tradeoffs with this as well. Alternatively, some of the main HTML element functions could be streamlined into one, but this might require a larger overhaul of the way the program is structured and keeps track of the changes. 