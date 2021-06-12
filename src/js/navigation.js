import { renderHeader } from './renderMarckup';
import homePageHeaderMarckup from '../templates/home-page-header.hbs';
import libraryHeaderMarckup from '../templates/library-header.hbs';

export function onPageHeaderClick(e) {
  if (!e.target.dataset.link) {
    return;
  };

  if (e.target.dataset.link === 'home') {
    renderHeader(homePageHeaderMarckup);
  };

  if (e.target.dataset.link === 'lib') {
    renderHeader(libraryHeaderMarckup);
  };
}