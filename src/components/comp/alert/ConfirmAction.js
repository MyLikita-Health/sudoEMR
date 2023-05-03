import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ConfirmAction({ confirmBtnAction, modal, setModal }) {
  const toggle = () => setModal(!modal);

  const confirm = () => {
    confirmBtnAction();
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Confirm Delete</ModalHeader>
        <ModalBody>
          <h5 className="text-center">
            Are you sure you want to delete this item?
          </h5>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirm}>
            Delete
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
