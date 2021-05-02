

var snow1Img, snow1

function preload() {
  snow1Img=loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  snow1=createSprite(400, 200, 50, 50);
  snow1.addImage(snow1Img)
}

function draw() {
  background("snow1.jpg");  
  drawSprites();
}