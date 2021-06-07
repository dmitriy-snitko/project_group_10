import axios from 'axios';

const API_KEY = 'ec2decab2c803075323649cd6bc24f80'

axios.defaults.baseURL = 'https://api.themoviedb.org/3';


export default class MovieApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  fetchTrendingMovies() {
   return axios.get(`/trending/movie/day?api_key=${API_KEY}&page=${this.page}`);
  };

  fetchMoviesByKeyWords(searchQuery) {
    return axios.get(`search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${this.page}`);
  }

  fetchMoviesById(id) {
    return axios.get(`/movie/${id}?api_key=${API_KEY}`);
  }
}
