function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  fill(0);
  textSize(32);
  text("It works!", 100, 200);
}
