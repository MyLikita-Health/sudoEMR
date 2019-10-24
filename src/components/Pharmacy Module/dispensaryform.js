    import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

class DispensaryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      patientID: '',
      drugs: '',
      dosage: '',
      quantity_dispense: '',
      dispense: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      dispense: prevState.dispense.concat({
        patientID: this.state.patientID,
        drugs: this.state.drugs,
        dosage: this.state.dosage,
        quantity_dispense: this.state.quantity_dispense,
      }),
      patientID:'',
      drugs:'',
      dosage:"",
      quantity_dispense:''
    }));
    // console.log(
    //   this.state.patientID,
    //   this.state.drugs,
    //   this.state.dosage,
    //   this.state.quantity_dispense
    // );
  }
  handleDelete(deleteItem){
    let itemToDelte = this.state.dispense.filter((item)=> item !== deleteItem)
     this.setState({dispense: itemToDelte})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <center>
            <h1>Dispensary Form</h1>
            <br />
          </center>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6">
              <label>Date</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="date"
                name="date"
                value={this.state.date}
                placeholder="Date"
                required
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6">
              <label>patientID</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                value={this.state.patientID}
                name="patientID"
                placeholder="patientID"
                required
              />
            </div>{' '}
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6">
              <label>Drugs</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="drugs"
                value={this.state.drugs}
                placeholder="Drugs"
                required
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6">
              <label>Dosage</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="dosage"
                value={this.state.dosage}
                placeholder="Dosage"
                required
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6">
              <label>quantity_dispense</label>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                name="quantity_dispense"
                value={this.state.quantity_dispense}
                placeholder="quantity_dispense"
                required
              />
            </div>
            <br />
          </div>
          <button className="btn btn-primary">submit</button>
          <br />
        </div>
        <center>
          <h6>Dispensary Details</h6>
        </center>
        <Table striped>
          <thead>
            <tr>
              <th>PatientID</th>
              <th>Drugs</th>
              <th>Dosage</th>
              <th>Qtty_Dosage</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.state.dispense.map((item, index) => (
            <tr key={index}>
              <td> {item.patientID}</td>
              <td>{item.drugs}</td>
              <td>{item.dosage}</td>
              <td>{item.quantity_dispense}</td>

              <td>
                
              <Button outline color="danger" onClick={() => this.handleDelete(item)}>delete</Button>
              </td>
            </tr>
          ))}
          </tbody>
          
        </Table>
      </form>
    );
  }
}

export default DispensaryForm;
