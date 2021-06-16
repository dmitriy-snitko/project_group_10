import './sass/main.scss';

import MovieApiService from './js/movieApiService';
import homePageHeaderMarckup from './templates/home-page-header.hbs';
import { renderHomePage, renderHeader } from './js/renderMarckup';
import refs from './js/refs';
import { getCard, closeModal } from './js/modalcard';
import { onPageHeaderClick } from './js/navigation';
import { onSearch } from './js/search-movie';
import './js/students-modal';
import { onModalLocaleStorage, onHeaderLocaleStorage } from './js/localeStorage';

export const movieApiService = new MovieApiService();

renderHeader(homePageHeaderMarckup);
renderHomePage();

refs.header.addEventListener('click', onPageHeaderClick);
refs.searchForm.addEventListener('submit', e => onSearch(e));

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

refs.modal.addEventListener('click', onModalLocaleStorage);
refs.header.addEventListener('click', onHeaderLocaleStorage);
