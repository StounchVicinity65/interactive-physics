let weightInput, densityInput;
let objectY;

function setup() {
  createCanvas(windowWidth, windowHeight * 0.75);
  weightInput = document.getElementById("weight");
  densityInput = document.getElementById("density");
  objectY = height / 2;
}

function draw() {
  background(200, 230, 255);
  fill(255);
  rect(width / 2 - 25, objectY, 50, 50);
}

function simulateBuoyancy() {
  let weight = parseFloat(weightInput.value);
  let density = parseFloat(densityInput.value);
  if (density * 10 > weight) {
    objectY -= 20; // float
  } else {
    objectY += 20; // sink
  }
}
