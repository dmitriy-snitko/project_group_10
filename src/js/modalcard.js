// import modalWindowTpl from '../templates/modalcard.hbs';
// import { API_KEY } from './movieApiService';

const refs = {
  modal: document.querySelector('.modal'),
  backdropmodal: document.querySelector('.backdropcard'),
  gallery: document.querySelector('.gallery-container'),
  btnClose: document.querySelector('.close-btn'),
  modalBox: document.querySelector('.modaljs'),
  openModalBtn: document.querySelector('.gallery-container'),
};
function closeModal() {
  refs.backdropmodal.classList.toggle('is-hidden');
  refs.modalBox.innerHTML = '';
  refs.body.classList.remove('hide-overflow');
}
refs.btnClose.addEventListener('click', closeModal);
refs.backdropmodal.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});
window.addEventListener('keydown', e => {
  if (e.code === 'Escape' && !refs.backdropmodal.classList.contains('is-hidden')) {
    closeModal();
  }
});
