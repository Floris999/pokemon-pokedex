const fetchPokemon = () => {
    const api = "https://pokeapi.co/api/v2/pokemon/";
    const pokemon = [];
    for(id = 1; id <4; id++) { /*Loop to fill id to end of api url*/
        apiAndId = api + id + "/";
        fetch(apiAndId)
        .then(response => response.json())
        .then((data) => {
            console.log(data); /*api data based on ID*/
            pokemon.push({ /*creating object and fill with api data*/
                name: data.name,
                id: data.id,
                img: data.sprites.front_default,
                type: data.types[0].type.name
            });
            console.log(pokemon);
        });
    };
    return pokemon;
};

fetchPokemon();
