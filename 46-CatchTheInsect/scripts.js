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

