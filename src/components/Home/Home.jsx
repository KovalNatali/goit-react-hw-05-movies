import { useEffect, useState } from 'react';
import { fetchMovies } from '../../pages/Api';
import MoviesList from 'components/MoviesList';
import styles from './home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuizzes = async () => {
      try {
        setLoading(true);
        const { results } = await fetchMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getQuizzes();
  }, []);

  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {Boolean(movies.length) && <MoviesList movies={movies} />}
    </>
  );
};
export default Home;
