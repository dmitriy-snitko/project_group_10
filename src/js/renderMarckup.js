import movieListMarckup from '../templates/moviesGallery.hbs';
import sprite from '../images/icons/sprite.svg';
import { movieApiService } from '../index';
import getMovieListWithGenresName from './getGenresName';
import refs from './refs';
import { onSearchFailed } from './notifications';
import { onError } from './notifications';

export function renderMovieList(movieList) {
  if (movieList.length === 0) {
    return onSearchFailed();
  }

  refs.movieList.innerHTML = movieListMarckup(movieList);
};

export function renderHeader(headerMarckup) {
  refs.header.innerHTML = headerMarckup(sprite);
}

export function renderHomePage() {
  movieApiService.fetchTrendingMovies()
  .then(getMovieListWithGenresName)
  .then(renderMovieList)
  .catch(error => onError(error));
}