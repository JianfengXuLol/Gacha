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
console.log(initialTime);
let resetTime = new Date(initialTime);

resetTime.setHours(resetTime.getHours() + 24);
console.log(resetTime);

const artifacts = document.getElementById("checkbox4");
let targetDate = localStorage.getItem("targetDate") || resetTime; //current artifacts respawn time:04/2/2023 10:25:00

let newTime = new Date(targetDate);

function updateTargetDate() {
	console.log(newTime);
	// Check if the checkbox was already checked previously

	if (artifacts.checked) {
		newTime.setHours(newTime.getHours());
		targetDate = newTime.toLocaleString();
		localStorage.setItem("targetDate", targetDate);
	}
}

artifacts.addEventListener("change", updateTargetDate);

//Countdown Timer
const timeLeft = document.getElementById("time-left");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

function countDown() {
	const today = new Date();
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
}

timerId = setInterval(countDown, second);

//reset stuff
const resetButton = document.getElementById("reset-button");

function resetTargetDate() {
	localStorage.clear();
}
resetButton.addEventListener("click", resetTargetDate);
