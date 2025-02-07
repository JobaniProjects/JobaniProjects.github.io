//David Z
var rand = Math.floor(Math.random() * 256);
let jojo;
//var backgroundC = color(255,255,255);
var backgroundC;



function setup() {
  createCanvas(500,500);
  jojo = loadImage('jojo.png');
  background(255);
  backgroundC = color(255);
  smooth();

}

function draw()
{

  if(keyIsPressed)
  {
    clear_print();
  }

  if(mouseIsPressed)
  {
      drawChoice();
  }
}

function drawChoice()
{
  //backgroundC = backgroundC;
  var currentKey = key;

  switch(currentKey)
  {
    case '1':                 //black line
      console.log("1");
      drawLine(color(0,0,0), mouseX, mouseY, pmouseX, pmouseY);
      break;
    case '2':                 //constant black line
      console.log("2");
      drawLine(color(0),mouseX,mouseY,pmouseX,pmouseY);
      drawLine(color(0),10,10,pmouseX,pmouseY);
      break;
      //********************
      case ('3'):     //green square
          console.log("3");
          drawSquare(color(100,200,100),mouseX,mouseY, 20, 20);
          break;
      case '4':       //rainbow line
          console.log("4");
          drawLine(color(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)),mouseX,mouseY,pmouseX,pmouseY);
          break;
      case '5':     //thick rainbow line
          console.log("5");
          drawThiccLine(color(Math.floor(Math.random() * 256),Math.floor(Math.random() * 220),Math.floor(Math.random() * 220)),8,mouseX,mouseY,pmouseX,pmouseY);
          break;
      case '6':         //red soft circle
          console.log("6");
          drawCircle(color(255, 0, 0, 40), mouseX,mouseY,30,30);
          break;
      case '7':       //random orange squares and rectangles
          console.log("7");
          drawSquare(color(300, 100, 0, 80), mouseX, mouseY, Math.floor(Math.random() * 47) + 10, Math.floor(Math.random() * 45) + 12);
          setTimeout(drawSquare, 100);
          break;
      case '8':     //Yellow spray paint
          console.log("8");
          drawThiccLine(color(300,300,0,80),10,mouseX,mouseY,pmouseX,pmouseY);
          break;
      case '9':       //Eraser
          console.log("9");
          eraser(backgroundC,mouseX,mouseY,25);
          break;
      case '0':       //Polka dot
          console.log("0");
          polkaDot(mouseX,mouseY);
          break;
      case 'q':           //Polka dot sideways
          console.log("q");
          polkaDotSideways(mouseX,mouseY);
          break;

      case 'o':      //change background to orange
          console.log("o");
          changeBKGD(color(255, 183, 48));
          backgroundC = color(255, 183, 48);
          break;
      case 'b':         //change background to black
          console.log("b");
          changeBKGD(color(0));
          backgroundC = color(0);
          break;
      case 'p':        //change background to purple
          console.log("p");
          changeBKGD(color(182, 156, 255));
          backgroundC = color(182, 156, 255);
          break;
      case 'g':       //change background to green
          console.log("g");
          changeBKGD(color(171, 245, 0));
          backgroundC= color(171, 245, 0);
          break;
      case 'r':       //change background to rose color
          console.log("r");
          changeBKGD(color(255, 204, 204));
          backgroundC= color(255, 204, 204);
          break;
      case 'j':           //image one jojo stamp
          console.log("j");
          image(jojo,mouseX - 50,mouseY - 50);
          break;
      case 'w':         //random oval colored shapes
          console.log("w");
          drawCircle(color(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)),mouseX,mouseY, Math.floor(Math.random() * 59) + 2 ,Math.floor(Math.random() * 58) + 1);
          break;
      case 'e':  //Random colored horizontal lines
          console.log("e");
          //drawLine(color(random(255),random(255),random(255)),random(width),random(height),random(width),random(height));
          drawLine(color(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)),Math.floor(Math.random() * window.outerWidth + 1),mouseY,pmouseX,pmouseY);
          break;
  }
}

function drawLine(theColor, x1, y1, x2, y2)
{
  strokeWeight(1);
  stroke(theColor);
  line(x1, y1, x2, y2);
}

function drawThiccLine(theColor, sWeight, x1, y1, x2, y2)
{
  stroke(theColor);
  strokeWeight(sWeight);
  line(x1,y1,x2,y2);
}

function polkaDot(x, y)
{
  //bright blue dot
  stroke(87,255,247);
  fill(87,255,247);
  ellipse(x-200,y,30,30);
  //green dot
  stroke(56,156,36);
  fill(56,156,36);
  ellipse(x-150,y,30,30);
  //yellow dot
  stroke(234,237,47);
  fill(234,237,47);
  ellipse(x-100,y,30,30);
  //dark purple dot
  stroke(2,5,61);
  fill(2,5,61);
  ellipse(x-50,y,30,30);
  //orange dot
  stroke(240,154,7);
  fill(240,154,7);
  ellipse(x,y,30,30);
  //red dot
  stroke(219,23,13);
  fill(219,23,13);
  ellipse(x+50,y,30,30);
}

function polkaDotSideways(x, y)
{
  //bright blue dot
  stroke(87,255,247);
  fill(87,255,247);
  ellipse(x-200,y -200,30,30);
  //green dot
  stroke(56,156,36);
  fill(56,156,36);
  ellipse(x-150,y -150,30,30);
  //yellow dot
  stroke(234,237,47);
  fill(234,237,47);
  ellipse(x-100,y -100,30,30);
  //dark purple dot
  stroke(2,5,61);
  fill(2,5,61);
  ellipse(x-50,y -50,30,30);
  //orange dot
  stroke(240,154,7);
  fill(240,154,7);
  ellipse(x,y,30,30);
  //red dot
  stroke(219,23,13);
  fill(219,23,13);
  ellipse(x+50,y + 50,30,30);
}

function drawSquare(theColor, x1, y1, w, h)
{
  strokeWeight(1);
  stroke(1);
  fill(theColor);
  rect(x1,y1,w,h);
}

function drawCircle(theColor, x, y, w, h)
{
  fill(theColor);
  stroke(203, 245, 204);
  strokeWeight(1);
  ellipse(x,y,w,h);
}

function changeBKGD(theColor)
{
  background(theColor);
}

function eraser(theColor, x, y, size)
{

  stroke(theColor);
  fill(theColor);
  ellipse(x,y,size,size);
}

function clear_print()
{
  if(key == 'x' || key == 'X')
  {
    background(255);
    backgroundC = color(255);
  }
  else if(key == 's' || key=='S')
  {
    //saveCanvas('screenshot' , 'jpg');
    //setTimeout(clear_print, 500);
    //break();

     //saveFrame("images/x_xxx_####.png");
     //delay(500);
  }
}
