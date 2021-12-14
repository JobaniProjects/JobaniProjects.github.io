
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


let loy= 0;
var sceneTrigger = 0;

var startScreen = 0;
var helpScreen = 1;
var controlsScreen = 2;
var stage1Screen = 3;
var miniGameScreen = 4;
var creditsScreen = 5;

var correctAnswer = 0;

var posX = 400;
var posY = 400;

var next = 0;

//////////////////////////////************* Intro Scene  *********/////////////////
function intro()
{

    var playButton, controlsButton, helpInfoButton, creditsButton;


    this.setup = function()
    {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("black");
      textAlign(CENTER);
      textSize(29);

    //  introSound.play();
      introSound.loop();

      /*
      if(introSound.isPlaying())
      {
        introSound.stop();
      }
      else
      {
        introSound.loop();
      }
      */



      //***** PLAY Button **************************************
      playButton = new Clickable();
      playButton.width = 200;
      playButton.locate(width/2 - 100, (height/2) + 10);
      playButton.text = "";

      playButton.onPress = function()
      {
          this.color = "#db1f12";
          sceneTrigger = stage1Screen;
          console.log("Scene trigger to change");
      }
      playButton.onHover = function()
      {
        //teal color
        this.color = "#3bd1b3";
      }
      playButton.onOutside = function()
      {
        //white color
        this.color = "#ffffff";
      }

      //CONTROLS menu Button  ************************************
      controlsButton = new Clickable();
      controlsButton.width = 200;
      controlsButton.locate(width/2 - 100, (height/2) + 80);
      controlsButton.text = "";


      controlsButton.onPress = function()
      {
          this.color = "#db1f12";
          sceneTrigger = controlsScreen;
      }
      controlsButton.onHover = function()
      {
        //teal color
        this.color = "#3bd1b3";
      }
      controlsButton.onOutside = function()
      {
        //white color
        this.color = "#ffffff";
      }

      //Help Button ****************************************
      helpInfoButton = new Clickable();
      helpInfoButton.width = 60;
      helpInfoButton.height = 40;
      helpInfoButton.locate(width- 80, 25);
      helpInfoButton.text = "";

      helpInfoButton.onPress = function()
      {
          this.color = "#db1f12";
          sceneTrigger = helpScreen;
      }
      helpInfoButton.onHover = function()
      {
        //teal color
        this.color = "#3bd1b3";
      }
      helpInfoButton.onOutside = function()
      {
        //white color
        this.color = "#ffffff";
      }

      //Credits Button ******************************
      creditsButton = new Clickable();
      creditsButton.width = 200;
      creditsButton.locate(width/2 - 100, (height/2) + 150);
      creditsButton.text = "";

      creditsButton.onPress = function()
      {
        this.color = "#db1f12";
        sceneTrigger = creditsScreen;
      }
      creditsButton.onHover = function()
      {
        this.color = "#3bd1b3";
      }
      creditsButton.onOutside = function()
      {
        //white color
        this.color = "#ffffff";
      }
      //---------------

    }



    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        // textX = 10;
        // textY = 0;
      loy = 100;
        //background("red");

    }


    this.draw = function()
    {
      //camera.off();
        //background(0,0,255-loy);
        background("black");
        textAlign(CENTER);
        textSize(29);

        // fill(200,0,0);
        image(img,90,30);
        push();
        //
        //translate(width/2,loy*3);
      //  fill(100,150,190);
        playButton.draw();
        controlsButton.draw();
        helpInfoButton.draw();
        creditsButton.draw();

        //***** Play text ******
        fill(0);
        text("PLAY", width/2, (height/2) + 50);
        //fill(255);

        //**** Controls text *****
        text("CONTROLS", width/2, (height/2) + 120);

        //*** Credits text *******
        text("CREDITS", width/2, (height/2) + 190);

        //***** Help text ******
        textSize(14);
        //fill(140);
        text("HELP", width - 50, 50);
        // ellipse(0,0,30,30);
        //if (loy > 255) {
          //loy = 0;
        //} else {
          //loy++;
        //}
        //
        pop();

        //Changes scenes
        if(sceneTrigger == helpScreen)
        {
          this.sceneManager.showScene(help);
        }
        else if(sceneTrigger ==controlsScreen)
        {
          this.sceneManager.showScene(controls);
        }
        else if(sceneTrigger == stage1Screen)
        {
          this.sceneManager.showScene(stage1);
        }
        else if(sceneTrigger == creditsScreen)
        {
          this.sceneManager.showScene(credits);
        }

    }

    // this.keyPressed = function() {
    //
    //
    // }
