(() => {
    const refs = {
      openModalBtn: document.querySelector('.students-link'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      backdrop: document.querySelector('.backdrop'),
      modal: document.querySelector('[data-modal]'),
      body: document.querySelector('[data-body]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    //   refs.body.classList.toggle('scroll-lock');
    }
  })();


