import { apiUrl, imgPath } from "./Vars.js";

$(function(){

getMovies(apiUrl);
function getMovies(url) {

  $.get(url).done((data) => {
    showMovie(data.results);
  })  
 
}
//$()
function showMovie(data) {
  // main.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, id } = movie;
     const movieElement = $("<div></div>");

    //const movieElement = document.createElement("div");
    
    $(movieElement).addClass("movie");
    console.log(movieElement);
    $(movieElement).html( `
    <a href="./DetailsPage.html?id=${id}">
    <img src="${imgPath + poster_path}" alt="Move" />
        <h4 id="moveName">${title}</h4>
    </a>
    
    `);
    console.log(movieElement);
    // console.log(title);
    $("#main").append($(movieElement));
  });
}

})
