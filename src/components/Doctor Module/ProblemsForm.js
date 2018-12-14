import React from 'react';

const ProblemsForm = ({ records = {} }) => {
  const valueStyle = {
    paddingLeft: '1em',
  };
  return (
    <div>
      <h5>Problems</h5>
      <div className="row">
        {records.problem1 && (
          <div className="col-md-6">
            <label className="col-md-1">1.</label>
            <label className="col-md-10 value" style={valueStyle}>
              {records.problem1}
            </label>
          </div>
        )}
        {records.problem2 && (
          <div className="col-md-6">
            <label className="col-md-1">2.</label>
            <label className="col-md-10 value" style={valueStyle}>
              {records.problem2}
            </label>
          </div>
        )}
        {records.problem3 && (
          <div className="col-md-6">
            <label className="col-md-1">3.</label>
            <label className="col-md-10 value" style={valueStyle}>
              {records.problem3}
            </label>
          </div>
        )}

        {records.problem4 && (
          <div className="col-md-6">
            <label className="col-md-1">4.</label>
            <label className="col-md-10 value" style={valueStyle}>
              {records.problem4}
            </label>
          </div>
        )}
        {records.problem5 && (
          <div className="col-md-6">
            <label className="col-md-1">5.</label>
            <label className="col-md-10 value" style={valueStyle}>
              {records.problem5}
            </label>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default ProblemsForm;
