
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


//var image1_up, image2_over,snd1;

var sound1, sound2;
var image1, image2, image3, image4, image5;


// var duration;
// var  slideWidth = 500;

function preload() {

  //snd1 = loadSound("sound/troll.mp3");
  sound1 = loadSound("sounds/themeSound.mp3");
  sound2 = loadSound("sounds/teleport.mp3");
  image1 = loadImage("scenes/background01.jpg");
  image2 = loadImage("scenes/background02.jpg");
  image3 = loadImage("scenes/background03.png");
  image4 = loadImage("scenes/background04.png");
  image5 = loadImage("scenes/background05.jpg");

}


// define your p5.play sprites as global objects first.
//var ghosty;


// global manager object
var mgr;

function setup() {
    createCanvas(800, 800);
  //  console.log(hell);

     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
   // mgr.addScene (intro);
    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);
    mgr.addScene (scene5);
    //mgr.addScene (theend);
    mgr.showNextScene(intro);

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
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
        case 'h':
            mgr.showScene( scene4 );
            break;
        case 'H':
            mgr.showScene( scene5 );
            break;
         case 'e':
            mgr.showScene( intro );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
