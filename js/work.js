let forceInput, displacementInput, angleInput
let work = null;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  forceInput = document.getElementById('force');
  displacementInput = document.getElementById('displacement');
  angleInput = document.getElementById('angle');
}

function draw() {
  background(240);
  displacement += 1;
  work = force * displacement;

  fill(255, 200, 0);
  rect(displacement, height / 2, 50, 50);

  if (displacement > width) displacement = 0;
}
