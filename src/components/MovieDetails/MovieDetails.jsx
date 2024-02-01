import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'pages/Api';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();
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

  console.log(movieId);

  const goBack = () => navigate(-1);
  return (
    <div>
      {loading && <p>...Loding</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={goBack} type="button">
        Go back
      </button>
      {movie && (
        <>
          <h1> {movie.title}</h1>
          <p>{movie.overview}</p>

          <p></p>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
