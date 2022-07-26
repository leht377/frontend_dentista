import { useEffect } from 'react';

const Tooth = ({ tooth, numero, sector, handleSetInfoSector }) => {
  const cambiarCheck = (value, region) => {
    const newRegiones = { ...tooth['regiones'], [region]: value };
    handleSetInfoSector(sector, newRegiones, numero);
  };

  return (
    <div style={{ width: '320px', padding: '4px' }}>
      <h5 className="text-center"> {`${numero}. ${tooth.name}`}</h5>
      <div className=" d-flex justify-content-between align-items-center">
        <div className="">
          <div
            className="box_registro_diente d-flex flex-wrap rounded-circle border overflow-hidden"
            style={{ transform: 'rotate(45deg)' }}
          >
            <div
              className={
                tooth['regiones']['1']
                  ? 'region border border-dark bg-primary'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                tooth['regiones']['2']
                  ? 'region border border-dark bg-secondary'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                tooth['regiones']['3']
                  ? 'region border border-dark bg-success'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                tooth['regiones']['4']
                  ? 'region border border-dark bg-info'
                  : ' region border border-dark bg-white'
              }
            ></div>
            <div
              className={
                tooth['regiones']['5']
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
              checked={tooth['regiones']['1']}
              onChange={({ target }) => {
                cambiarCheck(target.checked, 1);
              }}
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label">1 region</label>
          </div>
          <div className="form-check d-block form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={tooth['regiones']['2']}
              onChange={({ target }) => {
                cambiarCheck(target.checked, 2);
              }}
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label">2 region</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={tooth['regiones']['3']}
              onChange={({ target }) => {
                cambiarCheck(target.checked, 3);
              }}
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label">3 region</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={tooth['regiones']['4']}
              onChange={({ target }) => {
                cambiarCheck(target.checked, 4);
              }}
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label">4 region</label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={tooth['regiones']['5']}
              onChange={({ target }) => {
                cambiarCheck(target.checked, 5);
              }}
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
