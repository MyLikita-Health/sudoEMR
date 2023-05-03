import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Label } from "reactstrap";

export default function CustomTypeahead(props) {
  const {
    options,
    onInputChange,
    onChange,
    labelKey,
    label,
    placeholder,
    _ref,
  } = props;
  return (
    <>
      {label && <Label className="font-weight-bold">{label}</Label>}
      <Typeahead
        id="basic-typeahead-single"
        labelKey={labelKey}
        onChange={onChange}
        onInputChange={onInputChange}
        options={options}
        placeholder={placeholder || ""}
        ref={_ref}
        className="border border-primary rounded m-0 p-0"
        {...props}
      />
    </>
  );
}
