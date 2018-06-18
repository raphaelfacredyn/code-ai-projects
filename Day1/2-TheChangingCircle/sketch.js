// explain fill {RGB}, stroke, strokeWeight
// explain create canvas
// explain circle
// exlpain coordinate system

function setup() {
    createCanvas(500, 500);
}

function draw() {
    // first do withought backgound and stroke
    background(0)
    noStroke();

    fill(mouseX, mouseY, (mouseX + mouseY) / 2)
    ellipse(mouseX, mouseY, mouseX, mouseY)
}