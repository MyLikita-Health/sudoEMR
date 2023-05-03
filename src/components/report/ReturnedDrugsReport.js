// /api/report/returned-goods
import React, { useEffect, useState, useCallback } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import moment from "moment";
import { apiURL } from "../../redux/actions";
import DaterangeSelector from "../comp/components/DaterangeSelector";
import { formatNumber } from "../utils/helpers";
import { useSelector } from "react-redux";

const today = moment().format("YYYY-MM-DD");

export default function ReturnDrugsReport() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const facilityId = useSelector((state) => state.auth.user.facilityId);

  const [range, setRange] = useState({
    from: today,
    to: today,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchSupplierItemsReport = useCallback(
    () => {
      fetch(
        `${apiURL()}/account/report/returned-drugs/${range.from}/${
          range.to
        }/${facilityId}`
      )
        .then((raw) => raw.json())
        .then((data) => {
          setData(data.data);
          setTotal(data.total.total);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [range.from, range.to, facilityId]
  );

  useEffect(
    () => {
      // getSuppliers();
      fetchSupplierItemsReport();
    },
    [fetchSupplierItemsReport]
  );

  return (
    <>
      <Card>
        <CardHeader tag="h5" className="text-center">
          Returned Drugs Report
        </CardHeader>
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
                      <td>{item.description}</td>
                      {/* <td className="text-center">{item.quantity}</td> */}
                      <td className="text-right">
                        {formatNumber(item.amount)}
                      </td>
                    </tr>
                  ))}
                {data&&data.length ? (
                  <tr>
                    <td colSpan={2} className="text-right font-weight-bold">
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
    </>
  );
}
