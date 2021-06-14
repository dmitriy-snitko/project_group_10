(() => {
    const refs = {
      openModalBtn: document.querySelector('.students-link'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      backdrop: document.querySelector('.backdrop'),
      modal: document.querySelector('[data-modal]'),
      body: document.querySelector('[data-body]'),
    };
<<<<<<< Updated upstream

    refs.openModalBtn.addEventListener('click', isOpenModal);
    refs.backdrop.addEventListener('click',overlay);
    refs.closeModalBtn.addEventListener('click', isClosedModal);
    

    function isOpenModal(e) {
      e.preventDefault();
    
      refs.backdrop.classList.add('is-open');
      refs.backdrop.classList.remove('is-hidden');
    
      window.addEventListener('keydown', onKeyPressEsc);
    }
    
    function isClosedModal(e) {
      refs.backdrop.classList.remove('is-open');
      refs.backdrop.classList.add('is-hidden');
      
    }
    
    function overlay(event){
      if (event.target === refs.modal) {
      refs.backdrop.classList.remove('is-open');
      refs.backdrop.classList.add('is-hidden');
    }}

    function onKeyPressEsc(e) {
      if (e.code === 'Escape') {
        isClosedModal();
      }
=======
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      // refs.body.classList.toggle('scroll-lock');
>>>>>>> Stashed changes
    }
  })();


