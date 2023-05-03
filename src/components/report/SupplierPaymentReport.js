import React, { useState, useCallback, useEffect } from "react";
import { CardBody, Table } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import moment from "moment";
import { apiURL } from "../../redux/actions";
import { formatNumber } from "../utils/helpers";
import { useSelector } from "react-redux";
import DaterangeSelector from "../comp/components/DaterangeSelector";

const today = moment().format("YYYY-MM-DD");

export default function SupplierPaymentReport() {
  const user = useSelector((state) => state.auth.user);

  const [form, setForm] = useState({
    from: today,
    to: today,
  });
  const [tableData, setTableData] = useState([]);
  const [total, setTotal] = useState(0);
  // const [preview, setPreview] = useState(true);

  // const handlePreview = () => {
  //   setPreview((d) => !d);
  // };

  const fetchSupplierPaymentsReport = useCallback(
    () => {
      fetch(
        `${apiURL()}/account/report/supplier-payment/${form.from}/${form.to}/${
          user.facilityId
        }`
      )
        .then((raw) => raw.json())
        .then((data) => {
          if (data.success) {
            setTableData(data.data);
            setTotal(data.total.total);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [form.from, form.to, user.facilityId]
  );

  useEffect(
    () => {
      fetchSupplierPaymentsReport();
    },
    [fetchSupplierPaymentsReport]
  );

  const handleDateRangeChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  return (
    <CardBody>
      <DaterangeSelector
        from={form.from}
        to={form.to}
        handleChange={handleDateRangeChange}
      />

      <Scrollbars style={{ height: 400 }}>
        <Table striped bordered>
          <thead>
            <tr>
              <th className="text-center">Date</th>
              <th className="text-center">Supplier</th>
              <th className="text-center">Mode of payment</th>
              <th className="text-center">Amount</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{moment(item.date).format("DD-MM-YYYY")}</td>
                <td className="">{item.supplier_name}</td>
                <td className="text-center">{item.modeOfPayment}</td>
                <td className="text-right">{formatNumber(item.amount) || 0}</td>
                {/* <td className="text-center">{item.description}</td> */}
              </tr>
            ))}
            <tr>
              <th colSpan={3} className="text-right">
                Total
              </th>
              <th className="text-right">{total}</th>
            </tr>
          </tbody>
        </Table>
      </Scrollbars>
    </CardBody>
  );
}
