var gokuTest;


let img;
let imgBubblesLose;
let imgHeart;
let imgX;
let imgHand;
let imgBubblesWin;
let imgHealthyTree;

//animation
var gokuTestAni;
var gokuTestLeftAni;
var spiritEnemyAni;
var blueSpiritEnemyAni;
var treeAni;
var fireTreeAni;
var fireHouseAni;
var rockAni;
var grassAni;
var signAni;
var rockSmallAni;
var deathMachineAni;


var imgTree;
//image frames
var imgTreeFireFirst;
var imgTreeFireLast;

var imgSecondTreeFireFirst;
var imgSecondTreeFireLast;

var imgHouseFireFirst;
var imgHouseFireLast;

var imgSpiritEnemyFirst;
var imgSpiritEnemyLast;

var imgBlueSpiritEnemyFirst;
var imgBlueSpiritEnemyLast;

var imgRock;
var imgRockSmall;
var imgGrass;
var imgSign;
var imgDeathMachine;


//Obstacles
var treeObstacles;
var treeObstacles02;
var treeObstacles03;
var treeObstacles04;
var treeObstacles05;
var treeObstacles06;
var treeObstacles07;
var treeObstacles08;
var treeObstacles09;
var treeObstacles10;
var treeObstacles11;
var treeObstacles12;
var treeObstacles13;
var treeObstacles14;
var treeObstacles15;
var treeObstacles16;
var treeObstacles17;
var treeObstacles18;
var treeObstacles19;
var treeObstacles20;
var treeObstacles21;
var treeObstacles22;
var treeObstacles23;
var treeObstacles24;
var treeObstacles25;
var treeObstacles26;
var treeObstacles27;
var treeObstacles28;
var treeObstacles29;
var treeObstacles30;
var treeObstacles31;
var treeObstacles32;
var treeObstacles33;


var spiritEnemyObstacles;
var spiritEnemyObstacles02;
var spiritEnemyObstacles03;
var spiritEnemyObstacles04;
var spiritEnemyObstacles05;
var spiritEnemyObstacles06;

var houseObstacles;
var houseObstacles02;
var houseObstacles03;
var houseObstacles04;
var houseObstacles05;

var rockObstacles;
var rockObstacles02;
var rockObstacles03;
var rockObstacles04;
var rockObstacles05;
var rockObstacles06;


var rockSmallObstacles;
var rockSmallObstacles02;
var rockSmallObstacles03;
var rockSmallObstacles04;
var rockSmallObstacles05;
var grassObstacles;
var grassObstacles2;
var grassObstacles3;
var grassObstacles5;
var grassObstacles6;
var grassObstacles7;
var grassObstacles8;
var signObstacle;
var deathMachineObstacle;

var introSound;
var incorrectSound;
var correctSound;
var loseSound;
var miniGameSound;
var winSound;
var levelSound;
var hitSound;

var xPos = 1000;

var healthX = 0;

