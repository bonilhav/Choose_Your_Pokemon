// Set favorite pokemon to local storage.
/* let favoriteList = []; */
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
    for (var i = 0; i < favorites.length; i++) {
      var caught = $(".caughtCards")

      caught.append(`
      <div id="pokeCard2">
      <div>
      <div class="cardImg">
      <img src="${favorites[i][1]}" alt="Pokemon">
      </div>
      <div class="cardContent">
      <div class="stats">
      <p id="stat1">HP: ${favorites[i][2]}</p>
      <p id="stat1">Attack: ${favorites[i][3]}</p>
      <p id="stat1">Defense: ${favorites[i][4]}</p>
      <p id="stat1">Special-attack: ${favorites[i][5]}</p>
      <p id="stat1">Special-defense: ${favorites[i][6]}</p>
      <p id="stat1">Speed: ${favorites[i][7]}</p>
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

/* favorites.forEach(displayFavorites); */

console.log(favorites);

function favoriteListLength() {
  if (favorites > [5]) {
    favorites.splice(6);
  }
}

favoriteListLength()
displayFavorites()

function pokemonHomePage() {
  console.log("clicked")
  location.replace("./index.html")
}