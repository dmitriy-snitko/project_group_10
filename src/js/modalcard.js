import modalTpl from '../templates/modalcard.hbs';
import refs from './refs';
import { movieApiService } from '../index';

function openModal() {
  refs.backdropmodal.classList.remove('is-hidden');
  refs.backdropmodal.classList.add('is-open');

};

export function closeModal() {
  refs.backdropmodal.classList.remove('is-open');
  refs.backdropmodal.classList.add('is-hidden');
  refs.modalBox.innerHTML = '';
};

export function getCard(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  };

  const movieId = event.target.dataset.id;
  modalLoad(movieId);
  openModal();
};

function modalLoad(id) {
  movieApiService.fetchMoviesById(id).then(evt => {
    updateModalMarkup(evt);
  });
};

function updateModalMarkup(evt) {
  const modalMarkup = modalTpl(evt);
  refs.modal.innerHTML = modalMarkup;
};
