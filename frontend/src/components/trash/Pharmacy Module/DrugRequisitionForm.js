import React, { Component } from 'react';
import { CardHeader, CardBody, Card } from 'reactstrap';

class DrugRequisition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      requisitionNo: '',
      drugs: '',
      quantity: '',
      requestSendTo: '',
    };
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>Drug Requisition Form</CardHeader>
          <CardBody>
            <div className="row">
              <form className="col-md-8 ">
                <div className="form-group row">
                  <label className="col-md-3">Date</label>
                  <input
                    type="date"
                    className="form-control col-md-4"
                    onChange={e => this.setState({ date: e.target.value })}
                    value={this.state.date}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-md-3">Requisition Number</label>
                  <input
                    type="text"
                    className="form-control col-md-6"
                    onChange={e =>
                      this.setState({ requisitionNo: e.target.value })
                    }
                    value={this.state.requisitionNo}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-md-3">Drugs</label>
                  <input
                    type="text"
                    className="form-control col-md-6"
                    onChange={e => this.setState({ drugs: e.target.value })}
                    value={this.state.drugs}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-md-3">Quantity</label>
                  <input
                    type="text"
                    className="form-control col-md-6"
                    onChange={e => this.setState({ quantity: e.target.value })}
                    value={this.state.quantity}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-md-3">Request Send to</label>
                  <input
                    type="text"
                    className="form-control col-md-6"
                    onChange={e =>
                      this.setState({ requestSendTo: e.target.value })
                    }
                    value={this.state.requestSendTo}
                  />
                </div>
                <div className="form-group row">
                  <label className="col-md-3">Balance</label>
                  <label className="col-md-4" />
                </div>
              </form>

              <div className="col-md-4">
                <button className="btn btn-default btn-secondary">
                  Send Request
                </button>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader> List of Selected Drugs</CardHeader>
          <CardBody>
            <div>
              <i>No item found</i>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DrugRequisition;
