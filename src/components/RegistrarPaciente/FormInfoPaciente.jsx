import { useEffect, useState } from 'react';
import { DefaTeeth } from './helper';
import Tooth from './Tooth';
import Button from '../Button';
import Alert from '../Alert';
import patientServices from '../../services/paciente';

const FormInfoPaciente = () => {
  const [derechaSup, setDerechaSup] = useState(DefaTeeth.derechaSuperior);
  const [derechaInf, setDerechaInf] = useState(DefaTeeth.derechaInferior);
  const [izquierdaSup, setIzquierdaSup] = useState(DefaTeeth.izquierdaSuperior);
  const [izquierdaInf, setIzquierdaInf] = useState(DefaTeeth.izquierdaInferior);

  const [msg, setMsg] = useState({
    msg: null,
    type: null,
  });
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [edad, setEdad] = useState('');

  const handleSetInfoTooth = (sector, newStateTooth, numeroDiente) => {
    switch (sector) {
      case 'derechaSuperior':
        setDerechaSup({ ...derechaSup, [numeroDiente]: newStateTooth });
        break;
      case 'derechaInferior':
        setDerechaInf({ ...derechaInf, [numeroDiente]: newStateTooth });
        break;
      case 'izquierdaSuperior':
        setIzquierdaSup({ ...izquierdaSup, [numeroDiente]: newStateTooth });
        break;
      case 'izquierdaInferior':
        setIzquierdaInf({ ...izquierdaInf, [numeroDiente]: newStateTooth });
        break;
      default:
        break;
    }
  };

  const handleFormPaciente = async (event) => {
    event.preventDefault();

    const newPatient = {
      nombre: nombre,
      edad: edad,
      cedula: cedula,
      number: '0',
      Derecha_sup: derechaSup,
      Derecha_inf: derechaInf,
      Izquierda_sup: izquierdaSup,
      Izquierda_inf: izquierdaInf,
    };

    setMsg({
      msg: 'Procesando solicitud...',
      type: 'waiting',
    });

    patientServices
      .create(newPatient)
      .then((response) => {
        if (response) {
          setMsg({
            msg: 'Paciente registrado satisfactoriamente',
            type: 'success',
          });
          setTimeout(() => {
            setMsg({ msg: null, type: null });
            setNombre('');
            setCedula('');
            setEdad('');
            setDerechaSup(DefaTeeth.derechaSuperior);
            setDerechaInf(DefaTeeth.derechaInferior);
            setIzquierdaInf(DefaTeeth.izquierdaInferior);
            setIzquierdaSup(DefaTeeth.izquierdaSuperior);
            // navigate('/Dashboard/buscar');
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
          required
          onChange={({ target }) => setNombre(target.value)}
        />
      </div>
      <div className="col-6 mt-2">
        <label className="form-label">Edad</label>
        <input
          type="text"
          className="form-control"
          value={edad}
          required
          onChange={({ target }) => setEdad(target.value)}
        />
      </div>
      <div className="col-6 mt-2">
        <label className="form-label">Cedula</label>
        <input
          type="text"
          className="form-control"
          required
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
              {Object.keys(derechaSup).map((key) => (
                <Tooth
                  key={key}
                  tooth={derechaSup[key]}
                  numero={key}
                  handleSetInfoTooth={handleSetInfoTooth}
                  sector={'derechaSuperior'}
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
              {Object.keys(izquierdaSup).map((key) => (
                <Tooth
                  key={key}
                  tooth={izquierdaSup[key]}
                  numero={key}
                  handleSetInfoTooth={handleSetInfoTooth}
                  sector={'izquierdaSuperior'}
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
              {Object.keys(izquierdaInf).map((key) => (
                <Tooth
                  key={key}
                  tooth={izquierdaInf[key]}
                  numero={key}
                  handleSetInfoTooth={handleSetInfoTooth}
                  sector={'izquierdaInferior'}
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
              {Object.keys(derechaInf).map((key) => (
                <Tooth
                  key={key}
                  tooth={derechaInf[key]}
                  numero={key}
                  handleSetInfoTooth={handleSetInfoTooth}
                  sector={'derechaInferior'}
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
