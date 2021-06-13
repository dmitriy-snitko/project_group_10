import movieListMarckup from '../templates/moviesGallery.hbs';
import sprite from '../images/icons/sprite.svg';


import refs from './refs';

export function renderMovieList(movieList) {
  refs.movieList.insertAdjacentHTML('afterbegin', movieListMarckup(movieList));
};

export function renderHeader(headerMarckup) {
  refs.header.innerHTML = headerMarckup(sprite);
}