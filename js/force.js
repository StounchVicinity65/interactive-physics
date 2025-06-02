let force = 10, mass = 2;
let velocity = 0, position = 50;

function simulateForce() {
  force = 10;
  mass = 2;
  velocity = 0;
  position = 50;
}

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
}

function draw() {
  background(240);
  let acceleration = force / mass;
  velocity += acceleration * 0.1;
  position += velocity;

  fill(255, 100, 100);
  ellipse(position, height / 2, 50);

  if (position > width) position = 0;
}
