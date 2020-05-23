// load event listeners
loadEventListeners();

function loadEventListeners() {
  //ui variables
  clearInterval(startTimer);

  if(typeof(dates) == 'undefined'){
    date = new Date(newYear).getTime();
  }else{
    date = new Date(dates).getTime();
  }
};

var timeTo = document.getElementsById('time-to').value,
    date,
    now = new Date(),
    newYear = new Date('1.1.2020').getTime(),
    startTimer = '';

// calculate date, hour, minute and second
function calcTime(dates) {}
