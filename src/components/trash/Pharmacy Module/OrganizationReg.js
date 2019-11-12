import React from 'react';

const Organization  = ({ records = {} }) => {
  const valueStyle = {
    width: '50%',
  };
  const labelValue = {
    width: '50%',
    textAlign: 'left',
  };
  const divideStyle = {
    width: '50%',
    textAlign: 'left',
    padding: '.4em',
  };
  return (
    <div>
      <h5>System Examination</h5>
      <div
        className="row"
        style={{ display: 'flex', flexDirection: 'horizontal' }}>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Palor:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.palor || '--'}
          </label>
        </div>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Dehydration:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.dehydration || '--'}
          </label>
        </div>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={valueStyle}>
            General Examination:
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.generalexamination || '--'}{' '}
          </label>
        </div>
      </div>
      <div
        className="row"
        style={{ display: 'flex', flexDirection: 'horizontal' }}>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            CVS:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.cvs || '--'}
          </label>
        </div>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Respiratory:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.respiratory || '--'}
          </label>
        </div>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            CNS:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.cns || '--'}
          </label>
        </div>
      </div>
      <div
        className="row"
        style={{ display: 'flex', flexDirection: 'horizontal' }}>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            MSS:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.mss || '--'}
          </label>
        </div>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Abdomen:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.abdomen || '--'}
          </label>
        </div>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Others:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.otherSysExamination || '--'}
          </label>
        </div>
      </div>
      <div
        className="row"
        style={{ display: 'flex', flexDirection: 'horizontal' }}>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Eye Opening:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.eye_opening || '--'}
          </label>
        </div>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Best Verbal Response:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.BVR || '--'}
          </label>
        </div>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Best Motor Response:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.BMR || '--'}
          </label>
        </div>
      </div>
      <div
        className="row"
        style={{ display: 'flex', flexDirection: 'horizontal' }}>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Right Upper Limb:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.RUL || '--'}
          </label>
        </div>

        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Left Upper Limb:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.LUL || '--'}
          </label>
        </div>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Right Lower Limb:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.RLL || '--'}
          </label>
        </div>
      </div>
      <div
        className="row"
        style={{ display: 'flex', flexDirection: 'horizontal' }}>
        <div className="col-md-4" style={divideStyle}>
          <label className="col-md-6" style={labelValue}>
            Left Lower Limb:{' '}
          </label>
          <label className="col-md-6 value" style={valueStyle}>
            {records.LLL || '--'}
          </label>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Organization;
