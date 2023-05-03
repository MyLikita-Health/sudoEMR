import React, { useCallback } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Table,
  Row,
  Col,
} from "reactstrap";
import DaterangeSelector from "../comp/components/DaterangeSelector";
import { useState } from "react";
import { today, formatNumber } from "../utils/helpers";
import { primaryColor } from "../utils/constants";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { apiURL } from "../../redux/actions";
import { FaPrint, FaWindowClose } from "react-icons/fa";
import { PDFViewer } from "@react-pdf/renderer";
import { TotalSummaryPDF } from "./TotalSummaryPDF";

export default function TotalSummary({ mode = "general" }) {
  const user = useSelector((state) => state.auth.user);
  const [form, setForm] = useState({
    from: today,
    to: today,
  });
  const [summary, setSummary] = useState({
    total: [],
    totalExpenses: 0,
    totalPurchases: 0,
  });
  const [preview, setPreview] = useState(true);

  const handlePreview = () => {
    setPreview((d) => !d);
  };
  const handleDateChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };

  const getReportsSummary = useCallback(
    () => {
      fetch(
        `${apiURL()}/account/summary/${form.from}/${form.to}/${user.facilityId}`
      )
        .then((raw) => raw.json())
        .then((data) => {
          if (data.success) {
            setSummary(data.results);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [form.from, form.to, user.facilityId]
  );

  const getDailyReportSummaryForUser = useCallback(
    () => {
      console.log("call user specific");
      fetch(
        `${apiURL()}/account/user-summary/${user.username}/${form.from}/${
          form.to
        }/${user.facilityId}`
      )
        .then((raw) => raw.json())
        .then((data) => {
          if (data.success) {
            setSummary(data.results);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [form.from, form.to, user.username, user.facilityId]
  );

  useEffect(
    () => {
      if (mode === "general") {
        getReportsSummary();
      } else {
        getDailyReportSummaryForUser();
      }
    },
    [getReportsSummary]
  );

  let totalCash = summary.total.find((i) => i.acct === "400021") || {
    amount: 0,
  };
  let totalPetty = summary.total.find((i) => i.acct === "400025") || {
    petty: 0,
  };
  let totalBank = summary.total.find((i) => i.acct === "400022") || {
    amount: 0,
  };

  // let otherExpenses =
  // parseInt(summary.totalExpenses) - parseInt(summary.totalPurchases);

  return (
    <Card>
      <CardHeader className="h6 text-center">
        {mode === "general"
          ? "Report Summary"
          : `Report Summary (${user.lastname} ${user.firstname})`}
      </CardHeader>

      <CardBody>
        {mode === "general" ? (
          <DaterangeSelector
            from={form.from}
            to={form.to}
            handleChange={handleDateChange}
          />
        ) : null}

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
                  <TotalSummaryPDF
                    from={form.from}
                    to={form.to}
                    summary={summary}
                    totalCash={totalCash}
                    totalBank={totalBank}
                    // totalPOS={totalPOS}
                    title={
                      mode === "general"
                        ? "Report Summary"
                        : `Report Summary (${user.lastname} ${user.firstname})`
                    }
                    otherExpenses={
                      parseInt(summary.totalExpenses) -
                      parseInt(summary.totalPurchases) -
                      parseInt(summary.totalReturned)
                    }
                    totalPetty={
                      mode === "general"
                        ? formatNumber(totalPetty ? totalPetty.petty : "0") || 0
                        : formatNumber(summary.totalPetty) || 0
                    }
                  />
                </PDFViewer>
              </center>
            </>
          )}
        </div>
        {preview ? (
          <Row>
            {/* {JSON.stringify(summary)} */}
            <Col md={12}>
              <Card
                style={{
                  borderLeft: `5px solid ${primaryColor}`,
                  borderRight: `5px solid ${primaryColor}`,
                }}
              >
                <Table hover striped>
                  <tbody>
                    <tr>
                      <th>Total Drug Sales</th>
                      <td className="text-right">
                        ₦{formatNumber(summary.totalSales) || 0}
                      </td>
                    </tr>
                    <tr>
                      <th>Total Drug Returned</th>
                      <td className="text-right">
                        ₦{formatNumber(summary.totalReturned) || 0}
                      </td>
                    </tr>
                    <tr>
                      <th>Total Sales on Credit</th>
                      <td className="text-right">
                        ₦{formatNumber(summary.totalReceivable) || 0}
                      </td>
                    </tr>
                    <tr>
                      <th>Total Drug Purchase</th>
                      <td className="text-right">
                        ₦{formatNumber(summary.totalPurchases) || 0}
                      </td>
                    </tr>
                    <tr>
                      <th>Other Expenses</th>
                      <td className="text-right">
                        ₦{summary.totalExpenses - summary.totalPurchases}
                      </td>
                    </tr>
                    <tr>
                      <th>Cash at hand</th>
                      <td className="text-right">
                        ₦{totalCash.amount - summary.totalReturned}
                      </td>
                    </tr>
                    <tr>
                      <th>Petty Cash</th>
                      <td className="text-right">
                        ₦
                        {mode === "general"
                          ? formatNumber(totalPetty ? totalPetty.petty : "0") ||
                            0
                          : formatNumber(summary.totalPetty) || 0}
                      </td>
                    </tr>
                    <tr>
                      <th>Total Bank</th>
                      <td className="text-right">
                        ₦{formatNumber(totalBank ? totalBank.amount : "0") || 0}
                      </td>
                    </tr>
                    {/* <tr>
                      <th>Total POS</th>
                      <td className="text-right">
                        ₦{formatNumber(totalPOS ? totalPOS.amount : '0') || 0}
                      </td>
                    </tr> */}
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        ) : null}
      </CardBody>
    </Card>
  );
}
