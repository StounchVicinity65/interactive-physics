let angleInput, speedInput;
let projectile = null;

function setup() {
  createCanvas(windowWidth - 240, windowHeight);
  angleInput = document.getElementById('angle');
  speedInput = document.getElementById('speed');
}

function launchProjectile() {
  let angle = radians(parseFloat(angleInput.value));
  let speed = parseFloat(speedInput.value);
  projectile = {
    x: 150,
    y: height - 150,
    vx: speed * cos(angle),
    vy: -speed * sin(angle),
    t: 0
  };
}

function draw() {
  background(240);
  fill(255, 50, 50);
  noStroke();

  if (projectile) {
    projectile.t += 0.1;
    let x = projectile.x + projectile.vx * projectile.t;
    let y = projectile.y + projectile.vy * projectile.t + 0.5 * 9.8 * sq(projectile.t);
    ellipse(x, y, 40);  // Bigger projectile with diameter 40
    
    // Stop animation when projectile goes below ground
    if (y > height) {
      projectile = null;
    }
  }
}

