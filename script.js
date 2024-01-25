//console.log('teste') //sempre apagar essa linha no projeto final

const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");


//APIs - chamada
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
      .then((response) => response.json())
      .then((result) => displayResults(result));
}

//Mostra os resultados
function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    const artistName = document.getElementById("artist-name");
    const artistImage = document.getElementById("artist-img");
  
    result.forEach(element => {
      artistName.innerText = element.name;
      artistImage.src = element.urlImg;
    });
    resultArtist.classList.remove("hidden");
}
  
//caso não digite nada - hidden no css
document.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === "") {
      resultPlaylist.classList.remove("hidden");
      resultArtist.classList.add("hidden");
      return;
    }
    requestApi(searchTerm);
});