let velBall;
let velocityInput;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  velocityInput = document.getElementById('velocity');
  resetVelocity();
}

function resetVelocity() {
  velBall = {
    x: 50,
    y: height / 2,
    velocity: parseFloat(velocityInput.value)
  };
}

function draw() {
  background(240);

  velBall.x += velBall.velocity;
  fill(255, 100, 100);
  ellipse(velBall.x, velBall.y, 40);

  if (velBall.x > width) velBall.x = 0;
}
