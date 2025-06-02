let accBall;
let accelerationInput;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  accelerationInput = document.getElementById('acceleration');
  resetAcceleration();
}

function resetAcceleration() {
  accBall = {
    x: 150,
    y: height / 2,
    velocity: 0,
    acceleration: parseFloat(accelerationInput.value)
  };
}

function draw() {
  background(240);

  accBall.velocity += accBall.acceleration * 0.1;
  accBall.x += accBall.velocity;

  fill(100, 200, 255);
  ellipse(accBall.x, accBall.y, 40);

  if (accBall.x > width) accBall.x = 0;
}

