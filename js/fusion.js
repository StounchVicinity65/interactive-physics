let particles = [];

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  for (let i = 0; i < 10; i++) {
    particles.push(createVector(random(width), random(height), 0));
  }
}

function draw() {
  background(20);
  fill(255, 150, 0);
  noStroke();

  for (let p of particles) {
    ellipse(p.x, p.y, 20);
    p.x += random(-2, 2);
    p.y += random(-2, 2);

    // Fusion effect
    if (dist(p.x, p.y, width / 2, height / 2) < 30) {
      fill(255, 255, 0);
      ellipse(width / 2, height / 2, 50);
    }
  }
}
