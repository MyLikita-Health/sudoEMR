import React from "react";
import BasicInformation from "./BasicInfomation";
import ContactInformation from "./ContactInformation";
import NextOfKinInformation from "./NextOfKin";
import Scrollbars from "react-custom-scrollbars";
// import BackButton from '../components/BackButton';
import { WarningModal } from "../../comp/components/Modal";
import { FaTimes } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { iconClass } from "../appointments/NewAppointment2";
import { connect } from "react-redux";
import { savePatient, getNextPatientId } from "../actions/patientsActions";
import { _customNotify, _warningNotify } from "../../utils/helpers";
import { compose } from "redux";
import { withRouter } from "react-router";
import BackButton from "../../comp/components/BackButton";

class NewPatient extends React.PureComponent {
  state = {
    patient: {
      patientNo: "",
      patientId: "",
      patientHospitalId: "",
      firstname: "",
      surname: "",
      gender: "",
      dob: "",
      maritalStatus: "",
      occupation: "",
      phone: "",
      email: "",
      address: "",
      nextOfKinName: "",
      nextOfKinRelationship: "",
      nextOfKinPhone: "",
      nextOfKinEmail: "",
      nextOfKinAddress: "",
    },

    warningIsOpen: false,
    submitting: false,
  };

  componentDidMount() {
    // this.props.getNextId((id) =>
    //   this.setState((prev) => ({
    //     patient: {
    //       ...prev.patient,
    //       patientId: `${this.props.prefix}${id}`,
    //       patientNo: id,
    //     },
    //   }))
    // );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(nextProps.patient)
    if (nextProps.patient) {
      return { patient: nextProps.patient };
    } else return null;
  }

  componentDidUpdate(nextProps) {
    if (nextProps.patient) {
      this.setState({ patient: nextProps.patient });
    }
  }

  resetForm = () => {
    this.setState({
      patient: {
        patientNo: "",
        patientId: "",
        patientHospitalId: "",
        firstname: "",
        surname: "",
        gender: "",
        dob: "",
        maritalStatus: "",
        occupation: "",
        phone: "",
        email: "",
        address: "",
        nextOfKinName: "",
        nextOfKinRelationship: "",
        nextOfKinPhone: "",
        nextOfKinEmail: "",
        nextOfKinAddress: "",
      },
    });
  };

  submit = () => {
    const {
      patientNo,
      patientId,
      patientHospitalId,
      firstname,
      surname,
      gender,
      dob,
      maritalStatus,
      occupation,
      phone,
      email,
      address,
      nextOfKinName,
      nextOfKinRelationship,
      nextOfKinPhone,
      nextOfKinEmail,
      nextOfKinAddress,
    } = this.state.patient;

    if (
      // patientId === '' ||
      firstname === "" ||
      phone === "" ||
      gender === "" ||
      dob === ""
    ) {
      _warningNotify("Please complete the form");
    } else {
      this.setState({ submitting: true });
      const formData = {
        patientNo,
        patientId,
        patientHospitalId,
        firstname,
        surname,
        gender,
        dob,
        maritalStatus,
        occupation,
        phone,
        email,
        address,
        nextOfKinName,
        nextOfKinRelationship,
        nextOfKinPhone,
        nextOfKinEmail,
        nextOfKinAddress,
      };

      // console.log(formData);
      this.props.savePatient(
        formData,
        (patient) => {
          this.setState({ submitting: false });
          this.resetForm();
          _customNotify("Patient Saved!");
          this.props.history.push(
            `/me/doctors/patients/view/${patient.patientHospitalId}/diagnoses`
          );
        },
        () => this.setState({ submitting: false })
      );
    }
  };

  exit = () => {
    this.toggleWarningModal();
  };

  toggleWarningModal = () => {
    this.setState((prev) => ({ warningIsOpen: !prev.warningIsOpen }));
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState((prev) => ({
      patient: { ...prev.patient, [name]: value },
    }));
  };

  render() {
    const {
      patient: {
        patientId,
        patientHospitalId,
        firstname,
        surname,
        gender,
        dob,
        maritalStatus,
        occupation,
        phone,
        email,
        address,
        nextOfKinName,
        nextOfKinRelationship,
        nextOfKinPhone,
        nextOfKinEmail,
        nextOfKinAddress,
      },
      warningIsOpen,
      submitting,
    } = this.state;
    const { exit, toggleWarningModal, onInputChange, submit } = this;
    const { mode } = this.props;
    return (
      <>
        {this.props.location.pathname === "/me/doctors/patients/new" && (
          <BackButton />
        )}

        <Scrollbars style={{ height: "90vh" }} autoHide>
          {/* <span>{mode}</span> */}

          <BasicInformation
            patientId={patientId}
            patientHospitalId={patientHospitalId}
            firstname={firstname}
            surname={surname}
            gender={gender}
            dob={dob}
            maritalStatus={maritalStatus}
            occupation={occupation}
            onInputChange={onInputChange}
            mode={mode}
          />

          <ContactInformation
            phone={phone}
            email={email}
            address={address}
            onInputChange={onInputChange}
            mode={mode}
          />

          <NextOfKinInformation
            nextOfKinName={nextOfKinName}
            nextOfKinRelationship={nextOfKinRelationship}
            nextOfKinPhone={nextOfKinPhone}
            nextOfKinEmail={nextOfKinEmail}
            nextOfKinAddress={nextOfKinAddress}
            onInputChange={onInputChange}
          />

          {mode === "EDITABLE" ? (
            <div className="d-flex flex-direction-row justify-content-center">
              <div className="btn-group btn-group mt-2 mb-2">
                <button
                  className="btn btn-outline-primary mr-1"
                  onClick={submit}
                >
                  {submitting ? (
                    "Loading..."
                  ) : (
                    <span className={iconClass}>
                      <BsCheck size={20} className="mr-1" /> Submit
                    </span>
                  )}
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => exit()}
                >
                  <span className={iconClass}>
                    <FaTimes size={20} className="mr-1" /> Cancel
                  </span>
                </button>
              </div>
            </div>
          ) : null}

          <WarningModal
            title="Confirm"
            body="All form data will be lost, Exit?"
            isOpen={warningIsOpen}
            toggle={toggleWarningModal}
            okay={() => this.props.history.push("/me/doctors/patients")}
            // cancel={() => toggleWarningModal()}
          />
        </Scrollbars>
      </>
    );
  }
}

const mapStateToProps = ({ individualDoc: { formMode }, auth: { user } }) => ({
  mode: formMode,
  prefix: user.prefix,
});

function mapDispatchToProps(dispatch) {
  return {
    savePatient: (data, cb, err) => dispatch(savePatient(data, cb, err)),
    getNextId: (cb) => dispatch(getNextPatientId(cb)),
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NewPatient);
