/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


/* Build out FUnctions */
function() togglePlay {

const method = video.paused ? ‘play’: ‘pause’ ;
video[method]();
}

function updateButton() {
const icon = this.pause ? ‘ ▶️’ : ‘⏸’;
console.log(icon);
toggle.textContext = icon;
}


function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}


functioin handleRangeUpdate() {
 video[this.name] = this.value;
}


function handleProgress() {
 const percent = (video.currentTime / video.duration) * 100;
 progressBar.style.flexBasis = `${percent}%`;
}


functioin scrub(e) {
 const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
 video.currentTime = scrubTime;
}
