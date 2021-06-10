import './sass/main.scss';

import MovieApiService from './js/movieApiService';
import getMovieListWithGenresName from './js/getGenresName';

import renderHomePageHeader from './js/homePageHeader';
import { renderMovieList } from './js/renderMarckup';

export const movieApiService = new MovieApiService();

movieApiService.fetchTrendingMovies()
  .then(getMovieListWithGenresName)
  .then(renderMovieList)
  .catch(error => console.log(error ));