/*
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
    */
}

///////////////////////  2  ////////////////////////

function scene2()  {
   //let octo1,octo2;

  this.setup = function() {
      //background(200,100,140);
      console.log("We are at setup for scene2");
      //octo1 = new Octopi(400,600,color(255,0,0),.40);
      //octo2 = new Octopi(650,200,color(0,0,0),.10);

  }

  this.enter = function()
  {

      console.log("We are at  scene2 (again?)");

  }

    this.draw = function()
    {
      background(200,100,140);
      //noStroke();
      //octo1.update();
      //octo1.display();
      //octo2.update();
      //octo2.display();
      text("TEST TEST TEST", width/2,height/2 );
    }

    this.mouseDragged = function() {
      console.log("mouseDragged");
      //octo1.moveupdate(mouseX,mouseY-40);
      //octo2.moveupdate(650,200);
    }

    this.mousePressed = function()
    {

      //console.log("exit");
      this.sceneManager.showNextScene();
    }
}


////////////////////////////// 3 ////////////////////////////





////////////////////////////////// Level 1 Stage ////////////////////////////
function stage1()
{
  var turnOffButton;

  this.setup = function()
  {
    //var spritePosY = gokuTest.position.y;
    introSound.stop();
    levelSound.loop();

    //

    //textSize(10);
    turnOffButton = new Clickable();
    turnOffButton.width = 170;
    //turnOffButton.height = 100;
    turnOffButton.locate(560, -180);
    turnOffButton.text = "TURN OFF DEATH MACHINE!";

    turnOffButton.onPress = function()
    {
        this.color = "#db1f12";
        sceneTrigger = stage1Screen;
        console.log("Scene trigger to change");
    }
    turnOffButton.onHover = function()
    {
      //teal color
      this.color = "#3bd1b3";
    }
    turnOffButton.onOutside = function()
    {
      //white color
      this.color = "#ffffff";
    }

  }

  this.enter = function()
  {
    //background(84, 168, 50);
    //gokuTest.position.x = width/2;

  }

  this.draw = function()
  {
    background(84, 168, 50);
    //image(imgHeart, .position.x - 320, camera.position.y - 300);

    turnOffButton.draw();

    //Bounce collision for Spirit enemy 1
    spiritEnemyObstacles.bounce(treeObstacles);
    spiritEnemyObstacles.bounce(treeObstacles02);
    spiritEnemyObstacles.bounce(gokuTest);
    spiritEnemyObstacles.bounce(treeObstacles03);
    spiritEnemyObstacles.bounce(rockObstacles03);
    spiritEnemyObstacles.bounce(rockObstacles04);
    spiritEnemyObstacles.bounce(houseObstacles02);
    spiritEnemyObstacles.bounce(houseObstacles03);

    //gokuTest.bounce(spiritEnemyObstacles);

    //Bounce collision for Spirit enemy 2
    spiritEnemyObstacles02.bounce(rockObstacles03);
    spiritEnemyObstacles02.bounce(rockObstacles04);
    spiritEnemyObstacles02.bounce(gokuTest);
    spiritEnemyObstacles02.bounce(treeObstacles03);
    spiritEnemyObstacles02.bounce(spiritEnemyObstacles03);
    spiritEnemyObstacles03.bounce(spiritEnemyObstacles04);

    //Bounce collision for Spirit enemy 3
    spiritEnemyObstacles03.bounce(rockObstacles03);
    spiritEnemyObstacles03.bounce(rockObstacles04);
    spiritEnemyObstacles03.bounce(gokuTest);
    spiritEnemyObstacles03.bounce(treeObstacles03);
    spiritEnemyObstacles03.bounce(spiritEnemyObstacles02);
    spiritEnemyObstacles03.bounce(spiritEnemyObstacles04);

    //Bounce collision for Spirit enemy 4
    spiritEnemyObstacles04.bounce(rockObstacles03);
    spiritEnemyObstacles04.bounce(rockObstacles04);
    spiritEnemyObstacles04.bounce(gokuTest);
    spiritEnemyObstacles04.bounce(treeObstacles03);
    spiritEnemyObstacles04.bounce(spiritEnemyObstacles02);
    spiritEnemyObstacles04.bounce(spiritEnemyObstacles03);

    //Bounce collision for Spirit enemy 5
    spiritEnemyObstacles05.bounce(rockObstacles03);
    spiritEnemyObstacles05.bounce(rockObstacles04);
    spiritEnemyObstacles05.bounce(gokuTest);
    spiritEnemyObstacles05.bounce(treeObstacles03);
    spiritEnemyObstacles05.bounce(spiritEnemyObstacles02);
    spiritEnemyObstacles05.bounce(spiritEnemyObstacles03);
    spiritEnemyObstacles05.bounce(spiritEnemyObstacles04);

    //spriteEnemyObstacles.collide(deathMachineObstacle);

    gokuTest.collide(treeObstacles);
    gokuTest.collide(treeObstacles02);
    gokuTest.collide(treeObstacles03);
    gokuTest.collide(treeObstacles04);
    gokuTest.collide(treeObstacles05);
    gokuTest.collide(treeObstacles06);
    gokuTest.collide(treeObstacles07);
    gokuTest.collide(treeObstacles08);
    gokuTest.collide(treeObstacles09);
    gokuTest.collide(treeObstacles10);
    gokuTest.collide(treeObstacles11);
    gokuTest.collide(treeObstacles12);


    gokuTest.collide(treeObstacles17);
    gokuTest.collide(treeObstacles18);
    gokuTest.collide(treeObstacles19);
    gokuTest.collide(treeObstacles20);
    gokuTest.collide(treeObstacles21);
    gokuTest.collide(treeObstacles22);
    gokuTest.collide(treeObstacles23);
    gokuTest.collide(treeObstacles24);
    gokuTest.collide(treeObstacles25);
    gokuTest.collide(treeObstacles26);
    gokuTest.collide(treeObstacles27);
    gokuTest.collide(treeObstacles28);
    gokuTest.collide(treeObstacles29);
    gokuTest.collide(treeObstacles30);
    gokuTest.collide(treeObstacles31);

    gokuTest.collide(houseObstacles);
    gokuTest.collide(houseObstacles02);
    gokuTest.collide(houseObstacles03);
    gokuTest.collide(rockObstacles);
    gokuTest.collide(rockObstacles02);
    gokuTest.collide(rockObstacles03);
    gokuTest.collide(rockObstacles04);
    gokuTest.collide(rockSmallObstacles);
    gokuTest.collide(rockSmallObstacles03);
    gokuTest.collide(rockSmallObstacles04);

    //gokuTest.collide(deathMachineObstacle);


    spiritEnemyObstacles.collide(treeObstacles03);
    spiritEnemyObstacles.collide(houseObstacles03);
    spiritEnemyObstacles.collide(treeObstacles10);
    spiritEnemyObstacles.collide(rockObstacles02);
    spiritEnemyObstacles.collide(rockObstacles03);


    spiritEnemyObstacles02.collide(treeObstacles03);
    spiritEnemyObstacles02.collide(houseObstacles03);
    spiritEnemyObstacles02.collide(treeObstacles10);
    spiritEnemyObstacles02.collide(rockObstacles03);
    spiritEnemyObstacles02.collide(rockObstacles04);

    spiritEnemyObstacles03.collide(treeObstacles03);
    spiritEnemyObstacles03.collide(houseObstacles03);
    spiritEnemyObstacles03.collide(treeObstacles10);
    spiritEnemyObstacles03.collide(rockObstacles03);
    spiritEnemyObstacles03.collide(rockObstacles04);

    spiritEnemyObstacles04.collide(treeObstacles03);
    spiritEnemyObstacles04.collide(houseObstacles03);
    spiritEnemyObstacles04.collide(treeObstacles10);
    spiritEnemyObstacles04.collide(rockObstacles03);
    spiritEnemyObstacles04.collide(rockObstacles04);

    spiritEnemyObstacles05.collide(treeObstacles03);
    spiritEnemyObstacles05.collide(houseObstacles03);
    spiritEnemyObstacles05.collide(treeObstacles10);
    spiritEnemyObstacles05.collide(rockObstacles03);
    spiritEnemyObstacles05.collide(rockObstacles04);


    // Bouncing spirit 01 on screen
    if(spiritEnemyObstacles.position.x < 0)
    {
      spiritEnemyObstacles.position.x = 0;
      spiritEnemyObstacles.setSpeed(2,random(0,90));
    }
    if(spiritEnemyObstacles.position.x > 600)
    {
      spiritEnemyObstacles.position.x = 600;
      spiritEnemyObstacles.setSpeed(2,random(0,360));
    }
    if(spiritEnemyObstacles.position.y < 0)
    {
      spiritEnemyObstacles.position.y = 0;
      spiritEnemyObstacles.setSpeed(2, random(9,360));
    }
    if(spiritEnemyObstacles.position.y > 400)
    {
      spiritEnemyObstacles.position.y = 400;
      spiritEnemyObstacles.setSpeed(2,random(0,360));
    }


    //Bouncing Spirits 02 to screen
    if(spiritEnemyObstacles02.position.x < 0)
    {
      spiritEnemyObstacles02.position.x = 0;
      spiritEnemyObstacles02.setSpeed(5,random(0,360));
    }
    if(spiritEnemyObstacles02.position.x > 1200)
    {
      spiritEnemyObstacles02.position.x = 1200;
      spiritEnemyObstacles02.setSpeed(7,random(0,360));
    }
    if(spiritEnemyObstacles02.position.y < -1000)
    {
      spiritEnemyObstacles02.position.y = -1000;
      spiritEnemyObstacles02.setSpeed(7, random(9,360));
    }
    if(spiritEnemyObstacles02.position.y > -99)
    {
      spiritEnemyObstacles02.position.y = -99;
      spiritEnemyObstacles02.setSpeed(7,random(0,360));
    }


    //Bouncing Spirits 03 to screen
    if(spiritEnemyObstacles03.position.x < 0)
    {
      spiritEnemyObstacles03.position.x = 0;
      spiritEnemyObstacles03.setSpeed(8,random(0,90));
    }
    if(spiritEnemyObstacles03.position.x > 1200)
    {
      spiritEnemyObstacles03.position.x = 1200;
      spiritEnemyObstacles03.setSpeed(8,random(0,360));
    }
    if(spiritEnemyObstacles03.position.y < -1000)
    {
      spiritEnemyObstacles03.position.y = -1000;
      spiritEnemyObstacles03.setSpeed(8, random(9,360));
    }
    if(spiritEnemyObstacles03.position.y > -99)
    {
      spiritEnemyObstacles03.position.y = -99;
      spiritEnemyObstacles03.setSpeed(8,random(0,360));
    }

    //Bouncing Spirits 04 to screen
    if(spiritEnemyObstacles04.position.x < 0)
    {
      spiritEnemyObstacles04.position.x = 0;
      spiritEnemyObstacles04.setSpeed(10,random(0,90));
    }
    if(spiritEnemyObstacles04.position.x > 1200)
    {
      spiritEnemyObstacles04.position.x = 1200;
      spiritEnemyObstacles04.setSpeed(7,random(0,360));
    }
    if(spiritEnemyObstacles04.position.y < -1000)
    {
      spiritEnemyObstacles04.position.y = -1000;
      spiritEnemyObstacles04.setSpeed(8, random(9,360));
    }
    if(spiritEnemyObstacles04.position.y > -99)
    {
      spiritEnemyObstacles04.position.y = -99;
      spiritEnemyObstacles04.setSpeed(10,random(0,360));
    }

    //Bouncing Spirits 05 to screen
    if(spiritEnemyObstacles05.position.x < 0)
    {
      spiritEnemyObstacles05.position.x = 0;
      spiritEnemyObstacles05.setSpeed(8,random(0,90));
    }
    if(spiritEnemyObstacles05.position.x > 1200)
    {
      spiritEnemyObstacles05.position.x = 1200;
      spiritEnemyObstacles05.setSpeed(9,random(0,360));
    }
    if(spiritEnemyObstacles05.position.y < -1000)
    {
      spiritEnemyObstacles05.position.y = -1000;
      spiritEnemyObstacles05.setSpeed(9, random(9,360));
    }
    if(spiritEnemyObstacles05.position.y > -99)
    {
      spiritEnemyObstacles05.position.y = -99;
      spiritEnemyObstacles05.setSpeed(9,random(0,360));
    }


    //Main character screen limit
    if(gokuTest.position.x < 0)
    {
      gokuTest.position.x = 0;
    }
    if(gokuTest.position.y < -1300)
    {
      gokuTest.position.y = -1300;
    }
    if(gokuTest.position.x > 1600)
    {
      gokuTest.position.x = 1600;
    }
    if(gokuTest.position.y > 820)
    {
      gokuTest.position.y = 820;
    }

//set velocity to 0 when not moving
 gokuTest.velocity.x = 0;
 gokuTest.velocity.y = 0;




  //Controls for main character
  if(keyIsDown(65))  //a
  {
    gokuTest.velocity.x = -5;
    gokuTest.changeAnimation('left');
    console.log("left");
  }
  if(keyIsDown(68))   //d
  {
    gokuTest.velocity.x = 5;
    gokuTest.changeAnimation('normal');
  }
  if(keyIsDown(87))  //w
  {
    gokuTest.velocity.y = -5
  }
  if(keyIsDown(83))  //s
  {
    gokuTest.velocity.y = 5
  }

  //Triggers button for mini gamme

  if(gokuTest.overlap(deathMachineObstacle))
  {
    this.sceneManager.showScene(miniGame);
  }


  //Camera zoomed in and zooms out when mouse is pressed
    if(keyIsDown(78))  //mouseIsPressed  n
    {
      camera.zoom = .3;
    }
    else
    {
        camera.zoom = 1;
    }

    camera.position.x = gokuTest.position.x;
    camera.position.y = gokuTest.position.y;

    treeObstacles33.visible = false;
    treeObstacles32.visible = false;

    drawSprites();
    //drawSprite(gokuTest);
    image(imgHeart, camera.position.x - 320, camera.position.y - 300);
    image(imgHeart, camera.position.x - 270, camera.position.y - 300);
    image(imgHeart, camera.position.x - 220, camera.position.y - 300);

    //push();
      //translate(xPos,0);
      //image(imgX, camera.position.x - 220, camera.position.y-300);

    //pop();

    if(healthX == 1 || healthX == 2|| healthX ==3 || healthX == 4 || healthX == 5 )
    {
      image(imgX, camera.position.x - 220, camera.position.y-300);
      if(healthX == 1)
      {
        hitSound.play();
      }
    }
    if(healthX == 6 || healthX == 7 || healthX == 8 || healthX == 9 || healthX == 10 )
    {
      image(imgX, camera.position.x - 270, camera.position.y-300);
      image(imgX, camera.position.x - 220, camera.position.y-300);
      if(healthX == 6)
      {
        hitSound.play();
      }
    }
    if(healthX == 11 || healthX == 12 || healthX == 13 || healthX == 14 || healthX == 15)
    {
      image(imgX, camera.position.x - 320, camera.position.y-300);
      image(imgX, camera.position.x - 220, camera.position.y-300);
      image(imgX, camera.position.x - 270, camera.position.y-300);
      if(healthX == 11)
      {
        //hitSound.play();
      }
      this.sceneManager.showScene(youLose);
    }

    //checks if main character overlaps with enemy
    if(gokuTest.overlap(spiritEnemyObstacles) || gokuTest.overlap(spiritEnemyObstacles02) ||gokuTest.overlap(spiritEnemyObstacles03) ||gokuTest.overlap(spiritEnemyObstacles04) ||gokuTest.overlap(spiritEnemyObstacles05) )
    {
      //xPos = 0;
      //image(imgX, camera.position.x - 220, camera.position.y-300);
      //healthX = healthX + 1;
      healthX++;
      if(healthX>15)
      {
        healthX = 15;
      }
      //hitSound.play();
    }


  //  push();
    //  text("Level 1", width/2,height/2 + 10);
      //text("Start", width/2, height/2 + 20);
  //  pop();

    //image(imgHeart, camera.position.x - 320, camera.position.y - 300);
  }

  this.keyPressed = function()
  {

  }

}

