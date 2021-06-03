
var blob;
var sx = 0;
var sy = 0;


function preload() {
  blob = loadJSON("derek.json");
}

function setup() {
  createCanvas(400,400);
  background(194, 227, 252);
  rectMode(CENTER);

  // this shows the whole blob json data package
  console.log(blob);
  noStroke();
}



function draw() {
  background(194, 227, 252);

  updateToon(blob.toons[0]);  // Natasha
  updateToon(blob.toons[1]);  // Boris
}



function updateToon(obj) {
  push();

  if ( int(random(10)) > 8) {
   obj.nextX = int(random(obj.moveX.length));
   obj.nextY = int(random(obj.moveY.length));
  }

  obj.posX += obj.moveX[obj.nextX] / 2;
  obj.posY += obj.moveY[obj.nextY] / 2;


  // console.log(obj.posX);

   if (obj.posX > width) {
     obj.posX = 0;
   }

   if (obj.posX < 0) {
     obj.posX = width;
   }

   if (obj.posY > height) {
     obj.posY = 0;
   }

   if (obj.posY < 0) {
     obj.posY = height;
   }

   drawToon(obj);

  pop();
}



function drawToon( obj) {
  push();

  translate(obj.posX , obj.posY);

   // head
  fill(obj.r,obj.g,obj.b);
  ellipse(0,20,obj.head,obj.head);

  //mouth
  fill(255);
  ellipse(0, obj.head * 2/3, obj.mouth, obj.mouth);
  fill(obj.r,obj.g,obj.b);
  rect(0, (obj.head * 2/3) - (obj.mouth / 2), obj.mouth, obj.mouth);

  //cigar
  fill(102, 51, 0);
  shearX(PI / 6.0);
  rect(-5, obj.head * 2/3 + 3, obj.cigar, 5);
  shearX(-PI / 6.0);

  //eyes
  fill(255);
  ellipse(-10,10,obj.eyes * 2,obj.eyes * 2);
  ellipse(10,10,obj.eyes * 2,obj.eyes * 2);
  fill(0);
  ellipse(-10,10,obj.eyes,obj.eyes);
  ellipse(10,10,obj.eyes,obj.eyes);

  //eyebrows
  fill(0);
  rect(-10, obj.eyes / 2, 10, obj.eyes);
  rect(10, obj.eyes / 2, 10, obj.eyes);

  //torso
  fill(obj.r,obj.g,obj.b);
  rect(0,70,obj.torso,obj.torso);

  //arms
  rect(obj.torso / 2, 60, obj.arms, 5);
  rect(-obj.torso / 2, 60, obj.arms, 5);

  //legs
  rect(obj.torso / 2, 70 + obj.torso / 2, 5, obj.legs);
  rect(-obj.torso / 2, 70 + obj.torso / 2, 5, obj.legs);

  //name
  fill(255);
  textSize(20);
  text(obj.name,30,-20);

  //hat
  fill(255 - obj.r, 255 - obj.g, 255 - obj.b);
  rect(0, 0, obj.head + 20, 5);
  rect(0, -obj.hat / 2, obj.head, obj.hat);

  pop();
}
