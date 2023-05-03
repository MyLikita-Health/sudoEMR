import React, { Component, useEffect, useState } from 'react';
import { Card, CardBody, Input, Table } from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import Notifications from 'react-notify-toast';
import Loading from '../loading';
import { _fetchData, _customNotify } from '../utils/helpers';

export default function PendingPharmacyRequest () {
  const [modal, setModal] = useState(false)
  const [pendingPatientRequests, setPendingPatientRequests] = useState([])
  const [currentDrug, setCurrentDrug] = useState({})
  const [searchTerm, setSearchTerm]=useState('')
  const [error, setError] = useState('')

  const fetchData = ()=> {
    let route = 'prescriptions/pending';
    let success_callback = data =>
    setPendingPatientRequests( data );
    let error_callback = err => setError( err );
    _fetchData({ route, success_callback, error_callback });
  }
  useEffect(()=> {
    fetchData()
  }, [])

  const toggle = () => {
   setModal(!modal)
  };

  const onPrescriptionClick = patient => {
    // this.props.getDetails(currentDrug, patient);
    setCurrentDrug(currentDrug);
  };

 const dispenseDrugs = drugs => {
    _customNotify('Drug(s) dispensed successfully!');
    toggle();
    console.log(drugs);
  };

  const onSearchTermChange = searchTerm => {
    setSearchTerm( searchTerm);
  };
  const rows = [];

  pendingPatientRequests.forEach((patient, i) => {
    if (patient.name.toString().indexOf(searchTerm) === -1) return;

    rows.push(
      <tr
        key={i}
        onClick={() => this.onPrescriptionClick(patient)}
        style={{ cursor: 'pointer' }}>
        <td>{patient.name}</td>
        <td>
          {patient.prescribed_by}
        </td>
        <td>{patient.count}</td>
      </tr>
    );
  });
  return (
    <>
    {JSON.stringify(pendingPatientRequests)}
<div className=" ">
        <Notifications options={{ zIndex: 200, top: '50px' }} />
        <Card className="border-secondary">
          <h6 className="text-center">Pending Pharmacy Request</h6>
          <CardBody>
            <div className="row">
              <Input
                placeholder="Search request by patient's id"
                value={this.state.searchTerm}
                onChange={e => onSearchTermChange(e.target.value)}
              />
            </div>
            <div >
              <Scrollbars style={{height: '65vh' }}>
                {!pendingPatientRequests.length ? (
                  !error.length ? (
                    <Loading />
                  ) : (
                    <p className="text-center danger">
                      <em>No record found</em>
                    </p>
                  )
                ) : (
                  <Table bordered striped hover responsive>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Prescribed by:</th>
                        <th>Count</th>
                      </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                  </Table>
                )}
                {error.length ? (
                  <p className="alert alert-danger text-center">{error}</p>
                ) : null}
              </Scrollbars>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

