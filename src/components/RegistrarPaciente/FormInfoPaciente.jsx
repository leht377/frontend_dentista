import { useEffect, useState } from 'react';
import { DefaTeeth } from './helper';
import Button from '../Button';
import Alert from '../Alert';
import patientServices from '../../services/paciente';
import { AcordionContainer } from '../AcordionContainer';
import { AcordionItem } from '../AcordionItem';
import TeentBySector from './TeentBySector';
import allergyServices from '../../services/alergias';
import Swal from 'sweetalert2';

const FormInfoPaciente = () => {
  const [derechaSup, setDerechaSup] = useState(DefaTeeth.derechaSuperior);
  const [derechaInf, setDerechaInf] = useState(DefaTeeth.derechaInferior);
  const [izquierdaSup, setIzquierdaSup] = useState(DefaTeeth.izquierdaSuperior);
  const [izquierdaInf, setIzquierdaInf] = useState(DefaTeeth.izquierdaInferior);
  const [alergias, setAlergias] = useState([]);
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

  const calcularPrecio = () => {
    var precioLocal = 0;

    Object.keys(derechaSup).forEach((keyTeeth) => {
      Object.keys(derechaSup[keyTeeth]['anotaciones']).forEach(
        (keyAnotaciones) => {
          Object.keys(
            derechaSup[keyTeeth]['anotaciones'][keyAnotaciones]
          ).forEach((keyRegion) => {
            if (
              derechaSup[keyTeeth]['anotaciones'][keyAnotaciones][keyRegion]
                .seleccionado
            ) {
              precioLocal +=
                derechaSup[keyTeeth]['anotaciones'][keyAnotaciones][keyRegion]
                  .precio;
            }
          });
        }
      );
    });

    Object.keys(derechaInf).forEach((keyTeeth) => {
      Object.keys(derechaInf[keyTeeth]['anotaciones']).forEach(
        (keyAnotaciones) => {
          Object.keys(
            derechaInf[keyTeeth]['anotaciones'][keyAnotaciones]
          ).forEach((keyRegion) => {
            if (
              derechaInf[keyTeeth]['anotaciones'][keyAnotaciones][keyRegion]
                .seleccionado
            ) {
              precioLocal +=
                derechaInf[keyTeeth]['anotaciones'][keyAnotaciones][keyRegion]
                  .precio;
            }
          });
        }
      );
    });

    Object.keys(izquierdaSup).forEach((keyTeeth) => {
      Object.keys(izquierdaSup[keyTeeth]['anotaciones']).forEach(
        (keyAnotaciones) => {
          Object.keys(
            izquierdaSup[keyTeeth]['anotaciones'][keyAnotaciones]
          ).forEach((keyRegion) => {
            if (
              izquierdaSup[keyTeeth]['anotaciones'][keyAnotaciones][keyRegion]
                .seleccionado
            ) {
              precioLocal +=
                izquierdaSup[keyTeeth]['anotaciones'][keyAnotaciones][keyRegion]
                  .precio;
            }
          });
        }
      );
    });

    Object.keys(izquierdaInf).forEach((keyTeeth) => {
      Object.keys(izquierdaInf[keyTeeth]['anotaciones']).forEach(
        (keyAnotaciones) => {
          Object.keys(
            izquierdaInf[keyTeeth]['anotaciones'][keyAnotaciones]
          ).forEach((keyRegion) => {
            if (
              izquierdaInf[keyTeeth]['anotaciones'][keyAnotaciones][keyRegion]
                .seleccionado
            ) {
              precioLocal +=
                izquierdaInf[keyTeeth]['anotaciones'][keyAnotaciones][keyRegion]
                  .precio;
            }
          });
        }
      );
    });

    return precioLocal;
  };

  const handleFormPaciente = async (event) => {
    event.preventDefault();

    Swal.fire({
      title: `Precio del tratamiento $ ${calcularPrecio()}`,
      icon: 'question',
      iconHtml: '$',
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const idAllergiesSelected = alergias
          .map((alergia) => (alergia.selected ? alergia._id : null))
          .filter((data) => (data ? data : false));

        const newPatient = {
          nombre: nombre,
          edad: edad,
          cedula: cedula,
          number: '0',
          Derecha_sup: derechaSup,
          Derecha_inf: derechaInf,
          Izquierda_sup: izquierdaSup,
          Izquierda_inf: izquierdaInf,
          alergias: idAllergiesSelected,
          precio: calcularPrecio(),
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
      }
    });
  };

  const handleChekedAllergies = (checked, id) => {
    const newStateAllergies = alergias.map((alergia) => {
      if (alergia._id === id) {
        return { ...alergia, selected: checked };
      }
      return alergia;
    });

    setAlergias(newStateAllergies);
  };

  useEffect(() => {
    allergyServices
      .getAll()
      .then((response) => {
        const alergies = response.map((alergia) => ({
          Nombre: alergia.Nombre,
          _id: alergia._id,
          selected: false,
        }));

        setAlergias(alergies);
      })
      .catch((error) => console.error(error));
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

      <h3 className="mt-4">Registro de Alergias</h3>
      <AcordionContainer>
        <AcordionItem id={12} title={'Alergias'}>
          <div className="gap-1">
            {alergias.map((alergia) => (
              <div className="form-check form-switch" key={alergia._id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={alergia.selected}
                  onChange={({ target }) =>
                    handleChekedAllergies(target.checked, alergia._id)
                  }
                />
                <label className="form-check-label">{alergia.Nombre}</label>
              </div>
            ))}
          </div>
        </AcordionItem>
      </AcordionContainer>

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
