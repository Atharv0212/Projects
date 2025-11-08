const Pokecoins = document.getElementById('coins');

let coins = 1000;
Pokecoins.textContent = coins;

 function fetchPokemon() {
      const name = document.getElementById('pokemon-input').value.trim().toLowerCase();
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      
      fetch(url)
        .then(response => {
          if (!response.ok) throw new Error('Pokémon not found');
          return response.json();
        })
    
        .then(data => {
          document.getElementById('result').innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            `;
        })
        .catch(error => {
          document.getElementById('result').innerHTML = `<span style="color:red;">${error.message}</span>`;
        });
}
    

