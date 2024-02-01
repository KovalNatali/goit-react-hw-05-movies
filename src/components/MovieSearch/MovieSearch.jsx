// import { useEffect, useState } from 'react';
// import MovieSearchForm from './MovieSearchForm/MovieSearchForm';
// import { useParams } from 'react-router-dom';
// import MovieSearchList from './MovieSearchList/MovieSearchList';
// import { getMovieById } from 'pages/Api';

// import styles from './movie-search.module.css';
// import Button from 'components/Button/button';

// const MovieSearch = () => {
//   const [search, setSearch] = useState('');
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const { movieId } = useParams();
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         setLoading(true);
//         const posts = await getMovieById(movieId);
//         setPosts(posts);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, [movieId]);

//   const handleSearch = ({ search }) => {
//     setSearch(search);
//     setPosts([]);
//     setPage(1);
//   };

//   const loadMore = () => setPage(prevPage => prevPage + 1);

//   const isPosts = Boolean(posts.length);

//   return (
//     <>
//       <MovieSearchForm onSubmit={handleSearch} />
//       {error && <p className={styles.error}>{error}</p>}
//       {loading && <p>...Loading</p>}
//       {isPosts && <MovieSearchList items={posts} />}
//       {isPosts && (
//         <div className={styles.loadMoreWrapper}>
//           <Button onClick={loadMore} type="button">
//             Load more
//           </Button>
//         </div>
//       )}
//     </>
//   );
// };
// export default MovieSearch;
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Button from 'components/Button/button';

// import PostsSearchList from './PostsSearchList/PostsSearchList';
// import PostsSearchForm from './PostsSearchForm/PostsSearchForm';
import MovieSearchForm from './MovieSearchForm/MovieSearchForm';

import MovieSearchList from './MovieSearchList/MovieSearchList';
import { getMovieById } from 'pages/Api';
import { fetchMovies } from 'pages/Api';
import styles from './movie-search.module.css';

const MovieSearch = () => {
  // const [search, setSearch] = useState("");
  // const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { results } = await fetchMovies();
        setPosts(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search) {
      fetchPosts();
    }
  }, [search, page]);

  const handleSearch = ({ search }) => {
    // setSearch(search);
    setSearchParams({ search, page: 1 });
    // setPage(1);
    setPosts([]);
  };

  const loadMore = () => setSearchParams({ search, page: Number(page) + 1 });

  const isPosts = Boolean(posts.length);

  return (
    <>
      <MovieSearchForm onSubmit={handleSearch} />
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {isPosts && <MovieSearchList items={posts} />}
      {isPosts && (
        <div className={styles.loadMoreWrapper}>
          <Button onClick={loadMore} type="button">
            Load more
          </Button>
        </div>
      )}
    </>
  );
};

export default MovieSearch;

// import { useEffect, useState } from 'react';
// import { fetchMovies } from '../../pages/Api';
// // import MoviesList from 'components/MoviesList';
// // import styles from './home.module.css';
// import MovieSearchList from './MovieSearchList/MovieSearchList';

// export default function MovieSearch() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState(null);

//   useEffect(() => {
//     const getQuizzes = async () => {
//       try {
//         setLoading(true);
//         const { results } = await fetchMovies();
//         setMovies(results);
//       } catch (error) {
//         console.log(error);
//         // setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getQuizzes();
//   }, []);

//   return (
//     <>
//       <MovieSearchList movies={movies} />
//       {loading && <p>...Loading</p>}
//     </>
//   );
// }
