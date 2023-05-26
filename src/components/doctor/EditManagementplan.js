import React, { Component } from "react";
import {
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
} from "reactstrap";
import { connect } from "react-redux";
import { FaCheckCircle, FaCalendar } from "react-icons/fa";
import { saveManagementPlan } from "../../redux/actions/doctor";
import SpeechInput from "../comp/speech-to-text/SpeechInput";
import { Scrollbars } from "react-custom-scrollbars";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { iconButtonStyle } from "../utils/styles-helper";
import FooterButtons from "./components/FooterButtons";
import moment from "moment";
import { AiFillDelete } from "react-icons/ai";

class EditManagementplan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      managementPlan: {
        patientStatus: "",
        addedcare: "",
        appointment: {},
      },
    };
  }

  componentDidMount() {
    this.setState({ managementPlan: this.props.managementPlan });
  }

  handleSubmit = () => {
    // e.preventDefault();
    const { addedcare, patientStatus } = this.state.managementPlan;
    if (addedcare === "" && patientStatus === "") return;
    this.props.saveManagementPlan(this.state.managementPlan);
  };

  onAddedCareChange = (value) => {
    this.setState((prev) => ({
      managementPlan: { ...prev.managementPlan, addedcare: value },
    }));
  };

  handleStatusChange = (status) => {
    this.setState((prev) => ({
      managementPlan: { ...prev.managementPlan, patientStatus: status },
    }));
  };

  componentWillUnmount() {
    this.handleSubmit();
  }

  renderAppointment = (history) => {
    let appointmentDetails = this.state.managementPlan.appointment;
    if (appointmentDetails.patientId) {
      return (
        <Card className="mt-2 p-3 d-flex flex-row justify-content-between align-items-center">
          <div>
            <CardText tag="h6">Next Appointment</CardText>
            <div>
              {moment(appointmentDetails.start).calendar()} -{" "}
              {moment(appointmentDetails.end).calendar()}
            </div>
          </div>
          <div
            className="pointer"
            onClick={() =>
              this.setState((prev) => ({
                managementPlan: { ...prev.managementPlan, appointment: {} },
              }))
            }
          >
            <AiFillDelete className="text-danger" size={20} />
          </div>
        </Card>
      );
    } else {
      return (
        <div className="mt-3">
          <button
            className="btn btn-success"
            onClick={() =>
              history.push(
                `/me/doctors/appointments/new/${this.props.patient.patientHospitalId}/followup`
              )
            }
          >
            <FaCalendar className="mr-1" size={20} /> Set Appointment
          </button>
        </div>
      );
    }
  };

  render() {
    const { history } = this.props;
    const { addedcare } = this.state.managementPlan;
    return (
      <Card>
        <CardHeader tag="h6">Management Plan</CardHeader>
        {/* {JSON.stringify(this.state.managementPlan)} */}
        <CardBody style={{ height: 400 }}>
          <Scrollbars autoHide>
            <div>
              <label>Plan Of Management</label>
              <SpeechInput
                tag="textarea"
                rows="5"
                type="text"
                name="addedcare"
                value={addedcare}
                onInputChange={(text) => this.onAddedCareChange(text)}
              />
              <div className="d-flex flex-direction-row justify-content-between align-items-center">
                <ButtonGroup className="mt-3">
                  <button
                    style={iconButtonStyle}
                    onClick={() => this.handleStatusChange("admit")}
                    className={`btn ${
                      this.state.managementPlan.patientStatus === "admit"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                  >
                    {this.state.managementPlan.patientStatus === "admit" && (
                      <FaCheckCircle className="mr-2" />
                    )}
                    Admit
                  </button>
                  <button
                    style={iconButtonStyle}
                    onClick={() => this.handleStatusChange("out-patient")}
                    className={`btn ${
                      this.state.managementPlan.patientStatus === "out-patient"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                  >
                    {this.state.managementPlan.patientStatus ===
                      "out-patient" && <FaCheckCircle className="mr-2" />}
                    Out Patient
                  </button>

                  <button
                    style={iconButtonStyle}
                    onClick={() => {
                      if (
                        this.state.managementPlan.patientStatus === "follow-up"
                      ) {
                        this.handleStatusChange("");
                      } else {
                        this.handleStatusChange("follow-up");
                      }
                    }}
                    className={`btn ${
                      this.state.managementPlan.patientStatus === "follow-up"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                  >
                    {this.state.managementPlan.patientStatus ===
                      "follow-up" && <FaCheckCircle className="mr-2" />}
                    Follow-Up
                  </button>
                </ButtonGroup>

                <button className="btn btn-md btn-light">
                  Discharge Patient
                </button>
              </div>

              {this.state.managementPlan.patientStatus === "follow-up" &&
                this.renderAppointment(history)}
            </div>
          </Scrollbars>
        </CardBody>
        <CardFooter className="p-0">
          <FooterButtons
            prev={() => {
              this.handleSubmit();
              history.push(
                `/me/doctors/visits/new/${this.props.patient.patientHospitalId}/diagnosis/provisionaldiagnosis`
              );
            }}
            next={() => {
              this.handleSubmit();
              history.push(
                `/me/doctors/visits/new/${this.props.patient.patientHospitalId}/management/prescription`
              );
            }}
          />
        </CardFooter>
      </Card>
    );
  }
}

const mapStateToProps = ({ doctor }) => ({
  managementPlan: doctor.managementPlan,
});
const mapDispatchToProps = (dispatch) => ({
  saveManagementPlan: (data) => dispatch(saveManagementPlan(data)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EditManagementplan);
