import './sass/main.scss';

import MovieApiService from './js/movieApiService';

const movieApiService = new MovieApiService();

import { renderMarkUp } from './js/renderMovies';

renderMarkUp();
