//David Zenteno


var smile = [                                             
[2 ,2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2 ],
[2 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2 ],
[0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2 ],
[0 ,0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0 ],
[0 ,0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0 ],
[0 ,0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0 ],
[0 ,0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0 ],
[0 ,0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0 ],        //  16 x 16
[0 ,0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0 ],
[0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
[0 ,0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0 ],
[0 ,0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
[0 ,0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
[2 ,0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0 ],
[2 ,2, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2 ],
[2 ,2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2 ]
]

var surprised = [

[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0],
[0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0],
[0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0],
[0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0],
[0,1,0,0,2,0,1,1,0,0,1,0,2,0,1,0],
[0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0],
[0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0],               //16x16
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0],
[0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0]

  
]

var a = 0;

function setup()
{
  createCanvas(600,610);
  smooth();
  
   
}


function draw() 
{
  background(181, 235, 124);
  //SMILE face grid
  push();
    createSmile(1);  
  pop();
  //SURPRISED face grid
  push();
    createSurprised(2);
  pop();
  //SMILE face grid 02
  push();
    createSmile02(3);
  pop();
  //SURPRISED face grid 02
  push();
    createSurprised02(4);
  pop();
  

}

//creates smile face grid top left corner
function createSmile( x)
{
  push();
    translate(0,0);
    scale(.6);
    push();
      for(var i = 0; i < 16;i++)
      {
    

        for(var j = 0; j < 16; j++)
        {
          a = smile[i][j];
          if(a ===1)
          {
            //fill(255, 248, 48);
            fill(0);
          }
          else if(a===0)
          {
            //fill(0);
            fill(255, 248, 48);
          }
          else
          {
            fill(255);
          }
          rect((j*30) + 15, (i*30)+15, 20,20);
        }
    
      }
    pop();
  pop();
}

//creates smile face bottom right corner
function createSmile02(x)
{
  push();
    translate(300,300);
    scale(.6);
    push();
      for(var i = 0; i < 16;i++)
      {
    

        for(var j = 0; j < 16; j++)
        {
          a = smile[i][j];
          if(a ===1)
          {
            
            fill(94, 47, 189);   
          }
          else if(a===0)
          {
            //fill(0);
            //fill(57, 96, 237);  //blue
            fill(237, 96, 57);   //orange
          }
          else
          {
            //fill(237, 96, 57); //orange
            fill(57, 96, 237);   //blue
          }
          rect((j*30) + 15, (i*30)+15, 20,20);
        }
    
      }
    pop();
  pop();
}

//creates surprised face top right corner
function createSurprised(x)
{
  push();
  translate(300,0);
  scale(.6);
  push();
    for(var i = 0; i < 16;i++)
    {

    for(var j = 0; j < 16; j++)
    {
       a = surprised[i][j];
       textSize(20);
      if(a ===1)
      {
        //fill(255, 248, 48);
        fill(209, 84, 168); //pink purple
        text("Where",(j*30) + 15, (i*30)+15,1 );
      }
      else if(a===0)
      {
        //fill(0);
        fill(140, 8, 8); //red
        text("am",(j*30) + 15, (i*30)+15,1);
      }
      else
      {

        fill(79, 194, 45);
        text("I?",(j*30) + 15, (i*30)+15,1);
      }
      
      //rect((j*30) + 15, (i*30)+15, 20,20);
    }
    
  }
  pop();

}

//creates surprised face bottom left corner
function createSurprised02(x )
{
  translate(0,300);
  scale(.6);
  push();
    for(var i = 0; i < 16;i++)
    {

    for(var j = 0; j < 16; j++)
    {
       a = surprised[i][j];

       textSize(20);
      if(a ===1)
      {
        //fill(255, 248, 48);
        fill(52, 133, 36);
        text("Where",(j*30) + 15, (i*30)+15 ,2);
      }
      else if(a===0)
      {
        //fill(0);
        fill(61, 204, 187);
        text("am",(j*30) + 15, (i*30)+15 ,2);
      }
      else
      {
        fill(51, 129, 232); //light blue
        text("I?",(j*30) + 15, (i*30)+15 ,2);
      }
      
      //rect((j*30) + 15, (i*30)+15, 20,20);
    }
    
  }
  pop();
  

}