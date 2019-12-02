import React, { Component } from 'react';
import { _fetchData } from '../helpers';
import { Table, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import Result from './TestResult';

export default class PrintResult extends Component {
  constructor() {
    super();

    this.state = {
      patientId: '',
      results: [],
      resultModalOpen: false,
      resultToView: {},
    };
  }

  fetchData(id) {
    let self = this;
    // let { id } = this.state;
    let route = `lab/fetchResult?id=${id}`;
    let success_callback = data => {
      self.setState({ results: data });
      // console.log(data)
    };
    _fetchData({ route, success_callback });
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getTest = () => {
    const { patientId } = this.state;
    this.fetchData(patientId);
  };

  toggleResultModal = () =>
    this.setState(prevState => ({
      resultModalOpen: !prevState.resultModalOpen,
    }));

  onCheckResultClick = result => {
    this.toggleResultModal();
    this.setState({ resultToView: result });
  };

  render() {
    const { results, patientId, resultModalOpen, resultToView } = this.state;
    const { toggleResultModal, onCheckResultClick } = this;
    const rows = [];
    results.forEach((res, i) => {
      rows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{res.date.slice(0, 10)}</td>
          <td>{res.test}</td>
          <td>{res.sample}</td>
          <td>
            {res.result ||
            res.appearance ||
            res.microscopy ||
            res.culture ||
            res.antibiotic ? (
              <button
                className="btn btn-primary"
                onClick={() => onCheckResultClick(res)}>
                Check
              </button>
            ) : (
              <button className="btn" disabled>
                Not Ready
              </button>
            )}
          </td>
        </tr>
      );
    });
    return (
      <div>
        <h3>Print Lab Investigation Result</h3>
        <hr />
        <div>
          <label>Enter Patient ID</label>
          <div className="row">
            <input
              name="patientId"
              placeholder="Search by patient's ID"
              className="form-control col-xs-9 col-sm-9 col-md-9 col-lg-9"
              onChange={this.onInputChange}
              value={patientId}
            />

            <button
              className="btn btn-outline-primary col-xs-3 col-sm-3 col-md-3 col-lg-3"
              onClick={this.getTest}>
              Get Tests
            </button>
          </div>
        </div>
        <hr />

        {results.length ? (
          <Table responsive hover bordered>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Test</th>
                <th>Sample</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        ) : (
          <p>no data found</p>
        )}
        <Modal size={'lg'} isOpen={resultModalOpen} toggle={toggleResultModal}>
          <ModalHeader toggle={toggleResultModal}>Result</ModalHeader>
          <ModalBody>
            <Result
              result={resultToView.result}
              appearance={resultToView.appearance}
              microscopy={resultToView.microscopy}
              culture={resultToView.culture}
              antibiotic={resultToView.antibiotic}
            />
          </ModalBody>

          <ModalFooter>
            <button className="btn btn-primary">Print</button>
            <button className="btn btn-danger" onClick={toggleResultModal}>
              Close
            </button>
          </ModalFooter>
        </Modal>
        {/* <button
          className="btn btn-outline-success col-md-3 offset-md-5"
          onClick={this.fetchResult}>
          Preview & Print
        </button> */}
      </div>
    );
  }
}
