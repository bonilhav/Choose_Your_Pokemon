let searchedPoke = "";
const input = document.querySelector("input");
input.addEventListener("change", updateValue);
function updateValue(e) {
  searchedPoke = e.target.value;
}

$(function () {
  let pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidoran",
    "Nidorina",
    "Nidoqueen",
    "Nidoran",
    "Nidorino",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
    "Ninetales",
    "Jigglypuff",
    "Wigglytuff",
    "Zubat",
    "Golbat",
    "Oddish",
    "Gloom",
    "Vileplume",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Diglett",
    "Dugtrio",
    "Meowth",
    "Persian",
    "Psyduck",
    "Golduck",
    "Mankey",
    "Primeape",
    "Growlithe",
    "Arcanine",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machop",
    "Machoke",
    "Machamp",
    "Bellsprout",
    "Weepinbell",
    "Victreebel",
    "Tentacool",
    "Tentacruel",
    "Geodude",
    "Graveler",
    "Golem",
    "Ponyta",
    "Rapidash",
    "Slowpoke",
    "Slowbro",
    "Magnemite",
    "Magneton",
    "Farfetch'd",
    "Doduo",
    "Dodrio",
    "Seel",
    "Dewgong",
    "Grimer",
    "Muk",
    "Shellder",
    "Cloyster",
    "Gastly",
    "Haunter",
    "Gengar",
    "Onix",
    "Drowzee",
    "Hypno",
    "Krabby",
    "Kingler",
    "Voltorb",
    "Electrode",
    "Exeggcute",
    "Exeggutor",
    "Cubone",
    "Marowak",
    "Hitmonlee",
    "Hitmonchan",
    "Lickitung",
    "Koffing",
    "Weezing",
    "Rhyhorn",
    "Rhydon",
    "Chansey",
    "Tangela",
    "Kangaskhan",
    "Horsea",
    "Seadra",
    "Goldeen",
    "Seaking",
    "Staryu",
    "Starmie",
    "Mr. Mime",
    "Scyther",
    "Jynx",
    "Electabuzz",
    "Magmar",
    "Pinsir",
    "Tauros",
    "Magikarp",
    "Gyarados",
    "Lapras",
    "Ditto",
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Porygon",
    "Omanyte",
    "Omastar",
    "Kabuto",
    "Kabutops",
    "Aerodactyl",
    "Snorlax",
    "Articuno",
    "Zapdos",
    "Moltres",
    "Dratini",
    "Dragonair",
    "Dragonite",
    "Mewtwo",
    "Mew",
  ];
  $("#inputForm").autocomplete({
    source: pokemon,
    minLength: 2,
    delay: 0,
    autoFocus: true,
  });
});

$(document).ready(function () {
  // console.log("ready!");

  for (let i = 1; i < 7; i++) {
    let randomNum = Math.ceil(Math.random() * 151);
    let randompokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomNum}`;

    fetch(randompokemonUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let pokeSprite = data.sprites.front_default;
        let pokeImg = $(`.image-${i}`);
        pokeImg.html(`<img src="${pokeSprite}" alt="Pokemon">`);
        let pokeName = data.name;
        let capPokeName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
        if (capPokeName.slice(capPokeName.length - 2) === "-f") {
          capPokeName = capPokeName.replace("-f", "(" + "&#9792;" + ")");
        }
        if (capPokeName.slice(capPokeName.length - 2) === "-m") {
          capPokeName = capPokeName.replace("-m", "(" + "&#9794;" + ")");
        }
        if (capPokeName.match(/Mr-mime/gi)) {
          capPokeName = capPokeName.replace(/Mr-Mime/gi, "Mr. Mime");
        }
        let displayName = $(`.title-${i}`);
        displayName.html(`${capPokeName}`);
      });
  }
});

function pokemon() {
  let lowerCasePoke = searchedPoke.toLowerCase();
  let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${lowerCasePoke}`;

  fetch(pokemonUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let cardImg = $(".cardImg");
      let stats = $(".stats");

      document.getElementById("selectedPokemon").innerHTML = `${searchedPoke}`;

      cardImg.html(`<img src="${data.sprites.front_default}" alt="Pokemon">`);
      stats.html(`
      <p id="stat1">HP: ${data.stats[0].base_stat}</p>
      <p id="stat1">Attack: ${data.stats[1].base_stat}</p>
      <p id="stat1">Defense: ${data.stats[2].base_stat}</p>
      <p id="stat1">Special-attack: ${data.stats[3].base_stat}</p>
      <p id="stat1">Special-defense: ${data.stats[4].base_stat}</p>
      <p id="stat1">Speed: ${data.stats[5].base_stat}</p>
      `);

      let choosenPoke = data.name;
      let APIKEY = "MFLGZadukzit9Mk8qCC8J3cbVDWy11db";
      let giphyApi = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=6&PG-13&q=${choosenPoke}-pokemon=en`;

      fetch(giphyApi)
        .then(function (response) {
          return response.json();
        })
        .then(function ({ data }) {
          console.log(data);
          for (let i = 0; i < 6; i++) {
            let gif = data[i].images.original.url;
            let gifImg = $(`#giphy-${i}`);
            console.log(gif);
            console.log(gifImg);

            gifImg.html(`<img src="${gif}" alt="Giphy">`);
          };
        });
    });
}

const resultBox = document.querySelector(".result_box");

function randomPoke() {}

$(".searchBtn").on("click", async function (event) {
  event.preventDefault();

  $(input).val("");
  await pokemon();
  resultBox.classList.add("activeResult");
});

$(".pokedex").on("click", function (event) {
  event.preventDefault();
  location.replace("./favoritePoke.html");
});

$("#returnBtn").on("click", function (event) {
  event.preventDefault();
  resultBox.classList.remove("activeResult");
});

$(".card").on("click", function (event) {
  event.preventDefault();
  resultBox.classList.add("activeResult");
});
