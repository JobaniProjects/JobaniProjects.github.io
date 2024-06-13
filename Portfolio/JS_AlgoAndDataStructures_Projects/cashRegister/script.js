//@author: David Zenteno
let price = 1.87;   //1.87
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const purchaseBtn = document.getElementById("purchase-btn");
const priceTotal = document.querySelector(".cr-total-price");
const changeDue = document.getElementById("change-due");
const cashInput = document.getElementById("cash");
const crScreen = document.querySelector(".cr-screen");
let changeWorthArr = [100, 20, 10, 5, 1, .25, .1, .05, .01];
let checker = true;

priceTotal.textContent = `Total: $${price}`;

let cidReverse = structuredClone(cid);
cidReverse = cidReverse.reverse();
cidReverse.forEach((el)=>{
  el[1] = Math.ceil(el[1] * 100);
});

// console.log("cidReverse output: ", cidReverse); //TEST
// console.log("--------------------");
// console.log("cid output: ",cid);   //TEST
// console.log("--------------------");

const changeOutput = () =>{
  let dueChange = Math.round((parseFloat(cashInput.value) - price) * 100);
  let cidTotal = cidReverse.reduce((acc,el)=>acc+el[1],0);
  let tempCidReverse = structuredClone(cidReverse);
  // console.log("CID Total: " , cidTotal); //TEST
  // console.log("Due change: ", dueChange); //TEST
  changeDue.innerHTML = "";

  if(cidTotal < dueChange){
    changeDue.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
    return;
  }else if(cidTotal === dueChange){
    changeDue.innerHTML = `<p>Status: CLOSED</p>`;
  }else if(cidTotal > dueChange){
    changeDue.innerHTML = `<p>Status: OPEN</p>`;
  }

  for(let i =0; i < cidReverse.length; i++){
    let count = 0;
    while(cidReverse[i][1] > 0){
      let tempChangeWorth = changeWorthArr[i] * 100;
      if(dueChange >= tempChangeWorth){
        dueChange = dueChange - tempChangeWorth;
        cidReverse[i][1] = cidReverse[i][1] - tempChangeWorth;
        count = count + tempChangeWorth;
        // console.log("change: " + cidReverse[i][0] + " | element: " + i + " | change due:", count);
      }else{
        break;
      }
    }
    if(count > 0){
      changeDue.innerHTML += `<p>${cidReverse[i][0]}: $${count/100}</p>`;
    }
  }
  // console.log("Due change: ",dueChange); //TEST
  if(dueChange > 0){
    changeDue.innerHTML = `<p>Status: INSUFFICIENT_FUNDS</p>`;
    cidReverse = [...tempCidReverse];
    // console.log("cidReverse Updated: ", cidReverse); //TEST
  }
};

const checkCashInput = () =>{
  if(parseFloat(cashInput.value) < price){
    alert("Customer does not have enough money to purchase the item");
    checker = false;
  }else if(parseFloat(cashInput.value) === price){
    changeDue.textContent = "No change due - customer paid with exact cash";
    checker = false;
  }
};

const changeInDrawer = () =>{
  crScreen.innerHTML = `
  <p class="cid-p"><b>Change in drawer:</b></p>
  <p class="cid-p">Pennies: $${(cid[0][1]).toFixed(2)}</p>
  <p class="cid-p">Nickles: $${(cid[1][1]).toFixed(2)}</p>
  <p class="cid-p">Dimes: $${(cid[2][1]).toFixed(2)}</p>
  <p class="cid-p">Quarters: $${cid[3][1]}</p>
  <p class="cid-p">Ones: $${cid[4][1]}</p>
  <p class="cid-p">Fives: $${cid[5][1]}</p>
  <p class="cid-p">Tens: $${cid[6][1]}</p>
  <p class="cid-p">Twenties: $${cid[7][1]}</p>
  <p class="cid-p">Hundreds: $${cid[8][1]}</p>
  `;
};
changeInDrawer();

const updateCID = (updateArr,updatedArrValues) =>{
  let i = 0;
  let j = updatedArrValues.length - 1;
  while(i < updateArr.length && j >=0){
    updateArr[i][1] = updatedArrValues[j][1]/100;
    // updateArr[i][1] = updatedArrValues[j][1];
    //cid[i][1] = cidReverse[i][1];
    i++;
    j--;
  }
   changeInDrawer();
};
// changeInDrawer();

const updateCidReverse = () =>{
  cidReverse = structuredClone(cid);
  cidReverse = cidReverse.reverse();
  cidReverse.forEach((el)=>{
    el[1] = Math.ceil(el[1] * 100);
  });
};

purchaseBtn.addEventListener("click", ()=>{
  updateCidReverse();
  checkCashInput();
  if(checker){
    changeOutput();
  }else{
    checker = true;
  }
  updateCID(cid, cidReverse);
  // console.log("cid check: ",cid); //TEST
  // console.log("reverseCid check: ", cidReverse);//TEST
});
