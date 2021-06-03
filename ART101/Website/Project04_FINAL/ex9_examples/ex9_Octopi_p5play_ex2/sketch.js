


var snd1,snd2,snd3;
var img1,img2,img3;

var ghost, asterisk;

var anim1;

var nextbtnanim, nextbtnsprite;
var helpbtnanim, helpbtnsprite;

// var duration;
// var  slideWidth = 500;

function preload() {

  snd1 = loadSound("assets/beatbox.mp3");
  snd2 = loadSound("assets/beat.mp3");
  snd3 = loadSound("assets/death.mp3");
  img1 = loadImage("assets/bunker1.jpg");
  img2 = loadImage("assets/bunker2.jpg");
  img3 = loadImage("assets/bunker3.jpg");


  //NOTES on animation assets naming. You must only use numbers at the end of the file name.
  // i.e. animation_001 is fine. animation1_001 is not good. it confuses the loading function.
  // one technique with for managing sprites is to load them, and then move them off the canvas until needed

   helpbtnanim = loadAnimation('assets/help_u.png',
   'assets/help_r.png', 'assets/help_d.png');
   helpbtnsprite = createSprite(-500,0); //create and move 'off stage'
   helpbtnsprite.addAnimation('normal',helpbtnanim);
   nextbtnanim = loadAnimation('assets/next_btn_u.png',
   'assets/next_btn_r.png', 'assets/next_btn_d.png');
    nextbtnsprite = createSprite(-500,0);
    nextbtnsprite.addAnimation('normal',nextbtnanim);


}

// global manager object
var mgr;

function setup() {
    createCanvas(800, 800);
    mgr = new SceneManager();

    mgr.addScene (intro);
    mgr.addScene (main);
    mgr.addScene (help);
    mgr.showNextScene();


    //pausing sprite animations
    helpbtnsprite.animation.stop();
    nextbtnsprite.animation.stop();


}

function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseDragged");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( help );
            break;
    }

    mgr.keyPressed();
}



function loadAndShowNextNavBtn() {

  nextbtnsprite.position.x = width  -100;
  nextbtnsprite.position.y = height -100;
  nextbtnsprite.animation.stop();

  nextbtnsprite.onMouseOver = function() {
      this.animation.goToFrame(1);
  };

  nextbtnsprite.onMouseOut = function() {
     this.animation.goToFrame(0);
  };

  nextbtnsprite.onMousePressed = function() {
      this.animation.goToFrame(2);
  };

  nextbtnsprite.onMouseReleased = function() {
    this.animation.goToFrame(0);
    mgr.showNextScene();

  };

}









function removeAllSprites() {
  nextbtnsprite.position.x =  -500;
  nextbtnsprite.position.y =  -500;
  resetbtnsprite.position.x =  -500;
  resetbtnsprite.position.y =  -500;

}
