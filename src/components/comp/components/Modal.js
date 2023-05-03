import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export function WarningModal({
  title = '',
  body = '',
  isOpen = false,
  toggle = (f) => f,
  okay = (f) => f,
  cancel = (f) => f,
}) {
  // const [isOpen, toggleOpen] = useState(false)
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>
        <div>{body}</div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-success" onClick={okay}>
          Okay
        </button>
        <button className="btn btn-danger" onClick={toggle}>
          Cancel
        </button>
      </ModalFooter>
    </Modal>
  );
}
