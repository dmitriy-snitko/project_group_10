export function buttonAddToQueue(selectedFilm) {
    let filmsQueue = [];
    const currentFilmQueue = localStorage.getItem('filmsQueue');


    if (currentFilmQueue) {
        
        filmsQueue = JSON.parse(currentFilmQueue);

        const buttonAddToQueueRef = document.querySelector('.button-queue-btn');
        buttonAddToQueueRef.classList.add('active');
        buttonAddToQueueRef.textContent = 'IN QUEUE';

        if (!filmsQueue.find(({ id }) => id === selectedFilm.id)) {
            filmsQueue.push(selectedFilm);
            localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
        }
    } else {
        
    filmsQueue.push(selectedFilm);
    localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
    }
}
export function buttonRemoveFromQueue(selectedFilm) {
    const filmsQueue = [];
    const currentFilmQueue = localStorage.getItem('filmsQueue');

    if (currentFilmQueue) {
        let filmsQueue = JSON.parse(currentFilmQueue);

        if (filmsQueue.find(({ id }) => id === selectedFilm.id)) {
            const idToRemove = filmsQueue.findIndex(el => el.id === selectedFilm.id);

            filmsQueue.splice(idToRemove, 1);
            localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
            const buttonAddToQueueRef = document.querySelector('.button-queue-btn');
        

                buttonAddToQueueRef.classList.remove('active');
                buttonAddToQueueRef.textContent = 'ADD TO QUEUE';
        }
        else {
            // console.log('no items')
        }
    }
}
export function checkBntQueue(film) {
    const buttonAddToQueueRef = document.querySelector('.button-queue-btn');

    if (buttonAddToQueueRef.classList.contains('active')) {
        buttonRemoveFromQueue(film);
    }
    else {
        buttonAddToQueue(film);
    }
}
