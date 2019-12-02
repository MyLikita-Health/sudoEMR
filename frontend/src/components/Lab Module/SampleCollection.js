import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Table, Modal,ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
// import ProcessReq from './ProcessReq';
import PendingRequestProcess from './PendingRequestProcess'
import { _fetchData, _updateData } from '../helpers';

export default class SampleCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labrequests: [],
      processModalIsOpen: false,
      currentPatient: [],
      patients: [],
      requestByPatient: [],
      error: '',
    };
  }

  getPendingReq() {
    let route = 'lab/pending';
    let success_callback = data => this.setState({ labrequests: data });
    let error_callback = error => this.setState({ error });
    _fetchData({ route, success_callback, error_callback });
  }

  componentDidMount() {
    this.getPendingReq();
  }

  toggleProcessModal = () =>
    this.setState(prevState => ({
      processModalIsOpen: !prevState.processModalIsOpen,
    }));

  onRequestClick = req => {
    // console.log(req)
    this.setState({ currentPatient: req });
    this.toggleProcessModal();
    this.getLabRequest(req.id);
  };

  getLabRequest(id) {
    let route = 'lab/getReqById?id=' + id;
    let success_callback = data => this.setState({ requestByPatient: data });

    _fetchData({ route, success_callback });
  }

  render() {
    let { labrequests, patients,processModalIsOpen, currentPatient } = this.state;
    let { toggleProcessModal, onRequestClick } = this;
    return (
      <Fragment>
        <Card>
          <CardHeader color="primary">
            <h5 className="text-center">Pending Lab Requests</h5>
          </CardHeader>
          <CardBody>
            <RequestTable
              labrequests={labrequests}
              onRequestClick={this.onRequestClick}
            />
            <Modal size="lg" isOpen={processModalIsOpen} toggle={toggleProcessModal}>
        <ModalHeader toggle={toggleProcessModal}>
          <p className="text-center">Request List</p>
        </ModalHeader>
        <ModalBody>
            {/* <ProcessReq
              patient={this.state.currentPatient}
              toggleProcessModal={this.toggleProcessModal}
              processModalIsOpen={this.state.processModalIsOpen}
              updatePendingRequestTable={this.props.updatePendingRequestTable}
              requests={this.state.requestByPatient}
            /> */}
            <PendingRequestProcess
            // requests={requestForThisPatient}
            // resultModalOpen={resultModalOpen}
            // previewModalOpen={previewModalOpen}
            // toggleResultModal={toggleResultModal}
            // togglePreviewModal={togglePreviewModal}
            // saveLabResults={saveLabResults}
            // onStatusChange={onStatusChange}
            // onStatusUnchanged={onStatusUnchanged}
            currentReq={currentPatient}
            // req={req}
          />
            </ModalBody>
        <ModalFooter>
          {/* <button className="btn btn-primary" onClick={this.onSaveClick}>
            Save
          </button> */}
        </ModalFooter>
      </Modal>
          </CardBody>
          <CardFooter />
        </Card>
      </Fragment>
    );
  }
}

export const RequestTable = ({ labrequests = [], onRequestClick = f => f }) => {
  // const rows = [];
  let date = new Date();

  return (
    <>
      {!labrequests.length ? (
        <p>
          <i>Fetching</i>
        </p>
      ) : (
        <Table bordered striped hover responsive>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              {/* <th>Age</th> */}
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {labrequests.map((req, i) => (
              <tr
                key={i}
                onClick={() => onRequestClick(req)}
                style={{ cursor: 'pointer' }}>
                <td>{req.id}</td>
                <td>
                  {req.firstname}
                  {req.surname}
                </td>
                {/* <td>{date.getFullYear() - parseInt(req.DOB.slice(0, 4))}</td> */}
                <td>{req.gender}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
