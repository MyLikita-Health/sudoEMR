import React, { useState, useCallback, useEffect } from "react";
import { CardBody, Table, Button } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import moment from "moment";
import { apiURL } from "../../redux/actions";
import { formatNumber } from "../utils/helpers";
import { FaPrint, FaWindowClose } from "react-icons/fa";
import { PDFViewer } from "@react-pdf/renderer";
import { ExpensesBreakdownPDF } from "./ExpensesBreakdownPDF";
import { useSelector } from "react-redux";
import DaterangeSelector from "../comp/components/DaterangeSelector";

const today = moment().format("YYYY-MM-DD");

export default function NormalExpenses() {
  const user = useSelector((state) => state.auth.user);

  const [form, setForm] = useState({
    from: today,
    to: today,
  });
  const [tableData, setTableData] = useState([]);
  const [preview, setPreview] = useState(true);

  const handlePreview = () => {
    setPreview((d) => !d);
  };

  const fecthExpenses = useCallback(
    () => {
      fetch(
        `${apiURL()}/account/expenses/${form.from}/${form.to}/${
          user.facilityId
        }`
      )
        .then((raw) => raw.json())
        .then((data) => {
          if (data.success) {
            setTableData(data.results);
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
      fecthExpenses();
    },
    [fecthExpenses]
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

      <div>
        {preview ? (
          <Button
            color="primary"
            className="pl-5 pr-5 float-right mb-3"
            onClick={handlePreview}
          >
            <FaPrint size="20" /> Print
          </Button>
        ) : (
          <>
            <Button
              color="danger"
              className="p-3 float-right mb-3"
              onClick={() => handlePreview()}
            >
              <FaWindowClose size="20" /> Close
            </Button>
            <center>
              <PDFViewer height="900" width="600">
                <ExpensesBreakdownPDF
                  dataTable={tableData}
                  from={form.from}
                  to={form.to}
                />
              </PDFViewer>
            </center>
          </>
        )}
      </div>

      <br />
      {preview ? (
        <Scrollbars style={{ height: 400 }}>
          <Table striped bordered>
            <thead>
              <tr>
                <th className="text-center">Date</th>
                <th className="text-center">Account</th>
                <th className="text-center">Description</th>
                <th className="text-center">Mode of payment</th>
                <th className="text-center">Recipient</th>
                <th className="text-center">Amount</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr key={index}>
                  <td>{moment(item.createdAt).format("DD-MM-YYYY")}</td>
                  <td className="">{item.Acct_source}</td>
                  <td className="">{item.narration}</td>
                  <td className="">{item.modeOfPayment}</td>
                  <td className="">{item.client_acct}</td>
                  <td className="text-right">
                    {formatNumber(item.debit) || 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Scrollbars>
      ) : null}
    </CardBody>
  );
}
