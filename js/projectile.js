let angleInput, speedInput;
let x = 0, y = 0;
let angle = 45;
let speed = 10;
let time = 0;
let launched = false;

function setup() {
  createCanvas(windowWidth, windowHeight * 0.75);
  angleInput = document.getElementById("angle");
  speedInput = document.getElementById("speed");
}

function draw() {
  background(240);
  if (launched) {
    let rad = radians(angle);
    x = speed * cos(rad) * time;
    y = speed * sin(rad) * time - 0.5 * 9.8 * time * time;

    ellipse(x + 50, height - y - 50, 20);
    time += 0.05;

    if (height - y - 50 > height) launched = false;
  }
}

function launchProjectile() {
  angle = parseFloat(angleInput.value);
  speed = parseFloat(speedInput.value);
  x = 0;
  y = 0;
  time = 0;
  launched = true;
}
