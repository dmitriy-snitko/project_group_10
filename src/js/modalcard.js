import modalTpl from '../templates/modalcard.hbs';
import refs from './refs';
import { movieApiService } from '../index';
import sprite from '../images/icons/sprite.svg';
import Cuttr from 'cuttr';
import { addSpinnerModalWindow } from '../js/spinner';


function openModal() {
  refs.backdropmodal.classList.remove('is-hidden');
  refs.backdropmodal.classList.add('is-open');
  // refs.body.classList.add('scroll-lock');

  window.addEventListener('keydown', onEscapeKeydown);
};

export let movieId;

export function closeModal() {
  refs.backdropmodal.classList.remove('is-open');
  refs.backdropmodal.classList.add('is-hidden');
  // refs.body.classList.remove('scroll-lock');
  refs.modalBox.innerHTML = '';

  window.removeEventListener('keydown', onEscapeKeydown);
};

export function getCard(event) {
  event.target.parentElement.blur();
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  };

  movieId = event.target.dataset.id;
  modalLoad(movieId);
  openModal();
};

function modalLoad(id) {
  movieApiService.fetchMoviesById(id).then(evt => {
    updateModalMarkup(evt);
  });
};

function updateModalMarkup(evt) {
  evt.sprite = sprite;
  const modalMarkup = modalTpl(evt);
  refs.modal.innerHTML = modalMarkup;

  const watchedList = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  const watchedMoviesId = watchedList.map(movie => String(movie.id));
  if (watchedMoviesId.includes(movieId)) {
    document.querySelector('#watchedMovies').textContent = "Remove from watched";
    document.querySelector('#watchedMovies').classList.add('active');
  }
  
  const queueList = JSON.parse(localStorage.getItem('queueMovies')) || [];
  const queueMoviesId = queueList.map(movie => String(movie.id));
  if (queueMoviesId.includes(movieId)) {
    document.querySelector('#queueMovies').textContent = "Remove from queue";
    document.querySelector('#queueMovies').classList.add('active');
  }

  truncateMovieText();
  // addSpinnerModalWindow();
};

// Truncation function //

function truncateMovieText() {
  const modalMovieTextEl = document.querySelector('.film-description');
  new Cuttr(modalMovieTextEl, {
    truncate: 'words',
    length: 82,
    ending: '...',
    readMore: true,
    readMoreText: 'Read more',
    readLessText: 'Read less',
    readMoreBtnPosition: 'inside',
  });
};


refs.modal.addEventListener('click', e => {
  if (!e.target.dataset.btn) {
    return;
  }
  if (e.target.dataset.btn === 'close') {
    closeModal();
  }
});

function onEscapeKeydown(evt) {
if (evt.code === 'Escape' && !refs.backdropmodal.classList.contains('is-hidden')) {
    closeModal();
  }
}

