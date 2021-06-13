import { renderHeader } from './renderMarckup';
import homePageHeaderMarckup from '../templates/home-page-header.hbs';
import libraryHeaderMarckup from '../templates/library-header.hbs';
import refs from './refs';

export function onPageHeaderClick(e) {
  if (!e.target.dataset.link) {
    return;
  };

  if (e.target.dataset.link === 'home') {
    renderHeader(homePageHeaderMarckup);
  };

  if (e.target.dataset.link === 'lib') {
    refs.main.innerHTML = '';
    renderHeader(libraryHeaderMarckup);
  };
}