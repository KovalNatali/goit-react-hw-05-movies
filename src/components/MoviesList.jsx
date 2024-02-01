import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul className="style-film">
      {movies.map(({ id, title, poster, poster_path }) => (
        <li key={id} title={title} poster={poster}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
