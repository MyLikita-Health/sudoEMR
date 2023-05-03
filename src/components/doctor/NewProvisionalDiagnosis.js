import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { saveProvisionalDiagnosis } from '../../redux/actions/doctor';
import SpeechInput from '../comp/speech-to-text/SpeechInput';
import { iconButtonStyle } from '../utils/styles-helper';
import FooterButtons from './components/FooterButtons';

class NewProvisionalDiagnosis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      provisionalDiagnosis: [],
      diagnosis: '',
      showInput: false,
    };
  }

  componentDidMount() {
    this.setState({ provisionalDiagnosis: this.props.provisionalDiagnosis });
  }

  handleSubmit = () => {
    // e.preventDefault();
    const { provisionalDiagnosis } = this.state;
    const formData = [...provisionalDiagnosis];
    // console.log(formData);
    this.props.saveProvisionalDiagnosis(formData);
  };

  handleSpeechInputChange = (value, name) => {
    this.setState({
      diagnosis: value,
    });
  };

  deleteDiagnosis = (idx) =>
    this.setState((prev) => ({
      provisionalDiagnosis: prev.provisionalDiagnosis.filter(
        (item, i) => i !== idx
      ),
    }));

  render() {
    const { history } = this.props;
    const { provisionalDiagnosis, diagnosis } = this.state;
    return (
      <Card>
        <CardHeader tag="h6">Provisional Diagnosis</CardHeader>
        <CardBody style={{ height: 400 }}>
          <Scrollbars autoHide>
            {provisionalDiagnosis.length ? (
              <ListGroup>
                {provisionalDiagnosis.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="mb-1 d-flex flex-direction-row justify-content-between align-items-center"
                    tag="div"
                  >
                    {item}
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => this.deleteDiagnosis(index)}
                    >
                      <FaTimes className="text-danger" />
                    </span>
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : null}

            <div className=" mt-2">
              <SpeechInput
                tag="textarea"
                name="diagnosis"
                value={diagnosis}
                // autoFocus
                onInputChange={(text) =>
                  this.handleSpeechInputChange(text, 'provisionalDiagnosis1')
                }
              />

              <div className="d-flex flex-row align-items-center justify-content-center mt-2">
                <button
                  className="btn btn-outline-primary"
                  style={iconButtonStyle}
                  onClick={() => {
                    if (diagnosis !== '') {
                      this.setState((prev) => ({
                        provisionalDiagnosis: [
                          ...prev.provisionalDiagnosis,
                          diagnosis,
                        ],
                        diagnosis: '',
                      }));
                    }
                  }}
                >
                  <FaPlus className="mr-1" />
                  Add to list
                </button>
              </div>
            </div>
          </Scrollbars>
        </CardBody>
        <CardFooter className='p-0'>
          <FooterButtons
            prev={() => {
              this.handleSubmit();
              history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/diagnosis/problems`
              );
            }}
            next={() => {
              this.handleSubmit();
              history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/management/plan`
              );
            }}
          />
        </CardFooter>
      </Card>
    );
  }

  componentWillUnmount() {
    this.handleSubmit();
  }
}

const mapStateToProps = ({ doctor }) => ({
  provisionalDiagnosis: doctor.provisionalDiagnosis,
});
const mapDispatchToProps = (dispatch) => ({
  saveProvisionalDiagnosis: (data) => dispatch(saveProvisionalDiagnosis(data)),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NewProvisionalDiagnosis);
