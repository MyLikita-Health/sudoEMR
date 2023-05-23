import React from "react";

function TextInput({
  type = "text",
  value = "",
  name = "",
  onChange = (f) => f,
  onFocus = (f) => f,
  onBlur = (f) => f,
  disabled = false,
  placeholder = "",
  autoFocus = false,
  _ref = null,
  label = "",
}) {
  return (
    <>
      {!disabled ? (
        <>
          <label className="mt-2 pb-0 mb-0">{label}</label>
          <input
            ref={_ref}
            autoFocus={autoFocus}
            className="input_field"
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            placeholder={placeholder}
          />
        </>
      ) : (
        <p className="form-control">{value}</p>
      )}
    </>
  );
}
export default TextInput;
