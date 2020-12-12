const particles = [];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  const particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);
  for(let i=0; i<particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {}

class Particle {}
