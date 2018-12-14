import React from 'react';
import { Table } from 'reactstrap';
import Loading from '../loading';

class PatientTable extends React.Component {
  render() {
    const {
      filterText,
      patientlist,
      openDoctorsModal,
      openModal,
      renderEditButton,
      error,
    } = this.props;

    const rows = [];

    patientlist.forEach((patient, i) => {
      if (patient.id.toString().indexOf(filterText) === -1) {
        return;
      }

      rows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{patient.id}</td>
          <td>
            {patient.firstname} {patient.surname}
          </td>
          <td>{patient.Gender}</td>
          <td className="moveToCenter">
            <button
              className="btn btn-secondary"
              onClick={() => openDoctorsModal(patient.id)}>
              Assign
            </button>
          </td>

          {renderEditButton && (
            <td className="moveToCenter">
              <button
                className="btn btn-primary"
                onClick={() => openModal(patient)}>
                Edit
              </button>
            </td>
          )}
          {/*
                this part is used to enable in-records delete operations
                to activate this action, uncomment the code below
              */}
          {/*<td className="moveToCenter">
            <button className="btn btn-danger" style={{ marginBottom: '1rem' }} >
            <a onClick={() => this.props.deletepatientrecords(patient)} >Delete</a></button>
          </td>*/}
        </tr>
      );
    });

    return (
      <div style={{ height: '500px' }}>
        {!patientlist.length ? (
          !error.length ? (
            <Loading />
          ) : (
            <p className="text-center">
              <em>No record found</em>
            </p>
          )
        ) : (
          <Table bordered striped hover responsive>
            <thead>
              <tr>
                <th />
                <th>Patient No</th>
                <th>Full Name</th>
                <th>Gender</th>
                <th className="moveToCenter">Assign</th>
                {/* {
                    this.props.renderEditButton ? <th className="moveToCenter">Edit Record</th>: null 
                  } */}

                {renderEditButton && <th className="moveToCenter">Edit</th>}

                {/*
                    this part is used to enable in-records delete operations
                    to activate this action, uncomment the code below
                  */}
                {/*<th className="moveToCenter">Delete Record</th>*/}
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        )}
        {error.length ? (
          <p className="alert alert-danger text-center">{error}</p>
        ) : null}
      </div>
    );
  }
}

export default PatientTable;
