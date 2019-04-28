let corvi;
let blockers = [];

let world = {
  gravity: 0.9,
  blockerSpawnRate: 50,
  blockerHeight: 20, //Remember this
  gameState: "menu"
};

function setup() {
  createCanvas(1200, 600);
  corvi = new Bird();
  blockers.push(new Blocker());
}

function draw() {
  background(0);
  switch (world.gameState) {
    case "game":
      runGame();
      break;
    case "menu":
      loadMenu();
      break;
  }
}

function loadMenu() {
  textSize(32);
  text("Press Space to Start", width / 2, height / 2);
  textAlign(CENTER, CENTER);
  fill(0, 102, 153);
}

function runGame() {
  for (let i = blockers.length - 1; i >= 0; i--) {
    blockers[i].show();
    blockers[i].update();

    if (blockers[i].collide(corvi)) {
      console.log("HITS");
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
  if (key == " ") {
    if (world.gameState === "menu") {
      world.gameState = "game";
    } else {
      if (corvi.alive) {
        corvi.flap();
      }
    }
    if (key == "f") {
      corvi.wha();
    }
  }
}
