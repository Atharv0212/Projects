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
let Stat_challenge;
Pokecoins.textContent = coins;

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
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
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
            document.getElementById('Your_Pokemon_card').innerHTML = `
            <h2>${name}</h2>
            <img src="${data.sprites.front_default}" alt="${name}">
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
          `;
            
            let resultText = `Your ${data.name}'s ${stat_names[Stat_challenge]} is ${userStat}.<br>`;
            resultText += `The opponent ${challengePokemon.name}'s ${stat_names[Stat_challenge]} is ${challengeStat}.<br><br>`;

            if (userStat > challengeStat) {
                resultText += `<span style="color:green;">You win!</span>`;
                coins += 100;
            } else if (userStat < challengeStat) {
                resultText += `<span style="color:red;">You lose!</span>`;
                coins -= 50;
            } else {
                resultText += `<span style="color:blue;">It's a draw!</span>`;
            }

            Pokecoins.textContent = coins;
            resultDiv.innerHTML = resultText;
            
            setTimeout(newPokeChallenge, 3000);
            
        })
        .catch(error => {
            resultDiv.innerHTML = `<span style="color:red;">${error.message}</span>`;
        });
}

newPokeChallenge();
    

