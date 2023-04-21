const imageSelectionList = [];
const nameplateList = [];
const rightButton = document.getElementById("toRight");
const leftButton = document.getElementById("toLeft");
const characterIcon1 = document.querySelector("#Icon1");

//standard banner
var Diluc = {
	name: "Diluc",
	image: "Diluc_Icon.webp",
};
var Jean = {
	name: "Jean",
	image: "Jean_Icon.webp",
};
var Keqing = {
	name: "Keqing",
	image: "Keqing_Icon.webp",
};
var Mona = {
	name: "Mona",
	image: "Mona_Icon.webp",
};
var Qiqi = {
	name: "Qiqi",
	image: "Qiqi_Icon.webp",
};

var Dehya = {
	name: "Dehya",
	image: "Dehya_Icon.webp",
};

var Tighnari = {
	name: "Tighnari",
	image: "Tighnari_Icon.webp",
};

const characterList = [Diluc, Jean, Keqing, Mona, Qiqi, Dehya, Tighnari];

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

let startPositon = 0; //counting the startPositon

//storing html tags
for (let i = 0; i < NameplateContainer.length; i++) {
	imageSelectionList.push(imageContainerArray[i]);
	nameplateList.push(NameplateContainer[i]);
}
//display image and name
for (let i = 0; i < NameplateContainer.length; i++) {
	imageSelectionList[i].src = characterList[i].image;
	nameplateList[i].innerHTML = characterList[i].name;
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
isSelected(0); //default selection

function unSelected(order) {
	nameplateList[order].style.backgroundColor = "";
	nameplateList[order].style.color = "";
	imageSelectionList[order].style.backgroundColor = "";
}

rightButton.addEventListener("click", moveRight);
leftButton.addEventListener("click", moveLeft);

//click ramdom image to select***********************************************************/
nameplateList[0].addEventListener("click", function () {
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
});
nameplateList[2].addEventListener("click", function () {
	selectByClick(2);
	startPositon = 2;
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
});
/*****************************************************************************************/

function moveRight() {
	if (startPositon == 5) {
		let prev1 = characterList.shift();
		characterList.push(prev1);
		startPositon--;
		isSelected(startPositon);
		unSelected(startPositon + 1);
	}
	startPositon++;
	isSelected(startPositon);
	unSelected(startPositon - 1);
	console.log("index: " + startPositon);
	if (startPositon > 2) {
		let offset = characterList.length - imageSelectionList.length;
		let prev = characterList.shift();
		characterList.push(prev);
		console.log("shift() triggered!");
		startPositon--;
		isSelected(startPositon);
		unSelected(startPositon + 1);
	}

	for (let i = 0; i < NameplateContainer.length; i++) {
		imageSelectionList[i].src = characterList[i].image;
		nameplateList[i].innerHTML = characterList[i].name;
	}
}

function moveLeft() {
	if (startPositon <= 2) {
		let offset = characterList.length - imageSelectionList.length;
		let last = characterList.pop();
		characterList.unshift(last);
		console.log("shift() triggered!");
		startPositon++;
		isSelected(startPositon - 1);
		unSelected(startPositon + 1);
	}

	for (let i = 0; i < NameplateContainer.length; i++) {
		imageSelectionList[i].src = characterList[i].image;
		nameplateList[i].innerHTML = characterList[i].name;
	}
	startPositon--;

	isSelected(startPositon);
	unSelected(startPositon + 1);
}
