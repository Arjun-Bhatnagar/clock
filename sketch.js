var sec,min,hrs
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
   hrs = hour();
   min = minute();
   sec = second();
  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);  
  translate (200,200)
  rotate(-90)

  var secang = map(sec,0,60,0,360)
  var minang = map(min,0,60,0,360)
  var hourang = map(hrs % 12,0,12,0,360)

  push()
  rotate(secang)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  drawSprites();
  push()
  rotate(minang)
  stroke(0,255,4)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  drawSprites();
  push()
  rotate(hourang)
  stroke(0,242,255)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  stroke(0,255,0)
  point(0,0)
  drawSprites();
}