////////////////////////////////DEATH MACHINE MINI-GAME//////////////////////
function miniGame()
{
  var button01, button02, button03,button04,button05,button06;

  this.setup = function()
  {//correctAnswer = 0
    levelSound.stop();
    miniGameSound.loop();
    //***************Button 1********************************************
    button01 = new Clickable();
    button01.width = 80;
    button01.cornerRadius = 14;
    button01.locate( 100,100 );
    button01.text = "";

    button01.onPress = function()
    {
        this.color = "#db1f12";
        correctAnswer ++;
        if(correctAnswer ==1)
        {
          correctSound.play();

        }
        else
        {
          correctAnswer= 0;
          incorrectSound.play();
        }
    }
    button01.onHover = function()
    {
      //teal color
      this.color = "#3bd1b3";
    }
    button01.onOutside = function()
    {
      //white color
      this.color = "#ffffff";
    }

    //****************Button 2***********************
    button02 = new Clickable();
    button02.width = 80;
    button02.cornerRadius = 14;
    button02.locate(300, 100);
    button02.text = "";

    button02.onPress = function()
    {
        this.color = "#db1f12";
        //sceneTrigger = startScreen;
        correctAnswer ++;
        if(correctAnswer ==5)
        {
          correctSound.play();

        }
        else
        {
          correctAnswer= 0;
          incorrectSound.play();
        }

    }
    button02.onHover = function()
    {
      //teal color
      this.color = "#3bd1b3";
    }
    button02.onOutside = function()
    {
      //white color
      this.color = "#ffffff";
    }

    //****************Button 3***********************
    button03 = new Clickable();
    button03.width = 80;
    button03.cornerRadius = 14;
    button03.locate(500, 100);
    button03.text = "";

    button03.onPress = function()
    {
        this.color = "#db1f12";
        //sceneTrigger = startScreen;
        correctAnswer ++;
        if(correctAnswer ==2)
        {
          correctSound.play();
        }
        else
        {
          correctAnswer= 0;
          incorrectSound.play();
        }

        console.log("Scene trigger to change");
    }
    button03.onHover = function()
    {
      //teal color
      this.color = "#3bd1b3";
    }
    button03.onOutside = function()
    {
      //white color
      this.color = "#ffffff";
    }

    //****************Button 4***********************
    button04 = new Clickable();
    button04.width = 80;
    button04.cornerRadius = 14;
    button04.locate(100, 400);
    button04.text = "";

    button04.onPress = function()
    {
        this.color = "#db1f12";
        //sceneTrigger = startScreen;
        correctAnswer ++;
        if(correctAnswer ==3)
        {
          correctSound.play();

        }
        else
        {
          correctAnswer= 0;
          incorrectSound.play();
        }
        console.log("Scene trigger to change");
    }
    button04.onHover = function()
    {
      //teal color
      this.color = "#3bd1b3";
    }
    button04.onOutside = function()
    {
      //white color
      this.color = "#ffffff";
    }

    //****************Button 5***********************
    button05 = new Clickable();
    button05.width = 80;
    button05.cornerRadius = 14;
    button05.locate(300, 400);
    button05.text = "";

    button05.onPress = function()
    {
        this.color = "#db1f12";
        //sceneTrigger = startScreen;
        correctAnswer ++;
        if(correctAnswer ==6)
        {
          correctSound.play();

        }
        else
        {
          correctAnswer= 0;
          incorrectSound.play();
        }
        console.log("Scene trigger to change");
    }
    button05.onHover = function()
    {
      //teal color
      this.color = "#3bd1b3";
    }
    button05.onOutside = function()
    {
      //white color
      this.color = "#ffffff";
    }

    //****************Button 6***********************
    button06 = new Clickable();
    button06.width = 80;
    button06.cornerRadius = 14;
    button06.locate(500, 400);
    button06.text = "";

    button06.onPress = function()
    {
        this.color = "#db1f12";
        //sceneTrigger = startScreen;
        correctAnswer ++;
        if(correctAnswer ==4)
        {
          correctSound.play();

        }
        else
        {
          correctAnswer= 0;
          incorrectSound.play();
        }
        console.log("Scene trigger to change");
    }
    button06.onHover = function()
    {
      //teal color
      this.color = "#3bd1b3";
    }
    button06.onOutside = function()
    {
      //white color
      this.color = "#ffffff";
    }


  }



  this.enter = function()
  {

  }

  this.draw = function()
  {
    camera.off();
    background(100);
    fill(100);
    //rect(0,0,600,400);
    button01.draw();
    button02.draw();
    button03.draw();
    button04.draw();
    button05.draw();
    button06.draw();
    push();
      fill(0);
      textAlign(CENTER);
      textSize(14);
      text("D.E.A.T.H. MACHINE", width/2,height/2);
    pop();
    //ellipse(100,100, 70,70);
    image(imgHand,mouseX - 140,mouseY);
    if(correctAnswer ==6)
    {
        this.sceneManager.showScene(youWon);
    }

  }
}

