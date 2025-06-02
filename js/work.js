let force = 5;
let displacement = 0;
let work = 0;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  displacement = 0;
}

function draw() {
  background(240);
  displacement += 1;
  work = force * displacement;

  fill(255, 200, 0);
  rect(displacement, height / 2, 50, 50);

  if (displacement > width) displacement = 0;
}
