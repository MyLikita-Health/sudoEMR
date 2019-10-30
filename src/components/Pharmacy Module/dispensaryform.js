import React, { Component } from 'react';

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
    e.preventDefault()
    this.setState(prevState => ({
      dispense: prevState.dispense.concat({
        patientID: this.state.patientID,
        drugs: this.state.drugs,
        dosage: this.state.dosage,
        quantity_dispense: this.state.quantity_dispense,
      }),
    }));
    console.log(this.state.patientID,
         this.state.drugs,
        this.state.dosage,
       this.state.quantity_dispense,)
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
        <button className="btn btn-primary" >
          submit
        </button>

        <br />
      </div>
      </form>
      
    );
  }
}

export default DispensaryForm;
