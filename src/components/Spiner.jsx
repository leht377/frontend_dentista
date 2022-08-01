import React from 'react';

function Spiner(props) {
  return (
    <div
      className="spinner-border"
      style={{ width: '3rem', height: '3rem' }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Spiner;
