let countdown;
// const player = document.querySelector('.display__time-left');
// const endTime = player.querySelector('.display__end-time');
// const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  // clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop
    if(secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    console.log(secondsLeft);
  }, 1000);
}

  // buttons.forEach(button => button.addEventListener('click', startTimer));
  // document.customForm.addEventListener('submit', function(e) {
  //   e.preventDefault();
  //   const mins = this.minutes.value;
  //   console.log(mins);
  //   timer(mins * 60);
  //   this.reset();
  // });
