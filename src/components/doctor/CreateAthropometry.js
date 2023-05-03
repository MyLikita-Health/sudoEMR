import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import {
  Form,
  FormGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';
import { saveAthropometry } from '../../redux/actions/doctor';
import SpeechInput from '../comp/speech-to-text/SpeechInput';
import FooterButtons from './components/FooterButtons';

class CreateAthropometry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athropometry: {
        weight: '',
        headcircumference: '',
        height: '',
        muac: '',
      },
    };
  }

  componentDidMount() {
    this.setState({ athropometry: this.props.athropometry });
  }

  handleSubmit = () => {
    // e.preventDefault();
    const { weight, headcircumference, height, muac } = this.state.athropometry;
    const formData = {
      weight,
      headcircumference,
      height,
      muac,
    };
    if (
      weight === '' &&
      headcircumference === '' &&
      height === '' &&
      muac === ''
    )
      return;
    this.props.saveAthropometry(formData);
    // return localStorage.setItem('athropometry', JSON.stringify(formData))
    // console.log(formData)
  };

  handleSpeechInputChange = (value, name) => {
    this.setState((prev) => ({
      athropometry: { ...prev.athropometry, [name]: value },
    }));
  };

  onInputChange = ({ target: { name, value } }) =>
    this.setState((prev) => ({
      athropometry: { ...prev.athropometry, [name]: value },
    }));

  render() {
    const { weight, headcircumference, height, muac } = this.state.athropometry;
    const { history } = this.props;
    const { onInputChange } = this;
    return (
      <Card>
        <CardHeader tag="h6">Athropometry</CardHeader>
        <CardBody style={{ height: 400 }}>
          <Scrollbars autoHide>
            <Form>
              {/* {JSON.stringify(this.state.athropometry)} */}
              <FormGroup row>
                <div className="col-md-4 col-lg-4">
                  <label>Height</label>
                  <InputGroup>
                    <Input
                      name="height"
                      value={height}
                      onChange={onInputChange}
                    />
                    <InputGroupAddon addonType="append">cm</InputGroupAddon>
                  </InputGroup>
                </div>

                <div className="col-md-4 col-lg-4">
                  <label>Weight</label>
                  <InputGroup>
                    <Input
                      name="weight"
                      value={weight}
                      onChange={onInputChange}
                    />
                    <InputGroupAddon addonType="append">(kg)</InputGroupAddon>
                  </InputGroup>
                </div>
                <div className="col-md-4 col-lg-4">
                  <label className="">
                    Body Mass(kg/m<sup>2</sup>):
                  </label>
                  <div>
                    <span className="display-4" style={{ fontSize: 26 }}>
                      {(
                        parseFloat(weight) / parseFloat((height / 100) ** 2)
                      ).toFixed(2) || 0}
                    </span>
                  </div>
                </div>
              </FormGroup>
              <FormGroup row>
                <div className="col-md-6">
                  <label>Head Circumference</label>
                  <SpeechInput
                    tag="textarea"
                    name="headcircumference"
                    value={headcircumference}
                    onInputChange={(text) =>
                      this.handleSpeechInputChange(text, 'headcircumference')
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label>MUAC</label>
                  <SpeechInput
                    tag="textarea"
                    name="muac"
                    value={muac}
                    onInputChange={(text) =>
                      this.handleSpeechInputChange(text, 'muac')
                    }
                  />
                </div>
              </FormGroup>

              {/* <FormGroup row>
                <div className="col-md-6">
                  <label>Height/Length</label>
                  <SpeechInput
                    tag="textarea"
                    name="athropometry_height"
                    value={athropometry_height}
                    onInputChange={(text) =>
                      this.handleSpeechInputChange(text, 'athropometry_height')
                    }
                  />
                </div>

                <div className="col-md-6">
                  <label>Weight</label>
                  <SpeechInput
                    tag="textarea"
                    name="athropometry_weight"
                    value={athropometry_weight}
                    onInputChange={(text) =>
                      this.handleSpeechInputChange(text, 'athropometry_weight')
                    }
                  />
                </div>

              </FormGroup> */}
            </Form>
          </Scrollbars>
        </CardBody>
        <CardFooter className='p-0'>
          <FooterButtons
            prev={() => {
              this.handleSubmit();
              history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/examination/systemexam`
              );
            }}
            next={() => {
              this.handleSubmit();
              history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/diagnosis/problems`
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

const mapStateToProps = ({ doctor }) => ({ athropometry: doctor.athropometry });
const mapDispatchToProps = (dispatch) => ({
  saveAthropometry: (data) => dispatch(saveAthropometry(data)),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CreateAthropometry);
