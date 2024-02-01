import { useEffect, useState } from 'react';
import { fetchMovies } from '../../pages/Api';
import MoviesList from 'components/MoviesList';
// import styles from './home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const getQuizzes = async () => {
      try {
        setLoading(true);
        const { results } = await fetchMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
        // setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getQuizzes();
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
      {loading && <p>...Loading</p>}
    </>
  );
}
