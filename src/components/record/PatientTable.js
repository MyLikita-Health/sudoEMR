import React, { Component, useEffect, useState } from "react";
import Loading from "../loading";
import {
  Input,
  InputGroup,
  CardHeader,
  Card,
  Alert,
  Modal,
  ModalHeader,
  Button,
} from "reactstrap";
import { withRouter } from "react-router-dom";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { _fetchApi, _fetchApi2 } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import { _customNotify } from "../utils/helpers";
import { assignPatient } from "./actions/patientsActions";
import { compose } from "redux";
import { connect } from "react-redux";

export const accountTypes = {
  SINGLE: "Single",
  FAMILY: "Family",
  COORPORATE: "Cooporate",
  RETAINERSHIP: "Retainership",
};

export const accountTypesColors = {
  Single: "black",
  null: "black",
  Family: "blue",
  Cooporate: "orange",
  Retainership: "green",
};

class PatientTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: [],
      visibleCount: 0,
      quickFilterValue: "",
      loading: false,
      pattient: [],
      selected: {},
      openModal: false,
      // addingToWaitingList: false
    };

    this.gridApi = null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.gridApi) {
      if (this.state.quickFilterValue !== prevState.quickFilterValue) {
        this.gridApi.setQuickFilter(this.state.quickFilterValue);
      }
    }
  }
  getPatient = () => {
    _fetchApi2(
      `${apiURL()}/get/patients?query_type=all`,
      (data) => {
        if (data.success) {
          this.setState({
            pattient: data.results,
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
  onModelUpdated = () => {
    if (this.gridApi) {
      const model = this.gridApi.getModel();
      const visibleCount = model.getRowCount();

      this.setState({ visibleCount });
    }
  };

  onGridReady = ({ api }) => {
    this.gridApi = api;
  };

  onQuickFilterChange = (e) => {
    this.setState({ quickFilterValue: e.target.value });
  };
  componentDidMount() {
    this.getPatient();
  }

  addToWaitingList = ({ data }) => {
    const cb = () => {
      _customNotify("Added to waiting list!");
    };
    let assignmentObj = Object.assign(
      {},
      {
        id: data.id,
        // patientName: data.name,
        // doctorId: "",
        // doctorName: "",
        // status: "new",
        // type: "waiting",
        assigned_to: "waiting",
        query_type: "assign",
      }
    );

    this.props.assignPatient(assignmentObj, cb);
  };
  toggle = () => {
    this.setState((p) => ({ ...p, openModal: !p.openModal }));
  };
  render() {
    const { rowData, visibleCount, quickFilterValue, loading } = this.state;
    const { patientlist } = this.props;

    const getRowStyle = (params) => {
      if (params.data.accountType === "Single") {
        return { color: "black" };
      } else if (params.data.accountType === "Family") {
        return { color: "blue" };
      } else if (params.data.accountType === "Cooporate") {
        return { color: "orange" };
      } else if (params.data.accountType === "Retainership") {
        return { color: "green" };
      } else {
        return { color: "black" };
      }
    };

    if (loading) return <Loading />;
    else if (!loading && patientlist.length) {
      return (
        <div>
          {/* {JSON.stringify(this.state.openModal)} */}
          <PatientDetailModal
            open={this.state.openModal}
            toggle={this.toggle}
            data={this.state.selected}
          />
          <Card>
            <CardHeader
              tag="h6"
              className="d-flex justify-content-between align-items-center bg-white bb-0 py-2 px-2"
            >
              <span>All Patients List</span>
              <span className="font-weight-bold" />
              <div className="d-flex align-items-center">
                <span className="mr-3 text-nowrap small">
                  {visibleCount} / {rowData.length}
                </span>
                <InputGroup size="sm">
                  <Input
                    type="text"
                    placeholder="Search for a patient..."
                    value={quickFilterValue}
                    onChange={this.onQuickFilterChange}
                  />
                </InputGroup>
              </div>
            </CardHeader>
          </Card>
          {/* {JSON.stringify(this.state.pattient)} */}
          <div className="ag-theme-balham" style={{ height: "500px" }}>
            <AgGridReact
              rowData={this.state.pattient}
              rowSelection="multiple"
              onGridReady={this.onGridReady}
              onModelUpdated={this.onModelUpdated}
              defaultColDef={{
                sortable: true,
                resizable: true,
                filter: true,
              }}
              rowHeight={35}
              // getRowStyle={(params) => ({color: accountTypesColors[params.data.accountType]})}
              getRowStyle={getRowStyle}
            >
              <AgGridColumn
                headerName="Patient ID"
                field="id"
                width={100}
                filter="agTextColumnFilter"
                // cellRenderer={({ data }) => `${data.patientHospitalId}`}
              />
              {/* <AgGridColumn
                headerName="Account Type"
                field="accountType"
                width={100}
                filter="agTextColumnFilter"
                // cellRenderer={({ data }) => `${data.patientHospitalId}`}
              /> */}
              <AgGridColumn
                headerName="Full Name"
                field="name"
                width={220}
                filter="agTextColumnFilter"
                // cellRenderer={({ data }) => `${data.surname} ${data.firstname}`}
              />
              <AgGridColumn
                headerName="Address"
                field="address"
                width={370}
                filter="agTextColumnFilter"
              />
              <AgGridColumn
                headerName="Edit"
                field="id"
                width={70}
                onCellClicked={({ data }) =>
                  this.props.history.push(
                    `/me/records/patients/edit/${data.id}?patient_id=${data.id}`
                  )
                }
                cellRenderer={() =>
                  `<button class='btn btn-primary btn-sm'>Edit</button>`
                }
              />
              <AgGridColumn
                headerName="Assign"
                field="id"
                width={90}
                onCellClicked={({ data }) =>
                  this.props.history.push(
                    `/me/records/patients/assign-to-specialist/${data.id}`
                  )
                }
                cellRenderer={() =>
                  `<button class='btn btn-success btn-sm'>Assign</button>`
                }
              />
              <AgGridColumn
                headerName="Waiting List"
                field="id"
                width={130}
                onCellClicked={this.addToWaitingList}
                cellRenderer={({ data }) => {
                  // console.log(data)
                  let disabled = false;
                  return `<button ${
                    disabled ? "disabled" : ""
                  } class='btn btn-warning btn-sm'>Add to waiting list</button>`;
                }}
              />
              <AgGridColumn
                headerName="View"
                field="id"
                width={100}
                onCellClicked={({ data }) => {
                  this.setState((p) => ({
                    ...p,
                    selected: data,
                  }));
                  this.toggle();
                  // alert("HDD");
                }}
                cellRenderer={({ data }) => {
                  // console.log(data)
                  let disabled = false;
                  return `<button ${
                    disabled ? "disabled" : ""
                  } class='btn btn-success btn-sm'>View</button>`;
                }}
              />
            </AgGridReact>
          </div>
        </div>
      );
    } else {
      return (
        <Alert className="text-center">
          Nothing to display, add a new patient to get started.
        </Alert>
      );
    }
  }
}

export default compose(
  withRouter,
  connect(
    // (state) => ({
    //   assigned: state.diagnosis.patientAssignedToDoc,
    //   waiting: state.diagnosis.waitingList,
    // }),
    null,
    (dispatch) => ({
      assignPatient: (a, b, c) => dispatch(assignPatient(a, b, c)),
    })
  )
)(PatientTable);

function PatientDetailModal({ open = false, toggle = (f) => f, data = {} }) {
  const [imageUrl, setImageUrl] = useState("");
  const [other, setOther] = useState({});
  const getPatientInfo = () => {
    console.log(data.id);
    _fetchApi(
      `${apiURL()}/patientrecords/patient/${data.id}`,
      (data) => {
        // if (data && data.length) {
        //   console.log(data.results)
        let info = data.results[0];
        // alert(JSON.stringify(info));
        setOther(info);
        setImageUrl(`${apiURL()}/${info.patient_passport}`);
        // }
      },
      (err) => console.log(err)
    );
  };
  useEffect(() => {
    if (open) {
      getPatientInfo();
    }
  });
  return (
    <>
      <Modal isOpen={open} toggle={toggle} size="lg">
        <ModalHeader
          toggle={toggle}
          close={
            <Button size="sm" color="danger" onClick={toggle} className="close">
              x
            </Button>
          }
        >
          Patient Information
        </ModalHeader>
        <div className="d-flex">
          <div className="m-5">
            <div className="cards">
              <form className="_forms">
                <label className="custom-file-upload fas _label">
                  <div className="img-wrap">
                    <img
                      for="photo-upload"
                      src={imageUrl}
                      alt="patient_pass"
                      className="imgs img-fluid"
                    />
                  </div>
                </label>
              </form>
            </div>
            {/* {JSON.stringify(imageUrl)} */}
          </div>
          <div className="m-5">
            <h5 className="text-center">Patient Information</h5>
            <center>
              <h4 className="font-weight-bold">Full Name: {data.name}</h4>
            </center>

            <div>
              <span className="font-weight-bold">Address: </span>
              {data.address}
            </div>
            <div>
              <span className="font-weight-bold">Local Gvt: </span>
              {data.lga}
            </div>
            <div>
              <span className="font-weight-bold">Gender: </span>
              {data.Gender}
            </div>
            <div>
              <span className="font-weight-bold">DOB: </span>
              {data.DOB}
            </div>
            <div>
              <span className="font-weight-bold">Email: </span>
              {data.email}
            </div>
            <div>
              <span className="font-weight-bold">Patient Id: </span>
              {data.id}
            </div>
            <div>
              <span className="font-weight-bold">Account No: </span>
              {data.accountNo}
            </div>
            <div>
              <span className="font-weight-bold">Account Type: </span>
              {data.accountType}
            </div>
            <div>
              <span className="font-weight-bold">Occupation: </span>
              {other.occupation}
            </div>
            <hr />
            <h5 className="text-center">Next Of King Information</h5>
            <div>
              <span className="font-weight-bold">
                Next Of King Relationship:{" "}
              </span>
              {other.nextOfKinRelationship}
            </div>
            <div>
              <span className="font-weight-bold">Next Of King Name: </span>
              {other.nextOfKinName}
            </div>
            <div>
              <span className="font-weight-bold">Next Of King Phone: </span>
              {other.nextOfKinPhone}
            </div>
            <div>
              <span className="font-weight-bold">Next Of King Address: </span>
              {other.nextOfKinAddress}
            </div>
            <div>
              <span className="font-weight-bold">Next Of King Email: </span>
              {other.nextOfKinEmail}
            </div>
            <hr />
            <h5 className="text-center">Other Information</h5>
            <div>
              <span className="font-weight-bold">File Created At: </span>
              {other.dateCreated}
            </div>
            <div>
              <span className="font-weight-bold">Balance: </span>
              {other.balance}
            </div>
            <div>
              <span className="font-weight-bold">Beneficiary Number: </span>
              {other.beneficiaryNo}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
