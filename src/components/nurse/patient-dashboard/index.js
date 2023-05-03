import React from 'react'
// import { Col, Row } from 'reactstrap'
// import BackButton from '../../comp/components/BackButton'
// import InPatientList from '../../doc_dash/visits/components/InPatientList'
// import PatientList from '../../doc_dash/visits/components/PatientList'
import DetailsContainer from './DetailsContainer'

function NursingPatientDashboard() {
  return (
    <>
      {/* <Row className="m-0">
        <Col md={3}>
          <InPatientList />
         <PatientList />
        </Col>
        <Col md={9}> */}
          <DetailsContainer />
        {/* </Col>
      </Row> */}
    </>
  )
}

export default NursingPatientDashboard
