import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import MainMenuMovie from 'components/MainMenuMovie/MainMenuMovie';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <MainMenuMovie />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
