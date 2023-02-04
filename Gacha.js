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
controller.addCard("purple", 6.5);
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

var wishCount = 0;
var fourStar_pity_count = 0;
var fiveStar_pity_count = 0;

function one_pull() {
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
		cardContainer[0].style.backgroundColor = "gold";
	} else if (cardContainer[0].innerHTML == "blue") {
		cardContainer[0].style.backgroundColor = "cyan";
	} else if (cardContainer[0].innerHTML == "purple") {
		cardContainer[0].style.backgroundColor = "purple";
	}
}

function ten_pull() {
	var resultList = [];

	for (let i = 0; i < cardContainer.length; i++) {
		let card = controller.pickCard();

		resultList.push(card);
		cardContainer[i].innerHTML = resultList[i];
		fourStar_pity(i);
		fiveStar_pity(i);
		cardContainer[i].style.display = "inline";

		if (cardContainer[i].innerHTML == "gold") {
			cardContainer[i].style.backgroundColor = "gold";
		} else if (cardContainer[i].innerHTML == "blue") {
			cardContainer[i].style.backgroundColor = "cyan";
		} else if (cardContainer[i].innerHTML == "purple") {
			cardContainer[i].style.backgroundColor = "purple";
		}
	}
}
var count = 0;
//Adding events here:
var y = document.getElementById("pull_1");
y.addEventListener("click", one_pull);
var x = document.getElementById("pull_10");
x.addEventListener("click", ten_pull);

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
	} else if (fiveStar_pity_count == 79) {
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
	if (fiveStar_pity_count >= 72 && fiveStar_pity_count <= 79) {
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
	document.getElementById("debug1").innerHTML =
		fiveStar_pity_count + " |" + bonus;
}
