// var ballXposition = 0
//
// function setup() {
//     createCanvas(500, 500)
// }
//
// function draw() {
//     ballXposition = ballXposition + 3
//     ellipse(ballXposition, 250, 20, 20)
// }
////-----------------------------------------
// //Challenge (Up, Down)
// var ballYposition = 0
//
// function setup() {
//     createCanvas(500, 500)
// }
//
// function draw() {
//     background(255, 157, 72)
//     fill(255, 255, 255)
//     ballYposition = ballYposition + 3
//     ellipse(250, ballYposition, 20, 20)
// }
////-----------------------------------------
// //Challenge (Diagonal)
// var ballYposition = 0
// var ballXposition = 0
//
// function setup() {
//     createCanvas(500, 500)
// }
//
// function draw() {
//     background(255, 157, 72)
//     fill(255, 255, 255)
//     ballYposition = ballYposition + 3
//     ballXposition = ballXposition + 3
//     ellipse(ballXposition, ballYposition, 20, 20)
// }
////-----------------------------------------
// //Challenge (random)
var ballYposition
var ballXposition

function setup() {
    createCanvas(500, 500)
    background(255, 157, 72)
    ballXposition = width/2
    ballYposition = height/2
}

function draw() {

    fill(255, 255, 255)
    ballYposition = ballYposition + random(-5,5)
    ballXposition = ballXposition + random(-5,5)
    ellipse(ballXposition, ballYposition, 20, 20)
}
////-----------------------------------------
