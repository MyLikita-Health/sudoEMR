import React from 'react'
import { Col, Row } from 'reactstrap'
import { useHistory } from 'react-router'
import CustomButton from '../comp/components/Button'
import PatientList from '../doc_dash/visits/components/PatientList'
import InPatientTable from './InPatientTable'
// import { Col, Row } from 'reactstrap'
// import MainNursingDashboard from './MainDashboard'
import NurseDashboard from './NurseDashboard'
// import NurseMenu from './NurseMenu'
import { useQuery } from '../../hooks'

const TopButtons = ({ section }) => {
  const history = useHistory()
  // const location = useLocation()
  let sectionIsOutPatient = section === 'out-patients'
  let sectionIsInPatient = section === 'in-patients'
  let sectionIsReport = section === 'report'
  return (
    <div className="d-flex flex-row justify-content-between">
      <CustomButton
        color={sectionIsInPatient ? 'warning' : 'primary'}
        onClick={() => {
          history.push('/me/nurse/vital-signs?section=in-patients')
        }}
      >
        In-Patients
      </CustomButton>
      <CustomButton
        color={sectionIsOutPatient ? 'warning' : 'primary'}
        onClick={() => {
          history.push(
            '/me/nurse/out-patient-prescriptions?section=out-patients',
          )
        }}
      >
        Out-Patients
      </CustomButton>
      <CustomButton
        color={sectionIsReport ? 'warning' : 'primary'}
        onClick={() => {
          history.push('/me/nurse/nursing-report?section=report')
        }}
      >
        Nursing Reports
      </CustomButton>
    </div>
  )
}

export default function Nurse() {
  // let section = 'in-patients'
  const query = useQuery()
  const section = query.get('section')
  const sectionIsDisabled = section === 'disabled'
  return (
    <div>
      {/* <NurseMenu /> */}
      <Row className="m-0 px-1">
        {sectionIsDisabled ? null : (
          <Col className="p-0">
            <TopButtons section={section} />
            {section === 'out-patients' ? <PatientList /> : <InPatientTable />}
          </Col>
        )}
        <Col md={sectionIsDisabled ? 12 : 9} className="px-1">
          <NurseDashboard />
        </Col>
      </Row>

      {/* <div className="px-1"> */}
      {/* <NurseDashboard /> */}
      {/* <MainNursingDashboard /> */}
      {/* </div> */}
    </div>
  )
}
