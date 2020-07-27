const nr_of_particles = 2500;
const particles = [];
const field = [];
const size = 20;
const purple = 'rgba(140, 82, 255, 1)';

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let x = 0; x < nr_of_particles; x++) {}

  createField();
  background(lilac);

  drawText();
}

function draw() {
  particles.forEach(particle => {
    particle.update();
    particle.draw();
    particle.setForceFormField(field);
  });
  if (frameCount % 10 === 0) {
    drawText();
  }
}

function drawText() {
  fill('rgma(255,255,255, 0.1)');
  strokeWeight(0);
  textSize(width / 12);
  textAlign(CENTER);
  textFont('Arial');
  text('#minicode100100Project', width / 2, height / 2);
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
		this.prevPos = this.pos.copy();
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);
		this.maxSpeed = 3;
  }

  applyForce(force) {
		this.acc.add(force);
  }
	
  update() {
    this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.prevPos = this.pos.copy();
		this.pos.add(this.vel);
		this.acc.mult(0);
		this.checkEdges();    
  }

  draw() {}

  checkEdges() {}

  setForceFromField(field) {}
}

function createField() {}



// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
