import { movieId } from './modalcard';
import refs from './refs';
import MovieApiService from './movieApiService';
import { renderMovieList } from './renderMarckup';

let movieArrayWatched = [];
let movieArrayQueue = [];

const movieApiService = new MovieApiService();

export function onModalLocaleStorage(event) {
  console.log(movieId);
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  if (event.target.id === 'watchedModalBtn') {
    movieArrayWatched.push(movieId);

    console.log(movieArrayWatched);
    localStorage.setItem('movieArrayWatched', JSON.stringify(movieArrayWatched));
  }

  if (event.target.id === 'queueModalBtn') {
    movieArrayQueue.push(movieId);
    console.log(movieArrayQueue);
    localStorage.setItem('movieArrayQueue', JSON.stringify(movieArrayQueue));
  }
}

export function onHeaderLocaleStorage(event) {
  if (event.target.value === 'Watched') {
    // console.log(movieArrayWatched);
    const savedmovieArrayWatched = localStorage.getItem('movieArrayWatched');
    const parsedmovieArrayWatched = JSON.parse(savedmovieArrayWatched);

    console.log(parsedmovieArrayWatched);

    parsedmovieArrayWatched.forEach(id => {
      console.log(id); // має рендеритись розмітка фільмів
    });
  }

  if (event.target.value === 'Queue') {
    const savedmovieArrayQueue = localStorage.getItem('movieArrayQueue');
    const parsedmovieArrayQueue = JSON.parse(savedmovieArrayQueue);

    console.log(parsedmovieArrayQueue);

    parsedmovieArrayQueue.forEach(id => {
      console.log(id);
      // return renderHomeWatched(id);
      MovieApiService.fetchMoviesById(id).then(renderMovieList); // має рендеритись розмітка фільмів
    });
  }
}
