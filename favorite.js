let favorites = JSON.parse(localStorage.getItem("favoritePoke"));
let divEl = $("#stuff");


function displayFavorites(){
    for(i=0;i<favorites.length; i++){
        var pTag = document.createElement("p")
        pTag.textContent = favorites[i];

        divEl.append(pTag)
    }
}

displayFavorites()

let favoriteList = [];
if(localStorage.getItem("favoritePoke")){
  favoriteList = JSON.parse(localStorage.getItem("favoritePoke"))
}
let favoritePokemonButton = $("#favoriteBtn")
function favoritePokemon(){
  console.log($("#selectedPokemon").text())
  favoriteList.push($("#selectedPokemon").text())
  localStorage.setItem("favoritePoke", JSON.stringify(favoriteList))
}
favoritePokemonButton.click(favoritePokemon)

function pokemonHomePage() {
    console.log("clicked")
    location.replace("./index.html")
}

$(".homeBtn").on("click", function (event) {
    event.preventDefault();
  
    pokemonHomePage();

  });