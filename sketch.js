let corvi;

function setup() {
    createCanvas(1200,600);
    corvi = new Bird();
}

function draw() {
    background(0);
    corvi.show();
    corvi.update();
}

function keyPressed() {
    if (key == ' ') {
        corvi.flap();
    }
    if (key == 'f') {
        corvi.wha();
    }
}