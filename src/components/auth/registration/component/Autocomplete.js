import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

function Autocomplete({
  label = '',
  value = '',
  name = '',
  onChange = (f) => f,
  type = 'text',
  placeholder = '',
  required = false,
  loading = false,
  good = false,
  message = '',
  options = [],
  labelKey = '',
  onInputChange = (f) => f,
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <Typeahead
        id={`${name}-2`}
        options={options}
        labelKey={labelKey}
        multiple={false}
        onChange={onChange}
        onInputChange={onInputChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Autocomplete;
