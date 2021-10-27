// Click within the image to change
// the lighter to either on or off.

let value = 0;
let img;

var x1 = 120; //110
var x2 = 1000; //100

function preload()
{
  img = loadImage('images/zippoLighter.png');
  img02 = loadImage('images/zippoLighter_Off.png');
}

function setup()
{

}

function draw()
{
  var canvas = createCanvas(400,200);
  canvas.elt.style.border = "2px solid green";
  //Creates container for canvas
  canvas.parent("canvas-container");

  background(172, 252, 185);
  lighterOn();
  lighterOff();

}

function mousePressed()
{
  if (value === 0)
  {
    value = 255;
    x1 = -10000;
    x2 = 120;
  }
  else
  {
    value = 0;
    x1 = 120;
    x2 = -10000;
  }
}

//Turns the lighter on when mouse is pressed
function lighterOn()
{
  push();
    translate(x1,50);  //x1 = 120; , 50
    scale(.1);
    image(img, x1,0);
  pop();
}

//Turns the lighter off when mouse is pressed
function lighterOff()
{
  push();
    translate(x2,76);   //x2 = 100 , 76
    scale(.17);
    image(img02,x2,0); //100 , 0
  pop();
}
