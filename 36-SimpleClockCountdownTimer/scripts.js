// load event listeners
loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', function() {calcTime(); });
};

var timeTo = document.getElementsById('time-to').value,
    date,
    now = new Date(),
    newYear = new Date('1.1.2020').getTime(),
    startTimer = '';

// calculate date, hour, minute and second
function calcTime(dates) {
  //ui variables
  clearInterval(startTimer);

  if(typeof(dates) == 'undefined'){
    date = new Date(newYear).getTime();
  }else{
    date = new Date(dates).getTime();
  }

function updateTimer(date) {}

startTimer = setInterval(function() {updateTimer(date); }, 1000);
}
