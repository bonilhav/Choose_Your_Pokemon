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


const $miamiF = document.getElementById('miami');
fetch('https://api.giphy.com/v1/gifs/search?api_key=MFLGZadukzit9Mk8qCC8J3cbVDWy11db&q=dogs=pt')
  .then(function (response) {
    return response.json();
  })
  .then(function ({ data }) {
    console.log(data);
    });