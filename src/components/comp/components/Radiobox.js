import React from "react";
import { Input } from "reactstrap";

function Radiobox(props) {
  const { container = "", label = "" } = props;

  return (
    <div className={`custom-control custom-radio mb-1 ${container}`}>
      <Input
        {...props}
        className="custom-control-input custom-control-input-default"
        id={`${props.label}${props.name}-1`}
        type="radio"
      />
      <label className="custom-control-label" htmlFor={`${props.label}${props.name}-1`}>
        {label}
      </label>
    </div>
  );
}

export default Radiobox;
