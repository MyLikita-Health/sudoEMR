import React, { Component } from 'react';
import { Form, FormGroup, Card, CardHeader, CardBody } from 'reactstrap';
import ExpenditureList from './ExpenditureList';

export default class Expenditure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pDeposit: '',
    };
  }

  render() {
    let date = new Date();
    return (
      <div>
        <Card className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <CardHeader>Service Form</CardHeader>
          <CardBody>
            <Form className="">
              <FormGroup row>
                <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                  {' '}
                  Date:
                </label>
                <input
                  type="date"
                  className="form-control col-xs-12 col-sm-12 col-md-3 col-lg-3"
                  onChange={e => this.setState({ pDeposit: e.target.value })}
                  value={this.state.pDeposit}
                />
                <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                  Source:
                </label>
                <input
                  type="text"
                  className="form-control col-xs-12 col-sm-12 col-md-3 col-lg-3"
                  onChange={e => this.setState({ pDeposit: e.target.value })}
                  value={this.state.pDeposit}
                />
              </FormGroup>

              <FormGroup row>
                <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                  Destination Account:
                </label>
                <input
                  type="text"
                  className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3"
                  onChange={e => this.setState({ pDeposit: e.target.value })}
                  value={this.state.pDeposit}
                />

                <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3"
                  onChange={e => this.setState({ pDeposit: e.target.value })}
                  value={this.state.pDeposit}
                />
              </FormGroup>

              <FormGroup row>
                <label className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                  Amount:
                </label>
                <input
                  type="text"
                  className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-3"
                  onChange={e => this.setState({ pDeposit: e.target.value })}
                  value={this.state.pDeposit}
                />
              </FormGroup>

              <FormGroup row>
                <button className="btn btn-default btn-secondary col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  Add
                </button>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" />
                <button className="btn btn-default btn-secondary col-xs-12 col-sm-12 col-md-6 col-lg-4">
                  Save Costing
                </button>
                <div />
              </FormGroup>
            </Form>
            <ExpenditureList />
          </CardBody>
        </Card>
      </div>
    );
  }
}
