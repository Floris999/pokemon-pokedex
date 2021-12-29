let api = "https://pokeapi.co/api/v2/pokemon/";
let pokemon = api;

for(let id = 1; id < 20; id++) {
    pokemon = api + id + "/";
    fetch(pokemon)
    .then(response => response.json())
    .then(data => console.log(data.name));
}





