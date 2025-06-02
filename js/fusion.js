let particles = [];
let temperatureInput, pressureInput;
let fusionTriggered = false;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  temperatureInput = document.getElementById('temperature');
  pressureInput = document.getElementById('pressure');

  for (let i = 0; i < 10; i++) {
    particles.push({
      pos: createVector(random(width), random(height)),
      vel: p5.Vector.random2D().mult(random(1, 2))
    });
  }
}

function simulateFusion() {
  fusionTriggered = true;
}

function draw() {
  background(20);
  noStroke();

  fill(255, 150, 0);
  for (let p of particles) {
    ellipse(p.pos.x, p.pos.y, 20);
    p.pos.add(p.vel);

    // Bounce off edges
    if (p.pos.x < 0 || p.pos.x > width) p.vel.x *= -1;
    if (p.pos.y < 0 || p.pos.y > height) p.vel.y *= -1;
  }

  // Fusion effect
  if (fusionTriggered) {
    fill(255, 255, 0, 200);
    ellipse(width / 2, height / 2, 80);
    fusionTriggered = false;
  }
}
