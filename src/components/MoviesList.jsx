import { Link } from 'react-router-dom';
import { MoviesItem } from './MoviesItem';

const MoviesList = ({ movies }) => {
  return (
    <ul className="style-film">
      {movies.map(movie => {
        <MoviesItem key={movie.id} />;
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
