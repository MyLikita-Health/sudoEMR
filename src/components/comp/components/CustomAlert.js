import React from "react";
import { Alert, Col } from "reactstrap";

export default function CustomAlert({
  text = "",
  color = "",
  col = 12,
  className = "",
}) {
  return (
    <Col md={col}>
      <Alert className={className} color={color}>
        {text}
      </Alert>
    </Col>
  );
}
