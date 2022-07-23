import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Auth/Login';
import Autentication from './views/Autentication';
import BuscarPaciente from './views/BuscarPaciente';
import RegistrarPaciente from './views/RegistrarPaciente';
import dientes from './assets/img/dientes';
const root = ReactDOM.createRoot(document.getElementById('root'));
const PaginaInicio = () => {
  return (
    <section className=" d-flex justify-content-center align-items-center container-xxl">
      <img src={dientes.slogan} alt="" />
    </section>
  );
};
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Autentication />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/Dashboard" element={<App />}>
        <Route index element={<PaginaInicio />} />
        <Route path="registrar" element={<RegistrarPaciente />} />
        <Route path="buscar" element={<BuscarPaciente />}>
          <Route path=":idPaciente" element={<BuscarPaciente />} />
        </Route>
      </Route>
      <Route path="*" element={<p>No existe</p>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
