let position = 50;
let velocity = 5;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
}

function draw() {
  background(240);
  position += velocity;
  if (position > width) position = 0;

  fill(100, 100, 255);
  ellipse(position, height / 2, 50);
}
