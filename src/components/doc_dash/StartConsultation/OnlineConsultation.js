import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import {
  // Form,
  FormGroup,
  // Input,
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  // Row,
  // InputGroup,
  Button,
  // ButtonGroup,
} from 'reactstrap';
import SearchPatient from '../../comp/components/SearchPatient';

class OnlineConsultation extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  render() {
    return (
      <Card>
        <CardHeader tag="h6">Online Consultation</CardHeader>

        <Button
          color="link"
          className="mb-2"
          onClick={() => this.props.history.goBack()}>
          <i className="fa fa-arrow-left mr-2 fa-fw text-primary" />
          Go back
        </Button>
        <CardBody>
          <FormGroup>
            {/* <label className="mr-2 font-weight-bold">Time:</label> */}
            <div className="d-flex flex-direction-row justify-content-between p-0">
              {/* <label className="mr-2 font-weight-bold">Patient</label> */}
              <SearchPatient />
            </div>
          </FormGroup>
          {/* <Row> */}
          <FormGroup className="row">
            <div className="col-md-4 col-lg-4">
              <label className="mr-2 font-weight-bold">Time:</label>
              <DatePicker
                className="form-control"
                name="start"
                // selected={start}
                // showTimeSelect
                // timeFormat="HH:mm"
                // timeIntervals={30}
                // timeCaption="time"
                // dateFormat="MMMM d, yyyy h:mm aa"
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
          </FormGroup>
          {/* </Row> */}
          <center>
            <Button color="primary" outline>
              Submit
            </Button>
          </center>
        </CardBody>
      </Card>
    );
  }
}

export default OnlineConsultation;
