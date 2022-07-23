import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dientes from '../assets/img/dientes';
import FormInfoPaciente from '../components/RegistrarPaciente/FormInfoPaciente';

const RegistrarPaciente = () => {
  // eslint-disable-next-line
  const [user, setUser] = useState(null);
  // eslint-disable-next-line
  let navigate = useNavigate();

  useEffect(() => {
    // const user = JSON.parse(window.localStorage.getItem('dataUserlogged'));
    // if (user) {
    //   setUser(user);
    //   directorioServices.setToken(user.token);
    // }
  }, []);

  return (
    <>
      <main className=" container-xxl">
        <section className="row px-5">
          <div className=" col-5 py-5">
            <img src={dientes.dientes} height={'520px'} alt="" />
          </div>
          <div className="col-7 py-4">
            <FormInfoPaciente />
          </div>
        </section>
      </main>
    </>
  );
};

export default RegistrarPaciente;
