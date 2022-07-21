import { useEffect, useState } from 'react';

const Tooth = ({ title, changeCavities, teeth, position, tooth }) => {
  const [regiones, setRegiones] = useState({
    region1: false,
    region2: false,
    region3: false,
    region4: false,
    region5: false,
  });

  console.log(Object.keys(tooth)[0]);

  // const [region1, setRegion1] = useState(false);
  // const [region2, setRegion2] = useState(false);
  // const [region3, setRegion3] = useState(false);
  // const [region4, setRegion4] = useState(false);
  // const [region5, setRegion5] = useState(false);

  useEffect(() => {
    // const data = teeth[position];
    // const newState = data.map((tooth) => {
    //   if (Object.keys(tooth)[0] === title) {
    //     tooth[title]['Caries'] = {
    //       1: regiones['region1'],
    //       2: regiones['region2'],
    //       3: regiones['region3'],
    //       4: regiones['region4'],
    //       5: regiones['region5'],
    //     };
    //   }
    //   return tooth;
    // });
    // changeCavities({ ...teeth, position: newState });
  }, [regiones, changeCavities]);

  return (
    <div style={{ width: '320px', padding: '4px' }}>
      <h5 className="text-center">{Object.keys(tooth)[0]}</h5>
      <div className=" d-flex justify-content-between align-items-center">
        <div className="">
          <div
            className="box_registro_diente d-flex flex-wrap rounded-circle border overflow-hidden"
            style={{ transform: 'rotate(45deg)' }}
          >
            <div
              className={
                regiones['region1']
                  ? 'region border border-dark bg-primary'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                regiones['region2']
                  ? 'region border border-dark bg-secondary'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                regiones['region3']
                  ? 'region border border-dark bg-success'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                regiones['region4']
                  ? 'region border border-dark bg-info'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                regiones['region5']
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
              checked={regiones['region1']}
              onChange={({ target }) =>
                setRegiones({ ...regiones, region1: target.checked })
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
              checked={regiones['region2']}
              onChange={({ target }) =>
                setRegiones({ ...regiones, region2: target.checked })
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
              checked={regiones['region3']}
              onChange={({ target }) =>
                setRegiones({ ...regiones, region3: target.checked })
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
              checked={regiones['region4']}
              onChange={({ target }) =>
                setRegiones({ ...regiones, region4: target.checked })
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
              checked={regiones['region5']}
              onChange={({ target }) =>
                setRegiones({ ...regiones, region5: target.checked })
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
