import React, { Component } from 'react';
import { Form, FormGroup, Table, Badge } from 'reactstrap';
import { _warningNotify } from '../helpers';
import Notifications from 'react-notify-toast';
import { Link } from 'react-router-dom';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import FaPlus from 'react-icons/lib/fa/plus';

export class NewRadiologyInvestigations extends Component {
  constructor(props) {
    super(props);

    const cached = JSON.parse(localStorage.getItem('lab_investigation')) || [];

    this.state = {
      test: '',
      sample: '',
      formRecords: cached || [],
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.formRecords === []) return;
    return localStorage.setItem(
      'lab_investigation',
      JSON.stringify(this.state.formRecords)
    );
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddRequest = e => {
    e.preventDefault();
    const { test, sample } = this.state;
    if (test === '' || sample === '') {
      return _warningNotify('Please fill the boxes');
    }
    const formData = { test, sample };
    this.setState(prevState => ({
      formRecords: prevState.formRecords.concat(formData),
      test: '',
      sample: '',
    }));
  };

  onRemove = req => {
    const { formRecords } = this.state;
    const newList = formRecords.filter(item => item.test !== req.test);
    this.setState({ formRecords: newList });
  };

  render() {
    return (
      <Form onSubmit={this.handleAddRequest}>
        <h3 className="text-center">
          <strong>Lab Investigation Request</strong>
        </h3>
        <hr />
        <FormGroup row>
          <label className="col-md-2">
            Required Investigation (and Others):
          </label>
          <textarea
            name="test"
            value={this.state.test}
            onChange={this.onInputChange}
            className="form-control col-md-4"
          />
          <label className="col-md-2">Required Sample:</label>
          <textarea
            name="sample"
            value={this.state.sample}
            onChange={this.onInputChange}
            className="form-control col-md-4"
          />
        </FormGroup>
        <Notifications />
        <button
          type="submit"
          className="btn btn-outline-primary offset-md-5"
          title="add to list">
          <FaPlus />
          Add Request
        </button>
        <LabRequestTable
          formRecords={this.state.formRecords}
          onRemove={this.onRemove}
        />
        <br />
        <hr />
        <button className="btn btn-outline-success" onClick={this.handleSubmit}>
          <Link
            to="/patient_clarking/prescription_request"
            style={{ width: '9vw' }}>
            <FaArrowLeft /> Prev
          </Link>
        </button>
      </Form>
    );
  }
}

export const LabRequestTable = ({
  formRecords = [],
  showRemove = true,
  onRemove = f => f,
}) => {
  const rowStyle = {
    border: '1px solid gray',
    padding: '.4em',
    paddingRight: '3em',
  };
  const rows = [];
  formRecords.forEach((record, i) => {
    rows.push(
      <tr key={i}>
        <td style={rowStyle}>{i + 1}</td>
        <td style={rowStyle}>{record.test}</td>
        <td style={rowStyle}>{record.sample}</td>
        {showRemove && (
          <td style={{ cursor: 'pointer' }}>
            <Badge color="danger" pill onClick={() => onRemove(record)}>
              Remove
            </Badge>
          </td>
        )}
      </tr>
    );
  });
  return (
    <div>
      {!showRemove && <h5>Lab Investigation</h5>}
      <Table hover bordered striped cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <th style={rowStyle}>S/N</th>
            <th style={rowStyle}>Test</th>
            <th style={rowStyle}>Sample</th>
            {showRemove && <th style={rowStyle} />}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      {!showRemove && <hr />}
    </div>
  );
};
