import React from "react";
import { Spinner } from "reactstrap";

export default function   Loading() {
  return (
    <div className="d-flex flex-direction-row align-items-center justify-content-center">
      <Spinner className="mr-3" size="sm" />
      Please wait...
    </div>
  );
}
