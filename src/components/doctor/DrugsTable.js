import React from 'react';
import { Table } from 'reactstrap';

const DrugsTable = ({
  prescriptionRequest = [],
  showRemove = true,
  onRemove = (f) => f,
}) => {
  let rows = [];

  prescriptionRequest.forEach((drug, i) => {
    rows.push(
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{`${drug.route} ${drug.drug} ${drug.dosage} every ${drug.frequency} for ${drug.duration} ${drug.period}(s) ${drug.additionalInfo ? drug.additionalInfo : ''}`}</td>

        {showRemove && (
          <td>
            <button
              onClick={() => onRemove(drug.drug)}
              className="btn btn-sm btn-outline-danger"
            >
              Remove
            </button>
          </td>
        )}
      </tr>
    );
  });

  return (
    <div>
      {!showRemove && <h5>Prescription Requests</h5>}
      <Table
        bordered
        hover
        striped
        responsive  
        size="sm"
        cellSpacing={0}
        cellPadding={0}
      >
        <thead>
          <tr>
            <th>S/N</th>
            <th>Prescription Details</th>
            {showRemove && <th>Action</th>}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      {!showRemove && <hr />}
    </div>
  );
};

export default DrugsTable;
