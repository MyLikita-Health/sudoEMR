import React from 'react';
import {Col, Row, Card} from 'reactstrap'
import EmailConfiguration from './EmailConfiguration';
import GeneralInfo from './GeneralInfo';
import SMSConfiguration from './SMSConfiguration';
import NetworkSetting from './NetworkSetting';

function Settings() {
  return (
    <>
    <Row>
      <Col md={12}>
        <Card>
            <GeneralInfo />
        </Card>
      </Col>
      <Col md={6} className="mt-2">
      <EmailConfiguration />
      </Col>
      <Col md={6} className="mt-2">
        <SMSConfiguration />
        <NetworkSetting />
      </Col>
    </Row>
    </>
    
  );
}

export default Settings;
