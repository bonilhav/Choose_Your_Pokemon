// Set favorite pokemon to local storage.
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





//Display favorite pokemon on page.
let favorites = JSON.parse(localStorage.getItem("favoritePoke"));
let divEl = $("#stuff");


console.log(favorites)


function displayFavorites(){  
    if (favorites > [0]) {
     for(i=0;i<favorites.length; i++){
        var pTag = document.createElement("p")
        pTag.textContent = favorites[i];

        divEl.append(pTag)
         }
  
 } else {
        var pTag = document.createElement("p")
        pTag.textContent = "catch some pokemon"
    
        divEl.append(pTag)
        }

    
}
function favoriteListLength(){
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

$(".homeBtn").on("click", function (event) {
    event.preventDefault();
  
    pokemonHomePage();

  });