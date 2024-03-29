import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height:"50vh"}}>
      <div className='spinner'></div>
    </div>
  );
}

export default Spinner;
