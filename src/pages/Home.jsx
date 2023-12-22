import { useEffect, useState } from 'react';
import { fetchMovies } from './Api';
// import { Link } from 'react-router-dom';
import MoviesList from 'components/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getQuizzes = async () => {
      try {
        const movies = await fetchMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    getQuizzes();
  }, []);

  return <MoviesList movies={movies} />;
}
