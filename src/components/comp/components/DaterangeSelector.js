import React from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
import moment from "moment";

const today = moment().format("YYYY-MM-DD");

function DaterangeSelector({
  showLabel = true,
  from = today,
  to = today,
  handleChange = (f) => f,
  size = "md",
  gap = true,style={}
}) {
  return (
    <Row style={style}>
      <Col md={gap ? 4 : 6}>
        <FormGroup>
          {showLabel && <Label style={{ fontWeight: "bold" }}>From:</Label>}
          <Input
            type="date"
            size={size}
            value={from}
            name="from"
            onChange={handleChange}
          />
        </FormGroup>
      </Col>
      <Col md={{ offset: gap ? 4 : 0, size: gap ? 4 : 6 }}>
        <FormGroup>
          {showLabel && <Label style={{ fontWeight: "bold" }}>To:</Label>}
          <Input
            type="date"
            size={size}
            value={to}
            name="to"
            onChange={handleChange}
          />
        </FormGroup>
      </Col>
    </Row>
  );
}

export default DaterangeSelector;
