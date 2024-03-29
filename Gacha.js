// Define an object(function) to control the probability of each card.

function probability() {
	/* We need a total weight.(ex: weight#1 + weight#2 = totalWeight)*/
	this.totalWeight = 0;

	/* Create a array to store each card with a specified weight(odds)*/
	var cardArray = [];

	/*Define a function to add cards into the pool (the array list), and count the new weight to the totalWeight.*/
	this.addCard = function (color, weight, image) {
		cardArray.push({ color, weight, image });
		this.totalWeight += weight;
	};

	//define a function to set the weight
	this.setWeight = function (color, weight) {
		for (let i = 0; i < cardArray.length; i++) {
			if (cardArray[i].color == color) {
				if (cardArray[i].weight > weight) {
					this.totalWeight -= cardArray[i].weight - weight;

					cardArray[i].weight = weight;
				} else if (cardArray[i].weight < weight) {
					this.totalWeight += weight - cardArray[i].weight;
					cardArray[i].weight = weight;
				}
			}
		}
	};

	/* Define a function to show the wishing result (display cards). */
	this.pickCardColor = function () {
		/*we need a random number to represent the range (like: 0~9, 0~99, …) using totalWeight*/

		var weight_range = Math.floor(Math.random() * this.totalWeight);

		/* scan through the array to see if the random number is within the specified weight range*/
		for (let i = 0; i < cardArray.length; i++) {
			if (weight_range <= cardArray[i].weight) {
				return cardArray[i].color; //display the card.
			}
			/*subtract the new range (move to the weight range of next card in the list), for example: 109-100=9, which means if the random#(0-109) equals 101 (out of the range:0-99), then we move the weight range from (0-99) to weight range (0-9).*/
			weight_range -= cardArray[i].weight;
		}
	};
} //End of function probability()

/* add new cards with specified weight(probability)*/
var gold_rate = 1; /* 1/169=0.0059=0.59% */
var purple_rate = 8.5; /* 8.5/168=0.05059=5.1% */
var controller = new probability();
controller.addCard("gold", gold_rate);
controller.addCard("purple", purple_rate);
controller.addCard("blue", 159.5);

/*card containers, pulling 10 cards at the maximum for each pull*/
var cardContainer = [
	document.getElementById("text1"),
	document.getElementById("text2"),
	document.getElementById("text3"),
	document.getElementById("text4"),
	document.getElementById("text5"),
	document.getElementById("text6"),
	document.getElementById("text7"),
	document.getElementById("text8"),
	document.getElementById("text9"),
	document.getElementById("text10"),
];

var imageContainer = [
	document.getElementById("image1"),
	document.getElementById("image2"),
	document.getElementById("image3"),
	document.getElementById("image4"),
	document.getElementById("image5"),
	document.getElementById("image6"),
	document.getElementById("image7"),
	document.getElementById("image8"),
	document.getElementById("image9"),
	document.getElementById("image10"),
];

var _50_50_pitty_5_star = 0;
var _50_50_pitty_4_star = 0;
var boder_size = 4;
var wishCount = 0;
var fourStar_pity_count = 0;
var fiveStar_pity_count = 0;

function reset() {
	wishCount = 0;
	limitedEdition_fivestarChar.contellations = -1;
	fiveStar_pity_count = 0;
	bonusUp = 0;
	for (let i = 0; i < cardContainer.length; i++) {
		imageContainer[i].style.display = "none";
	}
	document.getElementById("debug").innerHTML =
		"Total wish count：" +
		wishCount +
		" | " +
		"Constellations: " +
		limitedEdition_fivestarChar.contellations;
	document.getElementById("debug1").innerHTML =
		"Pitty level: " +
		fiveStar_pity_count +
		" | increase rate：" +
		bonusUp +
		"%";
}

