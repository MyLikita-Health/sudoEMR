import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import {
  ListGroupItem,
  ListGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from 'reactstrap';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { saveProblems } from '../../redux/actions/doctor';
import SpeechInput from '../comp/speech-to-text/SpeechInput';
import { iconButtonStyle } from '../utils/styles-helper';
import FooterButtons from './components/FooterButtons';

class NewProblems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: [],
      prob: '',
      showInput: false,
    };
  }

  componentDidMount() {
    // console.log(this.props.problems);
    this.setState({ problems: this.props.problems });
  }

  handleSubmit = () => {
    const { problems } = this.state;
    const formData = [...problems];
    // console.log(formData);
    this.props.saveProblems(formData);
  };

  handleSpeechInputChange = (value, name) => {
    this.setState({
      prob: value,
    });
  };

  toggleInputShow = () => {
    this.setState((prev) => ({
      showInput: !prev.showInput,
    }));
  };

  deleteProblem = (idx) =>
    this.setState((prev) => ({
      problems: prev.problems.filter((item, i) => i !== idx),
    }));

  render() {
    const { history } = this.props;
    const { problems, prob } = this.state;
    return (
      <Card>
        <CardHeader tag="h6">Problems</CardHeader>
        <CardBody style={{ height: 400 }}>
          <Scrollbars autoHide>
            {problems.length ? (
              <ListGroup>
                {problems.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="mb-1 d-flex flex-direction-row justify-content-between align-items-center"
                    tag="div"
                  >
                    {item}
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => this.deleteProblem(index)}
                    >
                      <FaTimes className="text-danger" />
                    </span>
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : null}

            <div className="mt-2">
              <SpeechInput
                tag="textarea"
                name="prob"
                value={prob}
                // autoFocus
                onInputChange={(text) =>
                  this.handleSpeechInputChange(text, 'prob')
                }
              />

              <div className="d-flex flex-row align-items-center justify-content-center mt-2">
                <button
                  className="btn btn-outline-primary"
                  style={iconButtonStyle}
                  onClick={() => {
                    if (prob !== '') {
                      this.setState((prev) => ({
                        problems: [...prev.problems, prob],
                        prob: '',
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
                }/examination/athropometry`
              );
            }}
            next={() => {
              this.handleSubmit();
              history.push(
                `/me/doctor/visits/new/${
                  this.props.patient.patientHospitalId
                }/diagnosis/provisionaldiagnosis`
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

function mapStateToProps({ doctor }) {
  return {
    problems: doctor.problems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveProblems: (data) => dispatch(saveProblems(data)),
  };
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NewProblems);
