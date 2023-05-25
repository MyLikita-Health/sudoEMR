import React, { Component } from "react";
import { Input, InputGroup, CardHeader, Card } from "reactstrap";
import { withRouter } from "react-router-dom";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import Loading from "../../loading";
import { connect } from "react-redux";
import { compose } from "redux";
import { SET_SELECTED_PATIENT, SET_PATIENT_FORM_MODE } from "../types";

class PatientTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: [],
      visibleCount: 0,
      quickFilterValue: "",
      loading: false,
    };

    this.gridApi = null;

    this.onGridReady = this.onGridReady.bind(this);
    this.onModelUpdated = this.onModelUpdated.bind(this);
    this.onQuickFilterChange = this.onQuickFilterChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.gridApi) {
      if (this.state.quickFilterValue !== prevState.quickFilterValue) {
        this.gridApi.setQuickFilter(this.state.quickFilterValue);
      }
    }
  }

  onModelUpdated() {
    if (this.gridApi) {
      const model = this.gridApi.getModel();
      const visibleCount = model.getRowCount();

      this.setState({ visibleCount });
    }
  }

  onGridReady({ api }) {
    this.gridApi = api;
  }

  onQuickFilterChange(e) {
    this.setState({ quickFilterValue: e.target.value });
  }

  handleRowClick = ({ data }) => {
    this.props.history.push(`/me/doctors/patients/view/${data.id}`);
    this.props.selectPatient(data);
    this.props.setFormMode();
  };

  render() {
    const { rowData, visibleCount, quickFilterValue, loading } = this.state;
    const { patients } = this.props;

    if (loading) return <Loading />;
    // else if (!loading && patientlist.length) {
    return (
      <div style={{ height: 800 }}>
        <Card>
          <CardHeader
            tag="h6"
            className="d-flex justify-content-between align-items-center bg-white bb-0"
          >
            <span>Select Patient </span>
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
        <div>
          <div
            className="ag-theme-balham"
            style={{ height: "500px", overflow: "scroll" }}
          >
            <AgGridReact
              rowData={patients}
              rowSelection="multiple"
              onGridReady={this.onGridReady}
              onModelUpdated={this.onModelUpdated}
              defaultColDef={{
                sortable: true,
                resizable: true,
                filter: true,
              }}
              rowHeight={35}
              onRowClicked={this.handleRowClick}
            >
              <AgGridColumn
                headerName="S/N"
                field="patient_id"
                width={70}
                filter="agTextColumnFilter"
                // cellRenderer={({ data }) =>
                //   `${data.patientId ? data.patientId : data._id}`
                // }
              />

              <AgGridColumn
                headerName="Patient ID"
                field="id"
                width={100}
                filter="agTextColumnFilter"
                // cellRenderer={({ data }) => `${data.patientHospitalId}`}
              />
              <AgGridColumn
                headerName="Full Name"
                field="name"
                width={200}
                filter="agTextColumnFilter"
                // cellRenderer={({ data }) => `${data.surname} ${data.firstname}`}
              />
              <AgGridColumn
                headerName="Gender"
                field="Gender"
                width={80}
                filter="agTextColumnFilter"
                // cellRenderer={({ data }) => `${data.gender}`}
              />
              <AgGridColumn
                headerName="Address"
                field="address"
                width={300}
                filter="agTextColumnFilter"
                // cellRenderer={({ data }) => `${data.address}`}
              />
              <AgGridColumn
                headerName="Date of birth"
                field="DOB"
                width={100}
                filter="agTextColumnFilter"
                // cellRenderer={({ data }) => `${data.dob}`}
              />
              <AgGridColumn
                headerName="Action"
                field="email"
                width={160}
                filter="agTextColumnFilter"
                // cellRenderer={({ data }) => `${data.email}`}

                onCellClicked={({ data }) =>
                  this.props.history.push(
                    `/me/doctors/visits/new-summary/${data.id}`
                    // `/me/doctors/visits/new-summary/${
                    //   data.id
                    // }/history/presentingcomplaints`
                  )
                }
                cellRenderer={() =>
                  `<button class='btn btn-success btn-sm' >Start Consultation</button>`
                }
              />
              {/* <AgGridColumn
                headerName="Email"
                field="email"
                width={0}
                filter="agTextColumnFilter"
                // cellRenderer={() => null}
              /> */}
            </AgGridReact>
          </div>
        </div>
      </div>
    );
  }
  //   }
}

function mapStateToProps(state) {
  return {
    patients: state.individualDoc.patients,
  };
}

const mapDispatchToProps = (dispatch) => ({
  selectPatient: (patient) =>
    dispatch({ type: SET_SELECTED_PATIENT, payload: patient }),
  setFormMode: () => dispatch({ type: SET_PATIENT_FORM_MODE, payload: "VIEW" }),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(PatientTable);
