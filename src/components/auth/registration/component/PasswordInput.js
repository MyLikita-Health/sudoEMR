import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

export default function PasswordInput({
  value,
  required,
  onChange,
  name = '',
  label,
}) {
  const [showPass, toggleShowPass] = useState(false);
  return (
    <div className="form-group">
      {/* <label htmlFor={name}>
        {label} {required && <span className="text-danger">*</span>}
      </label> */}

      {/* <div className="form-control d-flex flex-row justify-content-between p-1"> */}
      <div className='password_input d-flex flex-row align-items-ce justify-content-between'>
        <input
          // className="form-control form-control-sm"
          className="input_field"
          style={{ flex: 2, border: 'none' }}
          type={showPass ? 'text' : 'password'}
          onChange={onChange}
          value={value}
          // placeholder="****************"
          required={required}
        />
        <div
          style={{ cursor: 'pointer', marginTop: 5, marginRight: 5 }}
          onClick={() => toggleShowPass((d) => !d)}
        >
          {showPass ? (
            <AiFillEyeInvisible size={23} />
          ) : (
            <AiFillEye size={23} />
          )}
        </div>
      </div>
    </div>
  );
}
