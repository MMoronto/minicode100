let countdown;
const player = document.querySelector('.display__time-left');
const endTime = player.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);
  
  const now = Date.now();
}


  buttons.forEach(button => button.addEventListener('click', startTimer));
  document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
  });
