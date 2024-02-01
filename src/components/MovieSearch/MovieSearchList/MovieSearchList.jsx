import { Link, useLocation } from 'react-router-dom';

import styles from './movie-search.module.css';

const MovieSearchList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, poster }) => (
    <li key={id} className={styles.item}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title} {poster}
      </Link>
    </li>
  ));

  return <ol className={styles.list}>{elements}</ol>;
};

export default MovieSearchList;
