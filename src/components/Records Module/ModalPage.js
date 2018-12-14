import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Label,
  FormGroup,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FormErrors } from './FormErrors';
import defaultImage from '../../images/default_image.png';
import { _fetchData, _postData } from '../helpers';

/**
 * The modal page for registering new patients
 * It consists of the input fields for filling the
 * details of the patient
 */
class ModalPage extends React.Component {
  constructor(props) {
    super(props);

    //initiating the state
    this.state = {
      id: '',
      surname: '',
      firstname: '',
      gender: '',
      age: '',
      maritalstatus: '',
      DOB: '',
      tribe: '',
      religion: '',
      phoneNo: '',
      email: '',
      nationality: '',
      state: '',
      lga: '',
      occupation: '',
      address: '',
      kinName: '',
      kinrelationship: '',
      kinphone: '',
      kinemail: '',
      kinoccupation: '',
      kinAddress: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
      modal: false,
      selectedFile: ""
    };
  }

  /**
   * Handles the gender text field change
   */
  setGender = e => {
    this.setState({ gender: e.target.value });
  };

  /**
   * Handles change in the text field
   */
  logChange = e => {
    this.setState({ [e.target.ref]: e.target.value });
  };

  /**
   * This toggles the modal page
   */
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  /**
   * This handles the change when user input some
   * data in the text fields
   */
  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  /**
   * The method that validates the text fields and enable
   *  the submit button only if all data in the fields are valid
   */
  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let firstnameValid = this.state.firstnameValid;
    let surnameValid = this.state.surnameValid;

    /**
     * this sets the condition for each field using the fieldName
     *  and also the corresponding error if the condition
     *  is not met
     */
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'firstname':
        firstnameValid = value.length > 0;
        fieldValidationErrors.firstname = firstnameValid ? '' : ' is too short';
        break;
      case 'surname':
        surnameValid = value.length > 0;
        fieldValidationErrors.surname = surnameValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        firstnameValid: firstnameValid,
        surnameValid: surnameValid,
      },
      this.validateForm
    );
  };

  /**
   * The method that eventually validate the form
   */
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.firstnameValid &&
        this.state.surnameValid,
    });
  }

  //if there is error
  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  /**
   * Handles the submit button click
   */
  handleSubmit = event => {
    event.preventDefault();
    const data = {};
    data.gender = this.state.gender;
    for (const field in this.refs) {
      data[field] = this.refs[field].value;
    }

    this.props.receiveState(data);

    let route = 'patientrecords/new';
    let callback = () => this.setState({ msg: 'Thanks for registering' });
    _postData({ route, data, callback });
  };

  get = () => {
    let self = this;
    let route = 'patientrecords/getId';
    let callback = data => self.setState({ id: JSON.stringify(data) });
    _fetchData({ route, callback });
  };

  fileChangedHandler = (event) => {
    this.setState({selectedFile: event.target.files[0]})
  }

  uploadHandler = () => { 
    console.log(this.state.selectedFile)
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Add New patient</Button>
        {/* the modal starts here */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <ModalHeader toggle={this.toggle}>Add New patient</ModalHeader>
          <ModalBody>
            {/* the form */}
            <form onSubmit={this.handleSubmit} method="POST">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <image
                      src={defaultImage}
                      alt="default image"
                      className="col-xs-2 col-sm-2 col-md-2 col-lg-3"
                    />
                  <input type="file" onChange={this.fileChangedHandler} />
                  {/* <button onClick={this.uploadHandler}>Upload!</button>                   */}
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <label>Patient id</label>
                  {/* <input type="button" onClick={this.get} value="get" /> */}
                  <input
                    onChange={this.logChange}
                    type="text"
                    ref="id"
                    className="form-control id"
                    placeholder="patient id"
                    value={this.state.id}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>SurName</label>
                  <input
                    onChange={this.handleUserInput}
                    name="surname"
                    type="text"
                    ref="surname"
                    className="form-control Surname"
                    placeholder="SurName"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>FirstName</label>
                  <input
                    onChange={this.handleUserInput}
                    name="firstname"
                    type="text"
                    ref="firstname"
                    className="form-control Firstname"
                    placeholder="Name"
                  />
                </div>

                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-4">
                  <label>Gender</label>
                    <label>
                      <input
                        onClick={this.setGender}
                        checked={this.state.gender === 'female'}
                        type="radio"
                        value="female"
                        name="gender"
                      />{' '}
                      Female
                    </label>
                    <label>
                      <input
                        onClick={this.setGender}
                        checked={this.state.gender === 'male'}
                        type="radio"
                        value="male"
                        name="gender"
                      />{' '}
                      Male
                    </label>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Age</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="number"
                    ref="age"
                    placeholder="Age"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Marital Status</label>
                  <select
                    onChange={this.logChange}
                    ref="maritalstatus"
                    className="form-control">
                    <option value="" />
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                  </select>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Date Of Birth</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="date"
                    ref="DOB"
                    placeholder="Date Of Birth"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Tribe</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="tribe"
                    placeholder="Tribe"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Religion</label>
                  <select
                    onChange={this.logChange}
                    ref="religion"
                    className="form-control">
                    <option value="" />
                    <option value="islam">Islam</option>
                    <option value="christianity">Christianity</option>
                    <option value="traditional">Traditional</option>
                    <option value="others">Others </option>
                  </select>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Phone Number</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="number"
                    ref="phoneNo"
                    placeholder="Phone Number"
                  />
                </div>
                
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Email Address</label>
                  <input
                    onChange={this.handleUserInput}
                    name="email"
                    className="form-control"
                    type="text"
                    ref="email"
                    placeholder="Email Address"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Nationality</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="nationality"
                    placeholder="Nationality"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>State</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="state"
                    placeholder="State"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>LGA</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="lga"
                    placeholder="LGA"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Occupation</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="occupation"
                    placeholder="Occupation"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Address</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="textarea"
                    ref="address"
                    placeholder="Address"
                  />
                </div>
             </div>

                  <h5>Next Of Kin Information</h5>
                <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Name</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    ref="kinName"
                    placeholder="Kin Name"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>RelationShip</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="kinRelationship"
                    placeholder="RelationShip"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Phone Number</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="kinPhone"
                    placeholder=" Kin Phone Number"
                  />
                </div>
        
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Email Address</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="text"
                    ref="kinEmail"
                    placeholder=" Kin Email Address"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Occupation</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    ref="kinoccupation"
                    id="Occupation"
                    placeholder=" Kin Occupation"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Address</label>
                  <input
                    onChange={this.logChange}
                    className="form-control"
                    type="textarea"
                    ref="kinAddress"
                    placeholder=" Kin Address"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="offset-xs-4 offset-sm-4 offset-md-4 offset-lg-4 col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                  </div>
                  <button
                    type="submit"
                    onClick={this.toggle}
                    className="btn btn-primary"
                    disabled={!this.state.formValid}>
                    Submit
                  </button>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <button
                    onClick={this.toggle}
                    className="btn btn-danger">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalPage;
