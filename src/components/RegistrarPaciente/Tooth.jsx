import { useEffect, useState } from 'react';
import Modal from './Modal';

const Tooth = ({ changeCavities, position, tooth }) => {
  const ObjectCaries = tooth[Object.keys(tooth)[0]];

  const [regiones, setRegiones] = useState(ObjectCaries['Caries']);
  const [tipoDiente] = useState(Object.keys(tooth)[0]);

  useEffect(() => {
    const newState = { [tipoDiente]: { Caries: { ...regiones } } };
    changeCavities(position, newState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [regiones]);

  return (
    <div style={{ width: '320px', padding: '4px' }}>
      <Modal />
      <h5 className="text-center">{tipoDiente}</h5>
      <div className=" d-flex justify-content-between align-items-center">
        <div className="">
          <div
            className="box_registro_diente d-flex flex-wrap rounded-circle border overflow-hidden"
            style={{ transform: 'rotate(45deg)' }}
          >
            <div
              className={
                regiones['1']
                  ? 'region border border-dark bg-primary'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                regiones['2']
                  ? 'region border border-dark bg-secondary'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                regiones['3']
                  ? 'region border border-dark bg-success'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                regiones['4']
                  ? 'region border border-dark bg-info'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                regiones['5']
                  ? 'region_central rounded-circle bg-warning border-dark'
                  : 'region_central rounded-circle border border-dark bg-white'
              }
            ></div>
          </div>
        </div>
        <div className="d-flex flex-wrap mx-4 gap-1">
          <div className="form-check d-block form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={regiones['1']}
              onChange={({ target }) =>
                setRegiones({ ...regiones, 1: target.checked })
              }
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label">1 region</label>
          </div>
          <div className="form-check d-block form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={regiones['2']}
              onChange={({ target }) =>
                setRegiones({ ...regiones, 2: target.checked })
              }
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label">2 region</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={regiones['3']}
              onChange={({ target }) =>
                setRegiones({ ...regiones, 3: target.checked })
              }
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label">3 region</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={regiones['4']}
              onChange={({ target }) =>
                setRegiones({ ...regiones, 4: target.checked })
              }
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label">4 region</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={regiones['5']}
              onChange={({ target }) =>
                setRegiones({ ...regiones, 5: target.checked })
              }
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label">5 region</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooth;
