import { movieApiService } from '../index';
import getMovieListWithGenresName from './getGenresName';
import { renderMovieList } from './renderMarckup';
import { onEmptyQuery } from './notifications';

export function onSearch(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.query.value;

  if (!searchQuery.trim()) {
    onEmptyQuery();
    e.currentTarget.reset();
    
    return;
  }
  
  movieApiService.fetchMoviesByKeyWords(searchQuery)
    .then(getMovieListWithGenresName)
    .then(renderMovieList)
    .catch(error => console.log(error));

  e.currentTarget.reset();
}