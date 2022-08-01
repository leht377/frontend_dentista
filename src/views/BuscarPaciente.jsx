import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormSearch from '../components/BuscarPaciente/FormSeacrh';
import TablePaciente from '../components/BuscarPaciente/table/TablePaciente';
import pacienteServices from '../services/paciente';

const BuscarPaciente = () => {
  const [search, setSearch] = useState('');
  const [listaPacientes, setListaPacientes] = useState([]);
  let navigate = useNavigate();

  const handleSearch = (cedula) => {
    navigate(`/Dashboard/buscar/${cedula}`);
  };

  let params = useParams();
  let cedulaAbuscar = params.idPaciente;

  useEffect(() => {
    const userLocal = JSON.parse(window.localStorage.getItem('dataUserlogged'));
    if (userLocal) {
      pacienteServices.setToken(userLocal.token);
    }

    if (cedulaAbuscar) {
      pacienteServices.getOne(cedulaAbuscar).then((response) => {
        const dataPaciente = response;
        setListaPacientes([dataPaciente]);
      });
    } else {
      pacienteServices.getAll().then((response) => {
        setListaPacientes(response);
      });
    }
  }, [cedulaAbuscar]);

  return (
    <>
      <main className="container-xxl">
        <section className="row px-5">
          <div className="col-12 py-3 d-flex justify-content-between align-items-center">
            <h5>Lista de pacientes</h5>
            <div className="w-25">
              <FormSearch
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
              />
            </div>
          </div>
          <div className="col-12 py-3">
            <TablePaciente listaDepacientes={listaPacientes} />
          </div>
        </section>
      </main>
    </>
  );
};

export default BuscarPaciente;
