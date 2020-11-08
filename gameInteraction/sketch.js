var ballX = 300;
var ballY = 300;
var ballSize = 40;

//losing balls
var loseBallX = 200;
var loseBallY = 200;
var loseBallSize= 40

var loseBallX2 = 250;
var loseBallY2 = 250;
var loseBallSize2 = 40;

var loseBallX3 =260;
var loseBallY3 =260;

var loseBallX4 = 270;
var loseBallY4 = 270;

var loseBallX5 = 280;
var loseBallY5 = 280;

var loseBallX6 = 290;
var loseBallY6 = 290;

var loseBallX7 = 310;
var loseBallY7 = 310;

var loseBallX8 = 320;
var loseBallY8 = 320;

var loseBallX9 = 450;
var loseBallY9 = 450;

var loseBallX10 = 330;
var loseBallY10 = 330;

var loseBallX11 = 340;
var loseBallY11 = 340;

var loseBallX12 = 350;
var loseBallY12 = 350;

var loseBallX13 = 360;
var loseBallY13 = 360;

var loseBallX14 = 370;
var loseBallY14 = 370;

var loseBallX15 = 380;
var loseBallY15 = 380;

var loseBallX16 = 390;
var loseBallY16 = 390;

var loseBallX17 = 400;
var loseBallY17 = 400;

var loseBallX18 = 410;
var loseBallY18 = 410;

var loseBallX19 = 420;
var loseBallY19 = 420;

var loseBallX20 = 430;
var loseBallY20 = 430;

var loseBallX21 = 440;
var loseBallY21 = 440;

var score = 0;
var gameState = "level 1";



var rand = 420;
var rand2 = 420;
var rand3 = 420
var rand4 = 420;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(220);
  if(gameState == "level 1")
  {
    levelOne();    
  }
  
  if(gameState == "level 2")
  {
    levelTwo();
  }
  if(gameState == "level 3")
  {
    levelThree();
  }
  if(gameState == "level 4")
  {
    levelFour();
  }
  if(gameState == "level 5")
  {
    levelFive();
  }
  if(gameState == "level 6")
  {
    levelSix();
  }
  if(gameState == "final level")
  {
    finalLevel();
  }
  if(gameState == "you win")
  {
    youWin();
  }
  
  if(gameState == "game over")
  {
    gameOver();
  }
  
  text(("Score: " + score),width/2,40);
}

function levelOne()
{
  text("Level 1", width/2, height-20 );
  
  
  var ballDistance = dist(ballX, ballY, mouseX,mouseY);
  
  if(ballDistance < ballSize/2)
  {
    ballX = random(width);
    ballY = random(height);
    
    score = score + 1;
  }
  
  line(ballX,ballY,mouseX,mouseY);
  ellipse(ballX,ballY,ballSize, ballSize);
  
  if(score==10)
  {
    
    gameState = "level 2";
  }
} //End of level one ============================================

function levelTwo()
{
  background(244,122,0);
  text("Level 2", width/2, height-20 );

  
  var ballDistance = dist(ballX, ballY, mouseX,mouseY);
  
  if(ballDistance < ballSize/2)
  {
    ballX = random(width);
    ballY = random(height);
    score = score + 1;
  }
  
  ellipse(ballX,ballY,ballSize, ballSize);
  
  if(score == 20)
  {
      
    gameState = "level 3";
  }
} //End of level two==========================================

function levelThree()
{
  background(123,133,233);
  text("Level 3", width/2, height-20 );
  
  
  var ballDistance = dist(ballX, ballY, mouseX,mouseY);
  
  if(ballDistance < ballSize/2)
  {
    ballX = random(width);
    ballY = random(height);
    score = score + 1;
  }
  
  ellipse(ballX,ballY,ballSize -22, ballSize -22);
  
  if(score == 30)
  {
    gameState = "level 4";  
  }
} //End of level three =======================================

function levelFour()
{
  background(255,0,156);
  text("Level 4", width/2, height-20 );
  
  
  var ballDistance = dist(ballX, ballY, mouseX,mouseY);
  
  if(ballDistance < ballSize/2)
  {
    ballX = random(width);
    ballY = random(height);
    

    
    rand = random(width);
    rand2 = random(height);
    rand3 = random(width);
    rand4 = random(height + 10);
    score = score + 1;
  }

  
  
  //Goal ball
  ellipse(ballX,ballY,ballSize -22, ballSize -22);
  
  
  fill('red');
  circle(ballY +100  ,ballX +100 , 20);
  fill('blue');
  circle(rand, ballX -50, 20);
  fill('yellow');
  circle(rand2 + 10, rand -6, 20);
  fill('orange');
  circle(ballY-4, rand2 +8, 20);
  fill('green');
  circle(rand, rand2,20);
  fill('#fae');
  circle((ballX - rand) + 50,rand2 -6,20);
  fill(233,98,143);
  circle(rand3,rand, 20);
  fill(122,222,44);
  circle(rand,rand3,20);
  fill(145, rand2, 255);
  circle(rand2, rand3, 20);
  fill(98,210,rand);
  circle(rand4,rand,20);
  
  fill('white');
  
  if(score == 40)
  {
    gameState = "level 5";  
  }
} //End of level 4 =======================================






