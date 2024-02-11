import { Circles } from 'react-loader-spinner';

const Loader = () => (
  <div className="njnj">
    <Circles
      height="80"
      width="80"
      color="#3f51b5"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);

export default Loader;
