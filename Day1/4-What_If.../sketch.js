function setup() {
    createCanvas(500, 500)
}

function draw() {
    if (mouseX < width / 2) {
        background(0, 255, 0)
    } else {
        background(0, 0, 255)
    }
}