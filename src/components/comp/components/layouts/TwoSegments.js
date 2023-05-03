import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Col, Row } from "reactstrap";

function TwoSegments() {
  return (
    <SkeletonTheme color="#fff" highlightColor="#eee">
      {/* <Skeleton duration={1.5} height={50} /> */}
      <Row className='p-0 m-0'>
        <Col sm={12} md={4} lg={3}>
          <Skeleton duration={1.5} height={"80vh"} />
        </Col>
        <Col>
          <Skeleton duration={1.5} height={"80vh"} />
        </Col>
      </Row>
    </SkeletonTheme>
  );
}

export default TwoSegments;
