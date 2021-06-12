import modalTpl from '../templates/modalcard.hbs';
import API_KEY from './movieApiService';

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

// refs.gallery.addEventListener('click', getCard);

// function getCard(event) {
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   const movieId = event.target.dataset.id;
//   modalLoad(movieId);
//   openModal();
// }
// function getMovieById(id) {
//   return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(response =>
//     response.json(),
//   );
// }

// function modalLoad(movieId) {
//   getMovieById(id).then(evt => {
//     updateModalMarkup(evt);
//   });
// }
// function updateModalMarkup(evt) {
//   const modalMarkup = modalTpl(evt);
//   refs.modal.insertAdjacentHTML('beforeend', modalMarkup);
// }
// function openModal() {
//   refs.backdropmodal.classList.add('is-open');
// }
