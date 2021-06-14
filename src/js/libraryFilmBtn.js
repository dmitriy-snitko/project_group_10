
import libraryFilmPage from '../templates/library-header.hbs';

export default function () {
    const libraryPageContainer = document.querySelector(".lib-page-header");

    const render = filmData => {
        libraryPageContainer.innerHTML = libraryFilmPage(filmData.reverse())

        addEventListenerToButtonst();
    }
    const addEventListenerToButtonst = () => {
        const btnWatched = document.querySelector(".buttonWatched");
        const btnQueue = document.querySelector(".buttonQueue");

        btnWatched.addEventListener("click", () => render(libraryWatched('watched')));
        btnQueue.addEventListener("click", () => render(libraryWatched('queue')));
    }

    
    function libraryWatched(listType) {
        const list = localStorage.getItem(listType);
        return JSON.parse(list)
    }
     render (libraryWatched('watched'));
}