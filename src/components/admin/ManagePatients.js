import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import moment from "moment";
import { useCallback } from "react";
import { sudoEMRURL } from "../../redux/actions";
// import { _customNotify } from '../utils/helpers';
import Loading from "../comp/components/Loading";

function ManagePatients() {
  const [data, setData] = useState([]);
  const [loading, toggle] = useState(false);
  const [last7days, setLast7days] = useState("");

  const getData = useCallback(() => {
    toggle(true);
    fetch(`${sudoEMRURL}/api/users/list`)
      .then((raw) => raw.json())
      .then((res) => {
        toggle(false);
        setData(res.users);
      })
      .catch((error) => console.log(error));
  });

  const getLast7days = useCallback(() => {
    toggle(true);
    fetch(`${sudoEMRURL}/api/users/last7days`)
      .then((raw) => raw.json())
      .then((res) => {
        toggle(false);
        setLast7days(res);
      })
      .catch((error) => console.log(error));
  });

  useEffect(() => {
    getData();
    getLast7days();
  }, []);
  return (
    <div>
      <h3>Patients</h3>
      {loading && <Loading />}
      <p className="text-right font-weight-bold">
        {last7days.count} new registration(s) in last 7 days
      </p>
      <Table size="sm" hover striped>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.fullname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{moment(item.createdAt).calendar()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ManagePatients;
