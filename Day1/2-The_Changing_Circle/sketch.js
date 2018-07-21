function setup() {
  createCanvas(500, 500)
}

function draw() {
  background(130, 70, 255)
  fill(mouseX / 2, (mouseY + mouseX) / 4, mouseY / 2)
  ellipse(mouseX, mouseY, mouseX / 3, mouseY / 3)
}

// // ----Chalenge!-----
// function setup() {
//   createCanvas(500, 500)
// }

// function draw() {
//   background(255, 127, 63)
//   fill(255, 255, 255)
//   ellipse(mouseX - 30, mouseY, 30, 30)
//   fill(0, 0, 0)
//   ellipse(mouseX + 30, mouseY, 30, 30)
//   fill(0, 255, 0)
//   ellipse(mouseX, mouseY - 30, 30, 30)
//   fill(0, 0, 255)
//   ellipse(mouseX, mouseY + 30, 30, 30)
// }