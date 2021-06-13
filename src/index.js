import './sass/main.scss';

import homePageHeaderMarckup from './templates/home-page-header.hbs';
import MovieApiService from './js/movieApiService';
import { renderHomePage, renderHeader } from './js/renderMarckup';
import './js/students-modal';
import refs from './js/refs';
import { onPageHeaderClick } from './js/navigation';
import { onSearch } from './js/search-movie';

export const movieApiService = new MovieApiService();

renderHeader(homePageHeaderMarckup);
renderHomePage();

refs.header.addEventListener('click', onPageHeaderClick);
refs.searchForm.addEventListener('submit', e => onSearch(e))

