function preload()
{
  img = loadImage('images/zippoLighter.png');
  //img02 = loadImage('images/zippoLighter_Off.png');
}

function draw()
{
  var canvas02 = createCanvas(400,200);

  //Creates container for canvas
  canvas02.elt.style.border = "2px solid green";
  canvas02.parent("container-2");

  background(172, 176, 252);

  lighterMove();

}

function lighterMove()
{
  push();
    translate(mouseX - 50,mouseY -60);
    scale(.1);
    image(img, 0,0);
  pop();
}
