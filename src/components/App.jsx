import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import MovesPage from 'pages/MovesPage/MovesPage';
import NotFoubndPage from 'pages/NotFoundPage/NotFoubndPage';
import SharedLayout from './SharedLayout/SharedLayout';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

// import MainManu from './MainManu/MainManu';
// import PostsSearchPage from 'pages/PostsSearchPage/PostsSearchPage';
// import ContactsPage from 'pages/ContactsPage/ContactsPage';

// export const App = () => {
//   return (
//     <div className="App">
//       <MainManu />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/posts-search" element={<PostsSearchPage />} />
//         <Route path="/posts/:id" element={<SinglePostPage />} />
//         <Route path="/contacts" element={<ContactsPage />} />
//         <Route path="*" element={<NotFoubndPage />} />
//       </Routes>
//     </div>
//   );
// };

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MovesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoubndPage />} />
        </Route>
      </Routes>
    </div>
  );
};
