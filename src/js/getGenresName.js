import { movieApiService } from '../index';

export default async function getMovieListWithGenresName(movieList) {
  const officialGenresList = await movieApiService.fetchGenres();
  
  let MovieGenresName = [];
  const genresList = {};
  const movieGenresId = movieList.map(movie => movie.genre_ids);

  officialGenresList.map(genre => genresList[genre['id']] = genre['name'] );
  MovieGenresName = movieGenresId.map(genres => genres.map(id => genresList[id]));

  movieList.forEach((movie, index) => {
    movie.genre_ids = MovieGenresName[index];
    movie.genre_ids = movie.genre_ids.slice(0, 3);

    if (movie.vote_average === 10) {
      movie.vote_average = String(movie.vote_average) + '.0';
    }
    
    movie.vote_average = String(movie.vote_average).padEnd(3, ".0");
    
    if (movie.release_date) {
      movie.release_date = movie.release_date.slice(0, 4);
    }
  });

  return movieList;
};

