import { useEffect, useState } from 'react';
import dientes from '../../assets/img/dientes';

const Modal = ({
  tooth,
  idModal,
  numero,
  regionTooth,
  anotacionesbyRegion,
  handleInfoBySector,
}) => {
  const [observaciones, setObservaciones] = useState(
    anotacionesbyRegion['observaciones']
  );

  const [efermedad1, setEnfermedad1] = useState(anotacionesbyRegion['1']);
  const [efermedad2, setEnfermedad2] = useState(anotacionesbyRegion['2']);
  const [efermedad3, setEnfermedad3] = useState(anotacionesbyRegion['3']);
  const [efermedad4, setEnfermedad4] = useState(anotacionesbyRegion['4']);
  const [efermedad5, setEnfermedad5] = useState(anotacionesbyRegion['5']);
  const [efermedad6, setEnfermedad6] = useState(anotacionesbyRegion['6']);
  const [efermedad7, setEnfermedad7] = useState(anotacionesbyRegion['7']);
  const [efermedad8, setEnfermedad8] = useState(anotacionesbyRegion['8']);
  const [efermedad9, setEnfermedad9] = useState(anotacionesbyRegion['9']);

  useEffect(() => {
    setEnfermedad1(anotacionesbyRegion['1']);
    setEnfermedad2(anotacionesbyRegion['2']);
    setEnfermedad3(anotacionesbyRegion['3']);
    setEnfermedad4(anotacionesbyRegion['4']);
    setEnfermedad5(anotacionesbyRegion['5']);
    setEnfermedad6(anotacionesbyRegion['6']);
    setEnfermedad7(anotacionesbyRegion['7']);
    setEnfermedad8(anotacionesbyRegion['8']);
    setEnfermedad9(anotacionesbyRegion['9']);
    setObservaciones(anotacionesbyRegion['observaciones']);
  }, [anotacionesbyRegion]);

  const handleSavedStated = () => {
    const newStatedAnotaciones = {
      1: { ...efermedad1 },
      2: { ...efermedad2 },
      3: { ...efermedad3 },
      4: { ...efermedad4 },
      5: { ...efermedad5 },
      6: { ...efermedad6 },
      7: { ...efermedad7 },
      8: { ...efermedad8 },
      9: { ...efermedad9 },
      observaciones: observaciones,
    };
    document.getElementById(`closeModal${idModal}`).click();
    handleInfoBySector(newStatedAnotaciones);
  };

  return (
    <>
      <div
        className="modal fade"
        id={idModal}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {`${numero}. Registro del ${tooth.name} ${regionTooth}`}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id={`closeModal${idModal}`}
              ></button>
            </div>
            <div className="modal-body">
              <main className="row">
                <div className="col-6 d-flex justify-content-center align-items-center ">
                  <img
                    src={dientes.logo}
                    alt=""
                    style={{ width: '300px', height: '300px' }}
                  />
                </div>
                <section className="col-6 d-flex justify-content-center align-items-center flex-column">
                  <h5>Enfermedades</h5>
                  <div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={efermedad1.seleccionado}
                        onChange={({ target }) =>
                          setEnfermedad1({
                            ...efermedad1,
                            seleccionado: target.checked,
                          })
                        }
                      />
                      <label className="form-check-label">
                        1. Lesion de caries blancas activa
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={efermedad2.seleccionado}
                        onChange={({ target }) =>
                          setEnfermedad2({
                            ...efermedad2,
                            seleccionado: target.checked,
                          })
                        }
                      />
                      <label className="form-check-label">
                        2. Lesion de caries blancas inactiva
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={efermedad3.seleccionado}
                        onChange={({ target }) =>
                          setEnfermedad3({
                            ...efermedad3,
                            seleccionado: target.checked,
                          })
                        }
                      />
                      <label className="form-check-label">
                        3. Lesion de caries cavitada
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={efermedad4.seleccionado}
                        onChange={({ target }) =>
                          setEnfermedad4({
                            ...efermedad4,
                            seleccionado: target.checked,
                          })
                        }
                      />
                      <label className="form-check-label">
                        4. Restauracion en mal estado
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={efermedad5.seleccionado}
                        onChange={({ target }) =>
                          setEnfermedad5({
                            ...efermedad5,
                            seleccionado: target.checked,
                          })
                        }
                      />
                      <label className="form-check-label">
                        5. Caries de corona
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={efermedad6.seleccionado}
                        onChange={({ target }) =>
                          setEnfermedad6({
                            ...efermedad6,
                            seleccionado: target.checked,
                          })
                        }
                      />
                      <label className="form-check-label">
                        6. Caries de fisura
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={efermedad7.seleccionado}
                        onChange={({ target }) =>
                          setEnfermedad7({
                            ...efermedad7,
                            seleccionado: target.checked,
                          })
                        }
                      />
                      <label className="form-check-label">
                        7. Caries radicula
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={efermedad8.seleccionado}
                        onChange={({ target }) =>
                          setEnfermedad8({
                            ...efermedad8,
                            seleccionado: target.checked,
                          })
                        }
                      />
                      <label className="form-check-label">
                        8. Caries interdental
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={efermedad9.seleccionado}
                        onChange={({ target }) =>
                          setEnfermedad9({
                            ...efermedad9,
                            seleccionado: target.checked,
                          })
                        }
                      />
                      <label className="form-check-label">
                        9. Caries recurrentes
                      </label>
                    </div>
                  </div>
                </section>
                <div className="col-12 mt-4">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: '100px' }}
                      value={observaciones}
                      onChange={({ target }) => setObservaciones(target.value)}
                    ></textarea>
                    <label htmlFor="floatingTextarea2">Observaciones: </label>
                  </div>
                </div>
              </main>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSavedStated}
              >
                Guardar Informacion
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
