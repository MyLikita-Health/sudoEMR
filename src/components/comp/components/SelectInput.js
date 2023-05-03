import React from "react";

function SelectInput({
  label = "",
  labelClass = "font-weight-bold",
  options = [],
  onChange = (f) => f,
  name = "",
  container = "col-xs-6 col-sm-6 col-md-6 col-lg-6 ",
  editable = true,
  value = "",
  required = false,
  width = '',
}) {
  return (
    <div className={`${container} form-group`}>
      {label && label !== "" ? (
        <label className={labelClass}>
          {label} {required && <span className="text-danger">*</span>}
        </label>
      ) : null}
      {editable ? (
        <select
          name={name}
          value={value}
          className="form-control"
          onChange={onChange}
          disabled={!editable}
          style={{ width: width }}
        >
          <option>-- Choose --</option>

          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : (
        <p className="form-control">{value}</p>
      )}
    </div>
  );
}

export default SelectInput;
