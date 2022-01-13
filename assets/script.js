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
  console.log(pokemon);
  pokemon.map(split => {
    document.getElementById("pokemonName").innerHTML = `<h1>${pokemon.name}</h1>`;
  })

}

fetchPokemon();
