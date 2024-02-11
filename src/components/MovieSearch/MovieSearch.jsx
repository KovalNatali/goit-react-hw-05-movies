import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from 'pages/Api';
import MovieSearchForm from './MovieSearchForm/MovieSearchForm';
import MoviesList from 'components/MoviesList';
// import Button from 'components/Button/Button';
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
    <>
      <MovieSearchForm onSubmit={handalSearch} />
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {isMovies && <MoviesList movies={movies} />}
      {isMovies && isMoreMovies && (
        <Button onClick={loadMore} type="button">
          Load more
        </Button>
        //   <div className={styles.loadMoreWrapper}>

        // </div>
      )}
    </>
  );
};

export default MovieSearch;

// class MovieSearch extends Component {
//   state = {
//     search: '',
//     movies: [],
//     loading: false,
//     error: null,
//     page: 1,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const { search, page } = this.state;
//     if (search && (search !== prevState.search || page !== prevState.page)) {
//       this.fetchMovies();
//     }
//   }

//   async fetchMovies() {
//     const { search, page } = this.state;
//     try {
//       this.setState({
//         loading: true,
//       });
//       const { data } = await searchMovies(search, page);
//       this.setState(({ movies }) => ({
//         movies: data.results?.length ? [...movies, ...data.results] : [],
//         //   movies: data.results?.length ? data.results : [],
//       }));
//     } catch (error) {
//       this.setState({
//         error: error.message,
//       });
//     } finally {
//       this.setState({
//         loading: false,
//       });
//     }
//   }

//   handalSearch = ({ search }) => {
//     this.setState({
//       search,
//       movies: [],
//       page: 1,
//     });
//   };

//   loadMore = () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };

//   render() {
//     const { handalSearch, loadMore } = this;
//     const { movies, loading, error } = this.state;
//     const isMovies = Boolean(movies.length);
//     const isMoreMovies = Boolean(movies.length % 20 === 0);
//     return (
//       <>
//         <MovieSearchForm onSubmit={handalSearch} />
//         {error && <p className={styles.error}>{error}</p>}
//         {loading && <p>...Loading</p>}
//         {isMovies && <MoviesList movies={movies} />}
//         {isMovies && isMoreMovies && (
//           <div className={styles.loadMoreWrapper}>
//             <Button onClick={loadMore} type="button">
//               Load more
//             </Button>
//           </div>
//         )}
//       </>
//     );
//   }
// }
// export default MovieSearch;
