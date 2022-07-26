import Filas from './Filas';
const TablePaciente = ({ listaDepacientes = [] }) => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Cedula</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaDepacientes.map((paciente) => (
            <Filas
              nombre={paciente.nombre}
              cedula={paciente.cedula}
              edad={paciente.edad}
              idPaciente={paciente._id}
              key={paciente._id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablePaciente;
