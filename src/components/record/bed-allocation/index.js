import React from "react";
import { Col, Row } from "reactstrap";
import BedAllocation from "./BedAllocation";
import PendingAdmission from "./PendingAdmission";
import PendingDischarge from "./PendingDischarge";

function BedAllocationIndex() {
  return (
    <Row className='m-0 p-0'>
      <Col md={3}>
        <PendingAdmission />
      </Col>
      <Col md={6}>
        <BedAllocation />
      </Col>
      <Col md={3}>
        <PendingDischarge />
      </Col>
    </Row>
  );
}

export default BedAllocationIndex;
