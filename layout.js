var bodyElement = document.body;
var collapseMenu = document.querySelector(".navbar-collapse");
var characterlist = document.querySelector(".characterList");
var characterPortrait = document.querySelector(".characterPortrait");
var toRightButton = document.querySelector("#toRight");
var MainContent = document.querySelector(".MainContent");
var characterlistItem = document.querySelectorAll(".characterList li");
var character = document.querySelectorAll(".Character");
var toLeft = document.querySelector(".bi-arrow-left-square");
var toRight = document.querySelector(".bi-arrow-right-square");
var screenSize;

/*icon selection list*/
var cardList = [
	document.getElementById("Icon1"),
	document.getElementById("Icon2"),
	document.getElementById("Icon3"),
	document.getElementById("Icon4"),
	document.getElementById("Icon5"),
	document.getElementById("Icon6"),
];

/*navbar*/
function displayWindowSize() {
	// Get width and height of the window excluding scrollbars
	screenSize = document.documentElement.clientWidth;
	bodyElement.style.maxWidth = screenSize.toString() + "px";
	console.log("body width: " + bodyElement.style.maxWidth);
	console.log("Screen width: " + screenSize);
	/*medium window size****************************************************************************/
	if (screenSize <= 750) {
		collapseMenu.style.marginLeft = "4.5rem";
		characterlist.style.marginLeft = "-0.5rem";
		toLeft.style.fontSize = "2rem";
		toRight.style.fontSize = "2rem";

		characterlistItem.forEach(function (li) {
			li.style.marginRight = "0rem";
		});

		character.forEach(function (li) {
			li.style.minWidth = "250px";
		});

		for (let i = 3; i < cardList.length; i++) {
			cardList[i].style.display = "none";
			// cardList[i].style.display = "block";
		}

		characterPortrait.style.marginLeft = "-8rem";
		characterPortrait.style.width = "25rem";
		characterPortrait.style.height = "18rem";
		toRightButton.style.marginLeft = "-1rem";
		MainContent.style.marginLeft = "0rem";
		// MainContent.style.width = "100%";
	} else {
		collapseMenu.style.marginLeft = "0rem";
		characterlist.style.marginLeft = "15rem";
		toLeft.style.fontSize = "3rem";
		toRight.style.fontSize = "3rem";

		characterlistItem.forEach(function (li) {
			li.style.marginRight = "1rem";
		});
		character.forEach(function (li) {
			li.style.minWidth = "450px";
		});
		for (let i = 0; i < cardList.length; i++) {
			cardList[i].style.display = "block";
		}

		characterPortrait.style.marginLeft = "-8rem";
		characterPortrait.style.width = "50rem";
		characterPortrait.style.height = "35rem";
		toRightButton.style.marginLeft = "0rem";
		MainContent.style.marginLeft = "10rem";
		MainContent.style.width = "80%";
	}

	/*large window size****************************************************************************/
	if (screenSize <= 1390) {
		MainContent.style.width = "100%";
		MainContent.style.marginLeft = "0rem";
	} else {
		MainContent.style.width = "80%";
		MainContent.style.marginLeft = "10rem";
	}

	/*small window size****************************************************************************/
	// if (screenSize <= 440) {
	// 	MainContent.style.width = "100%";
	// 	MainContent.style.marginLeft = "0rem";
	// } else {
	// 	MainContent.style.width = "80%";
	// 	MainContent.style.marginLeft = "10rem";
	// }

	/*change the size of the background image*/
	// Get the .MainContent element
	var mainContentElement = document.querySelector(".MainContent");

	// if (screenSize <= 750) {
	// 	mainContentElement.style.setProperty("--bg-image-size", "340px 466px");
	// } else {
	// 	mainContentElement.style.setProperty("--bg-image-size", "cover");
	// }

	// Get the computed styles for the ::after pseudo-element
	var styles = window.getComputedStyle(mainContentElement, "::after");

	// Get the updated value of the background-size property
	var backgroundSizeValue = styles.getPropertyValue("--bg-image-size");
	console.log(backgroundSizeValue); // Output: "50%"
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);
displayWindowSize();
