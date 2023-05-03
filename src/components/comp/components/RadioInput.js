import React from 'react';

function RadioInput({ onChange, label, name, value, className }) {
  return (
    <label className="">
      <input
        type="radio"
        className={`mr-2 ${className}`}
        name={name}
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export default RadioInput;
