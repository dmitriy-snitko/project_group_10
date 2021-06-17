import { movieId } from './modalcard';
import MovieApiService from './movieApiService';
import alertify from 'alertifyjs';
import { renderMovieList } from './renderMarckup';
import { location } from './navigation';

const movieApiService = new MovieApiService();

export function onModalLocaleStorage(event) {

  if (event.target.dataset.btn !== 'modal') {
    return;
  }

  movieApiService.fetchMoviesById(movieId)
    .then(movie => {
      checkMovie(movie, event.target.id, event);
    });
};

function checkMovie(movie, btnId, event) {
  const movieList = JSON.parse(localStorage.getItem(event.target.id)) || [];

  const moviesId = movieList.map(movie => String(movie.id));

  if (moviesId.includes(movieId)) {
    

    const movieIndex = moviesId.indexOf(movieId);
    movieList.splice(movieIndex, 1);
    
    localStorage.setItem(btnId, JSON.stringify(movieList))
    alertify.warning(`movie removed from ${event.target.dataset.name}`);    
    event.target.innerText = `add to ${event.target.dataset.name}`;
    event.target.classList.remove('active');

    if (event.target.id === location) {
      renderMovieList(movieList);
      const ratings = document.querySelectorAll('.movie-rating');
      ratings.forEach(rating => rating.classList.remove('visually-hidden'))
    };

    return;
  };

  if (movie.vote_average === 10) {
    movie.vote_average = String(movie.vote_average) + '.0';
  }
  
  movie.vote_average = String(movie.vote_average).padEnd(3, ".0");
  
  if (movie.release_date) {
    movie.release_date = movie.release_date.slice(0, 4);
  }

  movie.release_date = movie.release_date.slice(0, 4);
  movieList.push(movie);
  localStorage.setItem(btnId, JSON.stringify(movieList));
  event.target.innerText = `remove from ${event.target.dataset.name}`;
  event.target.classList.add('active');
  alertify.success(`movie added to watched ${event.target.dataset.name}`);

  if (event.target.id === location) {
    renderMovieList(movieList);
      const ratings = document.querySelectorAll('.movie-rating');
      ratings.forEach(rating => rating.classList.remove('visually-hidden'))
  }
};
















//   if (event.target.id === 'queueModalBtn') {
//     const savedmovieArrayQueue = localStorage.getItem('movieArrayQueue');
//     const parsedmovieArrayQueue = JSON.parse(savedmovieArrayQueue);
//     movieArrayQueue = parsedmovieArrayQueue || [];
//     checkMovie(movieId, movieArrayQueue);

//     // console.log(movieArrayQueue);
//     localStorage.setItem('movieArrayQueue', JSON.stringify(movieArrayQueue));
//   }
// }

// export function onHeaderLocaleStorage(event) {
//   if (event.target.value === 'Watched') {
//     const savedmovieArrayWatched = localStorage.getItem('movieArrayWatched');
//     const parsedmovieArrayWatched = JSON.parse(savedmovieArrayWatched) || [];
//     // console.log(parsedmovieArrayWatched);

//     if (parsedmovieArrayWatched.length === 0) {
//       console.log('Библиотека пуста');
//     }

//     parsedmovieArrayWatched.forEach(id => {
//       // console.log(id);
//       return movieApiService.fetchMoviesById(id).then(renderMovieList(id)); // має рендеритись розмітка фільмів
//     });
//   }

//   if (event.target.value === 'Queue') {
//     const savedmovieArrayQueue = localStorage.getItem('movieArrayQueue');
//     const parsedmovieArrayQueue = JSON.parse(savedmovieArrayQueue) || [];
//     // console.log(parsedmovieArrayQueue);

//     if (parsedmovieArrayWatched.length === 0) {
//       console.log('Библиотека пуста');
//     }

//     parsedmovieArrayQueue.forEach(id => {
//       // console.log(id);
//       return movieApiService.fetchMoviesById(id).then(renderMovieList(id)); // має рендеритись розмітка фільмів
//     });
//   }
// }

//перевіряє чи фильм вже добавлений
// function checkMovie(movieId, array) {
//   if (array.includes(movieId)) {
//     console.log('Такой фильм  уже есть в списке'); // нотификашка
//     return;
//   }
//   array.push(movieId);

//   // movieApiService.fetchMoviesById(movieId)
//   //   .then(id => localStorage.setItem('aa', JSON.stringify(id)));
 
// }
