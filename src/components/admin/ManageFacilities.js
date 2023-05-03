import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { apiURL } from '../../redux/actions';
import moment from 'moment';
import Loading from '../comp/components/Loading';

function ManageFacilities() {
  const [data, setData] = useState([]);
  const [loading, toggle] = useState(false);

  const getFacilities = () => {
    toggle(true);
    fetch(`${apiURL()}/hospitals`)
      .then((raw) => raw.json())
      .then((res) => {
        toggle(false);
        setData(res.hospital);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => getFacilities(), []);

  return (
    <div>
      <h3>Facilities</h3>
      {loading && <Loading />}

      <Table size="sm" bordered hover>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            {/* <th>Email</th> */}
            <th>Facility Type</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              {/* <td>{item.email}</td> */}
              <td>{item.type}</td>
              <td>{moment(item.createdAt).calendar()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ManageFacilities;
