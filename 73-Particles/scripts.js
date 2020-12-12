const particles = [];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  const particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);
  for(let i=0; i<particlesLength; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(20);

  particles.forEach((particle, idx) => {
    particle.update();
    particle.draw();
    particle.checkParticles(particles.slice(idx));
  });
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.size = 5;
  }

  update() {
    this.pos.add(this.vel);
    this.edges();
  }


  draw() {
    noStroke();
    fill('rgba(255, 255, 255, 0.5)');
    circle(this.pos.x, this.pos.y, this.size * 2);
  }

  edges() {}

  checkParticles(particles) {}
}
