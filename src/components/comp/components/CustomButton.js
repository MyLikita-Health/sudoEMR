import React from "react";
import { Button } from "reactstrap";

function CustomButton(props) {
  return (
    <Button
      onClick={props.handleSubmit}
      {...props}
      disabled={props.loading || props.disabled}
      color={props.color || "primary"}
    >
      {props.loading && (
        <span
          className="spinner-border spinner-border-sm mr-2"
          role="status"
          aria-hidden="true"
        />
      )}
      {props.children}
    </Button>
  );
}
export default CustomButton;
