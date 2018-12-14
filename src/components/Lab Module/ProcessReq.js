import React, { Component, Fragment } from 'react';
import { Table, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { _updateData } from '../helpers';

export default class Process extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testIdArr: [],
    };
  }

  saveId = test_id => {
    const testIdArr = this.state.testIdArr;
    let newArr = testIdArr.concat(test_id);
    this.setState({ testIdArr: newArr });
  };

  onSaveClick = e => {
    e.preventDefault();
    // console.log(this.state.testIdArr)

    let data = this.state.testIdArr;
    console.log(data);
    let route = 'lab/submitSamplesCollected';
    let cb = () =>
      this.setState({ msg: 'Record has been submitted successfully.' });

    _updateData({ route, data, cb });
    this.props.toggleProcessModal();
    this.props.updatePendingRequestTable(data);
  };

  render() {
    const {
      patient,
      processModalIsOpen,
      toggleProcessModal,
      requests,
    } = this.props;
    const rows = [];
    requests.forEach((req, i) => {
      rows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{req.date.slice(0, 10)}</td>
          <td>{req.test_id}</td>
          <td>{req.test}</td>
          <td>{req.sample}</td>
          <td>{req.seen_by}</td>
          <td>{req.test_status}</td>
        </tr>
      );
    });

    return (
      <Modal size="lg" isOpen={processModalIsOpen} toggle={toggleProcessModal}>
        <ModalHeader toggle={toggleProcessModal}>
          <p className="text-center">Request List</p>
        </ModalHeader>
        <ModalBody>
          <Fragment>
            <div>
              <label className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                Name: {patient.surname} {patient.firstname}
              </label>
              <label className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                Date of Birth: {patient.DOB}
              </label>
              <label className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                Sex: {patient.gender}
              </label>
            </div>
          </Fragment>
          <Table bordered striped hover responsive>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Test ID</th>
                <th>Test</th>
                <th>Sample</th>
                <th>Requested By</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={this.onSaveClick}>
            Save
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}
