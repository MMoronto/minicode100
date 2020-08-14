const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;
const colors = {};
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }  
};

const getPokemon = async id => {};

function createPokemonCard(pokemon) {}

fetchPokemons();
