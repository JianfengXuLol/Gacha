//keeps checkboxes remain checked after reload/close the page
//save the checkbox stage to the local storage.
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Attach event listener to each checkbox
checkboxes.forEach(function (checkbox) {
	//checkbox here is just a temporary name for the current element being processed.
	checkbox.addEventListener("change", function () {
		localStorage.setItem(this.id, this.checked); //using each checkbox's id as the name of the key for the localStorage
	});

	// Retrieve saved state for each checkbox
	const savedCheckboxState = localStorage.getItem(checkbox.id);

	if (savedCheckboxState) {
		checkbox.checked = JSON.parse(savedCheckboxState);
	}
});

// click reset button to reset to intial time
let initialTime = new Date(); //the initial date

let ArtifactResetTime = new Date(initialTime);
ArtifactResetTime.setHours(ArtifactResetTime.getHours() + 24);

let ZhibianyiTime = new Date(initialTime); //质变仪
ZhibianyiTime.setHours(ZhibianyiTime.getHours() + 24 * 7);

//using localstorage to store the time
const artifacts = document.getElementById("checkbox4");
const Zhibianyi = document.getElementById("checkbox10");
let targetDate = localStorage.getItem("targetDate") || ArtifactResetTime; //current artifacts respawn time:04/2/2023 10:25:00
let ZhibianyiTimeDate =
	localStorage.getItem("ZhibianyiTimeDate") || ZhibianyiTime; //current artifacts respawn time:04/2/2023 10:25:00

let newTime = new Date(targetDate);
let zhibianyiNewTime = new Date(ZhibianyiTimeDate);

function updateTargetDate() {
	if (artifacts.checked) {
		newTime.setHours(newTime.getHours());
		targetDate = newTime.toLocaleString();
		localStorage.setItem("targetDate", targetDate);
	}
}

function updateZhibianyiTargetDate() {
	if (Zhibianyi.checked) {
		zhibianyiNewTime.setHours(zhibianyiNewTime.getHours());
		ZhibianyiTimeDate = zhibianyiNewTime.toLocaleString();
		localStorage.setItem("ZhibianyiTimeDate", ZhibianyiTimeDate);
	}
}
artifacts.addEventListener("change", updateTargetDate);
Zhibianyi.addEventListener("change", updateZhibianyiTargetDate);

//Countdown Timer
const timeLeft = document.getElementById("time-left");
const timeLeft1 = document.getElementById("time-left1");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

function countDown() {
	const today = new Date();

	//Artifacts
	const timeSpan = newTime - today;
	//milliseconds

	if (timeSpan <= 0) {
		timeLeft.innerHTML = "Artifacts just respawned!";
		clearInterval(timerId);
		return;
	}

	const days = Math.floor(timeSpan / day);
	const hours = Math.floor((timeSpan % day) / hour);
	const minutes = Math.floor((timeSpan % hour) / minute);
	const seconds = Math.floor((timeSpan % minute) / second);

	timeLeft.innerHTML =
		days + "days " + hours + "hrs " + minutes + "mins " + seconds + "secs";

	//质变仪
	const timeSpan1 = zhibianyiNewTime - today;
	//milliseconds

	if (timeSpan1 <= 0) {
		timeLeft.innerHTML = "Refreshed!";
		clearInterval(timerId);
		return;
	}

	const days1 = Math.floor(timeSpan1 / day);
	const hours1 = Math.floor((timeSpan1 % day) / hour);
	const minutes1 = Math.floor((timeSpan1 % hour) / minute);
	const seconds1 = Math.floor((timeSpan1 % minute) / second);
	timeLeft1.innerHTML =
		days1 + "days " + hours1 + "hrs " + minutes1 + "mins " + seconds1 + "secs";
}

timerId = setInterval(countDown, second);

//reset stuff
const resetButton = document.getElementById("reset-button");
const resetButton3 = document.getElementById("reset-button3");

function resetTargetDate() {
	localStorage.removeItem("targetDate");
	localStorage.removeItem("checkbox4");
}
resetButton.addEventListener("click", resetTargetDate);

function resetZhibianyiTime() {
	localStorage.removeItem("ZhibianyiTimeDate");
	localStorage.removeItem("checkbox10");
}
resetButton3.addEventListener("click", resetZhibianyiTime);
