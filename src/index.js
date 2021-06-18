import './sass/main.scss';

import MovieApiService from './js/movieApiService';
import homePageHeaderMarckup from './templates/home-page-header.hbs';
import { renderHomePage, renderHeader } from './js/renderMarckup';
import refs from './js/refs';
import { getCard, closeModal } from './js/modalcard';
import { onPageHeaderClick } from './js/navigation';
import { onSearch } from './js/search-movie';
import './js/students-modal';
import { onModalLocaleStorage } from './js/localeStorage';
// import 'animate.css';

export const movieApiService = new MovieApiService();

renderHeader(homePageHeaderMarckup);
renderHomePage()

refs.header.addEventListener('click', onPageHeaderClick);
refs.searchForm.addEventListener('submit', e => onSearch(e));

refs.btnClose.addEventListener('click', closeModal);
refs.backdropmodal.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) {
    closeModal();
  }
});

refs.gallery.addEventListener('click', getCard);
refs.modal.addEventListener('click', onModalLocaleStorage);


// const a = [1, 2, 3, 4, 5, 6];
// console.log(a);
// a.splice(5, 1);

// console.log(a);
