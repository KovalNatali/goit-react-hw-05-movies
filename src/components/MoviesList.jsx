import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const locations = useLocation();
  return (
    <ul className="style-film">
      {movies.map(({ id, title, poster }) => (
        <li key={id} title={title} poster={poster}>
          <Link to={`/movies/${id}`} state={{ from: locations }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
