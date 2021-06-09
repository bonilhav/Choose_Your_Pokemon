// Set favorite pokemon to local storage.
let favorites = JSON.parse(localStorage.getItem("favoritePoke"));

let divEl = $("#stuff");

$(".homeBtn").on("click", function (event) {
  event.preventDefault();
  pokemonHomePage();
});

if (localStorage.getItem("favoritePoke")) {
  favoriteList = JSON.parse(localStorage.getItem("favoritePoke"));
}

function displayFavorites() {
  if (favorites > [0]) {
    for (var i = favorites.length -1; i >= 0 ; i--) {
      var caught = $(".caughtCards")
      
      caught.append(`
      <div id="pokeCard2">
      <div>
      <div class="cardName">
      <p>${favorites[i][1]}</p>
      </div>
      <div class="cardImg">
      <img src="${favorites[i][2]}" alt="Pokemon">
      </div>
      <div class="cardContent">
      <div class="stats">
      <p id="stat1">HP: ${favorites[i][3]}</p>
      <p id="stat1">Attack: ${favorites[i][4]}</p>
      <p id="stat1">Defense: ${favorites[i][5]}</p>
      <p id="stat1">Special-attack: ${favorites[i][6]}</p>
      <p id="stat1">Special-defense: ${favorites[i][7]}</p>
      <p id="stat1">Speed: ${favorites[i][8]}</p>
      </div>
      </div>
      </div>
      </div>
      `)};
      
  } else {
    var pTag = document.createElement("p")
    pTag.textContent = "catch some pokemon"

    divEl.append(pTag)
  };
}


console.log(favorites);




displayFavorites()

function pokemonHomePage() {
  console.log("clicked")
  location.replace("./index.html")
}


