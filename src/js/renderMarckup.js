import movieListMarckup from '../templates/moviesGallery.hbs';
import sprite from '../images/icons/sprite.svg';
import refs from './refs';
import { onSearchFailed } from './notifications';
import {pagination, url} from './pagination';

export function renderMovieList(movieList) {
  refs.movieList.innerHTML = movieListMarckup(movieList);
};

export function renderHeader(headerMarckup) {
  refs.header.innerHTML = headerMarckup(sprite);
}

export function renderHomePage() {
  pagination(url.trendingMovie());
}