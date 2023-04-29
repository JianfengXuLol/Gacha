const imageSelectionList = [];
const nameplateList = [];
const rightButton = document.getElementById("toRight");
const leftButton = document.getElementById("toLeft");
const characterPortraitImage = document.querySelector(".characterPortrait");
const characterList = [];

//connnecting to json file for character list
fetch("standard_4_star.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		//display image and name
		for (let i = 0; i < NameplateContainer.length; i++) {
			imageSelectionList[i].src = data.characters[i].image;
			nameplateList[i].innerHTML = data.characters[i].name;
			console.log(data.characters.length);
		}
		for (let i = 0; i < data.characters.length; i++) {
			characterList.push(data.characters[i]);
		}
	});

//for images
var imageContainerArray = [
	document.getElementById("imageContainer1"),
	document.getElementById("imageContainer2"),
	document.getElementById("imageContainer3"),
	document.getElementById("imageContainer4"),
	document.getElementById("imageContainer5"),
	document.getElementById("imageContainer6"),
];

//for name plates
var NameplateContainer = [
	document.getElementById("characterName1"),
	document.getElementById("characterName2"),
	document.getElementById("characterName3"),
	document.getElementById("characterName4"),
	document.getElementById("characterName5"),
	document.getElementById("characterName6"),
];

//for character Info
var CharacterInfo = [
	document.getElementById("Aloy"),
	document.getElementById("Amber"),
	document.getElementById("Barbara"),
	document.getElementById("Beidou"),
	document.getElementById("Bennett"),
	document.getElementById("Candace"),
	document.getElementById("Chongyun"),
	document.getElementById("Collei"),
	document.getElementById("Diona"),
	document.getElementById("Faruzan"),
	document.getElementById("Fischl"),
	document.getElementById("Gorou"),
	document.getElementById("Heizou"),
	document.getElementById("Kaeya"),
	document.getElementById("KujouSara"),
	document.getElementById("Shinobu"),
	document.getElementById("Layla"),
	document.getElementById("Lisa"),
	document.getElementById("Ningguang"),
	document.getElementById("Noelle"),
	document.getElementById("Razor"),
	document.getElementById("Rosaria"),
	document.getElementById("Sayu"),
	document.getElementById("Thoma"),
	document.getElementById("Xiangling"),
	document.getElementById("Xingqiu"),
	document.getElementById("Xinyan"),
	document.getElementById("Yanfei"),
	document.getElementById("Yaoyao"),
	document.getElementById("YunJin"),
];

let startPositon = 0; //counting the startPositon

//storing html tags
for (let i = 0; i < NameplateContainer.length; i++) {
	imageSelectionList.push(imageContainerArray[i]);
	nameplateList.push(NameplateContainer[i]);
}

//selectedEffects
function selectByClick(i) {
	nameplateList[i].style.backgroundColor = "white";
	nameplateList[i].style.color = "black";
	imageSelectionList[i].style.backgroundColor = "black";
}

function isSelected(order) {
	nameplateList[order].style.backgroundColor = "white";
	nameplateList[order].style.color = "black";
	imageSelectionList[order].style.backgroundColor = "black";
}

/*default selection********************************************************/
isSelected(0);

fetch("standard_4_star.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		characterPortraitImage.src = data.characters[0].portraitImage;
	});
portraitAnimation();
/****************************************************************************/

function unSelected(order) {
	nameplateList[order].style.backgroundColor = "";
	nameplateList[order].style.color = "";
	imageSelectionList[order].style.backgroundColor = "";
}

/*Add Events Here*************************************************************************/
rightButton.addEventListener("click", moveRight);
leftButton.addEventListener("click", moveLeft);
/*****************************************************************************************/

//click ramdom image to select***********************************************************/
nameplateList[0].addEventListener("click", function () {
	//clear everthing else except the image got clicked

	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	selectByClick(0);
	startPositon = 0;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});

imageSelectionList[0].addEventListener("click", function () {
	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	selectByClick(0);
	startPositon = 0;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});
nameplateList[1].addEventListener("click", function () {
	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});

	selectByClick(1);
	startPositon = 1;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});
imageSelectionList[1].addEventListener("click", function () {
	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	selectByClick(1);
	startPositon = 1;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});
nameplateList[2].addEventListener("click", function () {
	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});

	selectByClick(2);
	startPositon = 2;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});
imageSelectionList[2].addEventListener("click", function () {
	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	selectByClick(2);
	startPositon = 2;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});
nameplateList[3].addEventListener("click", function () {
	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	selectByClick(3);
	startPositon = 3;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});
imageSelectionList[3].addEventListener("click", function () {
	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	selectByClick(3);
	startPositon = 3;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});
nameplateList[4].addEventListener("click", function () {
	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	selectByClick(4);
	startPositon = 4;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});
imageSelectionList[4].addEventListener("click", function () {
	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	selectByClick(4);
	startPositon = 4;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});
nameplateList[5].addEventListener("click", function () {
	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	selectByClick(5);
	startPositon = 5;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});
imageSelectionList[5].addEventListener("click", function () {
	nameplateList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	imageSelectionList.forEach((i) => {
		i.style.backgroundColor = "";
		i.style.color = "";
	});
	selectByClick(5);
	startPositon = 5;

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
			portraitAnimation();
		}
	}
});
/*****************************************************************************************/
// let offset = characterList.length - imageSelectionList.length;

function moveRight() {
	if (startPositon == 5) {
		let prev1 = characterList.shift();
		characterList.push(prev1);
		//update Character info page
		let prev2 = CharacterInfo.shift();
		CharacterInfo.push(prev2);
		startPositon--;
		isSelected(startPositon);
		unSelected(startPositon + 1);
	}
	startPositon++;
	isSelected(startPositon);
	unSelected(startPositon - 1);

	if (startPositon > 2) {
		let prev = characterList.shift();
		characterList.push(prev);
		//update Character info page
		let prev1 = CharacterInfo.shift();
		CharacterInfo.push(prev1);

		console.log("shift() triggered!");
		startPositon--;
		isSelected(startPositon);
		unSelected(startPositon + 1);
	}
	portraitAnimation();
	for (let i = 0; i < NameplateContainer.length; i++) {
		imageSelectionList[i].src = characterList[i].image;
		nameplateList[i].innerHTML = characterList[i].name;
	}

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
		}
	}
}

function moveLeft() {
	if (startPositon <= 2) {
		let last = characterList.pop();
		characterList.unshift(last);
		//update Character info page
		let last1 = CharacterInfo.pop();
		CharacterInfo.unshift(last1);
		console.log("shift() triggered!");
		startPositon++;
		isSelected(startPositon - 1);
		unSelected(startPositon + 1);
	}
	portraitAnimation();
	for (let i = 0; i < NameplateContainer.length; i++) {
		imageSelectionList[i].src = characterList[i].image;
		nameplateList[i].innerHTML = characterList[i].name;
	}
	startPositon--;

	isSelected(startPositon);
	unSelected(startPositon + 1);

	//update Character info page
	for (let i = 0; i < CharacterInfo.length; i++) {
		if (nameplateList[i].style.backgroundColor != "white") {
			CharacterInfo[i].style.display = "none";
		} else {
			CharacterInfo[i].style.display = "block";
			characterPortraitImage.src = characterList[i].portraitImage;
		}
	}
}

//animations for portrait image
function portraitAnimation() {
	let initialPos = 0;
	let portraitId = setInterval(move, 1);
	function move() {
		if (initialPos == 160) {
			clearInterval(portraitId);
		} else {
			initialPos += 5;
			characterPortraitImage.style.right = initialPos + "px";
		}
	}
}
