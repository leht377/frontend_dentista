import { useEffect, useState } from 'react';
import { DefaTeeth } from './helper';
import Button from '../Button';
import Alert from '../Alert';
import patientServices from '../../services/paciente';
import { AcordionContainer } from '../AcordionContainer';
import { AcordionItem } from '../AcordionItem';
import TeentBySector from './TeentBySector';

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

      <AcordionContainer>
        <AcordionItem id={1} title={'Dientes superiores Derecha'}>
          <TeentBySector
            sectorName={'derechaSuperior'}
            teentSector={derechaSup}
            handleSetInfoTooth={handleSetInfoTooth}
          />
        </AcordionItem>
        <AcordionItem id={2} title={'Dientes superiores Izquierdo'}>
          <TeentBySector
            sectorName={'izquierdaSuperior'}
            teentSector={izquierdaSup}
            handleSetInfoTooth={handleSetInfoTooth}
          />
        </AcordionItem>
        <AcordionItem id={3} title={'Dientes inferiores izquierdo'}>
          <TeentBySector
            sectorName={'izquierdaInferior'}
            teentSector={izquierdaInf}
            handleSetInfoTooth={handleSetInfoTooth}
          />
        </AcordionItem>
        <AcordionItem id={4} title={'Dientes inferiores derechos'}>
          <TeentBySector
            sectorName={'derechaInferior'}
            teentSector={derechaInf}
            handleSetInfoTooth={handleSetInfoTooth}
          />
        </AcordionItem>
      </AcordionContainer>

      <div className="col-12 mt-4">
        <Button text={'Guardar informacion'} type={'submit'}></Button>
      </div>
    </form>
  );
};

export default FormInfoPaciente;
