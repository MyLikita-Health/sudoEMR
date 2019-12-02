import React, { Component } from 'react';
import PendingLabRequest from './PendingLabRequest';
import './Lab.css';
import LabDashboard from './LabDashboard';
import { LabGuide } from '../Guides';
import { _fetchData } from '../helpers';
import image from '../../images/Scanning.png';

export default class Lab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRoute: true,
      requestsList: [],
      currentReq: {},
      error: '',
      mode: null,
    };
  }

  fetchData = route => {
    let success_callback = data => this.setState({ requestsList: data });
    let error_callback = error => this.setState({ error });
    _fetchData({ route, success_callback, error_callback });
  };

  componentDidMount() {
    let route = 'lab/pending';
    this.fetchData(route);
    this.setState({ mode: 'pending' });
  }

  toggleRoute = () => {
    this.setState(prevState => ({ isRoute: !prevState.isRoute }));
  };

  onPatientClick = currentReq => {
    this.setState({ currentReq });
    this.toggleRoute();
  };

  setMode = mode => this.setState({ mode });

  updateTable = id => {
    const { requestsList } = this.state;
    let newRequestList = requestsList.filter(req => req.id !== id)

    this.setState({ requestsList: newRequestList });
  };

  // updateTable = id => {
  //   const { requestsList } = this.state;
  //   let newRequestList = [...requestsList];
  //   let newRequestList = requestsList.filter(req => req.id !== id)
  //   for (let i = 0; i < testIdArr.length; i++) {
  //     newRequestList = newRequestList.filter(
  //       req => req.test_id !== testIdArr[i]
  //     );
  //   }

  //   this.setState({ requestsList: newRequestList });
  // };

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
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
          <LabGuide />
          <PendingLabRequest
            requestsList={requestsList}
            onPatientClick={onPatientClick}
            error={error}
          />
        </div>
        <div
          style={{ border: '1px solid #007bff' }}
          className="col-xs-12 col-sm-12 col-md-8 col-lg-6">
          <LabDashboard
            fetchData={fetchData}
            req={currentReq}
            isRoute={isRoute}
            toggleRoute={toggleRoute}
            updateTable={updateTable}
            setMode={setMode}
            mode={mode}
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 module-pic">
          <img src={image} alt="module-pic" className="module-pic" />
        </div>
      </div>
    );
  }
}
