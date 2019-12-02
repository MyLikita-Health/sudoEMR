import React from 'react';
import { Card, Table } from 'reactstrap';
import FreeScrollBar from 'react-free-scrollbar';
import Loading from '../loading';

function AssignedList({ error, patientrecords, toggle }) {
  return (
    <div>
      {/* <p className="text-center">Doctor: <strong>{props.patientrecords[0].assigned_to}</strong></p> */}
      <Card className="border-secondary">
        <h6 className="text-center">List of Patients Assigned to you</h6>
        <div style={{ width: '100%', height: '50vh' }}>
          <FreeScrollBar>
            {!patientrecords.length ? (
              !error.length ? (
                <Loading />
              ) : (
                <p className="text-center">
                  <em>No Record Found</em>
                </p>
              )
            ) : (
              <Table bordered hover striped>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Number</th>
                    <th>Name </th>
                  </tr>
                </thead>
                <tbody>
                  {patientrecords.map(record => (
                    <tr
                      style={{ cursor: 'pointer' }}
                      key={record.id}
                      onClick={() => toggle(record)}>
                      <td>{record.date_assigned}</td>
                      <td>{record.id}</td>
                      <td>
                        {record.firstname} {record.surname}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
            {error.length ? (
              <p className="alert alert-danger text-center">{error}</p>
            ) : null}
          </FreeScrollBar>
        </div>
      </Card>
    </div>
  );
}

export default AssignedList;
