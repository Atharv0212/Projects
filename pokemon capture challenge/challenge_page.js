const Pokecoins = document.getElementById('coins');
const poke_name = document.getElementById('Pokemon_name')

let coins = 1000;
let randint = 0;
Pokecoins.textContent = coins;

function randgen(){
    let randomNumber = Math.floor(Math.random() * 11)
    randint = randomNumber
    return randomNumber
}
function fetchPokemon(){
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

while (coins >0){
    new_poke_chalenge()
    set === true
    setTimeout(randgen(), 2000)
}
    

