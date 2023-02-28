# CHANGELOG

## Updates
1.1
* Major code revision: code refactored with the use of classes and seperate function files to improve readability. With the new UX change, the use of arrays to keep track of subsection elements have been dropped in favor for a straightforward single number system to keep track of unique IDs. This number will only go one way. The downside of this is theoretical performance/design redundancy, as even though elements may be deleted, the ID number will not decrease, meaning there may be some unnecessary loops. In practice, this is insignificant, as the looping will only amount to a couple of dozen max which is no problem for modern hardware to handle. 
* UX revision: removed "general remove" btn and added an individualized "remove btn" system to improve user experience. Logic changed accordingly. To order to keep track of existing individualized items as older ones are deleted would mean a new, possibly quite intricate, system and so the easier solution was simply to drop keeping the display of numbered elements and therefore arrays altogether. 
* Added colors to buttons.

1.0
* Hosting is working as expected with the new DNS.
* Responsive improvements: Functionality warning for small window devices. myCV will not currently support small windows (max 550px), but this is displayed on small screens. Amendmends made for screens with width between 1100-551px.
* Header built.
* Footer built.
* Sections Preview and HowTo added. 
* Added bold styles to Main section and entry on the output document.
* Added bold versions of the custom fonts to the jsPDF function.
* Other minor changes.

0.9.1 Alpha
* Altered the font-weight on document panels. 

0.9 Alpha
Updates:
* Basic functionality is in place. Manual testing of the interactivity shows everything to be working as expected.

## Future tasks
Possible ideas for the future:
* Add animation for images. 
* Style buttons, radios, etc. further.
* Add a button to select font size on the template document from certain ranges. 
* Add a warning system, or a barrier, for when the user agent exceeds the document template space. 
* Add information bubbles.

## Known bugs
* They are sure to come...