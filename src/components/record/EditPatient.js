import React from 'react';
import { withRouter } from 'react-router';
import BasicInformation from '../doc_dash/patients/BasicInfomation';
import ContactInformation from '../doc_dash/patients/ContactInformation';
import NextOfKin from '../doc_dash/patients/NextOfKin';
import BackButton from '../comp/components/BackButton';
import { iconClass } from '../doc_dash/appointments/NewAppointment2';
import { BsCheck } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { WarningModal } from '../comp/components/Modal';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getPatient, updatePatient } from './actions/patientsActions';

class EditPatient extends React.Component {
  state = {
    patient: {
      _id: '',
      patientNo: '',
      patientId: '',
      patientHospitalId: '',
      firstname: '',
      surname: '',
      gender: '',
      dob: '',
      maritalStatus: '',
      occupation: '',
      phone: '',
      email: '',
      address: '',
      nextOfKinName: '',
      nextOfKinRelationship: '',
      nextOfKinPhone: '',
      nextOfKinEmail: '',
      nextOfKinAddress: '',
    },

    warningIsOpen: false,
    submitting: false,
  };
  submit = () => {
    this.setState({ submitting: true });

    this.props._updatePatient(this.state.patient, (patient) => {
      this.setState({ submitting: false });
      if (patient) {
        this.setState({ patient });
      }
    });
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState((prev) => ({
      patient: { ...prev.patient, [name]: value },
    }));
  };

  componentDidMount() {
    let patientId = this.props.match.params.id;
    this.props._getPatient(patientId, (patient) => this.setState({ patient }));
  }

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
    return (
      <>
        <BackButton />

        {/* <Scrollbars style={{ height: '90vh' }} autoHide> */}
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
        />
        <ContactInformation
          phone={phone}
          email={email}
          address={address}
          onInputChange={onInputChange}
        />
        <NextOfKin
          nextOfKinName={nextOfKinName}
          nextOfKinRelationship={nextOfKinRelationship}
          nextOfKinPhone={nextOfKinPhone}
          nextOfKinEmail={nextOfKinEmail}
          nextOfKinAddress={nextOfKinAddress}
          onInputChange={onInputChange}
        />

        <div className="d-flex flex-direction-row justify-content-center">
          <div className="btn-group btn-group mt-2 mb-2">
            <button className="btn btn-outline-primary mr-1" onClick={submit}>
              {submitting ? (
                'Loading...'
              ) : (
                <span className={iconClass}>
                  <BsCheck size={20} className="mr-1" /> Update
                </span>
              )}
            </button>
            <button className="btn btn-outline-danger" onClick={() => exit()}>
              <span className={iconClass}>
                <FaTimes size={20} className="mr-1" /> Cancel
              </span>
            </button>
          </div>
        </div>

        <WarningModal
          title="Confirm"
          body="All form data will be lost, Exit?"
          isOpen={warningIsOpen}
          toggle={toggleWarningModal}
          okay={() => this.props.history.push('/me/doctor/patients')}
          // cancel={() => toggleWarningModal()}
        />
        {/* </Scrollbars> */}
      </>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    // savePatient: (data, err, success) => dispatch(savePatient(data, err, success)),
    _getPatient: (id, cb) => dispatch(getPatient(id, cb)),
    _updatePatient: (patient, cb) => dispatch(updatePatient(patient, cb)),
  };
}
export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps,
  ),
)(EditPatient);
