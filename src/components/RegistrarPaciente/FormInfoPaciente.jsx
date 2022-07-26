import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataTeeth } from './helper';
import Tooth from './Tooth';
import Button from '../Button';
import Alert from '../Alert';
import patientServices from '../../services/paciente';

const FormInfoPaciente = () => {
  const [teeth, setTeeth] = useState(dataTeeth);
  const [msg, setMsg] = useState({ msg: null, type: null });
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [edad, setEdad] = useState('');

  let navigate = useNavigate();

  const changeCavities = useCallback(
    (position, newStateTooth) => {
      const updateState = teeth[position].map((tooth) => {
        if (Object.keys(tooth)[0] === Object.keys(newStateTooth)[0]) {
          return newStateTooth;
        }
        return tooth;
      });
      const newStatePosition = { ...teeth };
      newStatePosition[position] = updateState;
      setTeeth(newStatePosition);
    },
    [teeth]
  );

  const handleFormPaciente = async (event) => {
    event.preventDefault();

    const newPatient = {
      nombre: nombre,
      edad: edad,
      cedula: cedula,
      number: '0',
      Derecha_sup: teeth['Derecha_sup'],
      Derecha_inf: teeth['Derecha_inf'],
      Izquierda_sup: teeth['Izquierda_sup'],
      Izquierda_inf: teeth['Izquierda_inf'],
    };

    patientServices
      .create(newPatient)
      .then((response) => {
        if (response) {
          setMsg({ msg: 'Paciente registrado satisfactoriamente', type: '' });
          setTimeout(() => {
            setMsg({ msg: null, type: null });
            setNombre('');
            setCedula('');
            setEdad('');
            setTeeth(dataTeeth);
            navigate('/Dashboard/buscar');
          }, 4000);
        }
      })
      .catch((error) => {
        setMsg({ msg: 'No se pudo registrar el paciente', type: 'error' });
        setTimeout(() => {
          setMsg({ msg: null, type: null });
        }, 4000);
      });
  };

  useEffect(() => {
    console.log('se renderiza');
  }, [msg]);

  return (
    <form onSubmit={handleFormPaciente} className="row p-2">
      <div className="col-12 mt-2">
        <Alert msg={msg.msg} type={msg.type} />
      </div>
      <h3>Informacion personal</h3>
      <div className="col-12 mt-2">
        <label className="form-label">Nombre del paciente</label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={({ target }) => setNombre(target.value)}
        />
      </div>
      <div className="col-6 mt-2">
        <label className="form-label">Edad</label>
        <input
          type="text"
          className="form-control"
          value={edad}
          onChange={({ target }) => setEdad(target.value)}
        />
      </div>
      <div className="col-6 mt-2">
        <label className="form-label">Cedula</label>
        <input
          type="text"
          className="form-control"
          value={cedula}
          onChange={({ target }) => setCedula(target.value)}
        />
      </div>
      <h3 className="mt-4">Registro de caries</h3>
      <div className="col-12 accordion">
        <div className="accordion-item col-12 ">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Dientes superiores Derechos
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-wrap gap-2">
              {teeth.Derecha_sup.map((tooth) => (
                <Tooth
                  key={'DerSup' + Object.keys(tooth)[0]}
                  changeCavities={changeCavities}
                  tooth={tooth}
                  position={'Derecha_sup'}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="accordion-item col-12 ">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              Dientes superiores Izquierdo
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-wrap gap-2">
              {teeth.Izquierda_sup.map((tooth) => (
                <Tooth
                  key={'IzqSup' + Object.keys(tooth)[0]}
                  title={Object.keys(tooth)[0]}
                  changeCavities={changeCavities}
                  tooth={tooth}
                  position={'Izquierda_sup'}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="accordion-item col-12 ">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              Dientes inferiores derechos
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-wrap gap-2">
              {teeth.Derecha_inf.map((tooth) => (
                <Tooth
                  key={'DerInf' + Object.keys(tooth)[0]}
                  changeCavities={changeCavities}
                  tooth={tooth}
                  position={'Derecha_inf'}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="accordion-item col-12 ">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              Dientes inferiores izquierdo
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-wrap gap-2">
              {teeth.Izquierda_inf.map((tooth) => (
                <Tooth
                  key={'IzqInf' + Object.keys(tooth)[0]}
                  changeCavities={changeCavities}
                  tooth={tooth}
                  position={'Izquierda_inf'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-4">
        <Button text={'Guardar informacion'} type={'submit'}></Button>
      </div>
    </form>
  );
};

export default FormInfoPaciente;
