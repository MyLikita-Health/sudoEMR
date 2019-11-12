import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

class Registration extends React.Component {
  state = {
    user: {}
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.user);
    this.setState(prevState => ({
      user: prevState.user.concat({
        fname: this.state.fname,
        fCode: this.state.fCode,
        Pid: this.state.Pid,
        entity: this.state.entity,
        sname: this.state.sname,
        firstname: this.state.fname,
        dob: this.state.dob,
        gender: this.state.gender,
        hCode: this.state.hCode
      })
    }));
  }
  render() {
    return (
      <div>
        <h3 align="center">NHIS Registration</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type="select"
              name="fCode"
              id="fCode"
              value={this.state.value}
            >
              <option disabled selected>
                Facility Code:
              </option>
              <option>1100191</option>
              <option>1110011</option>
            </Input>
          </FormGroup>

          <FormGroup row>
            <Label for="fname" sm={2}>
              Facility Name:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="fname"
                id="fname"
                value={this.state.value}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Pid" sm={2}>
              Principle ID:
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="Pid"
                id="Pid"
                value={this.state.value}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="benNo" sm={2}>
              Beneficiary No:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="benNo"
                id="benNo"
                value={this.state.value}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="entity" sm={2}>
              Entity Type:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="entity"
                id="entity"
                value={this.state.value}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="sname" sm={2}>
              Surname:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="sname"
                id="sname"
                value={this.state.value}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="firstname" sm={2}>
              FirstName:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="firstname"
                id="firstname"
                value={this.state.value}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            {" "}
            <Input
              type="select"
              name="gender"
              id="gender"
              value={this.state.value}
            >
              Gender
              <option disabled selected>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </Input>
          </FormGroup>
          <FormGroup row>
            <Label for="dob" sm={2}>
              Date of Birth:
            </Label>
            <Col sm={10}>
              <Input type="date" name="dob" id="dob" value={this.state.value} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Input
              type="select"
              name="hCode"
              id="hCcode"
              value={this.state.value}
            >
              <option disabled selected>
                HMO Code:
              </option>
              <option>1100191</option>
              <option>1110011</option>
            </Input>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Registration;
