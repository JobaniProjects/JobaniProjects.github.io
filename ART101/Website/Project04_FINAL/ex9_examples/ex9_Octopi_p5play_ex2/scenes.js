
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy= 0;

////////////////////////////// 1 /////////////////
function intro()  {

    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background("blue");
      textAlign(CENTER);
      textSize(29);


    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        // textX = 10;
        // textY = 0;
        loy = 100;
        background("red");

        //send off stage
        helpbtnsprite.position.x =  -500;
        helpbtnsprite.position.y =  -500;

        //put the sprite on the stage
        nextbtnsprite.position.x = width  -100;
        nextbtnsprite.position.y = height -100;
        nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
        nextbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
        nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
        nextbtnsprite.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showNextScene();
        };


        // if (snd1.isPlaying()) {
        // // .isPlaying() returns a boolean
        //     snd1.pause(); // .play() will resume from .pause() position
        // //  background(255, 0, 0);
        // } else {
        //     snd1.play();
        //   //background(0, 255, 0);
        // }


    }


    this.draw = function()
    {
        background(0,0,255-loy);
        image(img1,0,0,width,height);

        textAlign(CENTER);
        textSize(29);
        // fill(200,0,0);


        push();
        //
        translate(width/2,loy*3);
        fill(255);
        text("We are going deep...", 0, 100);
        text("Click to Continue", 0, 150);
        // ellipse(0,0,30,30);
        if (loy > 255) {
          loy = 0;

          // if (snd1.isPlaying()) {
          // // .isPlaying() returns a boolean
          //     snd1.pause(); // .play() will resume from .pause() position
          // //  background(255, 0, 0);
          // } else {
          //     snd1.play();
          //   //background(0, 255, 0);
          // }

        } else {
          loy++;
        }
        //
        pop();

        drawSprites();  //used to show any sprites on the stage

    }


}

///////////////////////  2 (main) ////////////////////////

function main()  {
   let octo1,octo2;

  this.setup = function() {
      background(0);
      console.log("We are at setup for scene2");
      octo1 = new Octopi(width/2-100,height/2-100,color(255,0,0),.20);
  }

  this.enter = function()
  {
      snd1.pause();
      snd3.pause();
      console.log("We are at  scene2 (again?)");
    //  snd2.loop();
    //send off stage
    nextbtnsprite.position.x =  -500;
    nextbtnsprite.position.y =  -500;
    //put the sprite on the stage
    helpbtnsprite.position.x = 100;
    helpbtnsprite.position.y = height -100;
    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1); };
    helpbtnsprite.onMouseOut = function() {  this.animation.goToFrame(0); };
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2); };
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showNextScene();
    };

     // the sounds also play
      // if (snd2.isPlaying()) {
      // // .isPlaying() returns a boolean
      //     snd2.pause(); // .play() will resume from .pause() position
      // //  background(255, 0, 0);
      // } else {
      //     snd2.play();
      //   //background(0, 255, 0);
      // }


  }

    this.draw = function()
    {
      background(0);
      image(img2,0,0,width,height);
      noStroke();
      octo1.update();
      octo1.display();

      drawSprites();

    }

    this.mouseDragged = function() {
      console.log("mouseDragged");
    //  octo1.moveupdate(mouseX,mouseY-40);
      octo1.moveupdate(width/2-100,height/2-100);
    }

}






////////////////////////////// 3 /////////////////

function help() {

    let loy= 255;
    this.setup = function()  {
        console.log("We are at setup for scene3");
    }

    this.enter = function()  {
        let loy= 255;
        console.log("We are entering scene3");

        //send off stage and stop sounds
        helpbtnsprite.position.x =  -500;
        helpbtnsprite.position.y =  -500;
        snd1.pause();
        snd2.pause();

        //put the sprite on the stage
        nextbtnsprite.position.x = width  -100;
        nextbtnsprite.position.y = height -100;
        nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1); };
        nextbtnsprite.onMouseOut = function() {  this.animation.goToFrame(0); };
        nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2); };
        nextbtnsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);

          if (snd3.isPlaying()) {
              snd3.pause();
          } else {
              snd3.play();
          }
          mgr.showScene(intro);

        };

        //snd2.loop();

    }


    this.draw = function() {
        background(0,0,255-loy);
        image(img3,0,0,width,height);
        textAlign(CENTER);
        textSize(29);
        push();
        //
        translate(width/2,loy*3);
        fill(255);
        text("This is help", 0, 100);
        text("Click the the next button to go back to intro.", 0, 150);
        
          if (loy < 0) {
            loy = 255;
          } else {
            loy--;
          }
        //
        pop();
        drawSprites();  //used to show any sprites on the stage

    }

}
