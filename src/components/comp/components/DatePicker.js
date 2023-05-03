import React from 'react';
// import RBDatePicker from 'react-bootstrap-date-picker';

function DatePicker({
  label = '',
  value = '',
  onChange = (f) => f,
  container = 'col-xs-6 col-sm-6 col-md-4 col-lg-4',
  name = '',
  editable = true,
  required = false,
}) {
  return (
    <div className={`${container} form-group`}>
      <label>
        {label} {required && <span className="text-danger">*</span>}
      </label>
      {editable ? (
        <input
          className="form-control"
          type="date"
          value={value}
          onChange={onChange}
          name={name}
          disabled={!editable}
        />
      ) : (
        <p className="form-control">{value}</p>
      )}
    </div>
  );
}

export default DatePicker;