function levelFive()
{
  background(255,0,156);
  text("Level 5", width/2, height-20 );
  
  
  var ballDistance = dist(ballX, ballY, mouseX,mouseY);
  var loseBallDistance = dist(loseBallX, loseBallY, mouseX, mouseY);
  var loseBallDistance2 = dist(loseBallX2, loseBallY2, mouseX, mouseY);
  
  if(ballDistance < ballSize/2)
  {
    ballX = random(width);
    ballY = random(height);
    
    loseBallX = random(width);
    loseBallY = random(height);
    
    loseBallX2 = random(width);
    loseBallY2 = random(height);
    
    rand = random(width);
    rand2 = random(height);
    rand3 = random(width);
    rand4 = random(height + 10);
    score = score + 1;
  }
  if(loseBallDistance < loseBallSize/2)
  {
    gameState = "game over";
  }
  if(loseBallDistance2 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  
  
  //Goal ball
  ellipse(ballX,ballY,ballSize -22, ballSize -22);
  //Game Over ball
  fill('black');
  ellipse(loseBallX,loseBallY,ballSize-22,ballSize-22);
  ellipse(loseBallX2, loseBallY2,ballSize-22,ballSize-22);
  
  
  fill('red');
  circle(ballY +100  ,ballX +100 , 20);
  fill('blue');
  circle(rand, ballX -50, 20);
  fill('yellow');
  circle(rand2 + 10, rand -6, 20);
  fill('orange');
  circle(ballY-4, rand2 +8, 20);
  fill('green');
  circle(rand, rand2,20);
  fill('#fae');
  circle((ballX - rand) + 50,rand2 -6,20);
  fill(233,98,143);
  circle(rand3,rand, 20);
  fill(122,222,44);
  circle(rand,rand3,20);
  fill(145, rand2, 255);
  circle(rand2, rand3, 20);
  fill(98,210,rand);
  circle(rand4,rand,20);
  
  fill('white');
  
  if(score == 50)
  {
    gameState = "level 6";  
  }
} //End of level 5 =======================================


function levelSix()
{
  background(123,211,126);
  text("Level 6", width/2, height-20 );
  
  //Win ball
  var ballDistance = dist(ballX, ballY, mouseX,mouseY);
  
  //Lose balls
  var loseBallDistance = dist(loseBallX, loseBallY, mouseX, mouseY);
  var loseBallDistance2 = dist(loseBallX2, loseBallY2, mouseX, mouseY);
  
  var loseBallDistance3 = dist(loseBallX3, loseBallY3, mouseX, mouseY);
  var loseBallDistance4 = dist(loseBallX4, loseBallY4, mouseX, mouseY);
  var loseBallDistance5 = dist(loseBallX5, loseBallY5, mouseX, mouseY);
  var loseBallDistance6 = dist(loseBallX6, loseBallY6, mouseX, mouseY);
  var loseBallDistance7 = dist(loseBallX7, loseBallY7, mouseX, mouseY);
  var loseBallDistance8 = dist(loseBallX8, loseBallY8, mouseX, mouseY);
  
  
  if(ballDistance < ballSize/2)
  {
    ballX = random(width);
    ballY = random(height);
    
    loseBallX = random(width);
    loseBallY = random(height);
    
    loseBallX2 = random(width);
    loseBallY2 = random(height);
 
    loseBallX3 = random(width);
    loseBallY3 = random(height);    
    
    loseBallX4 = random(width);
    loseBallY4 = random(height);
    
    loseBallX5 = random(width);
    loseBallY5 = random(height);    
    
    loseBallX6 = random(width);
    loseBallY6 = random(height);    
    
    loseBallX7 = random(width);
    loseBallY7 = random(height);
    
    loseBallX8 = random(width);
    loseBallY8 = random(height);    
    
    
    rand = random(width);
    rand2 = random(height);
    rand3 = random(width);
    rand4 = random(height + 10);
    score = score + 1;
  }
  //lose balls
  if(loseBallDistance < loseBallSize/2)
  {
    gameState = "game over";
  }
  if(loseBallDistance2 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance3 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance4 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance5 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance6 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance7 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance8 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  
  
  //Goal ball
  ellipse(ballX,ballY,ballSize -22, ballSize -22);
  //Game Over balls
  fill('black');
  ellipse(loseBallX,loseBallY,ballSize-22,ballSize-22); 
  
  ellipse(loseBallX2, loseBallY2,ballSize-22,ballSize-22);
  ellipse(loseBallX3,loseBallY3,ballSize-22,ballSize-22); 
  ellipse(loseBallX4, loseBallY4,ballSize-22,ballSize-22);  
  ellipse(loseBallX5,loseBallY5,ballSize-22,ballSize-22); 
  ellipse(loseBallX6, loseBallY6,ballSize-22,ballSize-22);  
  ellipse(loseBallX7,loseBallY7,ballSize-22,ballSize-22); 
  ellipse(loseBallX8, loseBallY8,ballSize-22,ballSize-22);
  
  fill('red');
  circle(ballY +100  ,ballX +100 , 20);
  fill('blue');
  circle(rand, ballX -50, 20);
  fill('yellow');
  circle(rand2 + 10, rand -6, 20);
  fill('orange');
  circle(ballY-4, rand2 +8, 20);
  fill('green');
  circle(rand, rand2,20);
  fill('#fae');
  circle((ballX - rand) + 50,rand2 -6,20);
  fill(233,98,143);
  circle(rand3,rand, 20);
  fill(122,222,44);
  circle(rand,rand3,20);
  fill(145, rand2, 255);
  circle(rand2, rand3, 20);
  fill(98,210,rand);
  circle(rand4,rand,20);
  
  fill('white');
  
  if(score == 60)
  {
    gameState = "final level";  
  }
} //End of level 6 =======================================


function finalLevel()
{
  background(80,111,226);
  text("!!FINAL LEVEL!!", width/2, height-20 );
  
  //Win ball
  var ballDistance = dist(ballX, ballY, mouseX,mouseY);
  
  //Lose balls
  var loseBallDistance = dist(loseBallX, loseBallY, mouseX, mouseY);
  var loseBallDistance2 = dist(loseBallX2, loseBallY2, mouseX, mouseY);
  
  var loseBallDistance3 = dist(loseBallX3, loseBallY3, mouseX, mouseY);
  var loseBallDistance4 = dist(loseBallX4, loseBallY4, mouseX, mouseY);
  var loseBallDistance5 = dist(loseBallX5, loseBallY5, mouseX, mouseY);
  var loseBallDistance6 = dist(loseBallX6, loseBallY6, mouseX, mouseY);
  var loseBallDistance7 = dist(loseBallX7, loseBallY7, mouseX, mouseY);
  var loseBallDistance8 = dist(loseBallX8, loseBallY8, mouseX, mouseY);
  var loseBallDistance9 = dist(loseBallX9, loseBallY9, mouseX, mouseY);
  var loseBallDistance10 = dist(loseBallX10, loseBallY10, mouseX, mouseY);
  var loseBallDistance11 = dist(loseBallX11, loseBallY11, mouseX, mouseY);
  var loseBallDistance12 = dist(loseBallX12, loseBallY12, mouseX, mouseY);
  var loseBallDistance13 = dist(loseBallX13, loseBallY13, mouseX, mouseY);
  var loseBallDistance14 = dist(loseBallX14, loseBallY14, mouseX, mouseY);
  var loseBallDistance15 = dist(loseBallX15, loseBallY15, mouseX, mouseY);
  var loseBallDistance16 = dist(loseBallX16, loseBallY16, mouseX, mouseY);
  var loseBallDistance17 = dist(loseBallX17, loseBallY17, mouseX, mouseY);
  var loseBallDistance18 = dist(loseBallX18, loseBallY18, mouseX, mouseY);
  var loseBallDistance19 = dist(loseBallX19, loseBallY19, mouseX, mouseY);
  var loseBallDistance20 = dist(loseBallX20, loseBallY20, mouseX, mouseY);
  var loseBallDistance21 = dist(loseBallX21, loseBallY21, mouseX, mouseY);
  
  
  if(ballDistance < ballSize/2)
  {
    ballX = random(width);
    ballY = random(height);
    
    loseBallX = random(width);
    loseBallY = random(height);
    
    loseBallX2 = random(width);
    loseBallY2 = random(height);
 
    loseBallX3 = random(width);
    loseBallY3 = random(height);    
    
    loseBallX4 = random(width);
    loseBallY4 = random(height);
    
    loseBallX5 = random(width);
    loseBallY5 = random(height);    
    
    loseBallX6 = random(width);
    loseBallY6 = random(height);    
    
    loseBallX7 = random(width);
    loseBallY7 = random(height);
    
    loseBallX8 = random(width);
    loseBallY8 = random(height);    
    
    loseBallX9 = random(width);
    loseBallY9 = random(height);
    
    loseBallX10 = random(width);
    loseBallY10 = random(height);
 
    loseBallX11 = random(width);
    loseBallY11 = random(height);    
    
    loseBallX12 = random(width);
    loseBallY12 = random(height);
    
    loseBallX13 = random(width);
    loseBallY13 = random(height);    
    
    loseBallX14 = random(width);
    loseBallY14 = random(height);    
    
    loseBallX15 = random(width);
    loseBallY15 = random(height);
    
    loseBallX16 = random(width);
    loseBallY16 = random(height); 
    
    loseBallX17 = random(width);
    loseBallY17 = random(height);
    
    loseBallX18 = random(width);
    loseBallY18 = random(height);    
    
    loseBallX19 = random(width);
    loseBallY19 = random(height);    
    
    loseBallX20 = random(width);
    loseBallY20 = random(height);
    
    loseBallX21 = random(width);
    loseBallY21 = random(height);     
    
    rand = random(width);
    rand2 = random(height);
    rand3 = random(width);
    rand4 = random(height + 10);
    score = score + 1;
  }
  //lose balls
  if(loseBallDistance < loseBallSize/2)
  {
    gameState = "game over";
  }
  if(loseBallDistance2 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance3 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance4 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance5 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance6 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance7 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance8 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
    //lose balls
  if(loseBallDistance9 < loseBallSize/2)
  {
    gameState = "game over";
  }
  if(loseBallDistance10 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance11 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance12 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance13 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance14 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance15 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance16 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance17 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance18 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance19 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance20 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  if(loseBallDistance21 < loseBallSize2/2)
  {
    gameState = "game over";      
  }
  
  //Goal ball
  ellipse(ballX,ballY,ballSize -22, ballSize -22);
  //Game Over balls
  fill('black');
  ellipse(loseBallX, loseBallY,ballSize-22, ballSize-22); 
  ellipse(loseBallX2, loseBallY2, ballSize-22, ballSize-22);
  ellipse(loseBallX3, loseBallY3, ballSize-22, ballSize-22); 
  ellipse(loseBallX4, loseBallY4, ballSize-22, ballSize-22);  
  ellipse(loseBallX5, loseBallY5, ballSize-22, ballSize-22); 
  ellipse(loseBallX6, loseBallY6, ballSize-22, ballSize-22);  
  ellipse(loseBallX7, loseBallY7, ballSize-22, ballSize-22); 
  ellipse(loseBallX8, loseBallY8, ballSize-22, ballSize-22);
  ellipse(loseBallX9, loseBallY9, ballSize-22, ballSize-22);
  ellipse(loseBallX10, loseBallY10, ballSize-22, ballSize-22); 
  ellipse(loseBallX11, loseBallY11, ballSize-22, ballSize-22);  
  ellipse(loseBallX12, loseBallY12, ballSize-22, ballSize-22); 
  ellipse(loseBallX13, loseBallY13, ballSize-22, ballSize-22);  
  ellipse(loseBallX14, loseBallY14, ballSize-22, ballSize-22); 
  ellipse(loseBallX15, loseBallY15, ballSize-22, ballSize-22);
  ellipse(loseBallX16, loseBallY16, ballSize-22, ballSize-22); 
  ellipse(loseBallX17, loseBallY17, ballSize-22, ballSize-22);  
  ellipse(loseBallX18, loseBallY18, ballSize-22, ballSize-22); 
  ellipse(loseBallX19, loseBallY19, ballSize-22, ballSize-22);  
  ellipse(loseBallX20, loseBallY20, ballSize-22, ballSize-22); 
  ellipse(loseBallX21, loseBallY21, ballSize-22, ballSize-22);
  
  
  
  fill('red');
  circle(ballY +100  ,ballX +100 , 20);
  fill('blue');
  circle(rand, ballX -50, 20);
  fill('yellow');
  circle(rand2 + 10, rand -6, 20);
  fill('orange');
  circle(ballY-4, rand2 +8, 20);
  fill('green');
  circle(rand, rand2,20);
  fill('#fae');
  circle((ballX - rand) + 50,rand2 -6,20);
  fill(233,98,143);
  circle(rand3,rand, 20);
  fill(122,222,44);
  circle(rand,rand3,20);
  fill(145, rand2, 255);
  circle(rand2, rand3, 20);
  fill(98,210,rand);
  circle(rand4,rand,20);
  
  fill('white');
  
  if(score == 70)
  {
    gameState = "you win";  
  }
} //End of final level =======================================

function youWin()
{
  background(100,200,244);
  text("Congratulations,", width/2, 250);
  text("you won.", width/2, 280);
}

function gameOver()
{
  background(222,100,156);
  text("GAME OVER", width/2, 250 );
  
}