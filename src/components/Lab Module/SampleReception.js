import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Table,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import { _fetchData } from '../helpers';

export default class SampleReception extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collectedSamples: [],
      processModalIsOpen: false,
    };
  }

  fetchData() {
    let route = 'lab/getSampleCollected';
    let success_callback = data => this.setState({ collectedSamples: data });
    let error_callback = error => this.setState({ error })
    _fetchData({ route, success_callback });
  }

  componentDidMount() {
    this.fetchData();
  }

  toggleProcessModal = () =>
    this.setState(prevState => ({
      processModalIsOpen: !prevState.processModalIsOpen,
    }));

  onRequestClick = () => {
    this.toggleProcessModal();
  };

  render() {
    const rows = [];
    this.state.collectedSamples.forEach((patient, i) => {
      rows.push(
        <tr key={i} onClick={this.onRequestClick} style={{ cursor: 'pointer' }}>
          <td>{i + 1}</td>
          <td>{patient.id}</td>
          <td>{patient.surname}{patient.firstname}</td>
          <td>{patient.gender}</td>
        </tr>
      );
    });

    return (
      <div>
        <Card>
          <CardHeader color="primary">
            <h4>Collected Samples</h4>
          </CardHeader>
          <CardBody>
            <Table bordered striped hover responsive>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
            <Process
              toggleProcessModal={this.toggleProcessModal}
              processModalIsOpen={this.state.processModalIsOpen}
            />
          </CardBody>
          <CardFooter />
        </Card>
      </div>
    );
  }
}

const Process = ({
  data = [],
  processModalIsOpen,
  toggleProcessModal = f => f,
}) => {
  return (
    <Modal isOpen={processModalIsOpen} toggle={toggleProcessModal}>
      <ModalHeader toggle={toggleProcessModal}>Request List</ModalHeader>
      <ModalBody>
      <Table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Date</th>
              <th>Sample</th>
              <th>Requesteh By</th>
              <th>Workbench</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{d.date}</td>
                <td>{d.sample}</td>
                <td>{d.seen_by}</td>
                <td> - </td>
                <td>
                  <select>
                    <option value="sample_collected">Sample Collected</option>
                    <option value="sample_not_collected">
                      Sample Not Recieved
                    </option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalBody>
    </Modal>
  );
};
