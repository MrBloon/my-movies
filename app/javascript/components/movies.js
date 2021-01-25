const results = document.querySelector("#results");

const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movie = `<div class="link" data-uid="${result.imdbID}">
                     <div class="card" style="background-image: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.6)), url('${result.Poster}');">
                      <p>${result.Title}</p>
                     </div>
                   </div>`;
    results.insertAdjacentHTML("beforeend", movie);
  })
  findMovie();
};

const fetchMovies = (query) => {
  const apiUrl = `http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(insertMovies);
};

const searchMovies = () => {
  fetchMovies("harry potter");
  const form = document.querySelector("#search-movies");
  form.addEventListener('submit', (event) => {
    results.innerHTML = "";
    event.preventDefault();
    const input = event.currentTarget.querySelector("#keyword");
    fetchMovies(input.value);
  });
};

const findMovie = () => {
  const links = document.querySelectorAll("div.link");
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      fetch(`http://www.omdbapi.com/?i=${link.dataset.uid}&apikey=adf1f2d7`)
        .then(response => response.json())
        .then((data) => {
          results.innerHTML = "";
          const banner = document.querySelector(".banner");
          banner.classList.add("d-none");
          const button = document.querySelector(".btn-group");
          button.classList.remove("d-none");
          const output =`
                          <div class="container">

                            <div class="row movie-top">
                              <div class="col-12 col-lg-4 d-flex justify-content-start">
                                <img src="${data.Poster}" alt="">
                              </div>
                              <div class="col-12 col-lg-8 d-flex flex-column">
                                <div class="d-flex justify-content-between">
                                  <h2 class="mb-3">${data.Title}</h2>

                                </div>
                                <ul class="list-group">
                                  <li class="list-group-item"><strong>Rated:</strong> ${data.Rated}</li>
                                  <li class="list-group-item"><strong>Released:</strong> ${data.Released}</li>
                                  <li class="list-group-item"><strong>Runtime:</strong> ${data.Runtime}</li>
                                  <li class="list-group-item"><strong>Genre:</strong> ${data.Genre}</li>
                                  <li class="list-group-item"><strong>Language:</strong> ${data.Language}</li>
                                  <li class="list-group-item"><strong>Awards:</strong> ${data.Awards}</li>
                                  <li class="list-group-item"><strong>Director:</strong> ${data.Director}</li>
                                  <li class="list-group-item"><strong>Writer:</strong> ${data.Writer}</li>
                                  <li class="list-group-item"><strong>Actors:</strong> ${data.Actors}</li>
                                </ul>
                              </div>
                            </div>

                            <div class="movie-bottom">
                              <div class="row">
                                <div class="col-12">
                                  <p>
                                    ${data.Plot}
                                  </p>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-12">
                                  <span>${data.imdbRating}/10<i class="fas fa-star ml-2"></i> on<a href="http://imdb.com/title/${data.imdbID}" target="_blank" class="ml-2 mr-3">IMDB     </a></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        `;
          const resultat = document.querySelector("#movie");
          resultat.insertAdjacentHTML("beforeend", output);
        });
    });
  });
};



export { searchMovies };





