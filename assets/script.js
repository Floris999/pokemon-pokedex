let pokedex = document.getElementById("pokedex");

const fetchPokemon = () => {
  const promises = [];
  let url = "https://pokeapi.co/api/v2/pokemon/";
  for(id = 1; id <151; id++) { 
        apiAndId = url + id + "/";
       promises.push(fetch(apiAndId).then((res) => res.json()));
    }
Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            id: result.id,
            img: result.sprites.front_default,
            type: result.types[0].type.name
        }));
        displayPokemon(pokemon);
    });
  }


let displayPokemon = (pokemon) => {
   let pokemonSplit = pokemon.map(split => {
     let pokemonList = `
     <li>
      <img class="poke-card-img" src="${split.img}" alt="pokemons"/>
      <h2 class="poke-card-name">${split.name}</h2><h4>ID: ${split.id}</h4>
      <p class="poke-card-type">Type: ${split.type}
     </li>`;
     return pokemonList;
   });
  
   pokedex.innerHTML = pokemonSplit.join("");

}

fetchPokemon();
