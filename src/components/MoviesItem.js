export const MoviesItem = ({ titel, poster }) => {
  return (
    <li>
      <div>
        <img src="" alt="" />
      </div>
      <h4>{titel}</h4>
      <p>Poster: {poster}</p>
    </li>
  );
};
