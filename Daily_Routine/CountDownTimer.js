//Connect to the checkbox
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

//Countdown Timer
const timeLeft = document.getElementById("time-left");

//set the data for the countdown timer here:
let targetDate = "04/2/2023 10:25:00"; //current artifacts respawn time:04/2/2023 10:25:00
const newTime = new Date(targetDate);

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId;

function countDown() {
	const today = new Date();
	const timeSpan = newTime - today;
	//milliseconds

	if (timeSpan <= -day) {
		timeLeft.innerHTML = "Hope you had a nice Birthday!!";
		clearInterval(timerId);
		return;
	}

	if (timeSpan <= 0) {
		timeLeft.innerHTML = "Happy Birthday!!";
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
