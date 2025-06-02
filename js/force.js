function setup() {
  createCanvas(windowWidth, windowHeight * 0.75);
  noLoop();
}

function draw() {
  background(240);
  textAlign(CENTER);
  textSize(24);
  text("Force = Mass × Acceleration", width / 2, height / 2);
}
