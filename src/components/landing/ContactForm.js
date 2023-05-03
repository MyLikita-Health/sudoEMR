import React, { Component } from 'react';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
} from 'reactstrap';
import { apiURL } from '../../redux/actions/index';
import BackButton from './BackButton';
import { FiCheckCircle } from 'react-icons/fi';

class ContactForm extends Component {
  state = {
    send: false,
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    contactForm: [],
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  messageSend = () => {
    this.setState({
      send: !this.state.send,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      message: this.state.message,
    };
    fetch(`${apiURL()}/guests/contactform`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((data) => {
        console.log(data);
        this.setState({
          send: true,
        });
      })
      .catch((err) => console.log(err));
    this.setState((prevState) => ({
      contactForm: prevState.contactForm.concat({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        message: this.state.message,
      }),
    }));
  };

  render() {
    return (
      <div>
        {this.state.send ? (
          <InviteSuccess />
        ) : (
          <Form
            className="p-5 bg-white mt-5 shadow"
            onSubmit={this.handleSubmit}
          >
            {/* <h5 className="lead mb-5">Contact Form</h5> */}
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    name="first_name"
                    id="name"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    name="last_name"
                    id="name"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="mail"
                    name="email"
                    id="name"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label>Message</Label>
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Leave your message here"
                    id="name"
                    rows="6"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <center>
              <Button
                color="dark"
                className="border-radius-5"
                // onClick={this.messageSend}
              >
                Send Message
              </Button>
            </center>
          </Form>
        )}
      </div>
    );
  }
}

function InviteSuccess() {
  return (
    <div className="row">
      <Card
        body
        className="d-flex flex-column align-items-center offset-md-4 col-md-4 mt-5"
      >
        <FiCheckCircle size={100} className="text-success" />
        <h1>message sent</h1>
        <p>Your message has been submitted.</p>
        <BackButton text="Go Back" />
      </Card>
    </div>
  );
}

export default ContactForm;
