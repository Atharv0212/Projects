const Pokecoins = document.getElementById('coins');
const poke_name = document.getElementById('Pokemon_name');
const type_of_stat = document.getElementById('type_of_stat');
const stat_number = document.getElementById('sts');
const resultDiv = document.getElementById('result');
const pokemonInput = document.getElementById('pokemon-input');
const poke_list = document.getElementById('poke_list')
const show_poke_stat = document.getElementById('show_poke_stat')

let pokelist = [];
const stat_names = ["HP", "Attack", "Defense", "Special-Attack", "Special-Defense", "Speed"];
let coins = 1000;
let randint = 0;
let challengePokemon;
let Stat_challenge;
Pokecoins.textContent = coins;

function add_ToPokedex(name_poke) {
    pokelist.push(name_poke);
    localStorage.setItem('pokedex', JSON.stringify(pokelist));
}
function releasepokemon(name) {
  let i= pokelist.findIndex(poke => poke.name === name);
  pokelist.splice(i, 1);
  localStorage.setItem('pokedex', JSON.stringify(pokelist));
  
}

function loadPokedex() {
  const savedPokedex = localStorage.getItem('pokedex');
  
  if (savedPokedex) {
    
    pokelist = JSON.parse(savedPokedex);
  }

}
loadPokedex();
function clear_pokedex(){
    pokelist = [];
    localStorage.removeItem('pokedex');
    
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  function newPokeChallenge() {
    const randomPokemonId = getRandomInt(1, 898);
    const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Challenge Pokémon not found');
            return response.json();
        })
        .then(data => {
            challengePokemon = data;
            Stat_challenge = getRandomInt(0, 5);
            
            poke_name.textContent = challengePokemon.name;
            type_of_stat.textContent = stat_names[Stat_challenge];
            stat_number.textContent = challengePokemon.stats[Stat_challenge].base_stat;
            resultDiv.innerHTML = '';
            pokemonInput.value = '';
            document.getElementById('Challenge_Pokemon_card').innerHTML = `
            <h2>${data.name} appeared!</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
           `;
        })
        .catch(error => {
            resultDiv.innerHTML = `<span style="color:red;">${error.message}</span>`;
        });
}
function fetchPokemon() {
    const name = pokemonInput.value.trim().toLowerCase();
    if (!name) {
        resultDiv.innerHTML = `<span style="color:red;">Please enter a Pokémon name.</span>`;
        return;
    }
    if (name == 'S'){
        newPokeChallenge();
    }

    if (!challengePokemon) {
        resultDiv.innerHTML = `<span style="color:red;">Looking for Pokemon.</span>`;
        return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('No such Pokémon not found');
            return response.json();
        })
        .then(data => {
            const userStat = data.stats[Stat_challenge].base_stat;
            const challengeStat = challengePokemon.stats[Stat_challenge].base_stat;
            
          
            
            let resultText = `Your ${data.name}'s ${stat_names[Stat_challenge]} is ${userStat}.<br>`;
            resultText += `The opponent ${challengePokemon.name}'s ${stat_names[Stat_challenge]} is ${challengeStat}.<br><br>`;

            if (userStat > challengeStat) {
               if(pokelist.includes(data.name)){
                resultText += `<span style="color:green;">You win! Pokecoins increased by 100</span>`;
                coins += 100;}
                else{
                   resultText += `<span style="color:yellow;">You win!, but used an uncaptured Pokemon, deducted 20 pokecoins.</span>`;
                   coins -= 20;
                }
                add_ToPokedex(challengePokemon.name)
            } else if (userStat < challengeStat) {
                resultText += `<span style="color:red;">You lose! 50 pokecoins deducted</span>`;
                coins -= 50;
            } else {
              if(pokelist.includes(data.name)){
                resultText += `<span style="color:blue;">It's a draw!</span>`;
                coins += 0;}
                else{
                   resultText += `<span style="color:yellow;">Draw!, but used an uncaptured Pokemon, deducted 10 pokecoins.</span>`;
                   coins -= 10;
                }
            }

            Pokecoins.textContent = coins;
            resultDiv.innerHTML = resultText;
            
            setTimeout(newPokeChallenge, 2000);
            
        })
        .catch(error => {
            resultDiv.innerHTML = `<span style="color:red;">${error.message}</span>`;
        });
}
function home_page() {
        window.location.href = 'home_page.html';
}
function poke_stat(singlepokestat){
  
  poke_list.innerHTML = ``
  const url = `https://pokeapi.co/api/v2/pokemon/${singlepokestat}`;

  fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Challenge Pokémon not found');
            return response.json();
        })
        .then(data => {
            
            poke_list.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}"><br>
           `;
           data.stats.forEach(stat => {
                poke_list.innerHTML += `<span style="color: blueviolet">${stat.stat.name}</span>: <b>${stat.base_stat}</b><br>`;
            });
            poke_list.innerHTML += `<br><button class="pokelistshow" onclick="showpokelist()">Show captured Pokemons</button><br><br>`;
        })
        .catch(error => {
            resultDiv.innerHTML = `<span style="color:red;">${error.message}</span>`;
        });
      

}
function showpokelist(){
  poke_list.innerHTML = ``
  for (const pokem of pokelist){
      
      poke_list.innerHTML += `<button onclick="poke_stat('${pokem}')" class="pokelistitem">${pokem}</button><button onclick="releasepokemon('${pokem}')">Release</button><br>`;
    }
  poke_list.innerHTML += `<button class="pokelistshow" onclick='hide_list()'>Back</button>`
  poke_list.innerHTML += `<button class="releaseall" onclick='clear_pokedex()'>Release ALL</button>`
}

function hide_list(){
  poke_list.innerHTML = `<button class="pokelistshow" onclick='showpokelist()'>Show captured Pokemon</button>`
}

newPokeChallenge();
    

