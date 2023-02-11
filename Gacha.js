// Define an object(function) to control the probability of each card.

function probability() {
	/* We need a total weight.(ex: weight#1 + weight#2 = totalWeight)*/
	this.totalWeight = 0;

	/* Create a array to store each card with a specified weight(odds)*/
	var cardArray = [];

	/*Define a function to add cards into the pool (the array list), and count the new weight to the totalWeight.*/
	this.addCard = function (card, weight) {
		cardArray.push({ card, weight });
		this.totalWeight += weight;
	};

	//define a function to set the weight
	this.setWeight = function (card, weight) {
		for (let i = 0; i < cardArray.length; i++) {
			if (cardArray[i].card == card) {
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
	this.pickCard = function () {
		/*we need a random number to represent the range (like: 0~9, 0~99, …) using totalWeight*/

		var weight_range = Math.floor(Math.random() * this.totalWeight);

		/* scan through the array to see if the random number is within the specified weight range*/
		for (let i = 0; i < cardArray.length; i++) {
			if (weight_range <= cardArray[i].weight) {
				return cardArray[i].card; //display the card.
			}
			/*subtract the new range (move to the weight range of next card in the list), for example: 109-100=9, which means if the random#(0-109) equals 101 (out of the range:0-99), then we move the weight range from (0-99) to weight range (0-9).*/
			weight_range -= cardArray[i].weight;
		}
	};
} //End of function probability()

/* add new cards with specified weight(probability)*/
var controller = new probability();
controller.addCard("gold", 1);
controller.addCard("purple", 8.5);
controller.addCard("blue", 159.5);

/*setting the droprate for cards*/
// controller.addCard("gold", 159.5);

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

var _50_50_pitty_5_star = 0;
var _50_50_pitty_4_star = 0;

function one_pull() {
	wishCount++;
	/*when switch back from 10 pull to 1 pull, reset the number of card container that displays to 1*/

	for (let i = 0; i < cardContainer.length; i++) {
		cardContainer[i].style.display = "none";
	}
	let card = controller.pickCard();

	cardContainer[0].innerHTML = card;
	fourStar_pity(0);
	fiveStar_pity(0);
	cardContainer[0].style.display = "inline";

	if (cardContainer[0].innerHTML == "gold") {
		let num = flip_50_50[flip()];
		cardContainer[0].style.backgroundColor = "gold";

		if (num == "standard fivestarChar") {
			if (_50_50_pitty_5_star == 0) {
				cardContainer[0].innerHTML = standard_fivestarChar[radomFivestarChar()];
				_50_50_pitty_5_star++;
			} else {
				/*if _50_50_pitty_5_star !=0, which means when there is alread one standard 5 star character be drawn, we keep rolling until num != standard 5 star character*/
				do {
					num = flip_50_50[flip()];
				} while (num == "standard fivestarChar");
				cardContainer[0].innerHTML = num;
				_50_50_pitty_5_star = 0;
			}
		} else {
			cardContainer[0].innerHTML = num;
		}
	} else if (cardContainer[0].innerHTML == "blue") {
		cardContainer[0].style.backgroundColor = "cyan";
		cardContainer[0].innerHTML = standard_3_star[random_up_3Star()];
	} else if (cardContainer[0].innerHTML == "purple") {
		let num = flip_50_50_4Star[flip()];
		cardContainer[0].style.backgroundColor = "purple";
		if (num == "standard 4 starChar") {
			if (_50_50_pitty_4_star == 0) {
				cardContainer[0].innerHTML = standard_4_star[random_standard_4Star()];
				_50_50_pitty_4_star++;
			} else {
				cardContainer[0].innerHTML = up_4_star[random_up_4Star()];
				_50_50_pitty_4_star = 0;
			}
		} else {
			cardContainer[0].innerHTML = up_4_star[random_up_4Star()];
			_50_50_pitty_4_star = 0;
		}
	}
}

function ten_pull() {
	wishCount += 10;
	var resultList = [];

	for (let i = 0; i < cardContainer.length; i++) {
		let card = controller.pickCard();

		resultList.push(card);
		cardContainer[i].innerHTML = resultList[i];
		fourStar_pity(i);
		fiveStar_pity(i);
		cardContainer[i].style.display = "inline";

		if (cardContainer[i].innerHTML == "gold") {
			let num = flip_50_50_5Star[flip()];
			cardContainer[i].style.backgroundColor = "gold";

			if (num == "standard fivestarChar") {
				if (_50_50_pitty_5_star == 0) {
					cardContainer[i].innerHTML =
						standard_fivestarChar[radomFivestarChar()];
					_50_50_pitty_5_star++;
				} else {
					cardContainer[i].innerHTML = limitedEdition_fivestarChar;
					_50_50_pitty_5_star = 0;
					upCharCount++;
				}
			} else {
				cardContainer[i].innerHTML = num;
				_50_50_pitty_5_star = 0;
				upCharCount++;
			}
		} else if (cardContainer[i].innerHTML == "blue") {
			cardContainer[i].style.backgroundColor = "cyan";
			cardContainer[i].innerHTML = standard_3_star[random_up_3Star()];
		} else if (cardContainer[i].innerHTML == "purple") {
			let num = flip_50_50_4Star[flip()];
			cardContainer[i].style.backgroundColor = "purple";
			if (num == "standard 4 starChar") {
				if (_50_50_pitty_4_star == 0) {
					cardContainer[i].innerHTML = standard_4_star[random_standard_4Star()];
					_50_50_pitty_4_star++;
				} else {
					cardContainer[i].innerHTML = up_4_star[random_up_4Star()];
					_50_50_pitty_4_star = 0;
				}
			} else {
				cardContainer[i].innerHTML = up_4_star[random_up_4Star()];
				_50_50_pitty_4_star = 0;
			}
		}
	}
}

//Adding events here:
var y = document.getElementById("pull_1");
y.addEventListener("click", one_pull);
var x = document.getElementById("pull_10");
x.addEventListener("click", ten_pull);

//Extra functions
var wishCount = 0;
var upCharCount = 0;
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
		controller.setWeight("gold", 1 + bonus);
		bonus += 10; //additional 6% each pull (10/167).
	} else if (
		fiveStar_pity_count == 80 ||
		cardContainer[i].innerHTML == "gold"
	) {
		//reset the bonus and weight
		bonus = 0;
		controller.setWeight("gold", 1);
	}
	document.getElementById("debug").innerHTML =
		wishCount + " |" + "Constellation: " + upCharCount;

	document.getElementById("debug1").innerHTML =
		fiveStar_pity_count + " |" + bonus;
}

// different characters
//Current Banner
const limitedEdition_fivestarChar = "Yelan";
const up_4_star = ["Xingqiu", "Ningguang", "Beidou"];

//5-stars
const flip_50_50_5Star = [limitedEdition_fivestarChar, "standard fivestarChar"];
const standard_fivestarChar = ["Keqing", "Mona", "Qiqi", "Diluc", "Jean"];

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

//4-stars
const standard_4_star = [
	"Yaoyao",
	"Amber",
	"Barbara",
	"Beidou",
	"Bennett",
	"Candace",
	"Chongyun",
	"Collei",
	"Diona",
	"Dori",
	"Faruzan",
	"Fischl",
	"Gorou",
	"Kaeya",
	"Kujou Sara",
	"Kuki Shinobu",
	"Layla",
	"Lisa",
	"Ningguang",
	"Noelle",
	"Razor",
	"Rosaria",
	"Sayu",
	"Shikanoin Heizou",
	"Sucrose",
	"Thoma",
	"Xiangling",
	"Xingqiu",
	"Xinyan",
	"Yanfei",
	"Yaoyao",
	"Yun Jin",
	"Rust",
	"The Stringless",
	"The Widsith",
	"Eye of Perception",
	"Rainslasher",
	"The Bell",
	"Lion's Roar",
	"The Flute",
	"Dragon's Bane",
	"Favonius Lance",
	"Favonius Sword",
	"Favonius Greatsword",
	"Favonius Codex",
	"Favonius Warbow",
	"Sacrificial Bow",
	"Sacrificial Sword",
	"Sacrificial Greatsword",
	"Sacrificial Fragments",
];

const flip_50_50_4Star = ["upFourStar", "standard 4 starChar"];

function random_standard_4Star() {
	let num = Math.floor(Math.random() * 50);
	return num;
}

function random_up_4Star() {
	let num = Math.floor(Math.random() * 3);
	return num;
}

//3 stars
const standard_3_star = [
	"Amber Catalyst",
	"Black Tassel",
	"Bloodtainted Greatsword",
	"Cool Steel",
	"Dark Iron Sword",
	"Debate Club",
	"Ebony Bow",
	"Emerald Orb",
	"Ferrous Shadow",
	"Fillet Blade",
	"Halberd",
	"Harbinger of Dawn",
	"Magic Guide",
	"Messenger",
	"Otherworldly Story",
	"Quartz",
	"Raven Bow",
	"Recurve Bow",
	"Sharpshooter's Oath",
	"Skyrider Greatsword",
	"Skyrider Sword",
	"Slingshot",
	"Thrilling Tales of Dragon Slayers",
	"Traveler's Handy Sword",
	"Twin Nephrite",
	"White Iron Greatsword",
	"White Tassel",
];
console.log(standard_3_star.length);

function random_up_3Star() {
	let num = Math.floor(Math.random() * 27);
	return num;
}
