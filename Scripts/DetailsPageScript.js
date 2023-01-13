import { movieID, url, imgPath, movieDetailsData } from "./Vars.js";

function getMovie(id) {
  let movieUrl = `${url}/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
  $.get(movieUrl).done((data) => {
    const { title, poster_path, overview } = data; //Distracting
      const movieElement = $('<div></div>');
      $(movieElement).addClass("container");

      $(movieElement).html( `
                    <img src="${imgPath + poster_path}" alt="Move" />
                        <div>
                        <h3 id="moveName">${title}</h3>
                    <p>${overview}</p>
                    </div>
                                   `);
                                  
          $("#movieData").append($(movieElement));
  })
  
}
getMovie(movieID);
