function setup() {
  createCanvas(1440, 900)
}

function draw() {
  fill(mouseX / 3, (mouseY + mouseX) / 6, mouseY / 3)
  noStroke()
  ellipse(mouseX / 6, mouseY, mouseY + mouseX / 5, mouseY + mouseX / 5)
}