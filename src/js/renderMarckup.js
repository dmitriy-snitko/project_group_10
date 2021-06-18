import movieListMarckup from '../templates/moviesGallery.hbs';
import sprite from '../images/icons/sprite.svg';
import refs from './refs';
import { onSearchFailed } from './notifications';
import { pagination, url } from './pagination';
import filmsYoutube from './card-films-youtube';

export function renderMovieList(movieList) {
  refs.movieList.innerHTML = movieListMarckup(movieList);
  filmsYoutube.createFilmsLink(document.querySelectorAll('.btn-youtube'));
};

export function renderHeader(headerMarckup) {
  refs.header.innerHTML = headerMarckup(sprite);
  // filmsYoutube.createFilmsLink(document.querySelectorAll('.btn-youtube'));
}

export function renderHomePage() {
  pagination(url.trendingMovie());
  // filmsYoutube.createFilmsLink(document.querySelectorAll('.btn-youtube'));
}