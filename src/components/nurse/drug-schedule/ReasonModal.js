import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'
import CustomButton from '../../comp/components/Button'
import { TextArea } from '../../comp/components/InputGroup'

function ReasonModal({
  showReasonAlert = (f) => f,
  setShowReasonAlert = (f) => f,
  reason = '',
  setReason = '',
  updateSchedule = (f) => f,
  selectedSchedule,
}) {
  return (
    <Modal isOpen={showReasonAlert} toggle={() => setShowReasonAlert(false)}>
      {/* <ModalHeader toggle={() => setShowReasonAlert(false)}>
            Please provide reason why this drug was not served
          </ModalHeader> */}
      <ModalBody>
        <TextArea
          label="Please provide reason why this drug was not served"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </ModalBody>
      <ModalFooter>
        <CustomButton color="danger" onClick={() => setShowReasonAlert(false)}>
          Cancel
        </CustomButton>
        <CustomButton
          onClick={() => {
            updateSchedule(selectedSchedule.id, 'Not Served')
            setShowReasonAlert(false)
          }}
          disabled={reason === ''}
        >
          Submit
        </CustomButton>
      </ModalFooter>
    </Modal>
  )
}

export default ReasonModal
