let velocity = 0, acceleration = 2, position = 50;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
}

function draw() {
  background(240);
  velocity += acceleration * 0.1;
  position += velocity;

  fill(100, 255, 100);
  ellipse(position, height / 2, 50);

  if (position > width) position = 0;
}
