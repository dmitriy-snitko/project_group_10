import '../../node_modules/paginationjs/src/pagination';

import movieListMarckup from '../templates/moviesGallery.hbs';
import MovieApiService from '../js/movieApiService';

export const movieApiService = new MovieApiService();

export default $('#pagination-container').pagination({
  dataSource:
    'https://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
  locator: 'items',
  totalNumberLocator: function () {
    return movieApiService.fetchTotalNumber(); //функція має вернути кількість сторінок
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
