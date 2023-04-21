const userInputResin = document.getElementById("userInputResin");
const userInputCurrency = document.getElementById("userInputCurrency");
const userInputResinSubmit = document.getElementById("userInputResinSubmit");
const userInputCurrencySubmit = document.getElementById(
	"userInputCurrencySubmit"
);
const textbox1 = document.getElementById("textbox1");
const textbox2 = document.getElementById("textbox2");
const resin = document.getElementById("resin");
const currency = document.getElementById("currency"); //尘歌壶
const seconds = 1000; //1 second = 1000 milliseconds
const minutes = seconds * 60;
const latency1 = 4 * seconds - 500;
const latency2 = 1 * seconds;
const generateRate = 8 * minutes - latency1; //generating rate: 8 * minutes + latency
const generateRateCurrency = 2 * minutes + latency2; //generating rate: 2 * minutes
//retrieve both saved values from the localstorage
let initialResin = parseInt(localStorage.getItem("resin")) || 0;
let initialCurrency = parseInt(localStorage.getItem("currency")) || 0; //尘歌壶
let savedTime = parseInt(localStorage.getItem("savedTime")) || 0;
let elapsedTime = 0; //the time gap between reload/close the page

//when there's a time saved in localstorage
if (savedTime > 0) {
	elapsedTime = new Date().getTime() - savedTime;
	let generatedResin = Math.floor(elapsedTime / generateRate); //the generating rate when reloading/closing the page
	let generatedCurrency = Math.floor(elapsedTime / generateRateCurrency); //the generating rate when reloading/closing the page

	//when there are resin generated, adds them up to the initial resin amount
	if (generatedResin > 0) {
		initialResin += generatedResin;
		//make sure resin won't exceeds the cap
		if (initialResin > 160) {
			initialResin = 160;
		}
		localStorage.setItem("resin", initialResin); //saved the resin amount after the calculation
	}
	if (generatedCurrency > 0) {
		initialCurrency += generatedCurrency;
		//make sure resin won't exceeds the cap
		if (initialCurrency > 2400) {
			initialCurrency = 2400;
		}
		localStorage.setItem("currency", initialCurrency); //saved the currency amount after the calculation
	}
}
resin.innerHTML = "Resin(树脂): " + initialResin + "/160";
currency.innerHTML = "Currency(尘歌壶货币): " + initialCurrency + "/2400";

//variables for testing purpose(on console board)
let endTime;
let TimeGap;
let resetStartTime;
let startTimeCounter = Date.now();

let hidden = false;
let counterId = setInterval(generateResin, generateRate); //runs the counter
let counterIdCurrency = setInterval(generatCurrency, generateRateCurrency); //runs the counter

function generateResin() {
	endTime = Date.now();
	//generating resin before the 160 cap
	if (initialResin < 160) {
		initialResin++;
		//save both values
		localStorage.setItem("resin", initialResin);
		localStorage.setItem("savedTime", new Date().getTime()); //marked the time when reload/close the page
		TimeGap = (endTime - resetStartTime) / minutes;
		console.log("每点树脂增长时间：" + TimeGap);
	} else {
		clearInterval(counterId); // delete the interval: stops the counter
	}

	resin.innerHTML = "Resin(树脂): " + initialResin + "/160";
}

function generatCurrency() {
	endTime = Date.now();
	//generating resin before the 160 cap
	if (initialCurrency < 2400) {
		initialCurrency++;
		//save both values
		localStorage.setItem("currency", initialCurrency);
		localStorage.setItem("savedTime", new Date().getTime()); //marked the time when reload/close the page
		TimeGap = (endTime - resetStartTime) / minutes;
		console.log("每点尘歌壶银币增长时间：" + TimeGap);
	} else {
		clearInterval(counterIdCurrency); // delete the interval: stops the counter
	}

	currency.innerHTML = "Currency(尘歌壶货币): " + initialCurrency + "/2400";
}

//solve the problem of resin counter heavily slows down when the page is hidden
function handleVisibilityChange() {
	if (document.hidden) {
		clearInterval(counterId);
		clearInterval(counterIdCurrency);
		counterId = setInterval(generateResin, generateRate);
		counterIdCurrency = setInterval(generatCurrency, generateRateCurrency);
		hidden = true;
	} else {
		hidden = false;
	}
}
document.addEventListener("visibilitychange", handleVisibilityChange);

//this might be optional, the counter may still work without this
window.addEventListener("beforeunload", function (event) {
	event.preventDefault();
	localStorage.setItem("resin", initialResin);
	localStorage.setItem("currency", initialCurrency);
	localStorage.setItem("savedTime", new Date().getTime());
});

const resetButton1 = document.getElementById("reset-button1");
let defaultResin = parseInt(localStorage.getItem("defaultResin")) || 0;
let resinLeft = defaultResin; //set the amount of resin left here

function resetResin() {
	//when the value reachs the cap, the reset button will keeps the counter running by adding a new intervel
	if (initialResin === 160) {
		counterId = setInterval(generateResin, generateRate);
	}
	resetStartTime = Date.now();

	localStorage.setItem("resin", resinLeft);
	localStorage.setItem("savedTime", new Date().getTime());
	initialResin = resinLeft;
	localStorage.setItem("defaultResin", initialResin);
	resin.innerHTML = "Resin(树脂): " + initialResin + "/160";
	textbox1.innerHTML = "";
}

const resetButton2 = document.getElementById("reset-button2");
let defaultCurrency = parseInt(localStorage.getItem("defaultCurrency")) || 0;
let currencyLeft = defaultCurrency; //set the amount of resin left here

function resetCurrency() {
	//when the value reachs the cap, the reset button will keeps the counter running by adding a new intervel
	if (initialCurrency === 2400) {
		counterIdCurrency = setInterval(generatCurrency, generateRateCurrency);
	}
	resetStartTime = Date.now();

	localStorage.setItem("currency", initialCurrency);
	localStorage.setItem("savedTime", new Date().getTime());
	initialCurrency = currencyLeft;
	localStorage.setItem("defaultCurrency", initialCurrency);
	currency.innerHTML = "Currency(尘歌壶货币): " + initialCurrency + "/2400";
	textbox2.innerHTML = "";
}

userInputResinSubmit.addEventListener("click", function (event) {
	event.preventDefault(); //prevent console log disappear when using form submit event, this solve the conflict that causing the user input not working properly to set a new value for Resin
	if (userInputResin.value) {
		resinLeft = userInputResin.value;
		textbox1.innerHTML = "Value Successfully Reseted!";
	} else {
		textbox1.innerHTML = "Empty Input!";
	}
});

userInputCurrencySubmit.addEventListener("click", function (event) {
	event.preventDefault(); //prevent console log disappear when using form submit event, this solve the conflict that causing the user input not working properly to set a new value for Resin
	if (userInputCurrency.value) {
		currencyLeft = userInputCurrency.value;
		textbox2.innerHTML = "Value Successfully Reseted!";
	} else {
		textbox2.innerHTML = "Empty Input!";
	}
});

resetButton1.addEventListener("click", resetResin);
resetButton2.addEventListener("click", resetCurrency);
