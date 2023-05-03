import React from 'react'
import TextInput from './TextInput'

function InputGroup({
  label = '',
  type = 'text',
  value = '',
  onChange = (f) => f,
  onFocus = (f) => f,
  onBlur = (f) => f,
  name = '',
  container = 'col-xs-6 col-sm-6 col-md-4 col-lg-4',
  placeholder = '',
  editable = true,
  autoFocus = false,
  required = false,
  _ref = null,
}) {
  return (
    <div className={`${container} form-group`}>
      {label ? (
        <label className="font-weight-bold">
          {label} {required && <span className="text-danger">*</span>}
        </label>
      ) : null}
      <TextInput
        _ref={_ref}
        autoFocus={autoFocus}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        disabled={!editable}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  )
}

export function TextArea({
  label = '',
  value = '',
  onChange = (f) => f,
  name = '',
  container = '',
  placeholder = '',
  editable = true,
  rows = 4,
}) {
  return (
    <div className={container}>
      <label>{label}</label>
      {editable ? (
        <textarea
          className="form-control"
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          // cols={cols}
          rows={rows}
        />
      ) : (
        <div className="border p-2 rounded" style={{ borderColor: '#ddd' }}>
          {value}
        </div>
      )}
    </div>
  )
}

export default InputGroup
