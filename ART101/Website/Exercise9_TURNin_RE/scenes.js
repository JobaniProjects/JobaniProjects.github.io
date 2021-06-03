
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

        if(sound1.isPlaying())
        {
          sound1.pause();
        }
        else
        {
          sound1.play();
        }
    }


    this.draw = function()
    {
        background(0,0,255-loy);
        image(image1,0,0,width,height);
        textAlign(CENTER);
        textSize(29);
        // fill(200,0,0);

        push();
        //
        translate(width/2,loy*3);
        fill(255);
        text("Welcome to the world of Dragon Ball Z!", 0, 100);
        text("Click to Continue!", 0, 150);
        // ellipse(0,0,30,30);
        if (loy > 255) 
        {
          loy = 0;
          if(sound1.isPlaying())
          {
            sound1.pause();

          }
          else
          {
            souond1.play();
          }

        } 
        else 
        {
          loy++;
        }
        //
        pop();


    }

    // this.keyPressed = function() {
    //
    //
    // }

    this.mousePressed = function()
    {
        this.sceneManager.showScene(scene2);
    }
}

///////////////////////  2  ////////////////////////

function scene2()  {
   //let octo1,octo2;

  this.setup = function() {
      //background(0);
      console.log("We are at setup for scene2");
      //octo1 = new Octopi(400,600,color(255,0,0),.40);
      //octo2 = new Octopi(650,200,color(0,0,0),.10);
      

  }

  this.enter = function()
  {
    //sound1.pause();
      let loy = 255;

      console.log("We are at  scene2 ");

      if(sound2.isPlaying())
      {
        sound2.pause();

      }
      else
      {
        sound2.play();
      }
  }

    this.draw = function()
    {
      background(0,0,255-loy);
      //noStroke();
      //octo1.update();
      //octo1.display();
      //octo2.update();
      //octo2.display();
      image(image2,0,0,width,height);
      textAlign(CENTER);
      textSize(29);

      push();
        translate(width/2, loy*3);
        fill(255);
        text("Lets visit Master Roshi.",0,100);
        text("He is the oldest martial arts master in the world!",0,150);

        if(loy < 0)
        {
          loy = 255;
        }
        else
        {
          loy--;
        }
        pop();
      
    }

    /*
    this.mouseDragged = function() {
      console.log("mouseDragged");
      octo1.moveupdate(mouseX,mouseY-40);
      octo2.moveupdate(650,200);
    }
    */

    this.mousePressed = function()
    {

      //console.log("exit");
      this.sceneManager.showNextScene();
    }



  // this.keyPressed = function()  {
  //
  //       // switch(key)
  //       // {
  //       //     case 'h':
  //       //         mgr.showScene( scene3 );
  //       //     //     break;
  //       //     // case '2':
  //       //     //     mgr.showScene( scene2 );
  //       //     //     break;
  //       //     // case '3':
  //       //     //     mgr.showScene( scene3 );
  //       //     //     break;
  //       // }
  //
  //       // ... then dispatch via the SceneManager.
  //
  //   }





}






////////////////////////////// 3 /////////////////

function scene3() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene3");




    }

    this.enter = function()  
    {
      //sound1.pause();
      sound2.pause();
      

      let loy= 255;
      console.log("We are entering scene3");

      if(sound2.isPlaying())
      {
        sound2.pause();

      }
      else
      {
        sound2.play();
      }
    }




    this.draw = function() {
      background(0,0,255-loy);
      image(image3, 0,0,width,height);
      textAlign(CENTER);
      textSize(29);

        push();
        //
        translate(width/2,loy*3);
        fill(255);
        text("Woah we are in an advanced alien civilization!", 0, 100);
        text("Thanks to instant transmission, you can teleport anywhere in the universe!", 0, 150);

        if (loy < 0) {
          loy = 255;
        } else {
          loy--;
        }
        //
        pop();

    }

    this.mousePressed = function()  {

      this.sceneManager.showNextScene();
    }



    // this.keyPressed = function()  {
    //
    //       switch(key)
    //       {
    //           case 'h':
    //               mgr.showScene( scene2 );
    //           break;
    //           // case '2':
    //           //     mgr.showScene( scene2 );
    //           //     break;
    //           // case '3':
    //           //     mgr.showScene( scene3 );
    //           default:
    //           mgr.showScene( scene1 );
    //
    //       }
    //
    //       // ... then dispatch via the SceneManager.
    //
    //   }

}

