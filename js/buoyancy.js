let weightInput, densityInput;
let boxY, velocity, isSimulating = false;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  weightInput = document.getElementById('weight');
  densityInput = document.getElementById('density');
  resetSimulation();
}

function simulateBuoyancy() {
  resetSimulation();
  isSimulating = true;
}

function resetSimulation() {
  boxY = height / 2 + 50;
  velocity = 0;
  isSimulating = false;
}

function draw() {
  background(200, 230, 255);
  fill(0, 100, 255, 150);
  rect(0, height / 2, width, height / 2); // water

  if (isSimulating) {
    let weight = float(weightInput.value);
    let density = float(densityInput.value);
    let buoyantForce = density * 9.8;
    let netForce = buoyantForce - weight;

    velocity += netForce * 0.1;
    boxY += velocity;
    boxY = constrain(boxY, height / 2, height - 50);
  }

  fill(255);
  rect(width / 2 - 25, boxY, 50, 50);
}

