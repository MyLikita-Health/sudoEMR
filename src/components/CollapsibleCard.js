import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Card, CardHeader, CardBody, Collapse } from "reactstrap";

function CollapsibleCard(props) {
  const [isOpen, toggle] = useState(props.defaultOpen || false);

  return (
    <Card className="mb-1">
      <CardHeader
        // tag="h5"
        onClick={() => {
          if (!props.fixed) {
            if (props.toggle) {
              props.toggle();
            } else {
              toggle((d) => !d);
            }
          }
        }}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          backgroundColor: props.color ? props.color : "#0069D9",
          //   height: 40,
        }}
        className="d-flex flex-direction-row justify-content-between py-1"
      >
        <span className="mr-2 text-white" style={{ fontSize: 16 }}>
          {props.headerText}
        </span>

        {!props.fixed ? (
          <>
            {!isOpen ? (
              <FaChevronDown className="text-white" />
            ) : (
              <FaChevronUp className="text-white" />
            )}
          </>
        ) : null}
      </CardHeader>
      <Collapse isOpen={props.toggle ? props.defaultOpen : isOpen}>
        <CardBody className={props.body} style={props.style}>
          {props.children}
        </CardBody>
      </Collapse>
    </Card>
  );
}

export default CollapsibleCard;
