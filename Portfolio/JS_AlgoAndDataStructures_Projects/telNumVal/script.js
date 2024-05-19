const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const input = document.getElementById("user-input");
const result = document.getElementById("results-div");
const regexArr = [
  /^1\s\d{3}\-\d{3}\-\d{4}/,
  /^1\s\(\d{3}\)\s\d{3}\-\d{4}/,
  /^(\d{10})$/,
  /^\d{3}\-\d{3}\-\d{4}/,
  /^\(\d{3}\)\d{3}\-\d{4}/,
  /^1\s\d{3}\s\d{3}\s\d{4}/,
  /1\(\d{3}\)\d{3}\-\d{4}/
  ];
let checker = false;

const resultOutput = (inputText) =>{
  for(let i=0; i< regexArr.length;i++){
    checker = regexArr[i].test(inputText);
    if(checker){
      // result.innerText = `Valid US number: ${inputText}`;
      const pElement = document.createElement("p");
      pElement.style.color = "#00471b";
      pElement.className = "output-text";
      const text = document.createTextNode(`Valid US number: ${inputText}`);
      pElement.appendChild(text);
      result.appendChild(pElement);
      break;
    }
  }
  if(!checker){
    // result.innerText = `Invalid US number: ${inputText}`;
    const pElement = document.createElement("p");
    pElement.style.color = "#4d3800";
    pElement.className = "output-text";
    const text = document.createTextNode(`Invalid US number: ${inputText}`);
    pElement.appendChild(text);
    result.appendChild(pElement);
  }
};

checkBtn.addEventListener("click",()=>{
  if(input.value ===""){
    alert("Please provide a phone number");
  }else{
    resultOutput(input.value);
    input.value = "";
  }
});

clearBtn.addEventListener("click", ()=>{
  result.textContent = "";
});
