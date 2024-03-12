const wordInput = document.getElementById("text-input");
const buttonCheck = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const checkIfPalindrome = (input) =>{
  if(input === ""){
    alert("Please input a value");
    return;
  }

  const originalInput = input;
  const regex = /[^a-zA-Z0-9]/g;
  const regexedWord = input.replace(regex, "").toLowerCase();
  const reversedInput = [...regexedWord].reverse().join("");
  let result = regexedWord === reversedInput ? `<strong>${originalInput}</strong> is a palindrome.`: `<strong>${originalInput}</strong> is not a palindrome.`;

  resultText.innerHTML = result;
  console.log(reversedInput);//test
  console.log(regexedWord);//test
  console.log(result);//test
};

  // checkIfPalindrome("yee"); //test

buttonCheck.addEventListener('click', ()=>{
  checkIfPalindrome(wordInput.value);
  wordInput.value = "";
});
