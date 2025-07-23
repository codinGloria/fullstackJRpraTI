const API_KEY = "6c24d6ca"; 
const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");
const modal = document.getElementById("modal");
const movieDetails = document.getElementById("movieDetails");
const closeBtn = document.querySelector(".close-btn");

fetchMovies("harry potter");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  if (query.length >= 3) {
    fetchMovies(query);
  } else if (query === "") {
    fetchMovies("harry potter");
  }
});

async function fetchMovies(query) {
  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(
    query
  )}&apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      renderMovies(data.Search);
    } else {
      movieList.innerHTML = `<p class="not-found">Nenhum filme encontrado.</p>`;
    }
  } catch (error) {
    movieList.innerHTML = `<p class="not-found">Erro ao buscar filmes. 😥</p>`;
  }
}

function renderMovies(movies) {
  movieList.innerHTML = movies
    .map(
      (movie) => `
        <div class="card">
          <img src="${
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/200x300?text=Sem+Imagem"
          }" alt="Poster do filme">
          <h3>${movie.Title}</h3>
          <p><strong>Ano:</strong> ${movie.Year}</p>
          <p><strong>Tipo:</strong> ${movie.Type}</p>
          <button onclick="showDetails('${movie.imdbID}')">Ver detalhes</button>
        </div>
      `
    )
    .join("");
}

async function showDetails(imdbID) {
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const movie = await response.json();

    movieDetails.innerHTML = `
          <h2>${movie.Title}</h2>
          <p><strong>Gênero:</strong> ${movie.Genre}</p>
          <p><strong>Diretor:</strong> ${movie.Director}</p>
          <p><strong>Elenco:</strong> ${movie.Actors}</p>
          <p><strong>Sinopse:</strong> ${movie.Plot}</p>
          <p><strong>Nota IMDb:</strong> ${movie.imdbRating}</p>
          <p><strong>Duração:</strong> ${movie.Runtime}</p>
        `;
    modal.style.display = "flex";
  } catch (error) {
    movieDetails.innerHTML =
      '<p class="not-found">Erro ao carregar detalhes. 😵‍💫</p>';
    modal.style.display = "flex";
  }
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
