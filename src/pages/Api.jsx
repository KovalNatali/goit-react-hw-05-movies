import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com/posts',
// });

// export const getAllPosts = () => {
//   return instance.get('/');
// };

// export const getPostById = id => {
//   return instance.get(`/${id}`);
// };

// export const searchPosts = (q, _page = 1) => {
//   // return instance.get(`/?q=${q}&_limit=6&_page=${_page}`)
//   return instance.get('/', {
//     params: {
//       q,
//       _limit: 6,
//       _page,
//     },
//   });
// };

const API_KEY = '344c7270581ee8890ac0e8ee75ba983e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

// export const getAllPosts = async () => {
//   const { data } = await axios.get(`trending/movie/day`, params);
//   return data;
// };

export const fetchMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, params);
  return data;
};

export const handleSearch = async movieName => {
  const { data } = await axios.get(`/search/movie?query=${movieName}`, params);
  return data;
};
// export const getMovieById = movieId => {
//   const { data } = axios.get(`/${movieId}`, params);
//   return data;
// };

// export const fetchTrendingMovies = async () => {
//   const response = await axios.get(`trending/movie/day`, params);
//   return response.data.results;
// };

export const getMovieById = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  return response.data;
};
