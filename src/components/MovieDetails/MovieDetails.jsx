import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieById } from 'pages/Api';
import styles from './movie-details.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const movie = await getMovieById(movieId);
        setMovie(movie);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  const goBack = () => navigate(from);

  const { title, poster_path, overview, vote_average, genres } = movie || {};

  return (
    <div>
      {loading && <p>...Loding</p>}
      {error && <p>Error: {error}</p>}
      <button className={styles.btn} onClick={goBack} type="button">
        Go back
      </button>
      {movie && (
        <>
          <div className={styles.container}>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={movie.name}
            />
            <div>
              <h1> {title}</h1>
              <h2 className={styles.title}>User Score:</h2>
              <p>{Math.round(vote_average * 10)}%</p>
              <h2 className={styles.title}>Overview: </h2>
              <p>{overview}</p>
              <h2 className={styles.title}>Genres:</h2>
              <p className={styles.genres}>
                {genres && genres.map(i => i.name).join(', ')}
              </p>
            </div>
          </div>
          <h3 className={styles.title}>Additional information</h3>
          <ul>
            <li>
              <Link to={'cast'} state={{ from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to={'reviews'} state={{ from }}>
                Reviews
              </Link>
            </li>
          </ul>

          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
