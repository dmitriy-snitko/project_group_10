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

//-----------------------------------------
refs.modal.addEventListener('click', onModalLocaleStorage);
refs.header.addEventListener('click', onHeaderLocaleStorage);
//-----------------------------
// import movieListMarckup from './templates/moviesGallery.hbs';
// let movieId;

// function openModal() {
//   refs.backdropmodal.classList.remove('is-hidden');
//   refs.backdropmodal.classList.add('is-open');
// }

// export function closeModal() {
//   refs.backdropmodal.classList.remove('is-open');
//   refs.backdropmodal.classList.add('is-hidden');
//   refs.modalBox.innerHTML = '';
// }

// export function getCard(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

//   movieId = event.target.dataset.id;
//   modalLoad(movieId);
//   openModal();
// }

// function modalLoad(id) {
//   movieApiService.fetchMoviesById(id).then(evt => {
//     updateModalMarkup(evt);
//   });
// }

// function updateModalMarkup(evt) {
//   evt.sprite = sprite;
//   const modalMarkup = modalTpl(evt);
//   refs.modal.innerHTML = modalMarkup;
// }

// const modal = document.querySelector('.modal');

// console.log(modal);

// let movieArrayWatched = [];
// let movieArrayQueue = [];
// modal.addEventListener('click', onModal);

// function onModal(event) {
//   // target = event.target;
//   console.log(movieId);
//   // if (event.target.nodeName !== 'BUTTON') {
//   //   return;
//   // }

//   // console.log('gf');

//   if (event.target.id === 'watchedModalBtn') {
//     // localStorage.setItem('movieWarched', movieId);
//     // let b = localStorage.getItem('movieWarched');
//     movieArrayWatched.push(movieId);
//     console.log(movieArrayWatched);
//     localStorage.setItem('movieArrayWatched', JSON.stringify(movieArrayWatched));
//   }

//   if (event.target.id === 'queueModalBtn') {
//     localStorage.setItem('movieQueue', movieId);

//     movieArrayQueue.push(movieId);
//     console.log(movieArrayQueue);
//   }
// }

// refs.header.addEventListener('click', onBtnHeader);

// function onBtnHeader(event) {
//   if (event.target.value === 'Watched') {
//     // console.log(movieArrayWatched);

//     const savedmovieArrayWatched = localStorage.getItem('movieArrayWatched');
//     const parsedmovieArrayWatched = JSON.parse(savedmovieArrayWatched);

//     console.log(parsedmovieArrayWatched);

//     parsedmovieArrayWatched.forEach(id => {
//       console.log(id);
//       return renderHomeWatched(id);
//     });
//   }
// }

// function renderHomeWatched(id) {
//   movieApiService.fetchMoviesById(id).then(renderMovieList);
// }

// // movieApiService.fetchMoviesById(id).then(evt => {
// //   updateModalMarkup(evt);
// function renderMovieList(movieList) {
//   refs.movieList.insertAdjacentHTML('afterbegin', movieListMarckup(movieList));
// }
