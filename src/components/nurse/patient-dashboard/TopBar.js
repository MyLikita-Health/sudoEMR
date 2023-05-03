import React from 'react'
import { useHistory } from 'react-router'
import BackButton from '../../comp/components/BackButton'
import CustomButton from '../../comp/components/Button'
import { getAgeFromDOB } from '../../utils/helpers'
import { NURSING_ROUTE_ROOT } from '../routes'

function TopBar({
  patientInfo={},
  allCollapsed,
  expandAll,
  collapseAll,
  allocation_id,
}) {
  const history = useHistory()
  return (
    <div className=" d-flex flex-direction-row justify-content-between align-items-center">
      <BackButton />

      <h6 className="text-center">
        Patient: {patientInfo.name} ({patientInfo.id}) <tab /> Age:{' '}
        {getAgeFromDOB(patientInfo.dob, 'YM')}
      </h6>

      <div>
        <CustomButton
          size="sm"
          color="success"
          className="mr-1"
          onClick={() =>
            history.push(
              `${NURSING_ROUTE_ROOT}/documentation/${patientInfo.id}?page_type=preview&visit_id=&patient_id=${patientInfo.id}&allocation_id=${allocation_id}&page_type=preview&section=disabled`,
            )
          }
        >
          View Documentation
        </CustomButton>
        <CustomButton
          size="sm"
          onClick={allCollapsed ? expandAll : collapseAll}
        >
          {allCollapsed ? 'Expand All' : 'Collapse All'}
        </CustomButton>
      </div>
    </div>
  )
}

export default TopBar
