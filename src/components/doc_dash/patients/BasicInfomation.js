import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Collapse, Input } from "reactstrap";
import { GrDown, GrUp } from "react-icons/gr";
import InputGroup from "../../comp/components/InputGroup";
import SelectInput from "../../comp/components/SelectInput";
// import DatePicker from "../../comp/components/DatePicker";
// import { Deposit } from "../../account/components/client-form";
import AutoComplete from "../../comp/components/AutoComplete";
import { _fetchApi } from "../../../redux/actions/api";
import { apiURL } from "../../../redux/actions";

function BasicInformation({
  // patientId,
  id_label = "Patient ID",
  patientHospitalId = "",
  firstname = "",
  surname = "",
  gender = "",
  dob = "",
  maritalStatus = "",
  occupation = "",
  onInputChange = "",
  mode = "EDITABLE",
  customHeader = null,
  patient = {},
  handleAccountSelect = (f) => f,
  existingPatientId = null,
}) {
  const [accounts, setAccounts] = useState([]);
  const [isOpen, toggleOpen] = useState(true);

  const getPatients = () => {
    // const cachedPatientsList =
    //   JSON.parse(localStorage.getItem('allpatients')) || [];
    // if (cachedPatientsList.length) {
    //   this.setPatients(cachedPatientsList);
    // }

    _fetchApi(
      `${apiURL()}/accounts/approved/list`,
      ({ results }) => {
        setAccounts(results);
      },
      (error) => console.log(error)
    );
  };

  useEffect(() => {
    getPatients();
  }, []);

  const toggle = () => toggleOpen(!isOpen);
  return (
    <Card className="mb-1">
      <CardHeader
        tag="div"
        className="d-flex flex-direction-row justify-content-between btn"
        onClick={toggle}
      >
        <span>Basic Information</span>
        <span>{isOpen ? <GrDown /> : <GrUp />}</span>
      </CardHeader>
      <Collapse isOpen={isOpen}>
        <CardBody className="d-flex flex-direction-row flex-wrap">
          {customHeader ? (
            customHeader()
          ) : existingPatientId ? null : (
            <div className="d-flex justify-content-end col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
              {/* <InputGroup
                name="patientId"
                onChange={onInputChange}
                label="Patient ID"
                value={patientId}
                editable={false}
                required
              /> */}
              <InputGroup
                name="patientHospitalId"
                onChange={onInputChange}
                label={id_label}
                value={patientHospitalId}
                editable={mode === "EDITABLE"}
                container="col-md-6"
              />
            </div>
          )}
          {/* {JSON.stringify(accounts)} */}
          {existingPatientId
            ? null
            : patient.registrationType === "Existing" && (
                <AutoComplete
                  options={accounts}
                  name="clientAccount"
                  labelKey={(acc) =>
                    `${acc.account_name ? acc.account_name : acc.alt_name} (${
                      acc.account_no
                    })`
                  }
                  onChange={(acc) => {
                    if (acc.length) {
                      let selected = acc[0];
                      handleAccountSelect(selected);
                    }
                  }}
                  label="Select Account"
                  // value={patient.clientAccount || ''}
                  containerClass="col-md-6"
                />
              )}
          {!existingPatientId && (
            <InputGroup
              name="clientAccount"
              onChange={onInputChange}
              label="Client Account No."
              value={patient.clientAccount || ""}
              // editable={patient.registrationType === "New"}
              editable={false}
              container={
                patient.registrationType === "Existing"
                  ? "col-md-3"
                  : "col-md-6"
              }
            />
          )}
          {!existingPatientId && (
            <InputGroup
              name="clientBeneficiaryAcc"
              onChange={onInputChange}
              label="Beneficiary No"
              editable={false}
              value={patient.clientBeneficiaryAcc || ""}
              container={
                patient.registrationType === "Existing"
                  ? "col-md-3"
                  : "col-md-6"
              }
            />
          )}
          <InputGroup
            name="surname"
            onChange={onInputChange}
            label="Surname"
            value={surname}
            editable={mode === "EDITABLE"}
            container="col-md-6"
            required
          />

          <InputGroup
            name="firstname"
            onChange={onInputChange}
            label="First Name"
            value={firstname}
            editable={mode === "EDITABLE"}
            container="col-md-6"
            required
          />

          <SelectInput
            name="gender"
            onChange={onInputChange}
            label="Gender"
            options={["Male", "Female"]}
            value={gender}
            editable={mode === "EDITABLE"}
            container="col-md-6"
            required
          />

          <div md={6} className="col-md-6">
            <label for="name" className="font-weight-bold">
              Age
            </label>
            <div className="d-flex flex-direction-row align-items-center justify-content-between">
              <Input
                type="number"
                name="ageD"
                value={patient.ageD}
                onChange={onInputChange}
              />
              <span className="mx-1 mr-4">D</span>

              <Input
                type="number"
                name="ageM"
                value={patient.ageM}
                onChange={onInputChange}
              />
              <span className="mx-1 mr-4">M</span>
              <Input
                type="number"
                name="ageY"
                value={patient.ageY}
                onChange={onInputChange}
              />
              <span className="mx-1">Y</span>
            </div>
          </div>

          {/* <DatePicker
            name="dob"
            onChange={onInputChange}
            label="Date of birth"
            value={dob}
            editable={mode === "EDITABLE"}
            container="col-md-6"
          /> */}

          <SelectInput
            name="maritalStatus"
            onChange={onInputChange}
            label="Marital Status"
            options={["Single", "Married", "Divorce", "Widow"]}
            value={maritalStatus}
            editable={mode === "EDITABLE"}
            container="col-md-6"
          />

          <InputGroup
            name="occupation"
            onChange={onInputChange}
            label="Occupation"
            value={occupation}
            editable={mode === "EDITABLE"}
            container="col-md-6"
          />
          {/* {!existingPatientId && (
            <Deposit client={patient} onInputChange={onInputChange} />
          )} */}
        </CardBody>
      </Collapse>
    </Card>
  );
}

export default BasicInformation;
