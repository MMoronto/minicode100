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

  function updateTimer(date) {

    var now = new Date().getTime();
    var distance = date - now;

    // Time calculations for days, hours, minutes and Seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 *60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);    
  }

  startTimer = setInterval(function() {updateTimer(date); }, 1000);
}
