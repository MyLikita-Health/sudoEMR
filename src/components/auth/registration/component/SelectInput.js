import React from 'react';

function SelectInput({
  name = '',
  label = '',
  options = [],
  onChange = (f) => f,
  value,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        className="form-control"
      >
        <option value="">-- Choose --</option>
        {options.map((item, index) => (
          <option key="index" value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
