/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import SearchPatientComponent from "../../comp/components/SearchPatient";
import { Typeahead } from "react-bootstrap-typeahead";
import { apiURL } from "../../../redux/actions";

const FormReferTransfer = (props) => {
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [ignoreDiacritics, setIgnoreDiacritics] = useState(true);

  const [data, setData] = useState([]);
  const getData = () => {
    fetch(`${apiURL()}/doctors/all/list`)
      .then((raw) => raw.json())
      .then((res) => setData(res.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Form>
        <Col>
          <FormGroup>
            <Label>Patient:</Label>
            <SearchPatientComponent
              onChange={(e) => props.setName(e.uid)}
              value={props.name}
            />
          </FormGroup>
        </Col>
        <Col>
          <Label>To Doctor</Label>
          <Typeahead
            caseSensitive={caseSensitive}
            id="filtering-example"
            ignoreDiacritics={ignoreDiacritics}
            options={data}
            labelKey={(item) => `${item.firstname} ${item.lastname}`}
            placeholder="Select the doctor"
            onChange={(e) => {
              if (e.length) {
                props.setToDoctor(e[0].id);
              }
            }}
            value={props.toDoctor}
          />
        </Col>

        <Col>
          <FormGroup>
            <Label>Note</Label>
            <Input
              type="textarea"
              name="note"
              onChange={(e) => props.setNote(e.target.value)}
              value={props.note}
            />
          </FormGroup>
        </Col>
      </Form>
    </div>
  );
};
export default FormReferTransfer;
