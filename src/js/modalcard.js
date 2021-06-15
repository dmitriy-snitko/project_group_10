import modalTpl from '../templates/modalcard.hbs';
import refs from './refs';
import { movieApiService } from '../index';
import sprite from '../images/icons/sprite.svg';

function openModal() {
  refs.backdropmodal.classList.remove('is-hidden');
  refs.backdropmodal.classList.add('is-open');
  refs.body.classList.add('scroll-lock');
}

export function closeModal() {
  refs.backdropmodal.classList.remove('is-open');
  refs.backdropmodal.classList.add('is-hidden');
  refs.body.classList.remove('scroll-lock');
  refs.modalBox.innerHTML = '';
}

export function getCard(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const movieId = event.target.dataset.id;
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
refs.modal.addEventListener('click', e => {
  if (!e.target.dataset.btn) {
    return;
  }
  if (e.target.dataset.btn === 'close') {
    closeModal();
  }
});
