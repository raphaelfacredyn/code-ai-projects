function setup() {
    createCanvas(500, 500)
}

function draw() {
    background(255);
    fill(156, 39, 176);
    var numRects = 10;
    var rectWidth = 30;
    var rectHeight = 30;
    for (var rectNum = 0; rectNum < numRects; rectNum++) {
        rect(rectNum * rectWidth, 0, rectWidth, rectHeight)
    }
}