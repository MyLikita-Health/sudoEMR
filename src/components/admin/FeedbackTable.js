import React, { useState, useEffect } from 'react';
import { Card, CardHeader, Table } from 'reactstrap';
import { apiURL } from '../../redux/actions';
import moment from 'moment';

export default function FeedBackTable() {
  const [feedback, setFeedback] = useState([]);
  const getFeedback = () => {
    fetch(`${apiURL()}/feedbacks/all`)
      .then((raw) => raw.json())
      .then((result) => setFeedback(result.results));
  };
  useEffect(() => {
    getFeedback();
  }, []);
  return (
    <Card body className="mt-3 p-0 m-2">
      <CardHeader> Feedback </CardHeader>
      <Table bordered hover striped>
        <thead>
          <tr>
            <th>S/N</th>
            <th>User</th>
            <th>Message</th>
            <th>Time Send</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.userId}</td>
              <td>{item.message}</td>
              <td>{moment(item.createdAt).calendar()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
