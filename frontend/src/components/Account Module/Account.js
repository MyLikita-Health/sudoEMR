import React, { Component } from 'react';
import PatientDeposit from './PatientDeposit';
import { AccountGuide } from '../Guides';
import AccountDashboard from './AccountDashboard';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false,
      isRoute: true,
      depositRequest: [],
    };
  }
  toggleRoute = () => {
    this.setState(prevState => ({ isRoute: !prevState.isRoute }));
  };

  render() {
    const { depositRequest, isRoute } = this.state;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          {' '}
          <AccountGuide />{' '}
        </div>
        <div
          style={{ border: '1px solid #007bff' }}
          className=" col-xs-12 col-sm-12 col-md-8 col-lg-6">
          <div>
            <AccountDashboard
              depositRequest={depositRequest}
              req={this.state.currentReq}
              isRoute={isRoute}
              toggleRoute={this.toggleRoute}
            />
          </div>
          <div>{/* <PatientDeposit /> */}</div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3" />
      </div>
    );
  }
}
