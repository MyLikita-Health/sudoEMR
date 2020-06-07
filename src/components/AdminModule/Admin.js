import React, { Component } from 'react';
import AdminDashboard from './AdminDashboard';
import { AdminGuide } from '../Guides';
import { _fetchData } from '../helpers';

export default class Lab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRoute: true,
      Users: [],
      error: '',
      mode: null,
    };
  }

  fetchData = (route) => {
    let success_callback = (data) => this.setState({ Users: data });
    let error_callback = (error) => this.setState({ error });
    _fetchData({ route, success_callback, error_callback });
  };

  componentDidMount() {
    let route = 'Users/all';
    this.fetchData(route);
  }

  toggleRoute = () => {
    this.setState((prevState) => ({ isRoute: !prevState.isRoute }));
  };

  onPatientClick = (currentReq) => {
    this.setState({ currentReq });
    this.toggleRoute();
  };

  setMode = (mode) => this.setState({ mode });

  updateTable = (id) => {
    const { requestsList } = this.state;
    let newRequestList = requestsList.filter((req) => req.id !== id);

    this.setState({ requestsList: newRequestList });
  };

  render() {
    const { requestsList, isRoute, currentReq, error, mode } = this.state;
    const {
      toggleRoute,
      updateTable,
      onPatientClick,
      fetchData,
      setMode,
    } = this;
    return (
      <div className="row" style={{ backgroundColor: '#ffffff' }}>
        <div
          className="col-xs-12 col-sm-12 col-md-4 col-lg-4
        "
        >
          <AdminGuide />
        </div>
        <div
          style={{ paddingTop: '10px' }}
          className="col-xs-12 col-sm-12 col-md-8 col-lg-8"
        >
          <AdminDashboard
            fetchData={fetchData}
            req={currentReq}
            isRoute={isRoute}
            toggleRoute={toggleRoute}
            updateTable={updateTable}
            setMode={setMode}
            mode={mode}
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 module-pic" />
      </div>
    );
  }
}
