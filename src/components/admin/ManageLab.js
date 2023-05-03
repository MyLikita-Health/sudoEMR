import React, { useCallback, useEffect, useState, } from "react";
import { Card, Table, Input } from "reactstrap";
import { apiURL } from "../../redux/actions";
import DaterangeSelector from "../comp/components/DaterangeSelector";
import { useSelector } from "react-redux";
import moment from "moment"

function ManageLab() {
  const [range, setRange] = useState({ from: today, to: today });
  const [results, setResults] = useState([])
  const facilityId = useSelector((state) => state.facility.info.facility_id);

  const handleRangeChange = ({ target: { name, value } }) => {
    setRange((p) => ({ ...p, [name]: value }));
  };

  let today = moment().format("YYYY-MM-DD");

  const getLabProccess = useCallback(
    () => {
      fetch(
        `${apiURL()}/lab/completed-lab-tests/${facilityId}?from=${range.from}&to=${range.to}&query_type=setup`
      )
        .then((raw) => raw.json())
        .then((data) => {
          if (data.success && data.results) {
            setResults(data.results);
          }
        })
        .catch((err) => console.log(err));
    }, [range.from,range.to,  facilityId]

  );

  useEffect(
    () => {
      getLabProccess();
    },
    [getLabProccess]
  );
  console.log(results);
  return (
    <Card body>
      <DaterangeSelector
        from={range.from}
        to={range.to}
        handleChange={handleRangeChange}
      />
      {/* {JSON.stringify(results)} */}
      <Table striped size="sm" bordered responsive>
        <thead>
          <tr>
            <th>Date</th>
            <th>Patient id</th>
            <th>Patient Name</th>
            <th>Lab No</th>
            <th>Test Name</th>
            <th>Amount</th>
            <th>Specimen</th>
            <th>Barcode</th>
            <th>Registered By</th>
            <th>Status</th>
            <th>Modified</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item) => (
            <tr>
              <td>{item.created_at}</td>
              <td>{item.patient_id}</td>
              <td>{item.name}</td>
              <td>{item.booking_no}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.specimen}</td>
              <td>{item.code}</td>
              <td>{item.created_by}</td>
              <td>{item.status}</td>
              <td><Input type="select">
                <option>--select--</option>
                <option>Sample Collection</option>
                <option>Sample Analytics</option>
                <option>Report</option>
                </Input></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default ManageLab;
