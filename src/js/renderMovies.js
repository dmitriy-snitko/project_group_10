import MovieApiService from './movieApiService';
import moviesList from '../templates/moviesGallery.hbs';

const movieApiService = new MovieApiService();

const refs = {
  galleryContainer: document.querySelector('.gallery-container'),
};

export function renderMarkUp() {
  movieApiService
    .fetchTrendingMovies()
    .then(response => {
      console.log('response', response.data.results);
      renderMoviesList(response.data.results);
      cutMovieRelase();
    })
    .catch(error => {
      console.log(error);
    });
}

function renderMoviesList(movies) {
  refs.galleryContainer.insertAdjacentHTML('beforeend', moviesList(movies));
}

function cutMovieRelase() {
  const cropElement = document.querySelectorAll('.movie-release');

  const size = 17;

  cropElement.forEach(el => {
    let text = el.innerHTML;

    if (el.innerHTML.length > size) {
      text = text.slice(0, size);
      el.innerHTML = text;
    }
  });
}