function one_pull() {
	wishCount++;
	/*when switch back from 10 pull to 1 pull, reset the number of card container that displays to 1*/

	for (let i = 0; i < cardContainer.length; i++) {
		imageContainer[i].style.display = "none";
	}
	let color = controller.pickCardColor();

	cardContainer[0].innerHTML = color;
	imageContainer[0].src = color;
	fourStar_pity(0);
	fiveStar_pity(0);

	imageContainer[0].style.display = "inline";

	if (cardContainer[0].innerHTML == "gold") {
		let num = flip_50_50_5Star[flip()];
		imageContainer[0].style.border = boder_size + "px solid gold";

		if (num == "standard fivestarChar") {
			if (_50_50_pitty_5_star == 0) {
				let radomNum = radomFivestarChar();
				imageContainer[0].src = standard_fivestarChar[radomNum].image;
				document.getElementById("character").value =
					standard_fivestarChar[radomNum].name;
				_50_50_pitty_5_star++;
			} else {
				limitedEdition_fivestarChar.contellations++;
				/*if _50_50_pitty_5_star !=0, which means when there is alread one standard 5 star character be drawn, we keep rolling until num != standard 5 star character*/
				imageContainer[0].src = limitedEdition_fivestarChar.image;
				_50_50_pitty_5_star = 0;
			}
		} else {
			limitedEdition_fivestarChar.contellations++;
			imageContainer[0].src = num.image;
			_50_50_pitty_5_star = 0;
		}
	} else if (cardContainer[0].innerHTML == "blue") {
		imageContainer[0].style.border = boder_size + "px solid blue";
		imageContainer[0].src = standard_3_star[random_up_3Star()].image;
	} else if (cardContainer[0].innerHTML == "purple") {
		let num = flip_50_50_4Star[flip()];
		imageContainer[0].style.border = boder_size + "px solid purple";
		if (num == "standard 4 starChar") {
			if (_50_50_pitty_4_star == 0) {
				imageContainer[0].src = standard_4_star[random_standard_4Star()].image;
				_50_50_pitty_4_star++;
			} else {
				imageContainer[0].src = up_4_star[random_up_4Star()].image;
				_50_50_pitty_4_star = 0;
			}
		} else {
			imageContainer[0].src = up_4_star[random_up_4Star()].image;
			_50_50_pitty_4_star = 0;
		}
	}

	document.getElementById("Limited_5_star_constellations").value =
		limitedEdition_fivestarChar.contellations;
	document.getElementById("debug").innerHTML =
		"Total wish count：" +
		wishCount +
		" | " +
		"Constellations: " +
		limitedEdition_fivestarChar.contellations;
}

