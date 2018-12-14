import React from 'react';
import { Table, Card, CardBody, CardFooter } from 'reactstrap';

const PendingRequestProcess = ({
  requests = [],
  onStatusChange = f => f,
  onStatusUnchanged = f => f,
  saveCollectedSamples = f => f,
  cancel=f=>f
}) => {
  const rows = [];
  requests.forEach((req, i) => {
    rows.push(
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{req.test}</td>
        <td>{req.sample}</td>
        <td>
          <select
            className="form-control"
            onChange={e =>
              e.target.value !== 'pending'
                ? onStatusChange(req.test_id)
                : onStatusUnchanged(req.test_id)
            }>
            <option value="pending">Not Received</option>
            <option value="sampled_collected">Collected</option>
          </select>
        </td>
      </tr>
    );
  });
  return (
    <Card>
      <h5 style={{ textAlign: 'center' }}>Pending Lab Requests</h5>
      <CardBody>
        <Table bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Test</th>
              <th>Sample</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </CardBody>
      <CardFooter>
        <button
          className="offset-md-3 offset-lg-3 btn btn-outline-secondary"
          onClick={saveCollectedSamples}>
          Save Changes
        </button>
        <button
          className="offset-md-2 offset-lg-2 btn btn-outline-danger"
          onClick={cancel}>
          Close
        </button>
      </CardFooter>
    </Card>
  );
};

export default PendingRequestProcess;
