import '../../node_modules/paginationjs/dist/pagination';
import { onSearchFailed } from './notifications';
import getGenresName from './getGenresName';
import refs from './refs';
import movieListMarckup from '../templates/moviesGallery.hbs';

export const url = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: 'ec2decab2c803075323649cd6bc24f80',
  searchQuery: '',

  trendingMovie() {
    return `${this.BASE_URL}/trending/movie/day?api_key=${this.API_KEY}`;
  },

  searchMovie() {
    return `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=${this.searchQuery}`;
  },
};

export function pagination(url) {
  $('.pagination-container').pagination({
    dataSource: url,
    locator: 'results',
    totalNumberLocator: function (response) { return response.total_pages * 10 },
    alias: {
      pageNumber: 'page',
    },
    ulClassName: 'pagination-list',
    prevText: '',
    nextText: '',
    

    callback: function (data) {
    if (data.length === 0) {
      return onSearchFailed();
    }

    getGenresName(data)
      .then(() => refs.movieList.innerHTML = movieListMarckup(data));
    }
  })
}
