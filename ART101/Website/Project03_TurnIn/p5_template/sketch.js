var night;
var day;

//each element in array  = 5 second mark
//x coordinates for lines to check the SECOND
let secLines = [9,33,58,82,105,130,154,179,204,229,254,279, 304]; //329

//x coordinates for lines to check the MINUTE
let minLines = [-15,-6,3,12,21,30, 39, 48, 57, 66, 75, 84, 93, 103,113, 121,
                  129,139,147,156,166,175,184,193,202,212,222,230,240,250
                 ,260];

//y coordinates for lines to check the HOUR
let hrLines = [-160,-143,-122,-100,-80,-60,-38,-18,3,24,45,66,86];


function setup() 
{
  night = 0;  
  day = 255;
  createCanvas(800,600);
  //frameRate(100);
  
}

/*************************************************DRAW */
function draw() 
{
  background(0);

  //Changes background to black if it is night/dark outside
  //or changes background to white if it is day/bright outside
  
  if(hour() >= 20 || hour()<=6)
  {
    background(night);
    fill(day);
  }
  else 
  {
    background(day);
    fill(night);
  }
  

  /*
  if(second() >= 20 || second()<=6)
  {
    background(night);
    fill(day);
    //stroke(day);
  }
  else 
  {
    background(day);
    fill(night);
    //stroke(night);
  }
  */


  //Draws lines to check where the SECONDS are
  for(var i =0; i<secLines.length -1;i++)
  {
    push();
      translate(500,320);
      rect(secLines[i], 50, 2,20);
    pop();
  }

  //Draws lines to check where the MINUTES are
  for(var i = 0; i <minLines.length-1;i++)
  {
    push();
      translate(20,320);
      rect(minLines[i], 50, 2,20);
    pop();
  }

  //Draws lines to check where the HOURS are
  for(var i = 0; i < hrLines.length-1;i++)
  {
    push();
      translate(340,160);
      rect(20,hrLines[i],80,2);  //x 50 width 20
    pop();
  }

  //Real time millis, seconds, minutes, and hours.
  let sec = second();
  let min = minute();
  let hr = hour();
  let mil = millis();

  //Map for milliseconds
  let mMil = map(mil, 0,1000,360,0);

  //Map for seconds
  //let mSec = map(sec, 0,60, 250,0);
  let mS = map(sec,0,60,500,width - 7);
  
  //Map for minute
  let mMinute = map(min, 0,60, 250, -24);
  
  //Map for hour
  let mHour = map(hr, 0,24, 250,0);


  /*************** TRIAL TEST *********************** */
  //test for rectangle 
  let recTest = map(sec, 0, 24, 250,0, true);
  //test for triangle
  let triTest = map(sec,0,60, 250,-24);
  /******************** TRIAL TEST ******************** */

  //Rectangle shape moving in 1 HOUR 
  push();
    noStroke();
    rect(370, mHour, 60, 34);  //y = 250 origin  
    //rect(370, recTest, 60, 34);
  pop();
  
  //Circle shape moving in 1 SECOND
  push();
    noStroke();
    ellipse(mS,380,20,20); //x = 500 origin
  pop();

  //Triangle shape moving in 1 MINUTE
  push();
    noStroke();
    translate(mMinute,330); //x = 250 origin
    //translate(triTest,330);
    triangle(40, 40, 20, 60, 60, 60);
  pop();
  

  push();
    rect(390,420,3,180);
  pop();

  //MILLISECONDS rotation
  push();
    translate(390,360);
    push();
      angleMode(RADIANS);
      let a = (mMil,mMil);  //mMill
      rotate(a);
      rect(0,0,40,10);
    pop();
  pop();
}

function milliRotate()
{
    

}