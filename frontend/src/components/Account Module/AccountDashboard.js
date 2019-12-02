import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import ClientStatementAccount from './ClientStatementAccount';
import ServicesSetupForm from './ServicesSetupForm';
import AccountReport from './AccountReport';
import PatientDeposit from './PatientDeposit';
import Services from './Services';
import Expenditure from './Expenditure';

const Tabs = ({ hidePatientDeposit }) => {
  return (
    <div>
      <NavLink
        to="/account/patient_deposit"
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={hidePatientDeposit}>
        Retainership Desposit Form
      </NavLink>
      <NavLink
        to="/account/client_statement_account"
        className="btn btn-outline-success col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={hidePatientDeposit}>
        Client Statement Of Account
      </NavLink>
      <NavLink
        to="/account/services_setup_form"
        className="btn btn-outline-warning col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={hidePatientDeposit}>
        Services Setup Form
      </NavLink>
      <NavLink
        to="/account/account_report_general"
        className="btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={hidePatientDeposit}>
        Account Report General
      </NavLink>
      <NavLink
        to="/account/services"
        className="btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={hidePatientDeposit}>
        Services{' '}
      </NavLink>
      <NavLink
        to="/account/expenditure"
        className="btn btn-outline-primary col-xs-12 col-sm-6 col-md-4 col-lg-4"
        onClick={hidePatientDeposit}>
        Expenditure{' '}
      </NavLink>
    </div>
  );
};

const TabForm = ({
  depositRequest,
  req,
  isRoute,
  toggleRoute,
  showPatientDeposit,
}) => {
  const routes = [
    {
      path: '/account/patient_deposit',
      exact: true,
      main: () => <PatientDeposit />,
    },

    {
      path: '/account/client_statement_account',
      exact: true,
      main: () => <ClientStatementAccount />,
    },
    {
      path: '/account/services_setup_form',
      exact: true,
      main: () => <ServicesSetupForm />,
    },
    {
      path: '/account/account_report_general',
      exact: true,
      main: () => <accountReport />,
    },

    {
      path: '/account/services',
      exact: true,
      main: () => <Services />,
    },

    {
      path: '/account/expenditure',
      exact: true,
      main: () => <Expenditure />,
    },
  ];
  return (
    <div>
      {isRoute && (
        <div style={{ height: '60vh' }}>
          {routes.map(route => (
            <Route key={route.path} path={route.path} component={route.main} />
          ))}
        </div>
      )}
    </div>
  );
};

class AccountDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPatientDeposit: true,
    };
  }
  hidePatientDeposit = () => {
    this.setState({ showPatientDeposit: false });
  };
  render() {
    const { depositRequest, req, isRoute, toggleRoute } = this.props;
    return (
      <div>
        <Tabs hidePatientDeposit={this.hidePatientDeposit} />
        <br />
        <TabForm
          showPatientDeposit={PatientDeposit}
          req={req}
          isRoute={isRoute}
          toggleRoute={toggleRoute}
          showPatientDeposit={this.state.showPatientDeposit}
        />
      </div>
    );
  }
}

export default AccountDashboard;
