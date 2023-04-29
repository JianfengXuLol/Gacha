const imageSelectionList = [];
const nameplateList = [];
const rightButton = document.getElementById("toRight");
const leftButton = document.getElementById("toLeft");
const characterPortraitImage = document.querySelector(".characterPortrait");

//standard banner
var Albedo = {
	name: "Albedo",
	image: "icons/Albedo_Icon.png",
	portraitImage: "Portrait/charPortrait_Albedo.png",
};
var Alhaitham = {
	name: "Alhaitham",
	image: "icons/Alhaitham_Icon.png",
	portraitImage: "Portrait/charPortrait_alhaitham.png",
};
var Ayaka = {
	name: "Ayaka",
	image: "icons/Ayaka_Icon.png",
	portraitImage: "Portrait/charPortrait_Ayaka.png",
};
var Ayato = {
	name: "Ayato",
	image: "icons/Ayato_Icon.png",
	portraitImage: "Portrait/charPortrait_Ayato.png",
};
var Eula = {
	name: "Eula",
	image: "icons/Eula_Icon.png",
	portraitImage: "Portrait/charPortrait_Eula_XL.png",
};

var Ganyu = {
	name: "Ganyu",
	image: "icons/Ganyu_Icon.png",
	portraitImage: "Portrait/charPortrait_Ganyu_XL.png",
};

var HuTao = {
	name: "HuTao",
	image: "icons/HuTao_Icon.png",
	portraitImage: "Portrait/charPortrait_HuTao.png",
};

var Itto = {
	name: "Itto",
	image: "icons/Itto_Icon.png",
	portraitImage: "Portrait/charPortrait_Itto_XL.png",
};

var Kazuha = {
	name: "Kazuha",
	image: "icons/Kazuha_Icon.png",
	portraitImage: "Portrait/charPortrait_Kazuha.png",
};

var Klee = {
	name: "Klee",
	image: "icons/Klee_Icon.png",
	portraitImage: "Portrait/charPortrait_Klee_XL.png",
};

var Kokomi = {
	name: "Kokomi",
	image: "icons/Kokomi_Icon.png",
	portraitImage: "Portrait/charPortrait_Kokomi_XL.png",
};

var Nahida = {
	name: "Nahida",
	image: "icons/Nahida_Icon.png",
	portraitImage: "Portrait/charPortrait_nahida.png",
};

var Nilou = {
	name: "Nilou",
	image: "icons/Nilou_Icon.png",
	portraitImage: "Portrait/charPortrait_nilou.png",
};

var Raiden = {
	name: "Raiden",
	image: "icons/Raiden_Icon.png",
	portraitImage: "Portrait/charPortrait_RaidenShogun.png",
};

var Shenhe = {
	name: "Shenhe",
	image: "icons/Shenhe_Icon.png",
	portraitImage: "Portrait/charPortrait_shenhe.png",
};

var Tartaglia = {
	name: "Tartaglia",
	image: "icons/Tartaglia_Icon.png",
	portraitImage: "Portrait/charPortrait_Tartaglia_XL.png",
};

var Wanderer = {
	name: "Wanderer",
	image: "icons/Wanderer_Icon.png",
	portraitImage: "Portrait/charPortrait_wanderer.png",
};

var Xiao = {
	name: "Xiao",
	image: "icons/Xiao_Icon.png",
	portraitImage: "Portrait/charPortrait_Xiao_XL.png",
};

var YaeMiko = {
	name: "YaeMiko",
	image: "icons/YaeMiko_Icon.png",
	portraitImage: "Portrait/charPortrait_YaeMiko.png",
};

var Yelan = {
	name: "Yelan",
	image: "icons/Yelan_Icon.png",
	portraitImage: "Portrait/charPortrait_Yelan_XL.png",
};

var Yoimiya = {
	name: "Yoimiya",
	image: "icons/Yoimiya_Icon.png",
	portraitImage: "Portrait/charPortrait_Yoimiya.png",
};

var Zhongli = {
	name: "Zhongli",
	image: "icons/Zhongli_Icon.png",
	portraitImage: "Portrait/charPortrait_Zhongli_XL.png",
};

var Cyno = {
	name: "Cyno",
	image: "icons/Cyno_Icon.png",
	portraitImage: "Portrait/charPortrait_cyno.png",
};

const characterList = [
	Albedo,
	Alhaitham,
	Ayaka,
	Ayato,
	Eula,
	Ganyu,
	HuTao,
	Itto,
	Kazuha,
	Klee,
	Kokomi,
	Nahida,
	Nilou,
	Raiden,
	Shenhe,
	Tartaglia,
	Wanderer,
	Xiao,
	YaeMiko,
	Yelan,
	Yoimiya,
	Zhongli,
	Cyno,
];

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
	document.getElementById("Albedo"),
	document.getElementById("Alhaitham"),
	document.getElementById("Ayaka"),
	document.getElementById("Ayato"),
	document.getElementById("Eula"),
	document.getElementById("Ganyu"),
	document.getElementById("HuTao"),
	document.getElementById("Itto"),
	document.getElementById("Kazuha"),
	document.getElementById("Klee"),
	document.getElementById("Kokomi"),
	document.getElementById("Nahida"),
	document.getElementById("Nilou"),
	document.getElementById("Raiden"),
	document.getElementById("Shenhe"),
	document.getElementById("Tartaglia"),
	document.getElementById("Wanderer"),
	document.getElementById("Xiao"),
	document.getElementById("YaeMiko"),
	document.getElementById("Yelan"),
	document.getElementById("Yoimiya"),
	document.getElementById("Zhongli"),
	document.getElementById("Cyno"),
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

/*default selection********************************************************/
isSelected(0);
characterPortraitImage.src = characterList[0].portraitImage;
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
