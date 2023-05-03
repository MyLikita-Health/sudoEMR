import React from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'

function AutoComplete({
  label = "",
  labelClass = "font-weight-bold",
  containerClass = "",
  placeholder = "",
  options = [],
  onChange = (f) => f,
  onInputChange = (f) => f,
  labelKey = "",
  required = false,
  value = "",
  editable = true,
  _ref = null,
  style = {},
  allowNew = false,
  newSelectionPrefix="Add New",
}) {
  return (
    <div className={`${containerClass} form-group`}>
      {label === "" ? null : (
        <label className={labelClass}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      {editable ? (
        <Typeahead
          id={`${label}-x`}
          placeholder={placeholder}
          align="justify"
          options={options}
          onChange={onChange}
          onInputChange={onInputChange}
          labelKey={labelKey}
          emptyLabel=""
          ref={_ref}
          clearButton
          style={style}
          minLength={0}
          allowNew={allowNew}
          newSelectionPrefix={newSelectionPrefix}
        />
      ) : (
        <p className="form-control">{value}</p>
      )}
    </div>
  );
}

export default AutoComplete
