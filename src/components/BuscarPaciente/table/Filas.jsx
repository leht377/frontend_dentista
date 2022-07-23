import Button from '../../Button';
import { Link } from 'react-router-dom';
const Filas = ({ nombre, cedula, edad, idPaciente }) => {
  return (
    <tr>
      <th scope="row" className="align-middle">
        1
      </th>
      <td className="align-middle">{nombre}</td>
      <td className="align-middle">{edad}</td>
      <td className="align-middle">{cedula}</td>
      <td className="align-middle">
        <Link to={`/Dashboard/infopaciente/${idPaciente}`}>
          <Button text={'ver'} width={'50px'} fontsize={'14px'} />
        </Link>
      </td>
    </tr>
  );
};

export default Filas;
