import './sass/main.scss';

import homePageHeaderMarckup from './templates/home-page-header.hbs';
import MovieApiService from './js/movieApiService';
import getMovieListWithGenresName from './js/getGenresName';
import { renderMovieList, renderHeader } from './js/renderMarckup';
// import modalStudents from './js/students-modal';
import refs from './js/refs';
import { getCard, closeModal } from './js/modalcard';

export const movieApiService = new MovieApiService();

renderHeader(homePageHeaderMarckup);

movieApiService
  .fetchTrendingMovies()
  .then(getMovieListWithGenresName)
  .then(renderMovieList)
  .catch(error => console.log(error));

// modalStudents();

// =======================================================================

refs.btnClose.addEventListener('click', closeModal);
refs.backdropmodal.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) {
    closeModal();
  }
});
window.addEventListener('keydown', evt => {
  if (evt.code === 'Escape' && !refs.backdropmodal.classList.contains('is-hidden')) {
    closeModal();
  }
});

refs.gallery.addEventListener('click', getCard);
