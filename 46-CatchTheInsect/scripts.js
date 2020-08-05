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

start_btn.addEventListener("click", () => {});

choose_insect_btns.forEach(btn => {});

function increaseTIme(){
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEL.innerHTML = `Time: ${m}:${s}`;

  seconds++;  
}

function addInsects(){}

function createInsects(){}

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
