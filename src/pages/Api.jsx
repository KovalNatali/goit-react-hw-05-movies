import axios from 'axios';

const API_KEY = '344c7270581ee8890ac0e8ee75ba983e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, params);
  return data;
};
