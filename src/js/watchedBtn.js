 export function buttonAddToWatched(selectedFilm) {
    const filmsArr = [];
    const currentFilmsWatched = localStorage.getItem('filmsWatched');

    if (currentFilmsWatched) {
        let filmsArr = JSON.parse(currentFilmsWatched);


        const buttonAddToWatchedRef = document.querySelector('.button-watched-btn');
        buttonAddToWatchedRef.classList.add('active');
        buttonAddToWatchedRef.textContent = 'IN WATCHED';
         buttonAddToWatchedRef.addEventListener = ('click');

        if (!filmsArr.find(({ id }) => id === selectedFilm.id)) {
            filmsArr.push(selectedFilm);
            localStorage.setItem('filmsWatched', JSON.stringify(filmsArr));
        }
    } else {
        filmsArr.push(selectedFilm);
        localStorage.setItem('filmsWatched', JSON.stringify(filmsArr));
    }
}

export function buttonRemoveFromWatched(selectedFilm) {
    const filmsArr = [];
    const currentFilmsWatched = localStorage.getItem('filmsWatched');


    if (currentFilmsWatched) {
        let filmsArr = JSON.parse(currentFilmsWatched);
        if (filmsArr.find(({ id }) => id === selectedFilm.id)) {
            const idToRemove = filmsArr.findIndex(el => el.id === selectedFilm.id);

            filmsArr.splice(idToRemove, 1);
            localStorage.setItem('filmsWatched', JSON.stringify(filmsArr));
            const buttonAddToWatchedRef = document.querySelector('.button-watched-btn');

            buttonAddToWatchedRef.classList.remove('active');
            buttonAddToWatchedRef.textContent = 'ADD TO WATCHED';
            buttonAddToWatchedRef.addEventListener = ('click');
        }
        else {
            console.log('no matches')
        }
    }
}
export function checkBntWatched(film) {
    const buttonAddToWatchedRef = document.querySelector('.button-watched-btn');

    if (buttonAddToWatchedRef.classList.contains('active')) {
        buttonRemoveFromWatched(film);
    }
    else {
        buttonAddToWatched(film);
    }
}