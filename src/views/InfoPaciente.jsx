import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spiner from '../components/Spiner';
import Tooth from '../components/RegistrarPaciente/Tooth';
import dientes from '../assets/img/dientes';

import pacienteServices from '../services/paciente';

const InfoPaciente = () => {
  const [paciente, setPaciente] = useState(null);
  const [derechaSup, setDerechaSup] = useState(null);
  const [derechaInf, setDerechaInf] = useState(null);
  const [izquierdaSup, setIzquierdaSup] = useState(null);
  const [izquierdaInf, setIzquierdaInf] = useState(null);
  const [alergias, setAlergias] = useState(null);
  const { idPaciente } = useParams();

  useEffect(() => {
    const userLocal = JSON.parse(window.localStorage.getItem('dataUserlogged'));
    if (userLocal) {
      pacienteServices.setToken(userLocal.token);
      pacienteServices
        .getOne(idPaciente)
        .then((response) => {
          if (response.status !== 400) {
            setPaciente(response);
            setDerechaSup(response['medicalHistory']['Derecha_sup'][0]);
            setDerechaInf(response['medicalHistory']['Derecha_inf'][0]);
            setIzquierdaInf(response['medicalHistory']['Izquierda_inf'][0]);
            setIzquierdaSup(response['medicalHistory']['Izquierda_sup'][0]);
            setAlergias(response['medicalHistory']['Alergias']);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [idPaciente]);

  return (
    <main className="container-xxl px-5 my-5">
      {paciente ? (
        <main className="row">
          <h3 className="mb-4">Historia clinica Odontologica</h3>
          <div className="col-6 d-flex gap-4">
            <div
              className="rounded d-flex flex-column"
              style={{
                backgroundColor: '#f5f5f5',
                padding: '10px',
                paddingRight: '50px',
              }}
            >
              <h5>Informacion del paciente </h5>
              <span>Nombre: {paciente?.nombre}</span>
              <span>Cedula: {paciente?.cedula}</span>
              <span>Edad: {paciente?.edad}</span>
              <span>Telefono: {paciente?.number}</span>
              <span>Odontologo: {paciente?.user?.name}</span>
            </div>

            <div
              className="rounded d-flex flex-column"
              style={{
                backgroundColor: '#f5f5f5',
                padding: '10px',
                paddingRight: '50px',
              }}
            >
              <h5 className="">Alergias</h5>
              {alergias.map((alergia) => (
                <span key={alergia._id}> {alergia.Nombre}</span>
              ))}
            </div>
          </div>

          <div className="col-6 position-relative">
            <img
              src={dientes.slogan}
              style={{
                width: '300px',
                height: '300px',
                marginLeft: '250px',
                marginTop: '-80px',
              }}
              alt=""
              className="position-absolute"
            />
          </div>

          <div className="col-12 mt-5 accordion">
            <div className="accordion-item ">
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
                      handleSetInfoTooth={() => {}}
                      sector={'derechaSuperior'}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="accordion-item ">
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
                      handleSetInfoTooth={() => {}}
                      sector={'izquierdaSuperior'}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="accordion-item  ">
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
                      handleSetInfoTooth={() => {}}
                      sector={'izquierdaInferior'}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="accordion-item ">
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
                      handleSetInfoTooth={() => {}}
                      sector={'derechaInferior'}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <Spiner />
      )}
    </main>
  );
};

export default InfoPaciente;
