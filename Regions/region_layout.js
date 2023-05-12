var screenSize;
var collapseMenu = document.querySelector(".navbar-collapse");
var bodyElement = document.body;
var MainContent = document.querySelector(".MainContent");
var card = document.querySelector(".card");
var imgDescription = document.querySelector(".imgDescription");
var article = document.querySelectorAll(".article");
var articleImage = document.querySelectorAll(".articleImage");

function responsiveDisplay() {
	// Get width and height of the window excluding scrollbars
	screenSize = document.documentElement.clientWidth;
	bodyElement.style.maxWidth = screenSize.toString() + "px";
	console.log("body width: " + bodyElement.style.maxWidth);
	console.log("Screen width: " + screenSize);

	/*large window size****************************************************************************/
	if (screenSize >= 1750) {
		imgDescription.style.marginLeft = "5rem";
	}
	/*large window size****************************************************************************/
	if (screenSize <= 1390) {
		MainContent.style.width = "100%";
		MainContent.style.marginLeft = "0rem";
		imgDescription.style.marginLeft = "0rem";
	} else {
		MainContent.style.width = "85%";
		MainContent.style.marginLeft = "10rem";
	}

	/*medium window size****************************************************************************/
	if (screenSize <= 750) {
		collapseMenu.style.marginLeft = "4.5rem";
	} else {
		collapseMenu.style.marginLeft = "0rem";
	}
	/*small window size****************************************************************************/
	if (screenSize <= 576) {
		card.style.width = "380px";
		card.style.marginBottom = "2rem";
		card.style.marginRight = "1rem";
		imgDescription.style.marginTop = "2rem";
		imgDescription.style.width = "400px";

		article.forEach(function (li) {
			li.style.marginTop = "2rem";
		});

		articleImage.forEach(function (li) {
			li.style.height = "23vh";
		});
	} else {
		card.style.width = "250px";
		card.style.marginRight = "0rem";
		article.forEach(function (li) {
			li.style.marginTop = "0rem";
			li.style.height = "20vh";
		});
	}
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", responsiveDisplay);
responsiveDisplay();
