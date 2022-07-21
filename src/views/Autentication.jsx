import { Outlet } from 'react-router-dom';
import Navbar from '../components/Auth/Navbar';

const Autentication = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Autentication;
