const userInputResin = document.getElementById("userInputResin");
const userInputResinSubmit = document.getElementById("userInputResinSubmit");
const textbox1 = document.getElementById("textbox1");
const resin = document.getElementById("resin");
const seconds = 1000; //1 second = 1000 milliseconds
const minutes = seconds * 60;
const latency = 6 * seconds;
const generateRate = 8 * minutes + latency; //generating rate: 8 * (minutes + latency) - (5 * minutes + 5 * seconds)
/*
8 * minutes - 55 * seconds: 7.083433
8 * minutes - 51 * seconds: 7.150016667
8 * minutes - 50 * seconds: 7.16685
8 * minutes - 40 * seconds: 7.3335
8 * minutes - 20 * seconds: 7.66685
8 * minutes - 5 * seconds: 7.91681666
8 * minutes - 3 * seconds: 7.95023333
8 * minutes - 1 * seconds: 7.983366
8 * minutes - 0 * seconds: 8.000116666
*/

//retrieve both saved values from the localstorage
let initialResin = parseInt(localStorage.getItem("resin")) || 0;
let savedTime = parseInt(localStorage.getItem("savedTime")) || 0;
let elapsedTime = 0; //the time gap between reload/close the page

//when there's a time saved in localstorage
if (savedTime > 0) {
	elapsedTime = new Date().getTime() - savedTime;
	let generatedResin = Math.floor(elapsedTime / generateRate); //the generating rate when reloading/closing the page

	//when there are resin generated, adds them up to the initial resin amount
	if (generatedResin > 0) {
		initialResin += generatedResin;
		//make sure resin won't exceeds the cap
		if (initialResin > 160) {
			initialResin = 160;
		}
		localStorage.setItem("resin", initialResin); //saved the resin amount after the calculation
	}
}
resin.innerHTML = "Resin(树脂): " + initialResin + "/160";

let endTime;
let TimeGap;
let resetStartTime;

let startTimeCounter = Date.now();
let counterId = setInterval(generateResin, generateRate); //runs the counter
let hidden = false;

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
		console.log("testing: " + TimeGap);
	} else {
		clearInterval(counterId); // delete the interval: stops the counter
	}

	resin.innerHTML = "Resin(树脂): " + initialResin + "/160";
}

//solve the problem of resin counter heavily slows down when the page is hidden
function handleVisibilityChange() {
	if (document.hidden) {
		clearInterval(counterId);
		counterId = setInterval(generateResin, generateRate);
		hidden = true;
	} else {
		hidden = false;
	}
}
document.addEventListener("visibilitychange", handleVisibilityChange);

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

resetButton1.addEventListener("click", resetResin);

userInputResinSubmit.addEventListener("click", function (event) {
	event.preventDefault(); //prevent console log disappear when using form submit event, this solve the conflict that causing the user input not working properly to set a new value for Resin
	if (userInputResin.value) {
		resinLeft = userInputResin.value;
		textbox1.innerHTML = "Value Successfully Reseted!";
	} else {
		textbox1.innerHTML = "Empty Input!";
	}
});
