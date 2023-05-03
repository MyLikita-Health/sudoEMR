import React from 'react';

const AthropometryForm = ({ records = {} }) => {
  const valueStyle = {
    width: '50%',
    textAlign: 'left',
  };
  const labelStyle = {
    width: '50%',
    textAlign: 'left',
  };
  const divideStyle = {
    width: '50%',
    padding: '.4em',
  };
  const flex = { display: 'flex', flexDirection: 'horizontal' };
  return (
    <div>
      <h5>Athropometry</h5>
      <div style={flex}>
        <div style={divideStyle}>
          <label style={labelStyle}>Weight: </label>
          <label style={valueStyle}>
            {records.weight || '--'}
          </label>
        </div>
        <div style={divideStyle}>
          <label style={labelStyle}>Height/Length: </label>
          <label style={valueStyle}>
            {records.height || '--'}
          </label>
        </div>
      </div>
      <div style={flex}>
        <div style={divideStyle}>
          <label style={labelStyle}>Head Circumference: </label>
          <label style={valueStyle}>{records.headcircumference || '--'}</label>
        </div>

        <div style={divideStyle}>
          <label style={labelStyle}>MUAC: </label>
          <label style={valueStyle}>{records.muac || '--'}</label>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AthropometryForm;
