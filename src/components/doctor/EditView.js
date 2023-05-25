import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
// import { connect } from 'react-redux';
// import { Scrollbars } from 'react-custom-scrollbars';
import { FaArrowLeft } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
class EditView extends Component {
  render() {
    const { history } = this.props;

    return (
      <Card>
        <CardHeader tag="h6">Finished View</CardHeader>
        <CardBody style={{ height: 400 }}>
          <center>
            {" "}
            <IoMdCheckmarkCircle size="250px" color="green" />
          </center>
          <center>
            <h5>All done, Click submit now</h5>
          </center>
        </CardBody>
        <CardFooter>
          <button
            className="btn btn-sm btn-outline-primary col-md-3"
            onClick={() => {
              this.handleSubmit();
              history.push(
                `/me/doctors/visits/new/${this.props.patient.patientHospitalId}/management/dressing`
              );
            }}
          >
            <FaArrowLeft /> Prev
          </button>
        </CardFooter>
      </Card>
    );
  }
}

export default EditView;
