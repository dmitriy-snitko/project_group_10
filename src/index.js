import './sass/main.scss';
import homePageHeaderMarckup from './templates/home-page-header.hbs'

import MovieApiService from './js/movieApiService';
import getMovieListWithGenresName from './js/getGenresName';

import { renderMovieList, renderHeader } from './js/renderMarckup';

export const movieApiService = new MovieApiService();

renderHeader(homePageHeaderMarckup);

movieApiService.fetchTrendingMovies()
  .then(getMovieListWithGenresName)
  .then(renderMovieList)
  .catch(error => console.log(error ));

