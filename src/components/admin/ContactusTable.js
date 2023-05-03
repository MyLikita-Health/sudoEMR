import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Table } from 'reactstrap';
import { apiURL } from '../../redux/actions';
import moment from 'moment';

export default function ContactusTable() {
  const [contactus, setContactus] = useState([]);
  const getContactus = () => {
    fetch(`${apiURL()}/contactus/all`)
      .then((raw) => raw.json())
      .then((result) => setContactus(result.results));
  };

  useEffect(() => {
    getContactus();
  }, []);
  return (
    <Card body className="mt-3 p-0 m-2">
      <CardHeader> Contact Us </CardHeader>
      <Table bordered hover striped>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Email</th>
            <th>Message</th>
            <th>Time Send</th>
          </tr>
        </thead>
        <tbody>
          {contactus.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>
              <td>{moment(item.createdAt).calendar()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
