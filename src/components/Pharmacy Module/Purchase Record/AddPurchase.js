import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

class AddPurchase extends React.Component {
  constructor(props) {
    super();
    let newDate = new Date();

    this.state = {
      date: newDate.getDate(),
      name: "",
      quantity: 0,
      recieptNo: "",
      supplier: "",
      cost: 0.0,
      paymentStatus: "",
      recieptPicture: ""
    };
  }

  handleChange = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      purchase: prevState.purchase.concat({
        date: this.state.date,
        name: this.state.name,
        quantity: this.state.quantity,
        purchaseBy: this.state.purchaseBy,
        recieptNo: this.state.recieptNo,
        supplier: this.state.supplier,
        cost: this.state.cost,
        paymentStatus: this.state.paymentStatus,
        recieptPicture: this.state.recieptPicture
      }),
      date: null,
      name: "",
      quantity: 0,
      purchaseBy: "",
      recieptNo: "",
      supplier: "",
      cost: 0.0,
      paymentStatus: "",
      recieptPicture: ""
    }));
  }
  render() {
    return (
      <div>
        <h3 align="center">Purchase Records</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="date" sm={2}>
              Date
            </Label>
            <Col sm={10}>
              <Input
                type="date"
                name="date"
                id="date"
                value={this.state.date}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              Name:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="name"
                id="name"
                value={this.state.value}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="qantity" sm={2}>
              Quantity:
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="quantity"
                id="quantity"
                value={this.state.value}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="purchaseBy" sm={2}>
              Purchase By:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="purchaseBy"
                id="purchaseBy"
                value={this.state.value}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Supplier" sm={2}>
              Supplier:
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="supplier"
                id="supplier"
                value={this.state.value}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="cost" sm={2}>
              Cost:
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="cost"
                id="cost"
                value={this.state.value}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Input
              type="select"
              name="status"
              id="status"
              value={this.state.value}
            >
              <option disabled selected>
                Payment Status
              </option>
              <option>Paid</option>
              <option>Pending</option>
            </Input>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              Reciept Picture:
            </Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
            </Col>
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

export default AddPurchase;
