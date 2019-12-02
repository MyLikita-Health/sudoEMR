import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, } from 'reactstrap';
import { _updateData } from '../helpers';
import defaultImage from '../../images/default_image.png';

export default class EditModal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      new: props.details,
      id: "",
      surname: "",
      firstame: "",
      gender: "",
      age: "",
      maritalstatus: "",
      DOB: "",
      tribe: "",
      religion: "",
      phoneNo: "",
      email: "",
      nationality: "",
      state: "",
      lga: "",
      occupation: "",
      address: "",
      kinName: "",
      kinRelationship: "",
      kinPhone: "",
      kinEmail: "",
      kinoccupation: "",
      kinAddress: "",
    }
  }

  componentDidMount() {
    const { id, surname, firstname, age, gender, maritalstatus, DOB, tribe, religion, phoneNo, 
      email, nationality, state, lga, occupation, address, kinName, 
      kinRelationship, kinPhone, kinEmail, kinoccupation, kinAddress } = this.props.details;

    this.setState({ id, surname, firstname, age, gender, maritalstatus, DOB, tribe, religion, phoneNo, 
      email, nationality, state, lga, occupation, address, kinName, 
      kinRelationship, kinPhone, kinEmail, kinoccupation, kinAddress })
  }

  logChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  }


  //method for submitting data after editing it in the edit modal
  handleEdit = (e) => {
    e.preventDefault()
    let data = {
        firstname: this.state.firstname,
        surname: this.state.surname,
        id: this.state.id,
        gender: this.state.gender,

    }
    let route = 'patientrecords/edit';
    let cb = () => this.setState({ msg: "User has been edited." });

    _updateData({ route, data, cb })
}

  render() {
    const { editModalIsOpen, closeEditModal, details } = this.props;
    const { id, surname, firstname, age, gender, maritalstatus, DOB, tribe, religion, phoneNo, 
      email, nationality, state, lga, occupation, address, kinName, 
      kinRelationship, kinPhone, kinEmail, kinoccupation, kinAddress } = this.state;
    return (
      <Modal size="lg" isOpen={editModalIsOpen} toggle={closeEditModal}>
        <ModalHeader toggle={closeEditModal}>Preview Diagnosis<p>{this.state.new.email}</p></ModalHeader>
        <ModalBody>
          <form onSubmit={this.handleEdit}>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <image
                  src={defaultImage}
                  alt="default image"
                  className="col-xs-2 col-sm-2 col-md-2 col-lg-3"
                />
                <input type="file" onChange={this.fileChangedHandler} />
                {/* <button onClick={this.uploadHandler}>Upload!</button> */}
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <label>Patient id</label>
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
                <label>Surname</label>
                <input
                  onChange={this.handleUserInput}
                  name="surname"
                  type="text"
                  value={surname}
                  className="form-control Surname"
                  placeholder="Surname"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Firstname</label>
                <input
                  onChange={this.handleUserInput}
                  name="firstname"
                  type="text"
                  value={firstname}
                  className="form-control Firstname"
                  placeholder="Firstname"
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
                  value={age}
                  placeholder="Age"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Marital Status</label>
                <select
                  onChange={this.logChange}
                  value={maritalstatus}
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
                  value={DOB}
                  placeholder="Date Of Birth"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Tribe</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  value={tribe}
                  placeholder="Tribe"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Religion</label>
                <select
                  onChange={this.logChange}
                  value={religion}
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
                  value={phoneNo}
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
                  value={email}
                  placeholder="Email Address"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Nationality</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  value={nationality}
                  placeholder="Nationality"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>State</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  value={state}
                  placeholder="State"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>LGA</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  value={lga}
                  placeholder="LGA"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Occupation</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  value={occupation}
                  placeholder="Occupation"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Address</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="textarea"
                  value={address}
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
                  value={kinName}
                  placeholder="Kin Name"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>RelationShip</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  value={kinRelationship}
                  placeholder="RelationShip"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Phone Number</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  value={kinPhone}
                  placeholder=" Kin Phone Number"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Email Address</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  type="text"
                  value={kinEmail}
                  placeholder=" Kin Email Address"
                />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                <label>Occupation</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  value={kinoccupation}
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
                  value={kinAddress}
                  placeholder=" Kin Address"
                />
              </div>
            </div>
<br/>
            <div className="row">
              <div className="offset-xs-3 offset-sm-3 offset-md-3 offset-lg-3 col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <div className="panel panel-default">
                </div>
                <button
                  type="submit"
                  onClick={closeEditModal}
                  className="btn btn-primary"
                  >
                  Submit
                </button>
              </div>
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                <button onClick={closeEditModal} className="btn btn-danger">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter />
      </Modal>
    );
  }
}
