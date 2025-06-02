let particles = [];
let fusionStarted = false;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  resetFusion();
}

function resetFusion() {
  particles = [];
  for (let i = 0; i < 10; i++) {
    particles.push(createVector(random(width), random(height), 0));
  }
  fusionStarted = false;
}

function startFusion() {
  fusionStarted = true;
}

function draw() {
  background(20);
  noStroke();

  if (!fusionStarted) {
    fill(255, 150, 0);
    for (let p of particles) {
      ellipse(p.x, p.y, 20);
      // particles move randomly before fusion starts
      p.x += random(-1, 1);
      p.y += random(-1, 1);
      // keep inside canvas
      p.x = constrain(p.x, 0, width);
      p.y = constrain(p.y, 0, height);
    }
  } else {
    // Fusion effect - particles move toward center and glow
    fill(255, 255, 0, 200);
    ellipse(width / 2, height / 2, 70);  // bright fusion core

    fill(255, 150, 0);
    for (let p of particles) {
      // Move particles gradually toward center
      p.x += (width / 2 - p.x) * 0.05;
      p.y += (height / 2 - p.y) * 0.05;
      ellipse(p.x, p.y, 20);
    }
  }
}
