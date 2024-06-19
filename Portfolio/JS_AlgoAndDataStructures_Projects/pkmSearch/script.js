// @Author: David Zenteno
let arr = [];
let pokemonUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const searchBtn = document.getElementById("search-button");
const input = document.getElementById("search-input");
const pkmName = document.getElementById("pokemon-name");
const pkmId = document.getElementById("pokemon-id");
const pkmWeight = document.getElementById("weight");
const pkmHeight = document.getElementById("height");
const pkmImg = document.getElementById("pkm-img");
const pkmTypes = document.getElementById("types");

const pkmHp = document.getElementById("hp");
const pkmAttack = document.getElementById("attack");
const pkmDefense = document.getElementById("defense");
const pkmSpAttack = document.getElementById("special-attack");
const pkmSpDefence = document.getElementById("special-defense");
const pkmSpeed = document.getElementById("speed");

// fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/1")
//   .then((res)=>res.json())
//   .then((data)=>{
//     arr = data;
//     console.log(arr);
//     console.log("--------------------");
//     console.log("arr[types][0][type] :",arr["types"][0]["type"]);
//     console.log("arr[types][1][type] :",arr["types"][1]["type"]);
//   });

const fetchPokemon = async()=>{
  let url = adjustUrl();
  console.log("URL: " ,url);
  try{
    const res = await fetch(url);
    const data = await res.json();
    displayPkmInfo(data);
    // console.log(data); //TEST
  }catch(err){
    alert("Pokémon not found");
    console.log(err);
  }
};

const displayPkmInfo = (data) =>{
  const {name, id, weight, height, sprites,types, stats} = data;
  const {front_default} = sprites;
  const type1 = types[0]["type"]["name"].toUpperCase();
  const type2 = types[1]?.["type"]["name"].toUpperCase() || "No Type 2";
  const typesCount = data["types"].length; //Checks how many types it has
  // console.log("typesCount: ",typesCount); //TEST
  let statsArr = [pkmHp, pkmAttack, pkmDefense, pkmSpAttack, pkmSpDefence, pkmSpeed];

  pkmName.innerText = name.toUpperCase();
  pkmId.innerText = `#${id}`;
  pkmWeight.innerText = `Weight: ${weight}`;
  pkmHeight.innerText = `Height: ${height}`;
  pkmImg.innerHTML = `<img src="${front_default}" class="img-center" id="sprite" height="180" alt="${name}">`;
  pkmTypes.innerHTML = typesCount === 1
  ? `<p class="type ${type1}">${type1}</p>`
  : `<p class="type ${type1}">${type1}</p> <p class="type ${type2}">${type2}</p>`;
  statsArr.forEach((el,index)=>el.innerText = `${stats[index]["base_stat"]}`);
};

const adjustUrl = ()=>{
  let userInput = (input.value).toLowerCase();
  if(userInput === "nidoran" || userInput === "nidoran m"){
    userInput = "nidoran-m";
  }else if(userInput === "nidoran f"){
    userInput = "nidoran-f";
  }
  // console.log("User Input: ", userInput); //TEST
  const pkmInfoUrl = pokemonUrl.concat(userInput);
  // console.log("pkmInfoUrl: ",pkmInfoUrl); //TEST
  return pkmInfoUrl;
};

searchBtn.addEventListener("click",()=>{
  fetchPokemon();
});

input.addEventListener("keydown", (e)=>{
  if(e.key === 'Enter'){
    fetchPokemon();
  }
});
