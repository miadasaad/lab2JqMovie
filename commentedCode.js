  // fetch(movieUrl)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     // console.log(data);
  //     const { title, poster_path, overview } = data; //Distracting
  //     const movieElement = document.createElement("div");
  //     movieElement.classList.add("container");
  //     movieElement.innerHTML = `
  //                   <img src="${imgPath + poster_path}" alt="Move" />
  //                       <div>
  //                       <h3 id="moveName">${title}</h3>
  //                   <p>${overview}</p>
  //                   </div>
  //                   `;
  //     movieDetailsData.appendChild(movieElement);
  //   });

  //the bad one
//DetailsPage
// movieID = location.search.split("=")[1];
// const movieDetailsData = document.getElementById("movieData");

//https://api.themoviedb.org/3/movie/436270?api_key=9813ce01a72ca1bd2ae25f091898b1c7

// url + "/movie/" + id +"?api_key=9813ce01a72ca1bd2ae25f091898b1c7"

// function getMoviesDetails(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       data.results.forEach((movie) => {
//         if (movie.id == movieID) {
//           const { title, poster_path, overview } = movie; //Distracting
//           const movieElement = document.createElement("div");
//           movieElement.classList.add("container");
//           movieElement.innerHTML = `
//               <img src="${imgPath + poster_path}" alt="Move" />
//                   <div>
//                   <h3 id="moveName">${title}</h3>
//               <p>${overview}</p>
//               </div>
//               `;
//           movieDetailsData.appendChild(movieElement);
//         }
//       });
//     });
// }

// getMoviesDetails(apiUrl);
///////////////////////////////////////////////////////
// apiKey = 9813ce01a72ca1bd2ae25f091898b1c7
// url = https://api.themoviedb.org/3
// path = /discover/movie?sort_by=popularity.desc

//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7
//https://image.tmdb.org/t/p/w500/

 // fetch(url)
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     // console.log(data.results);
  //     showMovie(data.results);
  //   });