function ten_pull() {
	wishCount += 10;
	var colorList = [];

	for (let i = 0; i < imageContainer.length; i++) {
		let color = controller.pickCardColor();

		colorList.push(color);
		cardContainer[i].innerHTML = colorList[i];
		imageContainer[i].src = colorList[i];
		fourStar_pity(i);
		fiveStar_pity(i);
		imageContainer[i].style.display = "inline";

		if (cardContainer[i].innerHTML == "gold") {
			let num = flip_50_50_5Star[flip()];
			imageContainer[i].style.border = boder_size + "px solid gold";

			if (num == "standard fivestarChar") {
				if (_50_50_pitty_5_star == 0) {
					let radomNum = radomFivestarChar();
					imageContainer[i].src = standard_fivestarChar[radomNum].image;
					document.getElementById("character").value =
						standard_fivestarChar[radomNum].name;
					_50_50_pitty_5_star++;
				} else {
					limitedEdition_fivestarChar.contellations++;
					/*if _50_50_pitty_5_star !=0, which means when there is alread one standard 5 star character be drawn, we keep rolling until num != standard 5 star character*/
					imageContainer[i].src = limitedEdition_fivestarChar.image;
					document.getElementById("character").value =
						limitedEdition_fivestarChar.name;
					_50_50_pitty_5_star = 0;
				}
			} else {
				limitedEdition_fivestarChar.contellations++;
				imageContainer[i].src = num.image;
				document.getElementById("character").value =
					limitedEdition_fivestarChar.name;
				_50_50_pitty_5_star = 0;
			}
		} else if (cardContainer[i].innerHTML == "blue") {
			imageContainer[i].style.border = boder_size + "px solid blue";
			imageContainer[i].src = standard_3_star[random_up_3Star()].image;
		} else if (cardContainer[i].innerHTML == "purple") {
			let num = flip_50_50_4Star[flip()];
			imageContainer[i].style.border = boder_size + "px solid purple";
			if (num == "standard 4 starChar") {
				if (_50_50_pitty_4_star == 0) {
					let radomNum = random_standard_4Star();
					imageContainer[i].src = standard_4_star[radomNum].image;
					document.getElementById("character").value =
						standard_4_star[radomNum].name;
					_50_50_pitty_4_star++;
				} else {
					let radomNum = random_up_4Star();
					imageContainer[i].src = up_4_star[radomNum].image;
					document.getElementById("character").value = up_4_star[radomNum].name;
					_50_50_pitty_4_star = 0;
				}
			} else {
				let radomNum = random_up_4Star();
				imageContainer[i].src = up_4_star[radomNum].image;
				document.getElementById("character").value = up_4_star[radomNum].name;
				_50_50_pitty_4_star = 0;
			}
		}
	}

	for (let i = 0; i < standard_fivestarChar.length; i++) {
		if (standard_fivestarChar[i].contellations > 6) {
			standard_fivestarChar[i].contellations = 6;
		}
	}

	for (let i = 0; i < standard_4_star.length; i++) {
		if (standard_4_star[i].contellations != null) {
			if (standard_4_star[i].contellations > 6) {
				standard_4_star[i].contellations = 6;
			}
		} else {
			if (standard_4_star[i].refinements > 5) {
				standard_4_star[i].refinements = 5;
			}
		}
	}

	document.getElementById("Limited_5_star_constellations").value =
		limitedEdition_fivestarChar.contellations;
	document.getElementById("debug").innerHTML =
		"Total wish count：" +
		wishCount +
		" | " +
		"Constellations: " +
		limitedEdition_fivestarChar.contellations;
}

//Adding events here:
var y = document.getElementById("pull_1");
y.addEventListener("click", one_pull);
var x = document.getElementById("pull_10");
x.addEventListener("click", ten_pull);
var z = document.getElementById("restart");
z.addEventListener("click", reset);

//pitty functions

function fourStar_pity(i) {
	if (cardContainer[i].innerHTML == "purple") {
		fourStar_pity_count = 0;
	} else if (fourStar_pity_count == 9) {
		cardContainer[i].innerHTML = "purple";
		fourStar_pity_count = 0;
	} else {
		fourStar_pity_count++;
	}
}

function fiveStar_pity(i) {
	if (cardContainer[i].innerHTML == "gold") {
		fiveStar_pity_count = 0;
	} else if (fiveStar_pity_count == 90) {
		cardContainer[i].innerHTML = "gold";
		fiveStar_pity_count = 0;
	} else {
		fiveStar_pity_count++;
	}
	bonusRate(i);
}

/*A bonus increasing rate that starts at pull 72,ends at pull 79*/
var bonus = 0;
var bonusUp = 0;
function bonusRate(i) {
	if (fiveStar_pity_count >= 72 && fiveStar_pity_count <= 90) {
		controller.setWeight("gold", gold_rate + bonus);
		bonus += 10; //additional 6% each pull (10/167).
	} else if (
		fiveStar_pity_count == 90 ||
		cardContainer[i].innerHTML == "gold"
	) {
		//reset the bonus and weight
		bonus = 0;
		controller.setWeight("gold", gold_rate);
	}
	bonusUp = (bonus / 167).toFixed(2) * 100;
	document.getElementById("debug1").innerHTML =
		"Pitty level: " +
		fiveStar_pity_count +
		" | increase rate：" +
		bonusUp +
		"%";
}

document.getElementById("debug1").innerHTML =
	"Pitty level: " + fiveStar_pity_count + " | increase rate：" + bonusUp + "%";

/************************Characters Section*********************/

//5-stars

//up banner

