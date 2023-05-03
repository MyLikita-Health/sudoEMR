import React from 'react';
import { CardBody, Card, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { _updateData, _customNotify } from '../utils/helpers';
import ImageUpload from './image-upload/ImageUpload';
import moment from 'moment';

import { recordsDB } from './Patientlist';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { LoadingSM } from '../loading';
import { _fetchApi } from '../../redux/actions/api';
import { apiURL } from '../../redux/actions';

class EditModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      new: props.details,
      patient: {},
      loading: false,
    };
  }

  componentDidMount() {
    _fetchApi(
      `${apiURL()}/patientrecords/fetchUserById/${this.props.match.params.id}`,
      (results) => {
        console.log(results);
        // this.setState({ new: results })
      },
      (err) => {
        console.log(err);
      },
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ patient: nextProps.details });
    // console.log(nextProps.details)
  }

  logChange = ({ target }) => {
    this.setState((prevState) => ({
      patient: Object.assign({}, prevState.patient, {
        [target.name]: target.value,
      }),
    }));
  };

  setGender = ({ target }) => {
    this.setState((prevState) => ({
      patient: Object.assign({}, prevState.patient, { Gender: target.value }),
    }));
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

  handleAgeChange = (e) => {
    this.logChange(e);
    this.generateDOB(e.target.value);
  };

  handleNameChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      patient: Object.assign({}, prevState.patient, {
        [name]: `${value[0] ? value[0].toUpperCase() : ''}${
          value.substr(1) ? value.substr(1).toLowerCase() : ''
        }`,
      }),
    }));
  };

  //method for submitting data after editing it in the edit modal
  handleEdit = () => {
    // e.preventDefault()
    this.setState({ loading: true });
    let data = this.state.patient;
    let callback = () => {
      this.props.updateEdit(data);
      _customNotify('User has been updated');
      this.props.closeEditModal();
      this.setState({ loading: false });
    };
    if (navigator.onLine) {
      let route = 'patientrecords/edit';

      let err_cb = () => console.log('There was an error from the server');
      // console.log(data)
      _updateData({ route, data, callback, err_cb });
    } else {
      recordsDB
        .get('recordupdates')
        .then(({ recordupdates, _rev }) => {
          let newData = [...recordupdates, data];
          recordsDB
            .put({ _id: 'recordupdates', _rev, recordupdates: newData })
            .then(() => callback())
            .catch((err) => console.log(err));
        })
        .catch(() => {
          recordsDB
            .put({ _id: 'recordupdates', recordupdates: [data] })
            .then(() => callback())
            .catch((err) => console.log(err));
        });
    }
  };

  render() {
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
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <ImageUpload />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Patient id</label>
                <input
                  type="text"
                  disabled
                  className="form-control id"
                  value={this.state.patient.id ? this.state.patient.id : ''}
                />
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
                  value={
                    this.state.patient.title ? this.state.patient.title : ''
                  }
                  className="form-control Surname"
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
                <input
                  onChange={this.handleNameChange}
                  name="surname"
                  type="text"
                  value={
                    this.state.patient.surname ? this.state.patient.surname : ''
                  }
                  className="form-control Surname"
                  placeholder="Surname"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                <label>Firstname</label>
                <input
                  onChange={this.handleNameChange}
                  name="firstname"
                  type="text"
                  value={
                    this.state.patient.firstname
                      ? this.state.patient.firstname
                      : ''
                  }
                  className="form-control Firstname"
                  placeholder="First Name"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Other Name</label>
                <input
                  onChange={this.handleNameChange}
                  name="other"
                  type="text"
                  value={
                    this.state.patient.other ? this.state.patient.other : ''
                  }
                  className="form-control Surname"
                  placeholder="Other Name"
                />
              </div>

              <div className="col-xs-6 col-sm-4 col-md-3 col-lg-4">
                <label>Gender</label>
                <div>
                  <label>
                    <input
                      onClick={this.setGender}
                      checked={this.state.patient.Gender === 'female'}
                      type="radio"
                      defaultValue="female"
                      name="Gender"
                    />{' '}
                    Female
                  </label>
                  <label className="offset-xs-2 offset-sm-2 offset-md-2 offset-lg-2">
                    <input
                      onClick={this.setGender}
                      checked={this.state.patient.Gender === 'male'}
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
                  name="age"
                  className="form-control"
                  type="number"
                  value={this.state.patient.age ? this.state.patient.age : ''}
                  placeholder="Age"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Marital Status</label>
                <select
                  onChange={this.logChange}
                  name="maritalstatus"
                  value={
                    this.state.patient.maritalstatus
                      ? this.state.patient.maritalstatus
                      : ''
                  }
                  className="form-control"
                >
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
                  name="DOB"
                  value={this.state.patient.DOB ? this.state.patient.DOB : ''}
                  placeholder="Date Of Birth"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Phone Number</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="number"
                  name="phoneNo"
                  value={
                    this.state.patient.phoneNo ? this.state.patient.phoneNo : ''
                  }
                  placeholder="Phone Number"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Email Address</label>
                <input
                  onChange={this.logChange}
                  name="email"
                  className="form-control"
                  type="text"
                  value={
                    this.state.patient.email ? this.state.patient.email : ''
                  }
                  placeholder="Email Address"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>State</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  name="state"
                  value={
                    this.state.patient.state ? this.state.patient.state : ''
                  }
                  placeholder="State"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>LGA</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  name="lga"
                  value={this.state.patient.lga ? this.state.patient.lga : ''}
                  placeholder="LGA"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Occupation</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  name="occupation"
                  value={
                    this.state.patient.occupation
                      ? this.state.patient.occupation
                      : ''
                  }
                  placeholder="Occupation"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Address</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="textarea"
                  name="address"
                  value={
                    this.state.patient.address ? this.state.patient.address : ''
                  }
                  placeholder="Address"
                />
              </div>
            </div>

            <br />
            <h5>Next Of Kin Information</h5>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Name</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  name="kinName"
                  value={
                    this.state.patient.kinName ? this.state.patient.kinName : ''
                  }
                  placeholder="Kin Name"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>RelationShip</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  name="kinRelationship"
                  value={
                    this.state.patient.kinRelationship
                      ? this.state.patient.kinRelationship
                      : ''
                  }
                  placeholder="RelationShip"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Phone Number</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  name="kinPhone"
                  value={
                    this.state.patient.kinPhone
                      ? this.state.patient.kinPhone
                      : ''
                  }
                  placeholder=" Kin Phone Number"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Email Address</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  name="kinEmail"
                  value={
                    this.state.patient.kinEmail
                      ? this.state.patient.kinEmail
                      : ''
                  }
                  placeholder=" Kin Email Address"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Address</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="textarea"
                  name="kinAddress"
                  value={
                    this.state.patient.kinAddress
                      ? this.state.patient.kinAddress
                      : ''
                  }
                  placeholder=" Kin Address"
                />
              </div>
            </div>

            <button
              type="submit"
              onClick={this.handleEdit}
              className="btn btn-primary col-md-3"
            >
              {this.state.loading ? (
                <LoadingSM />
              ) : (
                <span>
                  <FaEdit style={{ margin: '0 5px' }} size={18} /> Upate
                </span>
              )}
            </button>
            <button
              // onClick={closeEditModal}
              className="btn btn-danger col-md-3"
            >
              <FaTimes style={{ margin: '0 5px' }} size={18} />
              Cancel
            </button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default withRouter(EditModal);