function preload()
{
  introSound = loadSound("sound/intro.mp3");
  incorrectSound = loadSound("sound/incorrect.mp3");
  correctSound = loadSound("sound/correct.mp3");
  loseSound = loadSound("sound/loseSound.mp3");
  miniGameSound = loadSound("sound/miniGame.mp3");
  winSound = loadSound("sound/winSound.mp3");
  levelSound = loadSound("sound/levelSound.mp3");
  hitSound = loadSound("sound/hitSound.mp3");

  img = loadImage('assets/bubbleManMenu.png');
  imgBubblesLose = loadImage('assets/BubbleManLose.png');
  imgBubblesWin = loadImage('assets/bubbleManWin.png');
  imgHeart = loadImage('assets/heart.png');
  imgX = loadImage('assets/x.png');
  imgHand = loadImage('assets/hand.png');
  imgHealthyTree = loadImage('assets/treeHealthy.png');

  imgTree = loadImage('assets/tree02.png');

  imgRock = loadImage('assets/rockNormal.png');
  imgRockSmall = loadImage('assets/rockSmall.png');
  imgGrass = loadImage('assets/grass.png');
  imgSign = loadImage('assets/sign.png');
  imgDeathMachine = loadImage('assets/deathMachine01.png');

  imgTreeFireFirst = loadImage('assets/treeOnFire01.png');
  imgTreeFireLast = loadImage('assets/treeOnFire03.png');

  imgSecondTreeFireFirst = loadImage('assets/SecondTreeOnFire01.png');
  imgSecondTreeFireLast = loadImage('assets/SecondTreeOnFire03.png');

  imgHouseFireFirst = loadImage('assets/houseOnFire01.png');
  imgHouseFireLast = loadImage('assets/houseOnFire03.png');

  imgSpiritEnemyFirst = loadImage('assets/enemyFireSpirit01.png');
  imgSpiritEnemyLast = loadImage('assets/enemyFireSpirit03.png');

  imgBlueSpiritEnemyFirst = loadImage('assets/blueEnemyFireSpirit01.png');
  imgBlueSpiritEnemyLast = loadImage('assets/blueEnemyFireSpirit03.png');
//-------------


//death machine
deathMachineAni = loadAnimation(imgDeathMachine);
//Death machine
deathMachineObstacle = createSprite(1700,-1200,3,3);
deathMachineObstacle.addAnimation('normal',deathMachineAni);
deathMachineObstacle.setCollider('rectangle', 0,60,140,120);
//deathMachineObstacle.debug = true;

  //grass 1
  grassAni = loadAnimation(imgGrass);
  grassObstacles = createSprite(-90,750,3,3);
  grassObstacles.addAnimation('normal', grassAni);
  //grass2
  grassObstacles2 = createSprite(-170,780,3,3);
  grassObstacles2.addAnimation('normal',grassAni);
  //grass 3
  grassObstacles2 = createSprite(200,560,3,3);
  grassObstacles2.addAnimation('normal',grassAni);
  //grass 4
  grassObstacles3 = createSprite(160,860,3,3);
  grassObstacles3.addAnimation('normal',grassAni);
  //grass 5
  grassObstacles4 = createSprite(200,960,3,3);
  grassObstacles4.addAnimation('normal',grassAni);
  //grass 6
  grassObstacles5 = createSprite(150,0,3,3);
  grassObstacles5.addAnimation('normal',grassAni);
  //grass 7
  grassObstacles6 = createSprite(290,178,3,3);
  grassObstacles6.addAnimation('normal',grassAni);
  //grass 8
  grassObstacles7 = createSprite(390,330,3,3);
  grassObstacles7.addAnimation('normal',grassAni);


  //character test
  gokuTestAni = loadAnimation('assets/bubbleManRight01.png');
  gokuTestLeftAni = loadAnimation('assets/bubbleManLeft01.png');
  gokuTest = createSprite(0,750);
  gokuTest.addAnimation('normal', gokuTestAni);
  gokuTest.addAnimation('left',gokuTestLeftAni);
  gokuTest.setCollider('rectangle', 0,-6,75,124);
  //gokuTest.debug = true;


  //load animation for all sprites
  treeAni = loadAnimation(imgTree);

  //*******load all sprite animation
  //trees
  fireTreeAni = loadAnimation(imgTreeFireFirst, imgTreeFireLast);
  secondFireTreeAni = loadAnimation(imgSecondTreeFireFirst, imgSecondTreeFireLast);

  //houses
  fireHouseAni = loadAnimation(imgHouseFireFirst, imgHouseFireLast);

  //rocks
  rockAni = loadAnimation(imgRock);

  //Small Rocks
  rockSmallAni = loadAnimation(imgRockSmall);

  //sign
  signAni = loadAnimation(imgSign);




  //Fire spirit enemy
  spiritEnemyAni = loadAnimation(imgSpiritEnemyFirst, imgSpiritEnemyLast);

  //Blue fire spirit enemy animation
  blueSpiritEnemyAni = loadAnimation(imgBlueSpiritEnemyFirst, imgBlueSpiritEnemyLast);


//---------------------------------*********



  //Tree 1 fire
  treeObstacles = createSprite(300,840,3,3);
  treeObstacles.addAnimation('normal',fireTreeAni);
  treeObstacles.setCollider('rectangle', 0,0,70,150);
  //treeObstacles.setCollider('rectangle', 0,0,200,100);
  //treeObstacles.debug = true;

  //Tree 2 fire
  treeObstacles02 = createSprite(100,860, 3,3);
  treeObstacles02.addAnimation('normal', secondFireTreeAni);
  treeObstacles02.setCollider('rectangle', 0,0,70,150);
  //treeObstacles02.debug = true;

  //Tree 3 fire
  treeObstacles03 = createSprite(100,450,3,3);
  treeObstacles03.addAnimation('normal', secondFireTreeAni);
  treeObstacles03.setCollider('rectangle', 0,0,70,150);
  //treeObstacles03.debug = true;

  //Tree 4 fire
  treeObstacles04 = createSprite(700,680,3,3);
  treeObstacles04.addAnimation('normal', secondFireTreeAni);
  treeObstacles04.setCollider('rectangle', 0,0,70,150);
 // treeObstacles04.debug = true;

  //Tree 5 fire
  treeObstacles05 = createSprite(700,500,3,3);
  treeObstacles05.addAnimation('normal', secondFireTreeAni);
  treeObstacles05.setCollider('rectangle', 0,0,70,150);
 // treeObstacles05.debug = true;

  //Tree 6 fire
  treeObstacles06 = createSprite(800,580,3,3);
  treeObstacles06.addAnimation('normal', fireTreeAni);
  treeObstacles06.setCollider('rectangle', 0,0,70,150);
 // treeObstacles06.debug = true;

  //Tree 7 fire
  treeObstacles07 = createSprite(800,400,3,3);
  treeObstacles07.addAnimation('normal',fireTreeAni);
  treeObstacles07.setCollider('rectangle', 0,0,70,150);
//  treeObstacles07.debug = true;

  //Tree 8 fire
  treeObstacles08 = createSprite(-40,400,3,3);
  treeObstacles08.addAnimation('normal',fireTreeAni);
  treeObstacles08.setCollider('rectangle', 0,0,70,150);
  //treeObstacles08.debug = true;

  //Tree 9 fire
  treeObstacles09 = createSprite(-30,200,3,3);
  treeObstacles09.addAnimation('normal',fireTreeAni);
  treeObstacles09.setCollider('rectangle', 0,0,70,150);
  //treeObstacles09.debug = true;

  //Tree 9 fire
  treeObstacles09 = createSprite(800,100,3,3);
  treeObstacles09.addAnimation('normal',fireTreeAni);
  treeObstacles09.setCollider('rectangle', 0,0,70,150);
  //treeObstacles09.debug = true;

  //Tree 10 fire
  treeObstacles10 = createSprite(400,0,3,3);
  treeObstacles10.addAnimation('normal',fireTreeAni);
  treeObstacles10.setCollider('rectangle', 0,0,70,150);
  //treeObstacles10.debug = true;

  //tree 11
  treeObstacles11 = createSprite(-40,0,3,3);
  treeObstacles11.addAnimation('normal',fireTreeAni);
  treeObstacles11.setCollider('rectangle', 0,0,70,150);
  //treeObstacles11.debug = true;

  //tree 12
  treeObstacles12 = createSprite(-48,-200,3,3);
  treeObstacles12.addAnimation('normal',secondFireTreeAni);
  treeObstacles12.setCollider('rectangle', 0,0,70,150);
  //treeObstacles12.debug = true;


//*********************Put collisions etc on all of them *************************************
  //tree 13
  treeObstacles13 = createSprite(-50,-400,3,3);
  treeObstacles13.addAnimation('normal',secondFireTreeAni);
  treeObstacles13.setCollider('rectangle', 0,0,70,150);
  //treeObstacles13.debug = true;

  //tree 14
  treeObstacles14 = createSprite(-58,-600,3,3);
  treeObstacles14.addAnimation('normal',secondFireTreeAni);
  treeObstacles14.setCollider('rectangle', 0,0,70,150);
  //treeObstacles14.debug = true;

  //tree 15
  treeObstacles15 = createSprite(-58,-800,3,3);
  treeObstacles15.addAnimation('normal',secondFireTreeAni);
  treeObstacles15.setCollider('rectangle', 0,0,70,150);
  //treeObstacles15.debug = true;

  //tree 16
  treeObstacles16 = createSprite(-58,-1000,3,3);
  treeObstacles16.addAnimation('normal',secondFireTreeAni);
  treeObstacles16.setCollider('rectangle', 0,0,70,150);
  //treeObstacles16.debug = true;

  //tree 17
  treeObstacles17 = createSprite(100,-1160,3,3);
  treeObstacles17.addAnimation('normal',secondFireTreeAni);
  treeObstacles17.setCollider('rectangle', 0,0,180,150);
  //treeObstacles17.debug = true;

  //tree 18
  treeObstacles18 = createSprite(300,-1160,3,3);
  treeObstacles18.addAnimation('normal',secondFireTreeAni);
  treeObstacles18.setCollider('rectangle', 0,0,180,150);
  //treeObstacles18.debug = true;

  //tree 19
  treeObstacles19 = createSprite(500,-1160,3,3);
  treeObstacles19.addAnimation('normal',secondFireTreeAni);
  treeObstacles19.setCollider('rectangle', 0,0,180,150);
  //treeObstacles19.debug = true;

  //tree 20
  treeObstacles20 = createSprite(700,-1160,3,3);
  treeObstacles20.addAnimation('normal',secondFireTreeAni);
  treeObstacles20.setCollider('rectangle', 0,0,180,150);
  //treeObstacles20.debug = true;

  //tree 21
  treeObstacles21 = createSprite(900,-1160,3,3);
  treeObstacles21.addAnimation('normal',secondFireTreeAni);
  treeObstacles21.setCollider('rectangle', 0,0,180,150);
  //treeObstacles21.debug = true;

  //tree 22
  treeObstacles22 = createSprite(1100,-1160,3,3);
  treeObstacles22.addAnimation('normal',secondFireTreeAni);
  treeObstacles22.setCollider('rectangle', 0,0,180,150);
  //treeObstacles22.debug = true;

  //tree 23
  treeObstacles23 = createSprite(1300,-1160,3,3);
  treeObstacles23.addAnimation('normal',secondFireTreeAni);
  treeObstacles23.setCollider('rectangle', 0,0,180,150);
  //treeObstacles23.debug = true;

  //tree 24
  treeObstacles24 = createSprite(1300,-800,3,3);
  treeObstacles24.addAnimation('normal',secondFireTreeAni);
  treeObstacles24.setCollider('rectangle', 0,0,70,150);
  //treeObstacles24.debug = true;

  //tree 25
  treeObstacles25 = createSprite(1300,-600,3,3);
  treeObstacles25.addAnimation('normal',secondFireTreeAni);
  treeObstacles25.setCollider('rectangle', 0,0,70,150);
  //treeObstacles25.debug = true;

  //tree 26
  treeObstacles26 = createSprite(1300,-400,3,3);
  treeObstacles26.addAnimation('normal',secondFireTreeAni);
  treeObstacles26.setCollider('rectangle', 0,0,70,150);
  //treeObstacles26.debug = true;

  //tree 27
  treeObstacles27 = createSprite(1300,-200,3,3);
  treeObstacles27.addAnimation('normal',secondFireTreeAni);
  treeObstacles27.setCollider('rectangle', 0,0,70,150);
  //treeObstacles27.debug = true;

  //tree 28
  treeObstacles28 = createSprite(1300,0,3,3);
  treeObstacles28.addAnimation('normal',secondFireTreeAni);
  treeObstacles28.setCollider('rectangle', 0,0,70,150);
  //treeObstacles28.debug = true;

  //tree 29
  treeObstacles29 = createSprite(1300,200,3,3);
  treeObstacles29.addAnimation('normal',secondFireTreeAni);
  treeObstacles29.setCollider('rectangle', 0,0,70,150);
//  treeObstacles29.debug = true;

  //tree 30
  treeObstacles30 = createSprite(1090,380,3,3);
  treeObstacles30.addAnimation('normal',secondFireTreeAni);
  treeObstacles30.setCollider('rectangle', 0,0,70,150);
  //treeObstacles30.debug = true;

  //tree 31
  treeObstacles31 = createSprite(1190,362,3,3);
  treeObstacles31.addAnimation('normal',secondFireTreeAni);
  treeObstacles31.setCollider('rectangle', 0,0,70,150);
  //treeObstacles31.debug = true;

  //tree 32  used in losing scene
  treeObstacles32 = createSprite(100,300,3,3);
  treeObstacles32.addAnimation('normal',secondFireTreeAni);
  //treeObstacles32.setCollider('rectangle', 0,0,70,150);
  //treeObstacles31.debug = true;

  //tree 33  used in losing scene
  treeObstacles33 = createSprite(500,300,3,3);
  treeObstacles33.addAnimation('normal',secondFireTreeAni);
  //treeObstacles32.setCollider('rectangle', 0,0,70,150);
  //treeObstacles31.debug = true;

  //House 1 fire
  houseObstacles = createSprite(390,860,3,3);
  houseObstacles.addAnimation('normal', fireHouseAni);
  houseObstacles.setCollider('rectangle', 0,0,150,150);
 // houseObstacles.debug = true;

  //House 2 fire
  houseObstacles02 = createSprite(700,870);
  houseObstacles02.addAnimation('normal',fireHouseAni);
  houseObstacles02.setCollider('rectangle', 0,0,150,150);
  //houseObstacles02.debug = true;

  //house 3
  houseObstacles03 = createSprite(560,70);
  houseObstacles03.addAnimation('normal',fireHouseAni);
  houseObstacles03.setCollider('rectangle', 0,0,150,150);
//  houseObstacles03.debug = true;

  //rock 1
  rockObstacles = createSprite(-40,500,3,3);
  rockObstacles.addAnimation('normal',rockAni);
  rockObstacles.setCollider('rectangle', 0,0,200,140);
 // rockObstacles.debug = true;

  //rock 2
  rockObstacles02 = createSprite(890,250,3,3);
  rockObstacles02.addAnimation('normal',rockAni);
  rockObstacles02.setCollider('rectangle', 0,0,200,140);
  //rockObstacles02.debug = true;

  //rock 3
  rockObstacles03 = createSprite(240,0,3,3);
  rockObstacles03.addAnimation('normal',rockAni);
  rockObstacles03.setCollider('rectangle', 0,0,200,140);
  //rockObstacles03.debug = true;

  //rock 4
  rockObstacles04 = createSprite(290,-140,3,3);
  rockObstacles04.addAnimation('normal',rockAni);
  rockObstacles04.setCollider('rectangle', 0,0,200,140);
//  rockObstacles04.debug = true;


  //sign

  signObstacle = createSprite(-90,700,3,3);
  signObstacle.addAnimation('normal',signAni);

  //small rocks
  rockSmallObstacles = createSprite(186,870,3,3);
  rockSmallObstacles.addAnimation('normal',rockSmallAni);
  rockSmallObstacles.setCollider('rectangle',0,0,80,56);
  //rockSmallObstacles.debug = true;

  //small rock 02
  rockSmallObstacles02 = createSprite(506,920,3,3);
  rockSmallObstacles02.addAnimation('normal',rockSmallAni);
  rockSmallObstacles02.setCollider('rectangle',0,0,80,56);
  //rockSmallObstacles02.debug = true;

  //Small rock 03
  rockSmallObstacles03 = createSprite(606,920,3,3);
  rockSmallObstacles03.addAnimation('normal',rockSmallAni);
  rockSmallObstacles03.setCollider('rectangle',0,0,80,56);
  //rockSmallObstacles03.debug = true;

  //Small rock 04
  rockSmallObstacles04 = createSprite(720,100,3,3);
  rockSmallObstacles04.addAnimation('normal',rockSmallAni);
  rockSmallObstacles04.setCollider('rectangle',0,0,80,56);
  //rockSmallObstacles04.debug = true;


  //fire spirit
  spiritEnemyObstacles = createSprite(200,200,3,3);
  spiritEnemyObstacles.addAnimation('normal',spiritEnemyAni);
  spiritEnemyObstacles.setCollider('rectangle', 0,0,90,90);
  spiritEnemyObstacles.setSpeed(1,random(0,360));
  //spiritEnemyObstacles.debug = true;

  //fire spirit 02
  spiritEnemyObstacles02 = createSprite(200,-500,3,3);
  spiritEnemyObstacles02.addAnimation('normal',blueSpiritEnemyAni);
  spiritEnemyObstacles02.setCollider('rectangle', 0,0,90,90);
  spiritEnemyObstacles02.setSpeed(1,random(0,360));
  //spiritEnemyObstacles.debug = true;

  //fire spirit 03
  spiritEnemyObstacles03 = createSprite(40,-500,3,3);
  spiritEnemyObstacles03.addAnimation('normal',blueSpiritEnemyAni);
  spiritEnemyObstacles03.setCollider('rectangle', 0,0,90,90);
  spiritEnemyObstacles03.setSpeed(2,random(0,360));
  //spiritEnemyObstacles.debug = true;

  //fire spirit 04
  spiritEnemyObstacles04 = createSprite(40,-500,3,3);
  spiritEnemyObstacles04.addAnimation('normal',blueSpiritEnemyAni);
  spiritEnemyObstacles04.setCollider('rectangle', 0,0,90,90);
  spiritEnemyObstacles04.setSpeed(2,random(0,360));
  //spiritEnemyObstacles.debug = true;

  //fire spirit 05
  spiritEnemyObstacles05 = createSprite(60,-700,3,3);
  spiritEnemyObstacles05.addAnimation('normal',blueSpiritEnemyAni);
  spiritEnemyObstacles05.setCollider('rectangle', 0,0,90,90);
  spiritEnemyObstacles05.setSpeed(3,random(0,360));
  //spiritEnemyObstacles.debug = true;

  //Makes sprites immovable and immune to bounce
  treeObstacles.immovable = true;
  treeObstacles02.immovable = true;
  treeObstacles03.immovable = true;
  rockObstacles03.immovable = true;
  rockObstacles04.immovable = true;
  houseObstacles02.immovable = true;
  houseObstacles03.immovable = true;

  /*
  treeObstacles = new Group();
  for(var i = 0; i <30;i++)
  {
    //push();
      var tree = createSprite(random(0,width), random(0,height));
      tree.addAnimation('normal', 'assets/tree.png');
      treeObstacles.add(tree);
    //pop();
  }
  */

}

var mgr;

function setup()
{
    //createCanvas(700,630);
    var canvas = createCanvas(700,630);
    canvas.parent("canvas-container");
    mgr = new SceneManager();

    mgr.addScene( intro );
    mgr.addScene(scene2);
    mgr.addScene(help);
    mgr.addScene(controls);
    mgr.addScene(credits);
    mgr.addScene(youWon);
    mgr.addScene(youLose);
    mgr.addScene(miniGame);
    mgr.showNextScene();
}

function draw()
{
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
