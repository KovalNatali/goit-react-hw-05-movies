import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'pages/Api';
import styles from './cast-page.module.css';
import placeholder from '../image/placeholder.png';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const respons = await fetchMovieCast(movieId);
        setCast(respons);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  const elements = cast.map(
    ({ id, character, original_name, profile_path }) => (
      <li key={id}>
        <h4>{original_name}</h4>
        <img
          className={styles.img}
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w300${profile_path}`
              : `${placeholder}`
          }
          alt={original_name}
        />
      </li>
    )
  );

  const isCast = Boolean(cast.length);

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {(isCast && <ul>{elements}</ul>) || (
        <p className={styles.info}>There are no reviews.</p>
      )}
    </>
  );
};

export default CastPage;
