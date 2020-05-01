let countdown;
const player = document.querySelector('.display__time-left');
const endTime = player.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);
}
