import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormSearch from '../components/BuscarPaciente/FormSeacrh';
import TablePaciente from '../components/BuscarPaciente/table/TablePaciente';

const BuscarPaciente = () => {
  const [search, setSearch] = useState('');
  const [listaPacientes, setListaPacientes] = useState([]);
  let navigate = useNavigate();

  const handleSearch = (cedula) => {
    navigate(`/Dashboard/buscar/${cedula}`);
  };

  let params = useParams();
  let cedulaAbucar = params.idPaciente;

  useEffect(() => {
    if (cedulaAbucar) {
      console.log('feching by cedula');
    } else {
      console.log('feching all data');
      const listaP = [
        { nombre: 'Luis', edad: '34', cedula: '12345666', _id: '1' },
        { nombre: 'Carmen', edad: '34', cedula: '12345666', _id: '2' },
        { nombre: 'Tomas', edad: '34', cedula: '12345666', _id: '3' },
      ];
      setListaPacientes(listaP);
    }
  }, [cedulaAbucar]);

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
