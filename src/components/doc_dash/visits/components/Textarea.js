import React from 'react'

function Textarea({ label, value, onChange, disabled, name }) {
  return (
    <div>
      <label className="font-weight-bold">
        {label}:
      </label>
      <textarea
        value={value}
        name={name}
        onChange={onChange}
        className="form-control"
        rows={6}
        disabled={disabled}
      />
    </div>
  )
}

export default Textarea
