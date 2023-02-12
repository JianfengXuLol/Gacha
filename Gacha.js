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
var upCharCount = -1;

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
				imageContainer[0].src =
					standard_fivestarChar[radomFivestarChar()].image;
				_50_50_pitty_5_star++;
			} else {
				upCharCount++;
				/*if _50_50_pitty_5_star !=0, which means when there is alread one standard 5 star character be drawn, we keep rolling until num != standard 5 star character*/
				imageContainer[0].src = limitedEdition_fivestarChar.image;
				_50_50_pitty_5_star = 0;
			}
		} else {
			upCharCount++;
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
	document.getElementById("debug").innerHTML =
		"总抽数：" + wishCount + " | " + "命座数: " + upCharCount;
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
					imageContainer[i].src =
						standard_fivestarChar[radomFivestarChar()].image;
					_50_50_pitty_5_star++;
				} else {
					upCharCount++;
					/*if _50_50_pitty_5_star !=0, which means when there is alread one standard 5 star character be drawn, we keep rolling until num != standard 5 star character*/
					imageContainer[i].src = limitedEdition_fivestarChar.image;
					_50_50_pitty_5_star = 0;
				}
			} else {
				upCharCount++;
				imageContainer[i].src = num.image;
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
					imageContainer[i].src =
						standard_4_star[random_standard_4Star()].image;
					_50_50_pitty_4_star++;
				} else {
					imageContainer[i].src = up_4_star[random_up_4Star()].image;
					_50_50_pitty_4_star = 0;
				}
			} else {
				imageContainer[i].src = up_4_star[random_up_4Star()].image;
				_50_50_pitty_4_star = 0;
			}
		}
	}
	document.getElementById("debug").innerHTML =
		"总抽数：" + wishCount + " | " + "命座数: " + upCharCount;
}

//Adding events here:
var y = document.getElementById("pull_1");
y.addEventListener("click", one_pull);
var x = document.getElementById("pull_10");
x.addEventListener("click", ten_pull);

//pitty functions
var fourStar_pity_count = 0;
var fiveStar_pity_count = 0;

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

	document.getElementById("debug1").innerHTML =
		"保底水位: " +
		fiveStar_pity_count +
		" | 增加几率：" +
		(bonus / 167).toFixed(2) * 100 +
		"%";
}

/************************Characters Section*********************/

//5-stars

//up banner

var Yelan = { color: "gold", image: "limitedEdition_5_Star/Yelan.webp" };

//standard banner
var Diluc = { color: "gold", image: "standard_5star/Diluc.webp" };
var Jean = { color: "gold", image: "standard_5star/Jean.webp" };
var Keqing = { color: "gold", image: "standard_5star/Keqing.webp" };
var Mona = { color: "gold", image: "standard_5star/Mona.webp" };
var Qiqi = { color: "gold", image: "standard_5star/Qiqi.webp" };

//4-stars

//up banner
var Ningguang = { color: "purple", image: "upEdition_4_Star/Ningguang.webp" };
var Beidou = { color: "purple", image: "upEdition_4_Star/Beidou.webp" };
var Xingqiu = { color: "purple", image: "upEdition_4_Star/Xingqiu.webp" };

//standard banner
var Yaoyao = { color: "purple", image: "standard_4_star/Yaoyao.webp" };
var Amber = { color: "purple", image: "standard_4_star/Amber.webp" };
var Barbara = { color: "purple", image: "standard_4_star/Barbara.webp" };

const standard_4_star = [
	Yaoyao,
	Amber,
	Barbara,
	// "Beidou",
	// "Bennett",
	// "Candace",
	// "Chongyun",
	// "Collei",
	// "Diona",
	// "Dori",
	// "Faruzan",
	// "Fischl",
	// "Gorou",
	// "Kaeya",
	// "Kujou Sara",
	// "Kuki Shinobu",
	// "Layla",
	// "Lisa",
	// "Ningguang",
	// "Noelle",
	// "Razor",
	// "Rosaria",
	// "Sayu",
	// "Shikanoin Heizou",
	// "Sucrose",
	// "Thoma",
	// "Xiangling",
	// "Xingqiu",
	// "Xinyan",
	// "Yanfei",
	// "Yaoyao",
	// "Yun Jin",
	// "Rust",
	// "The Stringless",
	// "The Widsith",
	// "Eye of Perception",
	// "Rainslasher",
	// "The Bell",
	// "Lion's Roar",
	// "The Flute",
	// "Dragon's Bane",
	// "Favonius Lance",
	// "Favonius Sword",
	// "Favonius Greatsword",
	// "Favonius Codex",
	// "Favonius Warbow",
	// "Sacrificial Bow",
	// "Sacrificial Sword",
	// "Sacrificial Greatsword",
	// "Sacrificial Fragments",
];

const flip_50_50_4Star = ["upFourStar", "standard 4 starChar"];

function random_standard_4Star() {
	let num = Math.floor(Math.random() * 3); //50 four-stars
	return num;
}

function random_up_4Star() {
	let num = Math.floor(Math.random() * 3);
	return num;
}

//3 stars
var Black_Tassel = { color: "purple", image: "Weapons/Black Tassel.webp" };

const standard_3_star = [
	Black_Tassel,
	// "Bloodtainted Greatsword",
	// "Cool Steel",
	// "Dark Iron Sword",
	// "Debate Club",
	// "Ebony Bow",
	// "Emerald Orb",
	// "Ferrous Shadow",
	// "Fillet Blade",
	// "Halberd",
	// "Harbinger of Dawn",
	// "Magic Guide",
	// "Messenger",
	// "Otherworldly Story",
	// "Quartz",
	// "Raven Bow",
	// "Recurve Bow",
	// "Sharpshooter's Oath",
	// "Skyrider Greatsword",
	// "Skyrider Sword",
	// "Slingshot",
	// "Thrilling Tales of Dragon Slayers",
	// "Traveler's Handy Sword",
	// "Twin Nephrite",
	// "White Iron Greatsword",
	// "White Tassel",
];
console.log(standard_3_star.length);

function random_up_3Star() {
	let num = Math.floor(Math.random() * 1);
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

// imageContainer[10].src = limitedEdition_fivestarChar.image;
