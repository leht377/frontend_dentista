import Tooth from './Tooth';

const TeentBySector = ({ teentSector, sectorName, handleSetInfoTooth }) => {
  return Object.keys(teentSector).map((key) => (
    <Tooth
      key={key}
      tooth={teentSector[key]}
      numero={key}
      handleSetInfoTooth={handleSetInfoTooth}
      sector={sectorName}
    />
  ));
};

export default TeentBySector;
