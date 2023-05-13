import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { GrDown, GrUp } from 'react-icons/gr';
import DatePicker from "react-datepicker";
import InputGroup from './comp/components/InputGroup';
import { SelectInput } from './comp/components';

function BasicInformation({
  client = {},
  handleRadio = (f) => f,
  onInputChange = (f) => f,
  setContactPerson = (f) => f,
  accNoChange = (f) => f,
  setAccountType = (f) => f,
}) {
  const [isOpen, toggleOpen] = useState(true);

  const toggle = () => toggleOpen(!isOpen);

  return (
    <Card className="mb-1">
      <CardHeader
        tag="div"
        className="d-flex flex-direction-row justify-content-between btn"
        onClick={toggle}>
        <span>Basic Information</span>
        <span>{isOpen ? <GrDown /> : <GrUp />}</span>
      </CardHeader>
      <Collapse isOpen={isOpen}>
        <CardBody className="d-flex flex-direction-row flex-wrap">
          <div className="d-flex justify-content-between col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
            <div className="col-md-3 form-group">
              <Label>Account Type </Label>
              <Input
                type="select"
                className="form-control"
                value={client.accountType}
                name="accountType"
                onChange={(e) => setAccountType(e.target.value)}>
                <option value="Family">-Select Account Type-</option>
                <option value="Donor">Donor</option>
                <option value="Organization">Organization </option>
                <option value="Organization Donor">Organization Donor</option>
                <option value="Credit Organization">Credit Organization</option>
              </Input>
            </div>

            <InputGroup
              name="clientAccount"
              onChange={(e) => accNoChange(e.target.value)}
              label="Client Account No."
              value={client.clientAccount}
              container="col-md-3 offset-md-3"
            />
            <InputGroup
              name="clientBeneficiaryAcc"
              onChange={onInputChange}
              label="Beneficiary No"
              editable={false}
              value={client.clientBeneficiaryAcc}
              container="col-md-3"
            />
          </div>

          <InputGroup
            name="fullname"
            onChange={onInputChange}
            label={
              client.accountType === 'Family'
                ? 'Full Name'
                : 'Organization Name'
            }
            value={client.fullname}
            container="col-md-6"
            required
          />
          {/* <InputGroup
            name="firstname"
            onChange={onInputChange}
            label={
              client.accountType === 'Family'
                ? 'First Name'
                : 'Organization Discription (optional)'
            }
            value={client.firstname}
            container="col-md-6"
            required
          /> */}

          {client.accountType === 'Family' ? (
            <>
              <SelectInput
                name="gender"
                onChange={onInputChange}
                label="Gender"
                options={['Male', 'Female']}
                value={client.gender}
                container="col-md-3"
              />

              <DatePicker
                name="dob"
                onChange={onInputChange}
                label="Date of birth"
                value={client.dob}
                container="col-md-3"
              />

              <SelectInput
                name="maritalStatus"
                onChange={onInputChange}
                label="Marital Status"
                options={['Single', 'Married', 'Divorce', 'Widow']}
                value={client.maritalStatus}
                container="col-md-4"
              />

              <InputGroup
                name="occupation"
                onChange={onInputChange}
                label="Occupation"
                value={client.occupation}
                container="col-md-4"
              />
              <InputGroup
                label="Address"
                container="col-md-4"
                name="address"
                value={client.address}
                onChange={onInputChange}
                placeholder="Apartment, studio, or floor"
              />
              {/* <Col md={4}>
                <FormGroup>
                  <Label for="date">Reg. Date</Label>
                  <Input
                    type="date"
                    name="date"
                    value={client.date}
                    onChange={onInputChange}
                  />
                </FormGroup>
              </Col> */}
            </>
          ) : null}

          <Deposit client={client} onInputChange={onInputChange} />
          <ContactPerson
            setContactPerson={setContactPerson}
            client={client}
            onInputChange={onInputChange}
          />
        </CardBody>
      </Collapse>
    </Card>
  );
}

export default BasicInformation;

export const Deposit = ({onInputChange, client}) => {
  return (
    <>
      <InputGroup
        name="depositAmount"
        onChange={onInputChange}
        label="Deposit Amount (Optional)"
        value={client.depositAmount}
        container="col-md-6"
      />
      <SelectInput
        name="modeOfPayment"
        onChange={onInputChange}
        label="Mode of payment"
        value={client.modeOfPayment}
        container="col-md-6"
        options={['Cash', 'POS', 'Bank Transfer']}
      />
    </>
  );
};
export const ContactPerson = ({ setContactPerson, client, onInputChange }) => {
  // const location =useLocation()
  return (
    <>
      <Row className="bg-light m-0 p-1">
        <Col md={5}>
          <h4>
            <kbd>Contact Person: </kbd>
          </h4>
        </Col>
        <Col md={2}>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                checked={client.contact === 'self'}
                name="self"
                value="self"
                
                onChange={() => setContactPerson('self')}
              />
              Self
            </Label>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                checked={client.contact === 'other'}
                name="other"
                value="other"
                onChange={() => setContactPerson('other')}
              />
              Other
            </Label>
          </FormGroup>
        </Col>

        {client.contact === 'self' ? (
          ''
        ) : (
          <>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="name"
                  name="contactName"
                  value={client.contactName}
                  onChange={onInputChange}
                  placeholder="Name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Contact Address</Label>
                <Input
                  name="contactAddress"
                  value={client.contactAddress}
                  onChange={onInputChange}
                  placeholder="Address"
                />
              </FormGroup>
            </Col>
          </>
        )}

        <Col md={6}>
          <FormGroup>
            <Label for="phone" className="font-weight-bold">
              Phone Number
              <span className="text-danger ml-1">*</span>
            </Label>
            <Input
              type="tel"
              name="contactPhone"
              value={client.contactPhone}
              onChange={onInputChange}
              placeholder="Telephone Number"
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="contactEmail"
              value={client.contactEmail}
              onChange={onInputChange}
              placeholder="example@gmail.com"
            />
          </FormGroup>
        </Col>
        {client.contact === 'self' ? null : (
          <Col md={6}>
            <FormGroup>
              <Label for="website">Website (optional)</Label>
              <Input
                type="text"
                name="website"
                value={client.website}
                onChange={onInputChange}
                placeholder="Website"
              />
            </FormGroup>
          </Col>
        )}
      </Row>
    </>
  );
};
