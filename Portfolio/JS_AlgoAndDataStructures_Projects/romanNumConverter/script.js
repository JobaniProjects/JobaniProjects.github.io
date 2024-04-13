const convertBtn = document.getElementById("convert-btn");
const outputResult = document.getElementById("output");
const userInput = document.getElementById("number");

const rNConverter = () =>{
  let inputInt = parseInt(userInput.value);
  const allNums = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  const arrOutput = [];
  let numTotal = inputInt;
  allNums.forEach((arr)=>{
    //let numTotal = inputInt;
    while(numTotal >= arr[1]){
      arrOutput.push(arr[0]);
      numTotal -= arr[1];
    }
  });
  let result = arrOutput.join("");
  outputResult.innerText = result;
  outputResult.classList.add("no-error")

}

const inputChecker = () =>{
  let inputInt = parseInt(userInput.value);
  if(userInput.value ===""){
    outputResult.innerText = "Please enter a valid number";
    outputResult.classList.remove("no-error");
    outputResult.classList.add("error");
  }else if(inputInt <= 0){
    outputResult.innerText = "Please enter a number greater than or equal to 1";
    outputResult.classList.remove("no-error");
    outputResult.classList.add("error");
  }else if(inputInt >= 4000){
    outputResult.innerText = "Please enter a number less than or equal to 3999";
    outputResult.classList.remove("no-error");
    outputResult.classList.add("error");
  }
}

convertBtn.addEventListener("click",()=>{
  rNConverter();
  inputChecker();
  outputResult.classList.remove("hidden");
});

userInput.addEventListener("keydown", (e)=>{
  if(e.key === "Enter"){
    rNConverter();
    inputChecker();
    outputResult.classList.remove("hidden");
  }
});
