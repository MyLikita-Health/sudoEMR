import React from 'react'
import CustomButton from '../../../comp/components/Button'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { getAgeFromDOB } from '../../../utils/helpers'
import { Card } from 'reactstrap'
// import { _fetchApi2 } from '../../../../redux/actions/api'
// import { apiURL } from '../../../../redux/actions'
// import { getConsultationRecord } from './helper'

function VisitDatesPicker({ queryDate, visitDays, patientDetails }) {
  // let nextDateIndex = visitDays.findIndex(queryDate) + 1
  return (
    <div className="d-flex flex-direction-row justify-content-between mb-1">
      <CustomButton>
        <FaArrowLeft className="mr-1" />
        Previous Visit ()
      </CustomButton>
      {/* {JSON.stringify(visitDays)} */}
      {/* <h6 className="text-center">{queryDate}</h6> */}
      <Card className="p-1 px-4 mb-1">
        <div>
          <span className="font-weight-bold m-0 mx-2">
            {patientDetails.name} ({patientDetails.id})
          </span>
          <span className="font-weight-bold m-0 mx-2">
            <span style={{ marginRight: 20 }}>
              Age: {getAgeFromDOB(patientDetails.dob)}
            </span>
            <span>Gender: {patientDetails.gender}</span>
          </span>
        </div>
      </Card>
      <CustomButton>
        Next Visit ()
        {/* ({visitDays[nextDateIndex]}) */}
        <FaArrowRight className="ml-1" />
      </CustomButton>
    </div>
  )
}

export default VisitDatesPicker
