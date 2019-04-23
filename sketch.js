let corvi;
let blockers = [];

let world = {
  gravity: 0.9,
  blockerSpawnRate: 50,
  blockerHeight: 20 //Remember this
};

function setup() {
  createCanvas(1200, 600);
  corvi = new Bird();
  blockers.push(new Blocker());
}

function draw() {
  background(0);

  for (let i = blockers.length - 1; i >= 0; i--) {
    blockers[i].show();
    blockers[i].update();

    if (blockers[i].collide(corvi)) {
      console.log("HITS")
      corvi.alive = false;
    }

    if (blockers[i].offscreen()) {
      blockers.splice(i, 1);
    }
  }
  corvi.show();
  if (corvi.alive) {
    corvi.update();
  }

  if (frameCount % world.blockerSpawnRate === 0) {
    blockers.push(new Blocker());
  }
}

function keyPressed() {
  if (corvi.alive) {
    if (key == " ") {
      corvi.flap();
    }
  }
  if (key == "f") {
    corvi.wha();
  }
}
