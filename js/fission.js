let core, fragments = [];

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  core = { x: width/2, y: height/2, exploded: false };
}

function simulateFission() {
  core.exploded = true;
  for (let i = 0; i < 10; i++) {
    fragments.push({
      x: core.x,
      y: core.y,
      vx: random(-3, 3),
      vy: random(-3, 3)
    });
  }
}

function draw() {
  background(240);

  if (!core.exploded) {
    fill(0);
    ellipse(core.x, core.y, 50);
  } else {
    fill(255, 0, 0);
    for (let frag of fragments) {
      frag.x += frag.vx;
      frag.y += frag.vy;
      ellipse(frag.x, frag.y, 10);
    }
  }
}
