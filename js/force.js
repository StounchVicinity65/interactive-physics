let forceBall;
let forceInput, massInput;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  forceInput = document.getElementById('force');
  massInput = document.getElementById('mass');
  resetForce();
}

function resetForce() {
  let f = parseFloat(forceInput.value);
  let m = parseFloat(massInput.value);
  forceBall = {
    x: 50,
    y: height / 2,
    velocity: 0,
    acceleration: f / m
  };
}

function draw() {
  background(240);

  forceBall.velocity += forceBall.acceleration * 0.1;
  forceBall.x += forceBall.velocity;

  fill(200, 100, 255);
  ellipse(forceBall.x, forceBall.y, 40);

  if (forceBall.x > width) forceBall.x = 0;
}
