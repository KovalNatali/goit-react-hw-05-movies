import { NavLink } from 'react-router-dom';

import styles from './main-menu-movie.module.css';

const MainMenuMovie = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};
export default MainMenuMovie;
