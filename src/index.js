import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Auth/Login';
import Autentication from './views/Autentication';
import BuscarPaciente from './views/BuscarPaciente';
import RegistrarPaciente from './views/RegistrarPaciente';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Autentication />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/Dashboard" element={<App />}>
        <Route index element={<p>Principa</p>} />
        <Route path="registrar" element={<RegistrarPaciente />} />
        <Route path="buscar" element={<BuscarPaciente />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
