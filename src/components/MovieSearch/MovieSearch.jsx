import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from 'pages/Api';
import MovieSearchForm from './MovieSearchForm/MovieSearchForm';
import MoviesList from 'components/MoviesList';

import Button from 'components/Button/Button';

import styles from './movie-search.module.css';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await searchMovies(search, page);
        setMovies(prevMovies =>
          data.results?.length ? [...prevMovies, ...data.results] : prevMovies
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchMovies();
    }
  }, [search, page]);

  const handalSearch = ({ search }) => {
    setSearchParams({ search, page: 1 });
    setMovies([]);
  };

  const loadMore = () => setSearchParams({ search, page: Number(page) + 1 });

  const isMovies = Boolean(movies.length);
  const isMoreMovies = Boolean(movies.length % 20 === 0);
  return (
    <div>
      <MovieSearchForm onSubmit={handalSearch} />
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {isMovies && <MoviesList movies={movies} />}
      {isMovies && isMoreMovies && (
        <div className={styles.loadMoreWrapper}>
          <Button className="button" onClick={loadMore} type="button">
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
