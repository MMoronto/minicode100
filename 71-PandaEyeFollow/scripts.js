const eyes = document.querySelectorAll('.eye-roll');

window.addEventListener('mousemove', (e) => {
  eyes.forEach(eye => {
      const x = eye.getBoundingClientRect().left + (eye.clientWidth / 2);
      const y = eye.getBoundingClientRect().top + (eye.clientHeight / 2);
  });
});






