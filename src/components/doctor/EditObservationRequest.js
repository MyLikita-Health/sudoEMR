import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { saveObservationRequest } from '../../redux/actions/doctor';
import SpeechInput from '../comp/speech-to-text/SpeechInput';

class EditObservationRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      observation_request: '',
    };
  }

  componentDidMount() {
    this.setState({ observation_request: this.props.observation_request });
  }

  handleSubmit = () => {
    // e.preventDefault();
    const { observation_request } = this.state;
    if (observation_request === '') return;
    this.props.saveObservationRequest(observation_request);
    // return localStorage.setItem('observation_request', this.state.observation_request);
  };

  onObservationRequestChange = e => {
    this.setState({ observation_request: e.target.value });
  };

  render() {
    const { setComponent } = this.props;
    return (
      <Card>
        <CardHeader tag="h6">Observation Request</CardHeader>
        <CardBody style={{ height: 400 }}>
          <Scrollbars autoHide>
            <Form>
              <FormGroup row>
                <div className="col-md-12">
                  <label>Observation Request</label>
                  <SpeechInput
                    tag="textarea"
                    rows="7"
                    name="observation_request"
                    value={this.state.observation_request}
                    onInputChange={text =>
                      this.setState({ observation_request: text })
                    }
                  />
                </div>
              </FormGroup>
            </Form>
          </Scrollbars>
        </CardBody>
        <CardFooter className='p-0'>
          <button
            className="btn btn-sm btn-outline-primary col-md-3"
            onClick={() => {
              this.handleSubmit();
              setComponent('EditDressingRequest');
            }}>
            <FaArrowLeft /> Prev
          </button>
          <button
            onClick={() => {
              this.handleSubmit();
              setComponent('EditPrescriptionRequest');
            }}
            className="btn btn-sm btn-outline-primary offset-md-6 col-md-3">
            Next
            <FaArrowRight />
          </button>
        </CardFooter>
      </Card>
    );
  }

  componentWillUnmount() {
    this.handleSubmit();
  }
}

const mapStateToProps = ({ doctor }) => ({
  observation_request: doctor.observation_request,
});

const mapDispatchToProps = dispatch => ({
  saveObservationRequest: data => dispatch(saveObservationRequest(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditObservationRequest);
