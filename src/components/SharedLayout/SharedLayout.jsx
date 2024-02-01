import MainMenuMovie from 'components/MainMenuMovie/MainMenuMovie';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <MainMenuMovie />
      <Outlet />
    </>
  );
};
export default SharedLayout;
