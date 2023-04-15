const userInputResin = document.getElementById("userInputResin");
const userInputResinSubmit = document.getElementById("userInputResinSubmit");
const textbox1 = document.getElementById("textbox1");
const resin = document.getElementById("resin");
const seconds = 1000; //1 second = 1000 milliseconds
const minutes = seconds * 60;
const generateRate = 8 * minutes; //generating rate: 1 resin/8mins

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

function generateResin() {
	//generating resin before the 160 cap
	if (initialResin < 160) {
		initialResin++;
		//save both values
		localStorage.setItem("resin", initialResin);
		localStorage.setItem("savedTime", new Date().getTime()); //marked the time when reload/close the page
	} else {
		clearInterval(counterId); // delete the interval: stops the counter
	}
	resin.innerHTML = "Resin(树脂): " + initialResin + "/160";
}

let counterId = setInterval(generateResin, generateRate); //runs the counter

const resetButton1 = document.getElementById("reset-button1");
let resinLeft = 35; //set the amount of resin left here

function resetResin() {
	//when the value reachs the cap, the reset button will keeps the counter running by adding a new intervel
	if (initialResin === 160) {
		counterId = setInterval(generateResin, generateRate);
	}
	localStorage.setItem("resin", resinLeft);
	localStorage.setItem("savedTime", new Date().getTime());
	initialResin = resinLeft;
	resin.innerHTML = "Resin(树脂): " + initialResin + "/160";
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
