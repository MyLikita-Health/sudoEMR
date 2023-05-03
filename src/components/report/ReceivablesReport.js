import React, { useCallback, useEffect } from "react";
import { Card, CardHeader, CardBody, Table } from "reactstrap";
import { useState } from "react";
import { today, formatNumber } from "../utils/helpers";
import moment from "moment";
import Scrollbars from "react-custom-scrollbars";
import DaterangeSelector from "../comp/components/DaterangeSelector";
import { useSelector } from "react-redux";
import { apiURL } from "../../redux/actions";

function ReceivablesReports() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [range, setRange] = useState({ from: today, to: today });
  const facilityId = useSelector((state) => state.auth.user.facilityId);

  const handleChange = ({ target: { name, value } }) => {
    setRange((prev) => ({ ...prev, [name]: value }));
  };

  const getReport = useCallback(() => {
    fetch(
      `${apiURL()}/account/report/receivables/${range.from}/${
        range.to
      }/${facilityId}`
    )
      .then((raw) => raw.json())
      .then((data) => {
        setData(data.data);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [range.from, range.to, facilityId]);

  useEffect(() => {
    // getSuppliers();
    getReport();
  }, [getReport]);

  return (
    <Card>
      <CardHeader className="text-center h5">Receivables Report</CardHeader>
      <CardBody>
        <DaterangeSelector
          from={range.from}
          to={range.to}
          handleChange={handleChange}
        />

        <br />
        {/* {JSON.stringify(this.state.tableData)} */}

        <Scrollbars style={{ height: 400 }}>
          <Table bordered striped responsive>
            <thead>
              <tr>
                <th className="text-center">Date</th>
                {/* <th className="text-center">Supplier</th> */}
                <th className="text-center">Customer</th>
                <th className="text-center">Drug</th>

                <th className="text-center">Amount</th>
                {/* <th className="text-center">Amount</th> */}
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => (
                  <tr key={index}>
                    <td>{moment(item.date).format("DD-MM-YYYY")}</td>
                    <td>{item.customer}</td>
                    <td>{item.description}</td>
                    {/* <td className="text-center">{item.quantity}</td> */}
                    <td className="text-right">{formatNumber(item.amount)}</td>
                  </tr>
                ))}
              {data && data.length ? (
                <tr>
                  <td colSpan={3} className="text-right font-weight-bold">
                    Total
                  </td>
                  <td className="text-right font-weight-bold">
                    {formatNumber(total) || 0}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </Scrollbars>
      </CardBody>
    </Card>
  );
}

export default ReceivablesReports;
