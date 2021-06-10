import movieListMarckup from '../templates/moviesGallery.hbs';

import refs from './refs';

export function renderMovieList(movieList) {
  refs.main.innerHTML = movieListMarckup(movieList);
};