var Yelan = {
	name: "Yelan",
	color: "gold",
	image: "limitedEdition_5_Star/Yelan.webp",
	contellations: -1,
};

//standard banner
var Diluc = {
	name: "Diluc",
	color: "gold",
	image: "standard_5star/Diluc.webp",
	contellations: -1,
};
var Jean = {
	name: "Jean",
	color: "gold",
	image: "standard_5star/Jean.webp",
	contellations: -1,
};
var Keqing = {
	name: "Keqing",
	color: "gold",
	image: "standard_5star/Keqing.webp",
	contellations: -1,
};
var Mona = {
	name: "Mona",
	color: "gold",
	image: "standard_5star/Mona.webp",
	contellations: -1,
};
var Qiqi = {
	name: "Qiqi",
	color: "gold",
	image: "standard_5star/Qiqi.webp",
	contellations: -1,
};

//4-stars
//Characters
//up banner
var Ningguang = {
	name: "Ningguang",
	color: "purple",
	image: "upEdition_4_Star/Ningguang.webp",
	contellations: -1,
};
var Beidou = {
	name: "Beidou",
	color: "purple",
	image: "upEdition_4_Star/Beidou.webp",
	contellations: -1,
};
var Xingqiu = {
	name: "Xingqiu",
	color: "purple",
	image: "upEdition_4_Star/Xingqiu.webp",
	contellations: -1,
};

//standard banner
var Yaoyao = {
	name: "Yaoyao",
	color: "purple",
	image: "standard_4_star/Yaoyao.webp",
	contellations: -1,
};
var Amber = {
	name: "Amber",
	color: "purple",
	image: "standard_4_star/Amber.webp",
	contellations: -1,
};
var Barbara = {
	name: "Barbara",
	color: "purple",
	image: "standard_4_star/Barbara.webp",
	contellations: -1,
};
var Bennett = {
	name: "Bennett",
	color: "purple",
	image: "standard_4_star/Bennett.webp",
	contellations: -1,
};
var Candace = {
	name: "Candace",
	color: "purple",
	image: "standard_4_star/Candace.webp",
	contellations: -1,
};
var Chongyun = {
	name: "Chongyun",
	color: "purple",
	image: "standard_4_star/Chongyun.webp",
	contellations: -1,
};
var Collei = {
	name: "Collei",
	color: "purple",
	image: "standard_4_star/Collei.webp",
	contellations: -1,
};
var Diona = {
	name: "Diona",
	color: "purple",
	image: "standard_4_star/Diona.webp",
	contellations: -1,
};
var Dori = {
	name: "Dori",
	color: "purple",
	image: "standard_4_star/Dori.webp",
	contellations: -1,
};
var Faruzan = {
	name: "Faruzan",
	color: "purple",
	image: "standard_4_star/Faruzan.webp",
	contellations: -1,
};
var Fischl = {
	name: "Fischl",
	color: "purple",
	image: "standard_4_star/Fischl.webp",
	contellations: -1,
};
var Gorou = {
	name: "Gorou",
	color: "purple",
	image: "standard_4_star/Gorou.webp",
	contellations: -1,
};
var Kaeya = {
	name: "Kaeya",
	color: "purple",
	image: "standard_4_star/Kaeya.webp",
	contellations: -1,
};
var KujouSara = {
	name: "KujouSara",
	color: "purple",
	image: "standard_4_star/Kujou Sara.webp",
	contellations: -1,
};
var KukiShinobu = {
	name: "KukiShinobu",
	color: "purple",
	image: "standard_4_star/Kuki Shinobu.webp",
	contellations: -1,
};
var Layla = {
	name: "Layla",
	color: "purple",
	image: "standard_4_star/Layla.webp",
	contellations: -1,
};
var Lisa = {
	name: "Lisa",
	color: "purple",
	image: "standard_4_star/Lisa.webp",
	contellations: -1,
};
var Noelle = {
	name: "Noelle",
	color: "purple",
	image: "standard_4_star/Noelle.webp",
	contellations: -1,
};
var Razor = {
	name: "Razor",
	color: "purple",
	image: "standard_4_star/Razor.webp",
	contellations: -1,
};
var Rosaria = {
	name: "Rosaria",
	color: "purple",
	image: "standard_4_star/Rosaria.webp",
	contellations: -1,
};
var Sayu = {
	name: "Sayu",
	color: "purple",
	image: "standard_4_star/Sayu.webp",
	contellations: -1,
};
var ShikanoinHeizou = {
	name: "ShikanoinHeizou",
	color: "purple",
	image: "standard_4_star/Shikanoin Heizou.webp",
	contellations: -1,
};
var Sucrose = {
	name: "Sucrose",
	color: "purple",
	image: "standard_4_star/Sucrose.webp",
	contellations: -1,
};
var Thoma = {
	name: "Thoma",
	color: "purple",
	image: "standard_4_star/Thoma.webp",
	contellations: -1,
};
var Xiangling = {
	name: "Xiangling",
	color: "purple",
	image: "standard_4_star/Xiangling.webp",
	contellations: -1,
};
var Xinyan = {
	name: "Xinyan",
	color: "purple",
	image: "standard_4_star/Xinyan.webp",
	contellations: -1,
};
var Yanfei = {
	name: "Yanfei",
	color: "purple",
	image: "standard_4_star/Yanfei.webp",
	contellations: -1,
};
var YunJin = {
	name: "YunJin",
	color: "purple",
	image: "standard_4_star/Yun Jin.webp",
	contellations: -1,
};

