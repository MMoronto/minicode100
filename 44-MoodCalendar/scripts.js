const currentYear = 2020;
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'Octomber',
	'November',
	'December'
];
const colors = ['#2d6b5f', '#72e3a6', '#dff4c7', '#edbf98', '#ea3d36'];
const defaultColor = '#888';
let activeColor = '';


const calendar = document.getElementById('calendar');
const moods = document.querySelectorAll('.mood');
const randomize = document.querySelector('#randomize');
const clear = document.querySelector('#clear'); 

moods.forEach(mood => {
  mood.addEventListener('click', () => {
	// if is already selected, deselect it
	if (mood.classList.contains('selected')) {
		mood.classList.remove('selected');
		activeColor = defaultColor;
	} else {
		moods.forEach(mood => {
			mood.classList.remove('selected');
		});

		mood.classList.add('selected');
		activeColor = getComputedStyle(mood).getPropertyValue('color');
	}
	});	
});

const getAllDays = year => {
  // First day of the year - 1st January
	const firstDay = new Date(`January 1 ${year}`);
	// Last day of the year - 31th December - used to stop adding days to the array
	const lastDay = new Date(`December 31 ${year}`);

	// Add first day
	const days = [firstDay];

	// Used to keep track of the day
	let lastDayInArray = firstDay;

	// Loop while there are new days to be added in the current year
	while (lastDayInArray.getTime() !== lastDay.getTime()) {
		days.push(addDays(lastDayInArray, 1));
		lastDayInArray = days[days.length - 1];
	}

	return days;
};

const dates = getAllDays(currentYear);

let monthsHTML = '';

// Loop over the months and create a div for each month
months.forEach((month, idx) => {});

calendar.innerHTML = monthsHTML;

// Loop over each day and
dates.forEach(date => {});

// Add click event to all the .circles
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
	circle.addEventListener('click', () => {
		circle.style.backgroundColor = activeColor;
	});
});

// Randomize functionality
randomize.addEventListener('click', () => {});

// Clear functionality
clear.addEventListener('click', () => {});

function getRandomColor() {}

function createDateEl(date) {}

function createEmptySpot() {}

//from stackoverfllow???
function addDays(date, days) {}
