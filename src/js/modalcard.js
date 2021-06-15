import modalTpl from '../templates/modalcard.hbs';
import refs from './refs';
import { movieApiService } from '../index';
import sprite from '../images/icons/sprite.svg';

function openModal() {
  refs.backdropmodal.classList.remove('is-hidden');
  refs.backdropmodal.classList.add('is-open');
}

export let movieId;

export function closeModal() {
  refs.backdropmodal.classList.remove('is-open');
  refs.backdropmodal.classList.add('is-hidden');
  refs.modal.innerHTML = '';
}

export function getCard(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  movieId = event.target.dataset.id;
  modalLoad(movieId);
  openModal();
}

function modalLoad(id) {
  movieApiService.fetchMoviesById(id).then(evt => {
    updateModalMarkup(evt);
  });
}

function updateModalMarkup(evt) {
  evt.sprite = sprite;
  const modalMarkup = modalTpl(evt);
  refs.modal.innerHTML = modalMarkup;
}
