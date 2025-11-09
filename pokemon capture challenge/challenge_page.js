const Pokecoins = document.getElementById('coins');
const poke_name = document.getElementById('Pokemon_name');
const type_of_stat = document.getElementById('type_of_stat');
const stat_number = document.getElementById('sts');
const resultDiv = document.getElementById('result');
const pokemonInput = document.getElementById('pokemon-input');

const stat_names = ["HP", "Attack", "Defense", "Special-Attack", "Special-Defense", "Speed"];
let coins = 1000;
let randint = 0;
let challengePokemon;
let challengeStatIndex;
Pokecoins.textContent = coins;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function new_poke_chalenge(){
   if(set === true){
    const poke = getRandomInt(1, 898);
    const url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
      
    fetch(url)
        .then(response => {
          if (!response.ok) throw new Error('Pokémon not found');
          return response.json();
        })
    
        .then(data => {
            const statsArrayOfObjects = data.stats;
            let fname = url.name
            document.getElementById('Pokemon_name').innerHTML = `
            <p>${fname}</p>
        `;
            const statsArray = statsArrayOfObjects.map(statObject => statObject.base_stat);
            document.getElementById('sts').innerHTML = `
            <p>${statsArray[stat]}</p>
        `;
        })
        .catch(error => {
          document.getElementById('result').innerHTML = `<span style="color:red;">${error.message}</span>`;
        });} 
}

function fetchPokemon() {
    if(set === true){
    const name = document.getElementById('pokemon-input').value.trim().toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      
    fetch(url)
        .then(response => {
          if (!response.ok) throw new Error('Pokémon not found');
          return response.json();
        })
    
        .then(data => {
            const statsArrayOfObjects = data.stats;
            const statsArray = statsArrayOfObjects.map(statObject => statObject.base_stat);
            document.getElementById('result').innerHTML = `
            <h2>${data.name} Stats</h2>
            <p>${statsArray.join(', ')}</p>
        `;
        })
        .catch(error => {
          document.getElementById('result').innerHTML = `<span style="color:red;">${error.message}</span>`;
        });}
}

for(let i =0; i<3; i++){
    set = true
    setTimeout(getRandomInt(0, 5), 2000)
    new_poke_chalenge()
    let stat = getRandomInt(0,6)
    let poke = getRandomInt(0,898)
}
    

