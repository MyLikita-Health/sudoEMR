import React from 'react'
import PatientNavBar from '../components/nav/patient-nav'
import Footer from '../components/comp/components/Footer'

function PatientWrapper(props) {
  return (
    <React.Fragment>
      <PatientNavBar />
      <div style={{ height: '5px' }} />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default PatientWrapper
