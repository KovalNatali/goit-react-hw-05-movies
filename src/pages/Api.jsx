import axios from 'axios';

const API_KEY = '344c7270581ee8890ac0e8ee75ba983e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  },
};

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const searchMovies = (query, page = 1) => {
  return instance.get(`/search/movie?query=${query}&page=${page}`, params);
};

export const fetchMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, params);
  return data;
};

export const getMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  return response.data;
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits?`, params);
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`, params);
  return response.data.results;
};
