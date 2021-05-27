function pokemon() {
    let pokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

    fetch(pokemonUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function({ results, count }) {
        console.log(count);
        console.log(results);
    })
}
pokemon();