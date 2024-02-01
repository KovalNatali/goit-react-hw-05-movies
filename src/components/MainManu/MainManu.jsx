import { NavLink } from 'react-router-dom';

import styles from './main-manu.module.css';

const MainManu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink className={styles.link} to="/">
          Home page
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/posts-search">
          Post search
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default MainManu;

// <ul className={styles.menu}>
//   <li>
//     < NavLink className={styles.link} to ="/">
//       Home
//     </ NavLink >
//   </li>
//   <li>
//     < NavLink  className={styles.link} to="/movies">
//       Movies
//     </ NavLink >
//   </li>
// </ul>
