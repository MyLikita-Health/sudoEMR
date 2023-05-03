import React from 'react';
import { FaEdit } from 'react-icons/fa';

const TableRow = ({
  patientlist,
  filterText,
  renderEditButton,
  openModal,
  openDoctorsModal,
}) => {
  const rows = [];

  patientlist.length &&
    patientlist.forEach((patient, i) => {
      if (
        patient.id
          .toString()
          .toLowerCase()
          .indexOf(filterText.toLowerCase()) === -1 &&
        `${patient.surname.toLowerCase()} ${patient.firstname.toLowerCase()}`.indexOf(filterText.toLowerCase()) === -1 &&
        `${patient.firstname.toLowerCase()} ${patient.surname.toLowerCase()}`.indexOf(filterText.toLowerCase()) === -1 &&
        patient.surname
          .toString()
          .toLowerCase()
          .indexOf(filterText.toLowerCase()) === -1 &&
        patient.firstname
          .toString()
          .toLowerCase()
          .indexOf(filterText.toLowerCase()) === -1 &&
        patient.address
          .toString()
          .toLowerCase()
          .indexOf(filterText.toLowerCase()) === -1
      ) {
        return;
      }

      rows.push(
        <tr key={i}>
          <td>{patient.id}</td>
          <td>
            {patient.firstname} {patient.surname} {patient.other}
          </td>
          <td>{patient.address}</td>
          {/* <td className="moveToCenter">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => openDoctorsModal(patient.id)}>
              Assign
            </button>
          </td> */}

          {renderEditButton && (
            <td className="moveToCenter">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => openModal(patient)}>
                  <FaEdit style={{margin:'0 3px'}} size={18} />
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

  return rows;
};

export default TableRow;
