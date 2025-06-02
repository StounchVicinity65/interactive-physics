let core, fragments = [];
let fissionTriggered = false;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  core = { x: width / 2, y: height / 2, exploded: false };
}

function simulateFission() {
  fissionTriggered = true;
  if (!core.exploded) {
    for (let i = 0; i < 12; i++) {
      fragments.push({
        x: core.x,
        y: core.y,
        vx: random(-4, 4),
        vy: random(-4, 4),
        size: random(5, 15)
      });
    }
    core.exploded = true;
  }
}

function draw() {
  background(240);

  if (!core.exploded) {
    fill(0);
    ellipse(core.x, core.y, 60);
  } else {
    fill(255, 0, 0);
    for (let frag of fragments) {
      frag.x += frag.vx;
      frag.y += frag.vy;
      ellipse(frag.x, frag.y, frag.size);
    }
  }
}
