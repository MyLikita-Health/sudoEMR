import React from 'react';
import {
  Card,
  CardBody,
  Button,
  Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux';
import { FormErrors } from './FormErrors';
import { withRouter } from 'react-router-dom';
import { _postData, url, _customNotify } from '../utils/helpers';
import ImageUpload from './image-upload/ImageUpload';
import moment from 'moment';
import Autocomplete from '../comp/Autocomplete';
import { TiUserAdd } from 'react-icons/ti';
import { recordsDB } from './Patientlist';
// import { FaTimes } from 'react-icons/fa';
import { LoadingSM } from '../loading';
import { _fetchApi } from '../../redux/actions/api';
import { compose } from 'redux';

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
      patient: {
        id: '',
        accountNo: '',
        beneficiaryNo: '',
        title: '',
        firstname: '',
        surname: '',
        other: '',
        Gender: '',
        age: '',
        maritalstatus: '',
        DOB: '',
        phoneNo: '',
        email: '',
        state: '',
        lga: '',
        occupation: '',
        address: '',
        kinName: '',
        kinRelationship: '',
        kinPhone: '',
        kinEmail: '',
        kinAddress: '',
      },
      formErrors: { email: '', password: '' },
      GenderValid: false,
      firstnameValid: false,
      surnameValid: false,
      idValid: false,
      formValid: false,
      modal: false,
      loading: false,
      generatingAcc: false,
    };
  }

  componentDidMount() {
    this.getIDs();
    this.getNextAvailabelAcc();
  }

  getNextAvailabelAcc() {
    // e.preventDefault()
    this.setState({ generatingAcc: true });
    if (!navigator.onLine) {
      recordsDB
        .get('ids')
        .then(({ ids }) => {
          let accountNo = ids[ids.length - 1] + 1;
          // console.log(lastId)
          this.setState((prevState) => ({
            patient: Object.assign({}, prevState.patient, {
              accountNo,
              beneficiaryNo: 1,
              id: `${accountNo}-1`,
            }),
          }));
          this.validateField('id', `${accountNo}-1`);
        })
        .catch(() => console.log('Error: Could not get the resource'));
      //   let cachedIds = JSON.parse(localStorage.getItem('ids'));
      //   let lastId = cachedIds[cachedIds.length - 1] + 1;
      //   console.log(lastId);
    }
    _fetchApi(
      `${url}/patientrecords/getAccount`,
      ({ accountNo }) => {
        if (accountNo === null) {
          this.setState((prevState) => ({
            patient: Object.assign({}, prevState.patient, {
              accountNo: 1,
              beneficiaryNo: 1,
              id: `1-1`,
            }),
            generatingAcc: false,
          }));
        } else {
          this.setState((prevState) => ({
            patient: Object.assign({}, prevState.patient, {
              accountNo,
              beneficiaryNo: 1,
              id: `${accountNo}-1`,
            }),
            generatingAcc: false,
          }));
        }
        this.validateField('id', `${accountNo}-1`);
      },
      (error) => {
        console.log(error.toString());
        this.setState({ generatingAcc: false });
      }
    );
  }
  //3072253886

  getNextAvailableBeneficiaryNo(accountNo) {
    if (!navigator.onLine) {
      recordsDB
        .get('allpatients')
        .then(({ allpatients }) => {
          console.log(allpatients);
        })
        .catch(() => console.log('Could not find resource'));
    }
    _fetchApi(
      `${url}/patientrecords/getBeneficiaryNo/${accountNo}`,
      ({ beneficiaryNo }) => {
        this.setState((prevState) => ({
          patient: Object.assign({}, prevState.patient, {
            beneficiaryNo,
            id: `${accountNo}-${beneficiaryNo}`,
          }),
        }));
        this.validateField('id', `${accountNo}-${beneficiaryNo}`);
      },
      (err) =>
        this.setState((prevState) => ({
          formErrors: Object.assign({}, prevState.formErrors, {
            idVal: 'Please enter a valid ID',
          }),
        }))
    );
  }

  /**
   * Handles the Gender text field change
   */
  setGender = ({ target }) => {
    this.setState(
      (prevState) => ({
        patient: Object.assign({}, prevState.patient, { Gender: target.value }),
      }),
      () => {
        this.validateField('Gender', target.value);
      }
    );
  };

  /**
   * This toggles the modal page
   */
  // toggle = () => {
  //   if(this.state.modal === false) this.getNextAvailabelAcc()
  //   this.setState({
  //     modal: !this.state.modal,
  //   });
  // };

  /**
   * This handles the change when user input some
   * data in the text fields
   */
  handleUserInput = (e) => {
    const { name, value } = e.target;

    this.setState(
      (prevState) => ({
        patient: Object.assign({}, prevState.patient, { [name]: value }),
      }),
      () => {
        this.validateField(name, value);
      }
    );
  };

  handleNameChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      (prevState) => ({
        patient: Object.assign({}, prevState.patient, {
          [name]: `${value[0] ? value[0].toUpperCase() : ''}${
            value.substr(1) ? value.substr(1).toLowerCase() : ''
          }`,
        }),
      }),
      () => this.validateField(name, value)
    );
  };

  handleAgeChange = (e) => {
    this.handleUserInput(e);
    this.generateDOB(e.target.value);
  };

  /**
   * The method that validates the text fields and enable
   *  the submit button only if all data in the fields are valid
   */
  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let GenderValid = this.state.GenderValid;
    let firstnameValid = this.state.firstnameValid;
    let surnameValid = this.state.surnameValid;
    let idValid = this.state.idValid;
    let ageValid = this.state.ageValid;
    let emailValid = this.state.emailValid;

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
        firstnameValid = value.length > 0 && value.match(/^\S*$/);
        fieldValidationErrors.firstname = firstnameValid ? '' : ' is not valid';
        break;
      case 'surname':
        surnameValid = value.length > 0 && value.match(/^\S*$/);
        fieldValidationErrors.surname = surnameValid ? '' : ' is not valid';
        break;
      case 'Gender':
        GenderValid = value.length > 0;
        fieldValidationErrors.Gender = GenderValid ? '' : 'is not selected';
        break;
      case 'age':
        ageValid = value.length > 0;
        fieldValidationErrors.age = ageValid ? '' : 'must be entered';
        break;
      case 'id':
        idValid = value.length > 0;
        fieldValidationErrors.id = idValid ? '' : 'is not valid';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        GenderValid,
        firstnameValid,
        surnameValid,
        idValid,
        ageValid,
        emailValid,
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
        this.state.GenderValid &&
        this.state.firstnameValid &&
        this.state.surnameValid &&
        this.state.idValid &&
        this.state.ageValid,
    });
  }

  //if there is error
  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  /**
   * Handles the submit button click
   */
  handleSubmit = (event) => {
    this.setState({ loading: true });
    event.preventDefault();
    const data = { ...this.state.patient, enteredBy: this.props.user.username };
    // console.log(data)

    if (navigator.onLine) {
      let route = 'patientrecords/new';
      let callback = () => {
        this.props.receiveState(data);
        this.setState({ loading: false, patient: {} });
        this.toggle();
        _customNotify('Record Submitted');
      };

      let error_cb = (error) => {
        this.setState({ loading: false });
        console.log(error.toString());
      };

      _postData({ route, data, callback, error_cb });
    } else {
      // let init = JSON.parse(localStorage.getItem('offPatientrecords')) || [];
      recordsDB
        .get('newrec')
        .then((rec) => {
          let newPatients = [...rec.newrec, data];
          recordsDB
            .put({ _id: 'newrec', _rev: rec._rev, newrec: newPatients })
            .then(() => {
              this.setState({ loading: false, patient: {} });
              this.toggle();
              recordsDB
                .get('ids')
                .then(({ _rev, ids }) => {
                  let newIdArr = [...ids, rec];
                  recordsDB
                    .put({ _id: 'ids', _rev, ids: newIdArr })
                    .then((res) => console.log('updated ids', res))
                    .catch(() => console.log('Could not find resource'));
                })
                .catch(() => console.log('Could not find resource'));
            })
            .catch(() => console.log('Error: Could ot get the resource'));
        })
        .catch(() => {
          let newPatients = [data];
          recordsDB
            .put({ _id: 'newrec', newrec: newPatients })
            .then(() => {
              this.setState({ loading: false, patient: {} });
              this.toggle();
            })
            .catch(() => {
              this.setState({ loading: false });
              console.log('Error: Could not get the resource');
            });
        });
    }
  };

  generateDOB = (age) => {
    const dob = moment()
      .subtract(age, 'years')
      .calendar();
    console.log(moment(dob).format('YYYY-MM-DD'));
    this.setState((prevState) => ({
      patient: Object.assign({}, prevState.patient, {
        DOB: moment(dob).format('YYYY-MM-DD'),
      }),
    }));
  };

  getIDs = () => {
    // const cachedIds = JSON.parse(localStorage.getItem('ids')) || [];
    recordsDB.get('ids').then(({ ids }) => this.setState({ ids }));

    // if(cachedIds.length) {
    //   this.setState({ ids: cachedIds })
    // }

    _fetchApi(
      `${url}/patientrecords/getIds`,
      ({ arr }) => {
        this.setState({ ids: arr });
        if (arr.length) {
          // localStorage.setItem('ids', JSON.stringify(arr))
          recordsDB
            .get('ids')
            .then(({ _rev, ids }) => {
              recordsDB
                .put({ _id: 'ids', _rev, ids: arr })
                .then((res) => console.log('updated ids', res))
                .catch(() => console.log('Error'));
            })
            .catch(() => {
              recordsDB.put({ _id: 'ids', ids: arr });
            });
        }
      },
      (err) => console.log(err)
    );
  };

  resetForm = () => this.setState({ patient: {} });

  render() {
    const { formErrors } = this.state;
    return (
      <div>
        <React.Fragment>
          <Button
            color="link"
            className="mb-2"
            onClick={() => this.props.history.push('/me/records')}
          >
            <i className="fa fa-arrow-left mr-2 fa-fw text-primary" />
            Go back
          </Button>
        </React.Fragment>
        <Card>
          <CardBody>
            {/* <Button onClick={this.toggle} style={{margin:10, display:'flex',flexDirection:'row',alignItems:'center'}}>
          <TiUserAdd size={24} style={{marginRight:5,marginLeft:5}} />Add new patient
        </Button> */}
            {/* the modal starts here */}
            {/* <Modal isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <ModalHeader toggle={this.toggle}>Add New Patient</ModalHeader> */}
            {/* <ModalBody> */}
            {/* the form */}
            <form>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <ImageUpload />
                </div>
                {/* <CloudinaryContext cloudName="mylikita">
                    <Image publicId="sample" format="jpg">
                        <Transformation crop="fill" gravity="faces" width="300" height="200"/>
                    </Image>
                </CloudinaryContext> */}

                {/* <input name="file" type="file"
                  class="file-upload" data-cloudinary-field="image_id"
                  data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/> */}

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      margin: 5,
                    }}
                  >
                    <label>Patient ID</label>
                    {/* <button 
                      className="btn btn-sm btn-outline btn-secondary"
                      onClick={(e) => this.getNextAvailabelAcc(e)}
                    >
                      {this.state.generatingAcc ? 'Please wait...' : 'Generate Acc'}
                    </button> */}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      margin: 5,
                    }}
                  >
                    <div>
                      <Autocomplete
                        suggestions={this.state.ids}
                        className="form-control "
                        emptylisttext="ID not found!"
                        value={
                          this.state.patient.accountNo
                            ? this.state.patient.accountNo
                            : ''
                        }
                        onInputChange={(val) => {
                          this.setState(
                            (prevState) => ({
                              patient: Object.assign({}, prevState.patient, {
                                accountNo: val,
                              }),
                            }),
                            () => this.validateField('id', val)
                          );
                          this.getNextAvailableBeneficiaryNo(val);
                        }}
                      />
                    </div>
                    <div>
                      <input
                        name="beneficiaryNo"
                        className="form-control col-md-5"
                        disabled
                        value={
                          this.state.patient.beneficiaryNo
                            ? this.state.patient.beneficiaryNo
                            : ''
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2">
                  <label>Title</label>
                  <input
                    onChange={this.handleNameChange}
                    name="title"
                    type="text"
                    list="title"
                    autoComplete="disabled"
                    autoFocus
                    value={
                      this.state.patient.title ? this.state.patient.title : ''
                    }
                    className="form-control"
                    placeholder="Title"
                  />
                  <datalist id="title">
                    <option value="Mr." />
                    <option value="Mrs." />
                    <option value="Mal." />
                    <option value="Alh." />
                    <option value="Ms." />
                  </datalist>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                  <label>Surname</label>
                  <Input
                    onChange={this.handleNameChange}
                    name="surname"
                    invalid={formErrors.surname && formErrors.surname.length}
                    type="text"
                    value={
                      this.state.patient.surname
                        ? this.state.patient.surname
                        : ''
                    }
                    className="form-control Surname"
                    placeholder="Surname"
                  />
                  <span style={{ color: 'red' }}>
                    {this.state.formErrors.surname
                      ? 'space is not allowed'
                      : null}
                  </span>
                </div>

                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                  <label>First Name</label>
                  <Input
                    onChange={this.handleNameChange}
                    name="firstname"
                    type="text"
                    invalid={
                      formErrors.firstname && formErrors.firstname.length
                    }
                    // valid={formErrors.firstname}
                    value={
                      this.state.patient.firstname
                        ? this.state.patient.firstname
                        : ''
                    }
                    className="form-control Firstname"
                    placeholder="First Name"
                  />
                  <span style={{ color: 'red' }}>
                    {this.state.formErrors.firstname
                      ? 'space is not allowed'
                      : null}
                  </span>
                </div>

                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                  <label>Other Name</label>
                  <input
                    onChange={this.handleNameChange}
                    name="other"
                    type="text"
                    value={
                      this.state.patient.other ? this.state.patient.other : ''
                    }
                    className="form-control other"
                    placeholder="Other Name"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Gender</label>
                  <div>
                    <label>
                      <input
                        onClick={this.setGender}
                        defaultChecked={this.state.patient.Gender === 'female'}
                        type="radio"
                        defaultValue="female"
                        name="Gender"
                      />{' '}
                      Female
                    </label>
                    <label className="offset-xs-1 offset-sm-1 offset-md-1 offset-lg-1">
                      <input
                        onClick={this.setGender}
                        defaultChecked={this.state.patient.Gender === 'male'}
                        type="radio"
                        defaultValue="male"
                        name="Gender"
                      />{' '}
                      Male
                    </label>
                  </div>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Age</label>
                  <input
                    onChange={this.handleAgeChange}
                    className="form-control"
                    type="number"
                    value={this.state.patient.age ? this.state.patient.age : ''}
                    name="age"
                    placeholder="Age"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Marital Status</label>
                  <select
                    onChange={this.handleUserInput}
                    value={
                      this.state.patient.maritalstatus
                        ? this.state.patient.maritalstatus
                        : ''
                    }
                    name="maritalstatus"
                    className="form-control"
                  >
                    <option value="" />
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                  </select>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Date of Birth</label>
                  <input
                    onChange={this.handleUserInput}
                    className="form-control"
                    type="date"
                    value={this.state.patient.DOB ? this.state.patient.DOB : ''}
                    name="DOB"
                    placeholder="Date of Birth"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Phone Number</label>
                  <input
                    onChange={this.handleUserInput}
                    className="form-control"
                    type="number"
                    value={
                      this.state.patient.phoneNo
                        ? this.state.patient.phoneNo
                        : ''
                    }
                    name="phoneNo"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Email Address</label>
                  <input
                    onChange={this.handleUserInput}
                    name="email"
                    className="form-control"
                    type="email"
                    value={
                      this.state.patient.email ? this.state.patient.email : ''
                    }
                    placeholder="Email Address"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>State</label>
                  <input
                    onChange={this.handleUserInput}
                    className="form-control"
                    type="text"
                    value={
                      this.state.patient.state ? this.state.patient.state : ''
                    }
                    name="state"
                    placeholder="State"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>LGA</label>
                  <input
                    onChange={this.handleUserInput}
                    className="form-control"
                    type="text"
                    value={this.state.patient.lga ? this.state.patient.lga : ''}
                    name="lga"
                    placeholder="LGA"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Occupation</label>
                  <input
                    onChange={this.handleUserInput}
                    className="form-control"
                    type="text"
                    value={
                      this.state.patient.occupation
                        ? this.state.patient.occupation
                        : ''
                    }
                    name="occupation"
                    placeholder="Occupation"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Address</label>
                  <input
                    onChange={this.handleUserInput}
                    className="form-control"
                    type="textarea"
                    value={
                      this.state.patient.address
                        ? this.state.patient.address
                        : ''
                    }
                    name="address"
                    placeholder="Address"
                  />
                </div>
              </div>
              <br />
              <h5>Next of Kin Information</h5>
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Name</label>
                  <input
                    onChange={this.handleUserInput}
                    className="form-control"
                    value={
                      this.state.patient.kinName
                        ? this.state.patient.kinName
                        : ''
                    }
                    name="kinName"
                    placeholder="Next of Kin Name"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Relationship</label>
                  <input
                    onChange={this.handleUserInput}
                    className="form-control"
                    type="text"
                    value={
                      this.state.patient.kinRelationship
                        ? this.state.patient.kinRelationship
                        : ''
                    }
                    name="kinRelationship"
                    placeholder="Relationship"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Phone Number</label>
                  <input
                    onChange={this.handleUserInput}
                    className="form-control"
                    type="text"
                    value={
                      this.state.patient.kinPhone
                        ? this.state.patient.kinPhone
                        : ''
                    }
                    name="kinPhone"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Email Address</label>
                  <input
                    onChange={this.handleUserInput}
                    className="form-control"
                    type="text"
                    value={
                      this.state.patient.kinEmail
                        ? this.state.patient.kinEmail
                        : ''
                    }
                    name="kinEmail"
                    placeholder="Email Address"
                  />
                </div>

                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                  <label>Address</label>
                  <input
                    onChange={this.handleUserInput}
                    className="form-control"
                    type="textarea"
                    value={
                      this.state.patient.kinAddress
                        ? this.state.patient.kinAddress
                        : ''
                    }
                    name="kinAddress"
                    placeholder="Address"
                  />
                </div>
              </div>
              <br />
              <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
            </form>
            {/* </ModalBody>
          <ModalFooter > */}
            <center>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-primary col-md-3"
                disabled={!this.state.formValid}
              >
                {this.state.loading ? (
                  <LoadingSM />
                ) : (
                  <span>
                    <TiUserAdd style={{ margin: '0 5px' }} size={18} /> Submit
                  </span>
                )}
              </button>
            </center>

            {/* <button
              onClick={() => {
                this.resetForm();
                this.toggle();
              }}
              className="btn btn-danger col-md-3">
              <FaTimes style={{margin:"0 5px"}} size={18} />
              Cancel
            </button> */}
            {/* </ModalFooter>
        </Modal> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { user } }) => ({ user });

export default compose(
  withRouter,
  connect(mapStateToProps)
)(ModalPage);
