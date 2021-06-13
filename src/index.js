import './sass/main.scss';

import homePageHeaderMarckup from './templates/home-page-header.hbs';
import libraryHeaderMarckup from './templates/library-header.hbs';
import MovieApiService from './js/movieApiService';
import getMovieListWithGenresName from './js/getGenresName';
import { renderMovieList, renderHeader } from './js/renderMarckup';
import './js/students-modal';
import refs from './js/refs';
import { onPageHeaderClick } from './js/navigation';

export const movieApiService = new MovieApiService();

renderHeader(homePageHeaderMarckup);

movieApiService
  .fetchTrendingMovies()
  .then(getMovieListWithGenresName)
  .then(renderMovieList)
  .catch(error => console.log(error));

refs.header.addEventListener('click', onPageHeaderClick);

import pagination from './js/pagination';
