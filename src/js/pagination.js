import '../../node_modules/paginationjs/src/pagination';

import movieListMarckup from '../templates/moviesGallery.hbs';
import MovieApiService from '../js/movieApiService';

export const movieApiService = new MovieApiService();

// const items = movieApiService.fetchTrendingMovies();

export default $('#pagination-container').pagination({
  dataSource:
    // `https://api.themoviedb.org/3/trending/movie/day?api_key=ec2decab2c803075323649cd6bc24f80&page=${movieApiService.page}`,
    'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
  locator: 'items',
  // function () {
  //   return movieApiService.fetchTrendingMovies();
  // },
  totalNumberLocator: function () {
    // return movieApiService.fetchTotalNumber(); //функція має вернути кількість сторінок
    return 100;
  },

  pageSize: 20,
  ajax: {
    beforeSend: function () {
      $('#data-container').html('Loading data from flickr.com ...'); //спинер
    },
  },
  callback: function (data, pagination) {
    // template method of yourself
    var html = movieListMarckup;
    $('#data-container').html(html);
  },
});
