/*
   Writes Fizz when number is divisible by 3, Buzz
   when divisible by 5, and FizzBuzz when divisible
   by both 3 and 5.
*/

var nums = 0;
for(var i = 0; i < 100; i++)
{
  nums++;

  if(nums % 5 == 0 && nums % 3 ==0)
  {
    console.log("FizzBuzz");
  }
  else if(nums % 3 ==0)
  {
    console.log("Fizz");
  }
  else if(nums % 5 == 0)
  {
    console.log("Buzz");
  }
  else
  {
    console.log(nums);
  }
}
