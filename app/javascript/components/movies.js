const fetchMovies = () => {
  const results = document.querySelector("#results");
  const apiUrl = "http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7";
  fetch(apiUrl)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const movie =
          `<li class="list-inline-item">
            <img src="${result.Poster}">
            <p>${result.Title}</p>
          </li>`;
        results.insertAdjacentHTML("beforeend", movie);
      })
  });
};

export { fetchMovies }

