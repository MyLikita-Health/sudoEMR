import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { useQuery } from '../../../hooks'
import BackButton from '../../comp/components/BackButton'
import CustomButton from '../../comp/components/Button'

function LeftMenuBar() {
  const history = useHistory()
  const location = useLocation()
  const query = useQuery()
  const section = query.get('section')
  // const { patientId } = useParams()
  const disableBack = (location.pathname = '/me/nurse/dashboard')

  return (
    <div>
      <div>
        <div className="d-flex flex-direction-row justify-content-between p-0">
          {!disableBack && <BackButton />}
       
          <CustomButton
            color={section === 'in-patients' ? 'warning' : 'primary'}
            className="px-4"
            onClick={() =>
              history.push(`/me/nurse/dashboard?section=in-patients`)
            }
          >
            <span className="font-weight-bold">In Patients</span>
          </CustomButton>
          <CustomButton
            className="px-4"
            color={section === 'out-patients' ? 'warning' : 'primary'}
            onClick={() =>
              history.push(`/me/nurse/out-patient-prescriptions?section=out-patients`)
            }
          >
            <span className="font-weight-bold">Out Patients</span>
          </CustomButton>
        </div>
        {/* {sheetIsValid ? (
          <div className="col-md-9 d-flex flex-direction-row justify-content-between align-items-center pr-0">
            <div className='text-center'>
              <h6>
                Patient: {patientInfo.name} ({patientInfo.id}), {patientInfo.gender}, <tab />
                {getAgeFromDOB(patientInfo.dob, 'YM')}
              </h6>
            </div>
            <div>
            
            </div>
          </div>
        ) : null} */}
      </div>
    </div>
  )
}

export default LeftMenuBar