/////////////////////////////// YOU WON SCENE /////////////////////////
function youWon()
{
  this.setup = function()
  {
    miniGameSound.stop();
    winSound.loop();

  }

  this.enter = function()
  {

  }

  this.draw = function()
  {
    camera.off();
    background(0);
    fill(255);

    push();
      scale(.5);
      image(imgHealthyTree, 100,300);
      image(imgHealthyTree, 100,500);

      image(imgHealthyTree, 400,300);
      image(imgHealthyTree, 400,500);

      image(imgHealthyTree, 700,300);
      image(imgHealthyTree, 700,500);

      image(imgHealthyTree, 1000,300);
      image(imgHealthyTree, 1000,500);
    pop();


    image(imgBubblesWin,width/2 - 80,height/2 - 100);
    text("Congratulations, You Won!", width/2 -80,height/2 - 300);
    text("The forest an all its inhabitants are now safe.", width/2 -120,height/2 - 240);

  }
}

//////////////////////////////// YOU LOSE ////////////////////////////////
function youLose()
{
  var mainMenuButton;


  this.setup = function()
  {
    levelSound.stop();
    loseSound.loop();

    mainMenuButton = new Clickable();
    mainMenuButton.width = 80;
    mainMenuButton.cornerRadius = 10;
    mainMenuButton.locate( width/2 - 11,560 );
    mainMenuButton.text = "MAIN MENU";

    mainMenuButton.onPress = function()
    {
        this.color = "#db1f12";
        next = 1;
    }
    mainMenuButton.onHover = function()
    {
      //teal color
      this.color = "#3bd1b3";
    }
    mainMenuButton.onOutside = function()
    {
      //white color
      this.color = "#ffffff";
    }

  }

  this.enter = function()
  {

  }

  this.draw = function()
  {
    camera.off();
    background(0);
    fill(255);
    //mainMenuButton.draw();
    textAlign(CENTER);
    text("You Lose", width/2 , height/2 - 40);  //- 10
    image(imgBubblesLose, width/2 - 70, height/2);
    treeObstacles32.scale = 1.5;
    treeObstacles33.scale = 1.5;
    treeObstacles32.visible = true;
    treeObstacles33.visible = true;
    drawSprite(treeObstacles32);
    drawSprite(treeObstacles33);

  //  if(next == 1)
    //{
      //this.sceneManager.showScene(intro);

    //}


  }
}

