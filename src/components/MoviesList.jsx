import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <ul className="style-film">
      {movies.map(movie => {
        <li className="li-films" key={movie.id}>
          {movie}
        </li>;
        return (
          <Link to={`/movies/${movie.id}`}>
            {movie.title} {movie.poster_path}
          </Link>
        );
      })}
    </ul>
  );
};
export default MoviesList;
