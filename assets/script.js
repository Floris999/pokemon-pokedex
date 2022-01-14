let pokedex = document.getElementById("pokedex");

const fetchPokemon = () => {
  const promises = [];
  let url = "https://pokeapi.co/api/v2/pokemon/";
  for(id = 1; id <150; id++) { 
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


const displayPokemon = (pokemon) => {
   let html = pokemon.map(split => {
     let pokemonHtml = `
     <li>
      <img src="${split.img}" alt="pokemons"/>
      <h2>${split.name}</h2><h4>ID: ${split.id}
      <p>Type: ${split.type}
     </li>`;
     return pokemonHtml;
   });
  pokedex.innerHTML = html.join("");


}

fetchPokemon();
