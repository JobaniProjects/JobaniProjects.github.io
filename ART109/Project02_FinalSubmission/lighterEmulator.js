let trigger = 1;
let img, imgRED_OFF, imgBLUE;
var redZippoButton, blueZippoButton, realisticButton;
var realX = 0;
var redX = -1000;
var blueX = -1000;
var lightX1 = -1000;
var lightX2 = -1000;

//sound effects
var zippoOpen;
var zippoClose;
var zippoDryStrike;

//background colors (r, g, b)
var r= 0;
var g = 0;
var b = 0;

function preload()
{
  //Lighter images
  img = loadImage('images/zippoLighter_Off.png');
  imgRED_OFF = loadImage('images/zippoLighter_RED_OFF.png');
  imgBLUE = loadImage('images/zippoLighter_BLUE_OFF.png');

  //Sound preload
  zippoOpen = loadSound("sound/zippoOpen.mp3");
  zippoClose = loadSound("sound/zippoClose.mp3");
  zippoDryStrike = loadSound("sound/zippoDryStrike.mp3");
}

function setup()
{
  //Red Lighter Button changes lighter to red
  redZippoButton = new Clickable();
  redZippoButton.width = 100;
  redZippoButton.color = "#d91a24";
  redZippoButton.locate(30, 50);
  redZippoButton.text = "Red Lighter";

  redZippoButton.onPress = function()
  {
      //zippoOpen.play();
      redX = 0;
      realX = -1000;
      blueX = -1000;
      lightX1 = -1000;
  //    lightX2 = -12;
  }

  //Blue Lighter Button changes lighter to blue
  blueZippoButton = new Clickable();
  blueZippoButton.width = 100;
  blueZippoButton.color = "#0c6ff0";
  blueZippoButton.locate(30,120);
  blueZippoButton.text = "Blue Lighter";

  blueZippoButton.onPress = function()
  {
    blueX = 0;
    redX = -1000;
    realX = -1000;
    lightX1 = -1000;
//    lightX2 = -12;
  }

  //Realistic Lighter changes lighter to realistic
  realisticButton = new Clickable();
  realisticButton.width = 100;
  realisticButton.color = "#4a4c4f";
  realisticButton.locate(30,190);
  realisticButton.text = "Realistic Lighter";

  realisticButton.onPress = function()
  {
    realX = 0;
    redX = -1000;
    blueX = -1000;
//    lightX1 = -12;
    lightX2 = -1000;
  }
}

function draw()
{
  var canvas = createCanvas(700,500);
  canvas.parent("canvas-container");
  background(r,g,b);
  //Light when lighter is on


  redZippoButton.draw();
  blueZippoButton.draw();
  realisticButton.draw();

  zippoLighter();
}

function mousePressed()
{
  if (trigger === 0)
  {
    zippoClose.play();
    //background(0, 0, 0);
    r= 0;
    g = 0;
    b = 0;
    if(redX == 0 || realX == 0 || blueX == 0 && trigger ==0)
    {
      lightX1 = -1000;
      lightX2 = -1000;
    }
    trigger = 1;
    img = loadImage('images/zippoLighter_Off.png');
    imgRED_OFF = loadImage('images/zippoLighter_RED_OFF.png');
    imgBLUE = loadImage('images/zippoLighter_BLUE_OFF.png');
  }
  else
  {
    //background(84, 65, 50);
    zippoOpen.play();
    zippoDryStrike.play();
    r= 20;
    g = 20;
    b = 20;
    if(realX == 0 && redX == -1000 && blueX == -1000)
    {
      lightX1 = -12;
      lightX2 = -1000;
    }
    else if(redX == 0 || blueX == 0 && realX == -1000)
    {
      lightX2 = -12;
      lightX1 = -1000;
    }
    trigger = 0;
    img = loadImage('images/zippoLighter.png');
    imgRED_OFF = loadImage('images/zippoLighter_RED_ON.png');
    imgBLUE = loadImage('images/zippoLighter_BLUE_ON.png');
  }
}

function zippoLighter()
{
  //Light emits when lighter is on for realistic lighter
  push();
    noStroke();
    translate(mouseX + lightX1, mouseY -36);
    fill(194, 153, 58);
    circle(0, 0, 80); // -12 , -36
    fill(255, 204, 0,70);
    circle(0, 0, 50);
  pop();

  //light emits when lighterr is on for all other lighters
  push();
    noStroke();
    translate((mouseX + lightX2) + 24, mouseY -36);
    fill(194, 153, 58);
    circle(0, 0, 80); // -12 , -36
    fill(255, 204, 0,70);
    circle(0, 0, 50);
  pop();

  //Creates Realistic Lighter
  push();
    translate((mouseX-realX) -50,mouseY-50); //-50
    scale(.14);
    image(img,0,0);
  pop();

  //Creates Red Lighter
  push();
    translate((mouseX - redX) - 30, mouseY-44);
    scale(.15);
    image(imgRED_OFF, 0, 0);
  pop();

  //Creates Blue Lighter
  push();
    translate((mouseX - blueX) - 30, mouseY-44);
    scale(.15);
    image(imgBLUE,0,0);
  pop();

}
