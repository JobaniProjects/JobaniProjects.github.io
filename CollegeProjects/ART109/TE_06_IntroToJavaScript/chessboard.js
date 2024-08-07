/*
   Creates a string that represents an 8×8 grid,
   using newline characters to separate lines.
*/

var SIZE = 8;

var group = "";


for(var i = 1; i <= SIZE; i++)
{
 for(var j = 1; j <=SIZE; j++)
 {
    if((i + j) % 2 ==0)
    {
      group = group + "#";
    }
    else if((i +j) % 2 == 1)
    {
       group = group + " ";
    }
 }
 group = group + "\n";
}
console.log(group);
