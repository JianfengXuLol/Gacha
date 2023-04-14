const resin = document.getElementById("resin");

const seconds = 1000; //1 second = 1000 milliseconds
const minutes = seconds * 60;
const generateRate = 1000;
let initialResin = parseInt(localStorage.getItem("resin")) || 0;
let counterId;
// resin.innerHTML = "Resin(树脂): " + initialResin + "/180";

function generateResin() {
	if (initialResin < 180) {
		initialResin++;
		localStorage.setItem("resin", initialResin);
	} else {
		clearInterval(counterId);
	}
	resin.innerHTML = "Resin(树脂): " + initialResin + "/180";
}

counterId = setInterval(generateResin, generateRate);

//reset stuff
const resetButton1 = document.getElementById("reset-button1");

function resetResin() {
	localStorage.removeItem("resin");
	initialResin = 0; //剩余的树脂
	resin.innerHTML = "Resin(树脂): " + initialResin + "/180";
}
resetButton1.addEventListener("click", resetResin);
