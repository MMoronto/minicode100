const currentYear = 2020;
const weekDays = [];
const months = [];
const colors = [];
const defaultColor = ;
let activeColor = '';

const calendar = document.getElementById('calendar');
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