///////////////////////////////// HELP INFO SCENE //////////////////////////
function help()
{
  this.setup = function()
  {
    //background(0);

    //Back  to return to start screen
    backButton = new Clickable();
    backButton.width = 200;
    backButton.locate(width/2 - 100, (height/2) + 200);
    backButton.text = "";

    backButton.onPress = function()
    {
        this.color = "#db1f12";
        sceneTrigger = startScreen;
        console.log("Scene trigger to change");
    }
    backButton.onHover = function()
    {
      //teal color
      this.color = "#3bd1b3";
    }
    backButton.onOutside = function()
    {
      //white color
      this.color = "#ffffff";
    }
  }

  this.enter = function()
  {

  }

  this.draw = function()
  {
    background(0);

    backButton.draw();

    textAlign(CENTER);
    textSize(24);

    noFill();
    stroke(59, 209, 179); //teal
    strokeWeight(6);
    rect(30,30, width-60, height-60);


    push();
      fill(255);
      strokeWeight(1);
      text("The world is in chaos! Monsters from the beyond are", width/2,100);
      text("destroying the environment! Your the only one who can", width/2,150 );
      text("stop them! Explore the world, avoid the enemies, and ", width/2,200 );
      text("destroy the DEATH MACHINE! Once you avoided all the,  ", width/2,250 );
      text("enemies, find the D.E.A.T.H. machine and turn it off ", width/2,300 );
      text("to stop the environmental destruction. ", width/2,350 );
      text("Good luck! ", width/2,400 );

      fill(0);
      stroke(0);
      text("Back", width/2, height/2 + 235);
    pop();

    if(sceneTrigger == startScreen)
    {
      this.sceneManager.showScene(intro);
    }
  }
}


