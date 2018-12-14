import React from 'react';
import { Table, Badge } from 'reactstrap';

const DrugsTable = ({
  drugsList = [],
  showRemove = true,
  onRemove = f => f,
}) => {
  const rowStyle = {
    border: '1px solid gray',
    padding: '.4em',
    paddingRight: '3em',
  };
  let rows = [];

  drugsList.forEach((drug, i) => {
    rows.push(
      <tr key={i}>
        <td style={rowStyle}>{i + 1}</td>
        <td style={rowStyle}>{`${drug.drug} ${drug.frequency} per ${drug.period} for ${
          drug.duration
        }`}</td>
     
        {showRemove && (
          <td style={rowStyle}>
            <Badge
              color="danger"
              style={{ cursor: 'pointer' }}
              onClick={() => onRemove(drug.drug)}
              className="danger">
              Remove
            </Badge>
          </td>
        )}
      </tr>
    );
  });

  return (
    <div>
      {!showRemove && <h5>Prescripton Requests</h5>}
      <Table bordered hover striped responsive cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <th style={rowStyle}>S/N</th>
            <th style={rowStyle}>Prescripton Details</th>
            {showRemove && <th style={rowStyle}>Action</th>}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      {!showRemove && <hr />}
    </div>
  );
};

export default DrugsTable;
