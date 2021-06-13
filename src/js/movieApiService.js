import axios from 'axios';

export const API_KEY = 'ec2decab2c803075323649cd6bc24f80'

axios.defaults.baseURL = 'https://api.themoviedb.org/3';


export default class MovieApiService {
  constructor() {
    this.page = 1;
  }

  fetchTrendingMovies() {
   return axios.get(`/trending/movie/day?api_key=${API_KEY}&page=${this.page}`)
    .then(({ data }) => data.results);
  };

  fetchMoviesByKeyWords(searchQuery) {
    return axios.get(`search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${this.page}`)
      .then(({ data }) => data.results);
  }

  fetchMoviesById(id) {
    return axios.get(`/movie/${id}?api_key=${API_KEY}`)
    .then(({ data }) => data);
  }

  fetchGenres() {
    return axios.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data.genres);
  }
}