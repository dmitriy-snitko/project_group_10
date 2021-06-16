import { movieId } from './modalcard';
import refs from './refs';
import MovieApiService from './movieApiService';
import { renderMovieList } from './renderMarckup';
import movieListMarckup from '../templates/moviesGallery.hbs';

let movieArrayWatched = [];
let movieArrayQueue = [];

const movieApiService = new MovieApiService();

export function onModalLocaleStorage(event) {
  console.log(movieId);
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  if (event.target.id === 'watchedModalBtn') {
    const savedmovieArrayWatched = localStorage.getItem('movieArrayWatched');
    const parsedmovieArrayWatched = JSON.parse(savedmovieArrayWatched);
    movieArrayWatched = parsedmovieArrayWatched || [];
    console.log(movieArrayWatched);

    checkMovie(movieId, movieArrayWatched);

    console.log(movieArrayWatched);
    localStorage.setItem('movieArrayWatched', JSON.stringify(movieArrayWatched));
  }

  if (event.target.id === 'queueModalBtn') {
    const savedmovieArrayQueue = localStorage.getItem('movieArrayQueue');
    const parsedmovieArrayQueue = JSON.parse(savedmovieArrayQueue);
    movieArrayQueue = parsedmovieArrayQueue || [];
    checkMovie(movieId, movieArrayQueue);

    console.log(movieArrayQueue);
    localStorage.setItem('movieArrayQueue', JSON.stringify(movieArrayQueue));
  }
}

export function onHeaderLocaleStorage(event) {
  if (event.target.value === 'Watched') {
    const savedmovieArrayWatched = localStorage.getItem('movieArrayWatched');
    const parsedmovieArrayWatched = JSON.parse(savedmovieArrayWatched) || [];
    console.log(parsedmovieArrayWatched);

    if (parsedmovieArrayWatched.length === 0) {
      console.log('Библиотека пуста');
    }

    parsedmovieArrayWatched.forEach(id => {
      console.log(id);
      return movieApiService.fetchMoviesById(id).then(renderMovieList(id)); // має рендеритись розмітка фільмів
    });
  }

  if (event.target.value === 'Queue') {
    const savedmovieArrayQueue = localStorage.getItem('movieArrayQueue');
    const parsedmovieArrayQueue = JSON.parse(savedmovieArrayQueue) || [];
    console.log(parsedmovieArrayQueue);

    if (parsedmovieArrayWatched.length === 0) {
      console.log('Библиотека пуста');
    }

    parsedmovieArrayQueue.forEach(id => {
      console.log(id);
      return movieApiService.fetchMoviesById(id).then(renderMovieList(id)); // має рендеритись розмітка фільмів
    });
  }
}

//перевіряє чи фильм вже добавлений
function checkMovie(movieId, array) {
  if (array.includes(movieId)) {
    console.log('Такой фильм  уже есть в списке'); // нотификашка
    return;
  }
  array.push(movieId);
}
