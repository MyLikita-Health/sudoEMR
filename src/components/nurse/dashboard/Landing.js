import React from 'react'
import { Col, Row } from 'reactstrap'
import DrugSchedule from '../drug-schedule/DrugsSchedule'

function Landing() {
  return (
    <Row className='m-0'>
      <Col className="px-1">
        <div
          style={{
            backgroundImage: `url(${require('../../../images/nurse-landing.jpeg')})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
          }}
        ></div>
      </Col>
      <Col md={4} className="p-0">
        <DrugSchedule />
      </Col>
    </Row>
  )
}

export default Landing
