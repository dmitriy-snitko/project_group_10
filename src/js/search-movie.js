import { onEmptyQuery } from './notifications';
import { pagination, url } from './pagination';

export function onSearch(e) {
  e.preventDefault();

  url.searchQuery = e.currentTarget.elements.query.value;

  if (!url.searchQuery.trim()) {
    onEmptyQuery();
    e.currentTarget.reset();
    
    return;
  }
  
  pagination(url.searchMovie());
}