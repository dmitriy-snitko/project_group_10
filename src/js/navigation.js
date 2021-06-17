import { renderHeader, renderHomePage} from './renderMarckup';
import homePageHeaderMarckup from '../templates/home-page-header.hbs';
import libraryHeaderMarckup from '../templates/library-header.hbs';
import { pagination } from './pagination';
import refs from './refs';
import movieListMarckup from '../templates/moviesGallery.hbs'
import getGenres from './getGenresName';

export let location = '';
let MoviesRating = [];

export function onPageHeaderClick(e) {
  if (!e.target.dataset) {
    return;
  };

  if (e.target.dataset.link === 'home') {
    location = e.target.dataset.link;
    refs.searchForm.classList.remove('visually-hidden');
    renderHeader(homePageHeaderMarckup);
    renderHomePage();
  };

  if (e.target.dataset.link === 'lib') {
    location = 'watchedMovies';
    const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];

    refs.searchForm.classList.add('visually-hidden');
    renderHeader(libraryHeaderMarckup);
    
    refs.movieList.innerHTML = movieListMarckup(watchedMovies);
    
    MoviesRating = document.querySelectorAll('.movie-rating');
    MoviesRating.forEach(rating => rating.classList.remove('visually-hidden'));
    pagination('#');
  };

  if (e.target.dataset.btn === 'lib-nav') {
    location = e.target.dataset.name;
    const libMovies = JSON.parse(localStorage.getItem(e.target.dataset.name)) || [];
    
    refs.movieList.innerHTML = movieListMarckup(libMovies);
    
    const ratings = document.querySelectorAll('.movie-rating');
    ratings.forEach(rating => rating.classList.remove('visually-hidden'))
  }  
}