///////////////////////// CONTROLS Scene //////////////////////
function controls()
{
  this.setup = function()
  {
    //background(0);

    //Back button to return to start screen
    backButton = new Clickable();
    backButton.width = 200;
    backButton.locate(width/2 - 100, (height/2) + 200);
    backButton.text = "";

    backButton.onPress = function()
    {
        this.color = "#db1f12";
        sceneTrigger = startScreen;
        console.log("Scene trigger to change");
    }
    backButton.onHover = function()
    {
      //teal color
      this.color = "#3bd1b3";
    }
    backButton.onOutside = function()
    {
      //white color
      this.color = "#ffffff";
    }
  }

  this.enter = function()
  {

  }

  this.draw = function()
  {
    background(0);

    backButton.draw();

    textAlign(CENTER);
    textSize(24);

    //frame background
    noFill();
    stroke(59, 209, 179); //teal color
    strokeWeight(6);
    rect(30,30, width-60, height-60);


    push();
      fill(255);
      strokeWeight(1);
      text("w : Move up", width/2,100);
      text("a : Move left", width/2,150 );
      text("s : Move down", width/2,200 );
      text("d : Move right", width/2,250 );
      text("n: Zoom out ", width/2,300 );
      text(" ", width/2,350 );
      text(" ", width/2,400 );

      fill(0);
      stroke(0);
      text("Back", width/2, height/2 + 235);
    pop();

    if(sceneTrigger == startScreen)
    {
      this.sceneManager.showScene(intro);
    }
  }

}


