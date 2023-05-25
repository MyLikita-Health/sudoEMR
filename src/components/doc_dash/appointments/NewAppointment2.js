import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import AutoComplete from "../../comp/components/AutoComplete";
// import DatePicker from '../components/DatePicker';
import InputGroup, { TextArea } from "../../comp/components/InputGroup";
import SelectInput from "../../comp/components/SelectInput";
import BackButton from "../../comp/components/BackButton";
import { FaTimes } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { connect } from "react-redux";
import { getPatientList, clearPatient } from "../actions/patientsActions";
import { appointmentFunc } from "../actions/appointmentsAction";
import { _customNotify, _warningNotify } from "../../utils/helpers";
import { compose } from "redux";
import { withRouter } from "react-router";
import DateTimePicker from "../../comp/components/DateTimePicker";

export const iconClass = "d-flex flex-direction-row align-items-center";

class NewAppointment extends React.PureComponent {
  state = {
    appointment: {
      _id: "",
      patientId: "",
      start: new Date(),
      end: new Date(),
      location: "",
      appointmentType: "",
      title: "",
      reason: "",
    },
    patient: {},
    submitting: false,
  };

  resetForm = () => {
    this.setState({
      patientId: "",
      title: "",
      start: "",
      end: "",
      location: "",
      appointmentType: "",
      reason: "",
    });
  };

  componentDidMount() {
    this.props.getPatients();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(nextProps);
    if (Object.values(nextProps.selectedPatient).length) {
      return {
        appointment: {
          ...prevState.appointment,
          patientId: nextProps.selectedPatient.patientHospitalId,
        },
      };
    } else return null;
  }

  //   componentDidUpdate(nextProps) {
  //   console.log(nextProps)
  // if (nextProps.patient) {
  //   this.setState({ patient: nextProps.patient });
  // }
  //   }

  //   componentDidUpdate(nextProps) {
  //     if (nextProps.selectedPatient) {
  //       this.setState({
  //         appointment: {
  //           ...this.state.appointment,
  //           patientId: nextProps.selectedPatient.patientHospitalId,
  //         },
  //       })
  //     }
  //   }

  toggleSubmit = () =>
    this.setState((prev) => ({ submitting: !prev.submitting }));

  onInputChange = ({ target: { name, value } }) =>
    this.setState((prev) => ({
      appointment: { ...prev.appointment, [name]: value },
    }));

  submit = (e) => {
    e.preventDefault();
    this.toggleSubmit();
    const {
      patientId,
      start,
      end,
      location,
      appointmentType,
      reason,
    } = this.state.appointment;
    const formData = {
      patientId,
      start,
      end,
      location,
      appointmentType,
      reason,
    };

    let cb = () => {
      this.toggleSubmit();
      this.resetForm();
      _customNotify("Appointment created and added to calender");
      this.props.history.push(
        `/me/doctors/patients/view/${patientId}/appointments`
      );
    };
    let err = () => {
      _warningNotify("An error occurred");
      this.toggleSubmit();
    };
    this.props.appointmentFunc(formData, cb, err);
  };

  handleStartDateChange = (date) => {
    this.setState((prev) => ({
      appointment: { ...prev.appointment, start: date },
    }));
  };

  handleEndDateChange = (date) => {
    this.setState((prev) => ({
      appointment: { ...prev.appointment, end: date },
    }));
  };

  render() {
    const {
      appointment: { fromDate, toDate, location, appointmentType, reason },
    } = this.state;
    const { patients } = this.props;
    const {
      onInputChange,
      submit,
      handleStartDateChange,
      handleEndDateChange,
    } = this;
    return (
      <div>
        <BackButton />
        <Card>
          <CardHeader tag="h6">New Appointment</CardHeader>
          <CardBody>
            <AutoComplete
              label="Patient"
              placeholder="Search for patient..."
              options={patients}
              labelKey={(item) =>
                `${item.surname} ${item.firstname} (${item.patientId})`
              }
              onChange={(item) => {
                //   console.log(item[0])
                this.props.clearPatient();
                if (item.length) {
                  this.setState((prev) => ({
                    patient: item[0],
                    appointment: {
                      ...prev.appointment,
                      patientId: item[0].patientId,
                      _id: item[0]._id,
                      title: `${item[0].surname} ${item[0].firstname} (${this.state.appointment.appointmentType})`,
                    },
                  }));
                }
              }}
            />
            {/* {JSON.stringify(this.state.appointment)} */}
            {/* {JSON.stringify(this.state.patient)} */}
            {/* <div className="d-flex flex-direction-row justify-content-between p-0"> */}
            <div className="row m-0 p-0">
              <DateTimePicker
                label="Start Date"
                container="p-0"
                name="fromDate"
                value={fromDate}
                onChange={handleStartDateChange}
                required
              />
              <DateTimePicker
                label="End Date"
                container="p-0 offset-md-4"
                name="toDate"
                value={toDate}
                onChange={handleEndDateChange}
                required
              />
            </div>

            <div className="d-flex flex-direction-row justify-content-between p-0">
              <InputGroup
                name="location"
                value={location}
                label="Location"
                placeholder="Location"
                container="p-0"
                onChange={onInputChange}
              />

              <SelectInput
                container="p-0"
                label="Apointment Type"
                options={[
                  "Checkup",
                  "Emergency",
                  "Follow up",
                  "Routine",
                  "Walk in",
                ]}
                name="appointmentType"
                value={appointmentType}
                onChange={({ target: { value } }) => {
                  this.setState((prev) => ({
                    appointment: {
                      ...prev.appointment,
                      appointmentType: value,
                      title: `${prev.patient.surname} ${prev.patient.firstname} (${value})`,
                    },
                  }));
                }}
              />
            </div>

            <TextArea
              label="Reason"
              name="reason"
              value={reason}
              onChange={onInputChange}
            />

            <div className="d-flex flex-direction-row justify-content-center">
              <div className="btn-group btn-group mt-2 mb-2">
                <button
                  className="btn btn-outline-primary mr-1"
                  onClick={submit}
                >
                  <span className={iconClass}>
                    <FiSend size={20} className="mr-1" />
                    Submit
                  </span>
                </button>
                <button className="btn btn-outline-danger">
                  <span className={iconClass}>
                    <FaTimes size={20} className="mr-1" />
                    Cancel
                  </span>
                </button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    patients: state.individualDoc.patients,
    selectedPatient: state.individualDoc.selectedPatient,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPatients: () => dispatch(getPatientList()),
    appointmentFunc: (data, cb, err) =>
      dispatch(appointmentFunc(data, cb, err)),
    clearPatient: () => dispatch(clearPatient()),
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NewAppointment);