///////////////////////  4  ////////////////////////

function scene4()  {
  //let octo1,octo2;
let loy = 255;
 this.setup = function() {
     background(0);
     console.log("We are at setup for scene4");
    // octo1 = new Octopi(400,600,color(255,0,0),.40);
    // octo2 = new Octopi(650,200,color(0,0,0),.10);

 }

 this.enter = function()
 {
   sound2.pause();
   let loy =255;

     console.log("We are entering scene4 ");

     if(sound2.isPlaying())
      {
        sound2.pause();

      }
      else
      {
        sound2.play();
      }

 }

   this.draw = function()
   {
     background(0);
     image(image4,0,0,width,height);
     textAlign(CENTER);
     textSize(29);
     //noStroke();
     //octo1.update();
     //octo1.display();
     //octo2.update();
     //octo2.display();

     push();
      translate(width/2, loy*3);
      fill(255);
      text("We are at King Kai's planet.",0,100);

      if(loy < 0)
      {
        loy = 255;
      }
      else
      {
        loy--;
      }
     pop();
   }

//   this.mouseDragged = function() {
  //   console.log("mouseDragged");
     //octo1.moveupdate(mouseX,mouseY-40);
     //octo2.moveupdate(650,200);
   //}

   this.mousePressed = function()
   {

     //console.log("exit");
     this.sceneManager.showNextScene();
   }



 // this.keyPressed = function()  {
 //
 //       // switch(key)
 //       // {
 //       //     case 'h':
 //       //         mgr.showScene( scene3 );
 //       //     //     break;
 //       //     // case '2':
 //       //     //     mgr.showScene( scene2 );
 //       //     //     break;
 //       //     // case '3':
 //       //     //     mgr.showScene( scene3 );
 //       //     //     break;
 //       // }
 //
 //       // ... then dispatch via the SceneManager.
 //
 //   }





}

///////////////////////  5  ////////////////////////

function scene5()  
{
  //let octo1,octo2;
let loy = 255;

 this.setup = function() {
     background(0);
     console.log("We are at setup for scene 5");
     //octo1 = new Octopi(400,600,color(255,0,0),.40);
     //octo2 = new Octopi(650,200,color(0,0,0),.10);

 }

 this.enter = function()
 {
   sound2.pause();
   let loy = 255;
     console.log("We are at  scene 5 (again?)");
     if(sound2.isPlaying())
      {
        sound2.pause();

      }
      else
      {
        sound2.play();
      }

 }

   this.draw = function()
   {
     background(0);
     //noStroke();
     //octo1.update();
     //octo1.display();
     //octo2.update();
     //octo2.display();

     image(image5,0,0,width,height);
     textAlign(CENTER);
     textSize(29);
     push();
      translate(width/2,loy*3);
      fill(255);
      text("Welcome to the sacred World", 0,100);
      text("of the Kai",0,150);
      if(loy < 0)
      {
        loy = 255;
        
      }
      else
      {
        loy--;
      }
     pop();
   }

   /*
   this.mouseDragged = function() {
     console.log("mouseDragged");
     octo1.moveupdate(mouseX,mouseY-40);
     octo2.moveupdate(650,200);
   }
   */

   this.mousePressed = function()
   {

     //console.log("exit");
     //this.sceneManager.showNextScene();
     mgr.showScene(intro);
   }



 // this.keyPressed = function()  {
 //
 //       // switch(key)
 //       // {
 //       //     case 'h':
 //       //         mgr.showScene( scene3 );
 //       //     //     break;
 //       //     // case '2':
 //       //     //     mgr.showScene( scene2 );
 //       //     //     break;
 //       //     // case '3':
 //       //     //     mgr.showScene( scene3 );
 //       //     //     break;
 //       // }
 //
 //       // ... then dispatch via the SceneManager.
 //
 //   }




  }

/*

function theend() {

  this.setup = function()  {
      console.log("we are setting up on the result scene");
  }

  this.enter = function() {
     console.log("we are entering the result scene");

  }

 this.draw = function() {
   background(255,0,0);
   text("the result",width/2,height/2);

 }
}
*/
