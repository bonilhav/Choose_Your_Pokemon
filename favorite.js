// let favorites = JSON.parse(localStorage.getItem("favoritePoke"));
// let divEl = $("#stuff");


// function displayFavorites(){
//     for(i=0;i<favorites.length; i++){
//         var pTag = document.createElement("p")
//         pTag.textContent = favorites[i];

//         divEl.append(pTag)
//     }
// }

// displayFavorites()



function pokemonHomePage() {
    console.log("clicked")
    location.replace("./index.html")
}

$(".searchBtn").on("click", function (event) {
    event.preventDefault();
  
    pokemonHomePage();

  });