//Weapons
var Dragons_Bane = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Dragon's Bane.webp",
	refinements: 0,
};
var Eye_of_Perception = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Eye of Perception.webp",
	refinements: 0,
};
var Favonius_Codex = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Favonius Codex.webp",
	refinements: 0,
};
var Favonius_Greatsword = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Favonius Greatsword.webp",
	refinements: 0,
};
var Favonius_Lance = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Favonius Lance.webp",
	refinements: 0,
};
var Favonius_Sword = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Favonius_Sword.webp",
	refinements: 0,
};
var Lions_Roar = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Lion's Roar.webp",
	refinements: 0,
};
var Rainslasher = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Rainslasher.webp",
	refinements: 0,
};
var Rust = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Rust.webp",
	refinements: 0,
};
var Sacrificial_Fragments = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Sacrificial Fragments.webp",
	refinements: 0,
};
var Sacrificial_Greatsword = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Sacrificial Greatsword.webp",
	refinements: 0,
};
var Sacrificial_Sword = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Sacrificial Sword.webp",
	refinements: 0,
};
var The_Flute = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/The Flute.webp",
	refinements: 0,
};
var The_Stringless = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/The Stringless.webp",
	refinements: 0,
};
var Favonius_Warbow = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Favonius Warbow.webp",
	refinements: 0,
};
var The_Widsith = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/The Widsith.webp",
	refinements: 0,
};
var TheBell = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/The Bell.webp",
	refinements: 0,
};
var Sacrificial_Bow = {
	name: "",
	color: "purple",
	image: "Weapons/4_star/Sacrificial bow.webp",
	refinements: 0,
};

const standard_4_star = [
	Yaoyao,
	Amber,
	Barbara,
	Beidou,
	Bennett,
	Candace,
	Chongyun,
	Collei,
	Diona,
	Dori,
	Faruzan,
	Fischl,
	Gorou,
	Kaeya,
	KujouSara,
	KukiShinobu,
	Layla,
	Lisa,
	Ningguang,
	Noelle,
	Razor,
	Rosaria,
	Sayu,
	ShikanoinHeizou,
	Sucrose,
	Thoma,
	Xiangling,
	Xingqiu,
	Xinyan,
	Yanfei,
	YunJin,
	Rust,
	The_Stringless,
	The_Widsith,
	Eye_of_Perception,
	Rainslasher,
	TheBell,
	Lions_Roar,
	The_Flute,
	Dragons_Bane,
	Favonius_Lance,
	Favonius_Sword,
	Favonius_Greatsword,
	Favonius_Codex,
	Favonius_Warbow,
	Sacrificial_Bow,
	Sacrificial_Sword,
	Sacrificial_Greatsword,
	Sacrificial_Fragments,
];

