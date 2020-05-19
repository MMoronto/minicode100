today = new Date();
currentMonth = today.getMonth();
currentYear = tody.getYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

monthAnYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {}

function previous() {}

function jump() {}

function showCalendar(month, year) {}

// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
