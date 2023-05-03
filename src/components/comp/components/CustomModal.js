import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

function CustomModal(props) {
  const { header, isOpen = false, toggle = (f) => f, footer, size="lg" } = props
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="border border-primary size-lg"
      size={size}
    >
      {header && (
        <ModalHeader className="h6 py-1" toggle={toggle}>
          {header}
        </ModalHeader>
      )}
      <ModalBody>{props.children}</ModalBody>
      {footer && <ModalFooter>{footer}</ModalFooter>}
    </Modal>
  )
}

export default CustomModal
