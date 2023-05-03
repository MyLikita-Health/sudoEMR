import React from 'react'
import { Col, Row } from 'reactstrap'
import TextWithNewLine from '../../../comp/components/TextWithNewline'

function KeyValView({ _key = '', _val = '' }) {
  return (
    <>
      <Col md={2} className="p-2 ">
        <span className="font-weight-bold">{_key}</span>
      </Col>
      <Col md={10} className="p-2">
        <TextWithNewLine text={_val && _val !== '' ? _val : '-'} />
      </Col>
    </>
  )
}

function OpDetailView({ op = {} }) {
  return (
    <div className="border border-primary rounded p-1 my-1">
      {/* <span>Date: {op.date}</span> */}
      <h6>Surgical Details</h6>
      <Row className="m-0 ">
        <KeyValView _key="Diagnosis:" _val={op.diagnosis} />
        <KeyValView _key="Procedure:" _val={op.surgery} />
        <KeyValView _key="Surgeons(s):" _val={op.surgeons} />
        <KeyValView _key="Anesthetist(s):" _val={op.anesthetist} />
        <KeyValView _key="Scrub Nurse(s):" _val={op.scrubNurse} />
        <KeyValView _key="Anesthetic Used:" _val={op.anesthetic} />
        <KeyValView _key="Intra Op Antibiotics:" _val={op.intraOpAntibiotics} />
        <KeyValView _key="Estimated Blood Loss:" _val={op.bloodLoss} />
        <KeyValView
          _key="Pints of Blood given Intra-Op:"
          _val={op.pintsGiven}
        />
        <KeyValView _key="Procedure Note:" _val={op.procedureNotes} />
        <KeyValView _key="Intra-Op Finding:" _val={op.intraOpFindings} />
        <KeyValView _key="Remarks:" _val={op.remarks} />
        <KeyValView _key="Post-Op Order:" _val={op.postOpOrder} />
      </Row>
    </div>
  )
}

export default OpDetailView
