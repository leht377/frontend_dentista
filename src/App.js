import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/RegistrarPaciente/Navbar';

function App() {
  return (
    <>
      <main>
        <Navbar userName={'Antonio'} />
        <Outlet />
      </main>
    </>
  );
}

export default App;
