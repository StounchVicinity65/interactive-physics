let weightInput, densityInput;
let boxY = 300, velocity = 0;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  weightInput = document.getElementById('weight');
  densityInput = document.getElementById('density');
}

function simulateBuoyancy() {
  boxY = 300;
  velocity = 0;
}

function draw() {
  background(200, 230, 255);
  fill(0, 100, 255, 150);
  rect(0, height/2, width, height/2);

  let weight = float(weightInput.value);
  let density = float(densityInput.value);
  let buoyantForce = density * 9.8;
  let netForce = buoyantForce - weight;

  velocity += netForce * 0.1;
  boxY += velocity;

  boxY = constrain(boxY, height/2, height - 50);

  fill(255);
  rect(width/2 - 25, boxY, 50, 50);
}