//////////////////////////////// CREDITS SCENE ///////////////////////////////////
function credits()
{
  this.setup = function()
  {
    //Back button to return to start screen
    backButton = new Clickable();
    backButton.width = 200;
    backButton.locate(width/2 - 100, (height/2) + 200);
    backButton.text = "";

    backButton.onPress = function()
    {
        this.color = "#db1f12";
        sceneTrigger = startScreen;
        console.log("Scene trigger to change");
    }
    backButton.onHover = function()
    {
      //teal color
      this.color = "#3bd1b3";
    }
    backButton.onOutside = function()
    {
      //white color
      this.color = "#ffffff";
    }
  }

  this.enter = function()
  {

  }

  this.draw = function()
  {
    background(0);

    backButton.draw();

    textAlign(CENTER);
    textSize(24);

    //frame background
    noFill();
    stroke(59, 209, 179); //teal color
    strokeWeight(6);
    rect(30,30, width-60, height-60);

    push();
      fill(255);
      strokeWeight(1);
      textSize(18);
      text("Programmer", width/2,65);   //title
      text("David Zenteno", 150,115);
      text("Graphic Assets", width/2,195);   //title
      text("David Zenteno", 150,245);
      text("Music", width/2,315);     //title
      text("Mega Man 2 Intro by Takashi Tateishi", 240, 355);
      text("The Maze of Mind by Takanori Arima", 240, 405);
      text("Fallen Down by Toby Fox", 200, 455);
      text("Victory Fanfare by Hitoshi Sakimoto", 240, 505);
      fill(0);
      stroke(0);
      text("Back", width/2, height/2 + 235);
    pop();

    if(sceneTrigger == startScreen)
    {
      this.sceneManager.showScene(intro);
    }
  }

}
