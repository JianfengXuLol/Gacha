var screenSize;
var collapseMenu = document.querySelector(".navbar-collapse");
var bodyElement = document.body;
var MainContent = document.querySelector(".MainContent");
var imageContainer = document.querySelector(".imageContainer");
var scroll = document.querySelector(".scroll");
var portalLinks = document.querySelector(".portalLinks");

function responsiveDisplay() {
	// Get width and height of the window excluding scrollbars
	screenSize = document.documentElement.clientWidth;
	bodyElement.style.maxWidth = screenSize.toString() + "px";

	//The following part is for testing purposes
	document.querySelector(".windowSize").innerHTML =
		"Window Size: " + screenSize;
	console.log("body width: " + bodyElement.style.maxWidth);
	console.log("Screen width: " + screenSize);

	/*large window size****************************************************************************/
	if (screenSize >= 1600) {
		imageContainer.style.marginLeft = "5rem";
	} else {
		imageContainer.style.marginLeft = "0rem";
	}
	/*large window size****************************************************************************/
	if (screenSize <= 1382) {
		MainContent.style.width = "100%";
		MainContent.style.marginLeft = "0rem";
		imageContainer.style.marginLeft = "23rem";
	} else {
		MainContent.style.width = "85%";
		MainContent.style.marginLeft = "10rem";
		imageContainer.style.marginLeft = "0rem";
	}

	/*medium window size****************************************************************************/
	if (screenSize <= 980) {
		imageContainer.style.marginLeft = "0rem";
	}
	/*small window size****************************************************************************/
	if (screenSize <= 750) {
		collapseMenu.style.marginLeft = "4.5rem";
	} else {
		collapseMenu.style.marginLeft = "0rem";
	}

	if (screenSize <= 615) {
		scroll.style.width = "400px";
		portalLinks.style.fontSize = "0.7rem";
		portalLinks.style.left = "3rem";
		portalLinks.style.top = "8rem";
	} else {
		scroll.style.width = "570.16px";
		portalLinks.style.fontSize = "1rem";
		portalLinks.style.left = "80px";
		portalLinks.style.top = "200px";
	}
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", responsiveDisplay);
responsiveDisplay();
