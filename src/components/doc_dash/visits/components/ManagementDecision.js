import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { ButtonGroup } from 'reactstrap'
import { iconButtonStyle } from '../../../utils/styles-helper'

function ManagementDecision({
  managementPlan = {},
  handleConsultationChange = (f) => f,
  sheetIsValid,
}) {
  // const [managementPlan, setManagementPlan] = useState({})

  const handleStatusChange = (val) => {
    let newState = {
      ...managementPlan,
      patientStatus: val,
      admissionStatus: 'pending',
    }
    handleConsultationChange('managementPlan', newState)
  }
  // setManagementPlan((p) => ({ ...p, patientStatus: val }))

  return (
    <div className="mt-0">
      <div className="d-flex flex-direction-row justify-content-between align-items-center">
        <ButtonGroup>
          <button
            disabled={!sheetIsValid}
            style={iconButtonStyle}
            onClick={() => handleStatusChange('admit')}
            className={`btn btn-xs ${
              managementPlan.patientStatus === 'admit'
                ? 'btn-primary'
                : 'btn-outline-primary'
            }`}
          >
            {managementPlan.patientStatus === 'admit' && (
              <FaCheckCircle className="mr-2" />
            )}
            Admit
          </button>
          <button
            disabled={!sheetIsValid}
            style={iconButtonStyle}
            onClick={() => handleStatusChange('out-patient')}
            className={`btn btn-xs ${
              managementPlan.patientStatus === 'out-patient'
                ? 'btn-primary'
                : 'btn-outline-primary'
            }`}
          >
            {managementPlan.patientStatus === 'out-patient' && (
              <FaCheckCircle className="mr-2" />
            )}
            Schedule as Out Patient
          </button>

          <button
            disabled={!sheetIsValid}
            style={iconButtonStyle}
            onClick={() => {
              if (managementPlan.patientStatus === 'follow-up') {
                handleStatusChange('')
              } else {
                handleStatusChange('follow-up')
              }
            }}
            className={`btn btn-xs ${
              managementPlan.patientStatus === 'follow-up'
                ? 'btn-primary'
                : 'btn-outline-primary'
            }`}
          >
            {managementPlan.patientStatus === 'follow-up' && (
              <FaCheckCircle className="mr-2" />
            )}
            Follow-Up
          </button>
        </ButtonGroup>

        <button
          className="btn btn-xs btn-light"
          disabled
          // onClick={() => handleStatusChange('discharge')}
        >
          Discharge Patient
        </button>
      </div>
    </div>
  )
}

export default ManagementDecision
