function setup() {
    createCanvas(500, 500);
    frameRate(1)
}

function draw() {
    background(255);
    var total = random(10, 100);
    for (var i = 0; i < total; i++) {
        drawSmileyFace(random(0, width), random(0, height))
    }
}

function drawSmileyFace(x, y) {
    noStroke();

    fill(255, 255, 0);
    ellipse(x + 50, y + 50, 100, 100);
    fill(255, 0, 0);
    ellipse(x + 30, y + 40, 20, 40);
    ellipse(x + 70, y + 40, 20, 40);
    fill(0);
    ellipse(x + 50, y + 80, 40, 20);
}