let x = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}
function draw() {
  background(0); 
  fill(255);
  ellipse(x, height / 2, 50, 50);
  x += 3; 
  if (x > width) {
    x = 0; 
  }
}