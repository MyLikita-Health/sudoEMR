import React from "react";
import { Input, Col, Label, Button } from "reactstrap";
import AsyncTypeAhead from "../../AsyncTypeAhead";
import SwitchButton from "../../SwitchButton";
// import { useSelector } from "react-redux";

export default function SimpleInput({
  field,
  handleChange,
  size,
  label,
  _ref,
}) {
  // const activeBusiness = useSelector((state) => state.auth.activeBusiness);
  return (
    <Col md={size || 4} className="my-2">
      {/* <FormGroup> */}
      {label && <Label>{label}</Label>}
      {field.type !== "button" ? (
        <Label className="form-control-label font-weight-bold" htmlFor={field.name}>
          <span>
            {field.label}
            {field.required && <span style={{ color: "red" }}>*</span>}
          </span>
        </Label>
      ) : (
        <Label>&nbsp;</Label>
      )}
      {field.type === "select" ? (
        <Input
          ref={_ref}
          disabled={field.disabled}
          type="select"
          className={`form-control form-control-${field.size}`}
          id={`select-${field.name}`}
          onChange={handleChange}
          name={field.name}
          style={{
            borderWidth: 2,
            // borderColor: activeBusiness.primary_color,
          }}
        >
          {/* {field.options.length} */}
          {field.options.length > 0 ? (
            field.options.map((option, k) =>
              option === field.options[0] ? (
                <option key={k} value={option}>
                  {option}
                </option>
              ) : (
                <option key={k} value={option}>
                  {option}
                </option>
              )
            )
          ) : (
            <option>Options N/A</option>
          )}
        </Input>
      ) : field.type === "switch" ? (
        <SwitchButton
          style={{
            borderWidth: 2,
            // borderColor: activeBusiness.primary_color,
          }}
          name={field.name}
          value={localStorage.getItem(field.name)}
          onChange={handleChange}
        />
      ) : field.type === "readonly" ? (
        <input
          ref={_ref}
          className="form-control-alternative"
          style={{
            borderWidth: 2,
            // borderColor: activeBusiness.primary_color,
          }}
          id={`input-${field.name}`}
          onChange={handleChange}
          readOnly=""
          name={field.name}
          value={field.value || ""}
          type={field.type ? field.type : "text"}
        />
      ) : field.type === "button" ? (
        <Button
          className="btn btn-block"
          type={field.btn_type || "button"}
          onClick={() => field.callback()}
          {...field}
        >
          {field.label}
        </Button>
      ) : field.type === "typeahead" ? (
        <AsyncTypeAhead {...field} />
      ) : (
        <>
          <input
            ref={_ref}
            style={{
              borderWidth: 2,
              // borderColor: activeBusiness.primary_color,
            }}
            className={`form-control form-control-${field.size}`}
            id={`input-${field.name}`}
            onChange={handleChange}
            name={field.name}
            value={field.default || field.value}
            type={field.type ? field.type : "text"}
            {...field}
          />
        </>
      )}
      {field.error && <span className="text-danger">{field.error}</span>}
      {/* </FormGroup> */}
    </Col>
  );
}
