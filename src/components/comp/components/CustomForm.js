import React from "react";
import { Row, Col, Label } from "reactstrap";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import SelectInput from "./SelectInput";
import RadioGroup from "./RadioGroup";
import AutoComplete from "./AutoComplete";
// import SwitchButton from "hooks/Switch";

function CustomForm({
  fields = [],
  handleChange = (f) => f,
  handleRadioChange = (f) => f,
  handleAutocompleteChange = (f) => f,
}) {
  return (
    <Row className="m-0">
      {fields.map((el, i) => {
        if (el.type && el.type === "select") {
          return (
            <Col md={{ size: el.col || 4, offset: el.offset || "" }} key={i}>
              <SelectInput
                container="col-md-12 p-0"
                label={el.label}
                name={el.name}
                value={el.value}
                options={el.options || []}
                required={el.required}
                disabled={el.disabled}
                onChange={handleChange}
              />
            </Col>
          );
        } else if (el.type && el.type === "radio") {
          return (
            <Col
              md={{ size: el.col || 4, offset: el.offset || "" }}
              key={i}
              className="py-2"
            >
              <RadioGroup
                container="d-flex flex-row"
                label={el.label}
                name={el.name}
                options={el.options}
                onChange={handleRadioChange}
                value={el.value}
              />
            </Col>
          );
        } else if (el.type && el.type === "checkbox") {
          return (
            <Col md={{ size: el.col || 4, offset: el.offset || "" }} key={i}>
              <Checkbox
                container="d-flex flex-row"
                label={el.label}
                name={el.name}
                options={el.options}
                onChange={handleRadioChange}
                value={el.value}
              />
            </Col>
          );
        } else if (el.type && el.type === "autocomplete") {
          return (
            <Col md={{ size: el.col || 4, offset: el.offset || "" }} key={i}>
              <AutoComplete
                _ref={el._ref}
                container="d-flex flex-row"
                label={el.label}
                name={el.name}
                options={el.options}
                labelKey={el.labelKey ? el.labelKey : el.name}
                onChange={(v) => handleAutocompleteChange(v, el.name)}
                onInputChange={(v) => {
                  if (el.allowNew) {
                    handleAutocompleteChange(v, el.name)
                  } else {
                    console.log(v)
                  }
                }}
                value={el.value}
                ref={el._ref}
              />
            </Col>
          );
        } else if (el.type && el.type === "custom") {
          return (
            <Col
              className={el.container}
              md={{ size: el.col || 4, offset: el.offset || "" }}
              key={i}
            >
              {el.component()}
            </Col>
          );
        } else {
          return (
            <Col
              md={{ size: el.col || 4, offset: el.offset || "" }}
              key={i}
              className={el.itemClass}
            >
              <Label>{el.label}</Label>
              <TextInput
                // label={el.label}
                type={el.type || "text"}
                name={el.name}
                value={el.value}
                required={el.required}
                disabled={el.disabled}
                onChange={handleChange}
              />
            </Col>
          );
        }
      })}
    </Row>
  );
}

export default CustomForm;
