import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

function DischargeModal({ isOpen = false, toggle = (f) => f, selectedAllocation={} }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Select Patient to Discharge</ModalHeader>
      <ModalBody>
        <h1>Discharge Patient</h1>
        {JSON.stringify(selectedAllocation)}
      </ModalBody>
    </Modal>
  );
}

export default DischargeModal;

// rachael yadu tafiya 07066395975