import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/RegistrarPaciente/Navbar';

function App() {
  const user = JSON.parse(window.localStorage.getItem('dataUserlogged'));

  useEffect(() => {}, []);

  return (
    <>
      {user ? (
        <main>
          <Navbar userName={'Antonio'} />
          <Outlet />
        </main>
      ) : (
        <p>Autenticate</p>
      )}
    </>
  );
}

export default App;
