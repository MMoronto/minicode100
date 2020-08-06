const start_btn = document.getElementById('start_btn');
const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose_insect_btn');
const game_container = document.querySelector('.game_container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const annoying_message = document.getElementById('annoying_message');
let seconds = 0;
let score = 0;
let selected_insect = {};

start_btn.addEventListener("click", () => {
  screens[0].classList.add('up');
});

choose_insect_btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selected_insect = {
      src,
      alt 
    };
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();        
  });
});

function increaseTIme(){
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEL.innerHTML = `Time: ${m}:${s}`;

  seconds++;
}  

function addInsects(){
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function createInsects(){
    const insect = document.createElement('div');
    const { x, y } = getRandomLocation();
    insect.classList.add('insect');
    insect.style.left = `${x}px`;
    insect.style.top = `${y}px`;
    insect.innerHTML = `<img src="${selected_insect.src}" arc="${
      selected_insect.alt
    }" style="transform: rotation(${Math.random() * 360}deg)"/>`;
    insect.addEventListener('click', catchInsect);

    game_container.appendChild(insect);
}

function catchInsects(){}

function increaseScore(){
  score++;
  if (score > 19) {
    annoying_message.classList.add('visible');
  }
  scoreEl.innerHTML = 'Score: ${score}';  
}

function startGame(){}

function getRandomLocation(){}
