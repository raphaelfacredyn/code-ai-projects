

// -Challenge-
var recursionDepth=0;

function setup() {
  noSmooth()
  createCanvas(1440, 900)
  strokeWeight(2)
  fill(random(0,255),random(0,255),random(0,255))
  rectMode(CENTER)
}

function recursiveRect(xpos,ypos,length,height,counter){
  if(counter < recursionDepth){
    recursiveRect(xpos-length/2, ypos-height/2, length/2, height/2, counter+1)
    recursiveRect(xpos+length/2, ypos-height/2, length/2, height/2, counter+1)
    recursiveRect(xpos-length/2, ypos+height/2, length/2, height/2, counter+1)
    recursiveRect(xpos+length/2, ypos+height/2, length/2, height/2, counter+1)
  }
  rect(xpos,ypos,length,height)
}

function mouseClicked(){
  background(255)
  recursionDepth+=1
  recursiveRect(200, 200,200,200,0)
}
