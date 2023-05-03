import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Collapse } from 'reactstrap';
import InputGroup from '../../comp/components/InputGroup';
import { GrDown, GrUp } from 'react-icons/gr';

function ContactInformation({ phone, email, address, onInputChange, mode='EDITABLE' }) {
  const [isOpen, toggleOpen] = useState(true);

  const toggle = () => toggleOpen(!isOpen);
  return (
    <Card className="mb-1">
      <CardHeader
        tag="div"
        className="d-flex flex-direction-row justify-content-between btn"
        onClick={toggle}
      >
        <span>Contact Information</span>
        <span>{isOpen ? <GrDown /> : <GrUp />}</span>
      </CardHeader>
      <Collapse isOpen={isOpen}>
        <CardBody className="d-flex flex-direction-row flex-wrap">
          <InputGroup
            label="Phone Number"
            type="tel"
            name="phone"
            value={phone}
            onChange={onInputChange}
            editable={mode === 'EDITABLE'}
            required
          />
          <InputGroup
            label="Email Address"
            name="email"
            value={email}
            onChange={onInputChange}
            editable={mode === 'EDITABLE'}
          />
          <InputGroup
            label="Address"
            name="address"
            value={address}
            onChange={onInputChange}
            editable={mode === 'EDITABLE'}
          />
        </CardBody>
      </Collapse>
    </Card>
  );
}

export default ContactInformation;