const flip_50_50_4Star = ["upFourStar", "standard 4 starChar"];

function random_standard_4Star() {
	let num = Math.floor(Math.random() * 49); //50 four-stars
	return num;
}

function random_up_4Star() {
	let num = Math.floor(Math.random() * 3);
	return num;
}

//3 stars
var Black_Tassel = {
	color: "blue",
	image: "Weapons/3_star/Black Tassel.webp",
};

var Bloodtainted_Greatsword = {
	color: "blue",
	image: "Weapons/3_star/Bloodtainted_Greatsword.webp",
};

var Cool_Steel = {
	color: "blue",
	image: "Weapons/3_star/Cool_Steel.webp",
};

var Debate_Club = {
	color: "blue",
	image: "Weapons/3_star/Debate_Club.webp",
};
var Ebony_Bow = {
	color: "blue",
	image: "Weapons/3_star/Ebony_Bow.webp",
};
var Emerald_Orb = {
	color: "blue",
	image: "Weapons/3_star/Emerald_Orb.webp",
};
var Ferrous_Shadow = {
	color: "blue",
	image: "Weapons/3_star/Ferrous_Shadow.webp",
};

var Harbinger_of_Dawn = {
	color: "blue",
	image: "Weapons/3_star/Harbinger_of_Dawn.webp",
};
var Magic_Guide = {
	color: "blue",
	image: "Weapons/3_star/Magic_Guide.webp",
};
var Messenger = {
	color: "blue",
	image: "Weapons/3_star/Messenger.webp",
};

var Raven_Bow = {
	color: "blue",
	image: "Weapons/3_star/Raven_Bow.webp",
};
var Recurve_Bow = {
	color: "blue",
	image: "Weapons/3_star/Recurve_Bow.webp",
};
var Sharpshooters_Oath = {
	color: "blue",
	image: "Weapons/3_star/Sharpshooters_Oath.webp",
};

var Skyrider_Sword = {
	color: "blue",
	image: "Weapons/3_star/Skyrider_Sword.webp",
};
var Slingshot = {
	color: "blue",
	image: "Weapons/3_star/Slingshot.webp",
};
var Thrilling_Tales_of_Dragon_Slayers = {
	color: "blue",
	image: "Weapons/3_star/Thrilling_Tales_of_Dragon_Slayers.webp",
};

var White_Tassel = {
	color: "blue",
	image: "Weapons/3_star/White_Tassel.webp",
};

const standard_3_star = [
	Black_Tassel,
	Bloodtainted_Greatsword,
	Cool_Steel,
	Debate_Club,
	Ebony_Bow,
	Emerald_Orb,
	Ferrous_Shadow,
	Harbinger_of_Dawn,
	Magic_Guide,
	Messenger,
	Raven_Bow,
	Recurve_Bow,
	Sharpshooters_Oath,
	Skyrider_Sword,
	Slingshot,
	Thrilling_Tales_of_Dragon_Slayers,
	White_Tassel,
];
console.log(standard_3_star.length);

function random_up_3Star() {
	let num = Math.floor(Math.random() * 17);
	return num;
}

/************************Current Banner*********************/
const limitedEdition_fivestarChar = Yelan;
const up_4_star = [Beidou, Ningguang, Xingqiu];
/***********************************************************/

const flip_50_50_5Star = [limitedEdition_fivestarChar, "standard fivestarChar"];
const standard_fivestarChar = [Keqing, Mona, Qiqi, Diluc, Jean];

//create 50 50 feature by using number between 0 and 1.
function flip() {
	let num = Math.floor(Math.random() * 2);
	return num;
}

//randomly select different standard 5 star characters.
function radomFivestarChar() {
	let num = Math.floor(Math.random() * 5);
	return num;
}
