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

moods.forEach(mood => {});

const getAllDays = year => {};

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
