import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  UncontrolledAlert
} from 'reactstrap';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {  saveDressingRequest } from '../../redux/actions/doctor';
import SpeechInput from '../comp/speech-to-text/SpeechInput';
import { compose } from 'redux';
import { withRouter } from 'react-router';

class EditDressingRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dressingRequest: {
        dressingInfo: '',
        nursingReq: '',
      },
    };
  }

 
  componentDidMount() {
    this.setState({ dressingRequest: this.props.dressingRequest });
  }

  handleSubmit = () => {
    // e.preventDefault();
    const { dressingInfo, nursingReq } = this.state.dressingRequest;
    const formData = { dressingInfo, nursingReq };
    if (dressingInfo === '' && nursingReq === '') return;
    this.props.saveDressingRequest(formData);
  };

  handleSpeechInputChange = (value, name) => {
    this.setState((prev) => ({
      dressingRequest: { ...prev.dressingRequest, [name]: value },
    }));
  };

  componentWillUnmount() {
    this.handleSubmit();
  };

  render() {
    const { history} = this.props;
    const { dressingInfo, nursingReq } = this.state.dressingRequest;
    return (
      <Card>
        <CardHeader tag="h6">Nursing/Dressing Request</CardHeader>
        <CardBody style={{ height: 400 }}>
          <Scrollbars autoHide>
            <Form>
              <FormGroup row className="m-0 p-0">
                <label>Dressing Information</label>
                <SpeechInput
                  tag="textarea"
                  name="dressingInfo"
                  value={dressingInfo}
                  onInputChange={(text) =>
                    this.handleSpeechInputChange(text, 'dressingInfo')
                  }
                />

                
                  <label>Nursing Requests</label>
                  <SpeechInput
                    tag="textarea"
                    name="nursingReq"
                    value={nursingReq}
                    onInputChange={(text) =>
                      this.handleSpeechInputChange(text, 'nursingReq')
                    }
                  />
               
              </FormGroup>
            </Form>
            <UncontrolledAlert color="info" className="mt-4 text-center">
        Make sure you reach the last step or click the next button to save the Nursing Request before submitting
      </UncontrolledAlert>
          </Scrollbars>
        </CardBody>
        <CardFooter className='p-0'>
          <button
            className="btn btn-sm btn-outline-primary col-md-3"
            onClick={() => {
              this.handleSubmit();
              history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/management/radiologyinvestigations`
              );
            }}
          >
            <FaArrowLeft /> Prev
          </button>
          <button
            onClick={() => {
              this.handleSubmit();
              history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/management/view`
              );
            }}
            className="btn btn-sm btn-outline-primary offset-md-6 col-md-3">
            Next
            <FaArrowRight />
          </button>
        </CardFooter>
      </Card>
    );
  }
}

const mapStateToProps = ({ doctor, diagnosis, auth, individualDoc }) => ({
  dressingRequest: doctor.dressingRequest,
  labInvestigations: doctor.labInvestigations,
  savingDiagnosis: diagnosis.savingDiagnosis,
  athropometry: doctor.athropometry,
  managementPlan: doctor.managementPlan,
  prescriptionRequest: doctor.prescriptionRequest,
  observationRequest: doctor.observationRequest,
  // dressingRequest: doctor.dressingRequest,
  problems: doctor.problems,
  provisionalDiagnosis: doctor.provisionalDiagnosis,
  systemExam: doctor.systemExam,
  vitalSigns: doctor.vitalSigns,
  pComplain: doctor.presentingComplaints,
  historyOfPComplaints: doctor.historyOfPComplaints,
  medicalHistory: doctor.prevMedHistory,
  patient: individualDoc.selectedPatient,
  doctor: auth.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  saveDressingRequest: (data) => dispatch(saveDressingRequest(data)),
  submitDiagnosis: () => dispatch(),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditDressingRequest);
