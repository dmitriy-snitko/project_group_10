import { renderHeader, renderHomePage} from './renderMarckup';
import homePageHeaderMarckup from '../templates/home-page-header.hbs';
import libraryHeaderMarckup from '../templates/library-header.hbs';
import refs from './refs';

export function onPageHeaderClick(e) {
  if (!e.target.dataset.link) {
    return;
  };

  if (e.target.dataset.link === 'home') {
    refs.searchForm.classList.remove('visually-hidden');
    renderHeader(homePageHeaderMarckup);
    renderHomePage();
  };

  if (e.target.dataset.link === 'lib') {
    refs.movieList.innerHTML = '<li class="empty-lib">your library is empty</li>';
    refs.searchForm.classList.add('visually-hidden');
    renderHeader(libraryHeaderMarckup);
  };
}