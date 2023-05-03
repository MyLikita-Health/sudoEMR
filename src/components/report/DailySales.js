import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
  Table,
  Button,
} from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import moment from "moment";
// import { _fetchApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import { formatNumber } from "../utils/helpers";
import { FaPrint, FaWindowClose } from "react-icons/fa";
import { PDFViewer } from "@react-pdf/renderer";
import { GeneralReportPdf } from "./GeneralReportPdf";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const today = moment().format("YYYY-MM-DD");

export default function GenerateReport() {
  const user = useSelector((state) => state.auth.user);
  const [form, setForm] = useState({
    from: today,
    to: today,
  });
  const [tableData, setTableData] = useState([]);
  const [totalSales, setTotalSales] = useState([]);
  const [preview, setPreview] = useState(true);

  const handlePreview = () => {
    setPreview((d) => !d);
  };

  const fetchDailySales = useCallback(
    () => {
      fetch(
        `${apiURL()}/get/daily/sales/${form.from}/${form.to}/${user.facilityId}`
      )
        .then((raw) => raw.json())
        .then((data) => {
          let results = data.data;
          if (data.success) {
            let newList = [];
            results.forEach((item) => {
              if (parseInt(item.amount) !== 0) {
                newList.push(item);
              }
            });
            setTableData(newList);
            setTotalSales(data.total);
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
      fetchDailySales();
    },
    [fetchDailySales]
  );

  return (
    <>
      <Card>
        <CardHeader tag="h5" className="text-center">
          Daily Sales
        </CardHeader>
        <CardBody>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>From:</Label>
                <Input
                  type="date"
                  value={form.from}
                  name="from"
                  onChange={(e) => {
                    let { value } = e.target;
                    setForm((p) => ({ ...p, from: value }));
                  }}
                />
              </FormGroup>
            </Col>

            <Col md={4} />

            <Col md={4}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>To:</Label>
                <Input
                  type="date"
                  value={form.to}
                  name="to"
                  onChange={(e) => {
                    let { value } = e.target;
                    setForm((p) => ({ ...p, to: value }));
                  }}
                />
              </FormGroup>
            </Col>
          </Row>

          {preview ? (
            <div className="pl-5 pr-5 float-right mb-3">
              <Button
                color="primary"
                className="pl-5 pr-5  mb-3"
                onClick={handlePreview}
              >
                <FaPrint size="20" /> Print
              </Button>
            </div>
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
                  <GeneralReportPdf
                    tableData={tableData}
                    totalSales={totalSales}
                  />
                </PDFViewer>
              </center>
            </>
          )}

          <div className="d-flex flex-row justify-content-end">
            <Label style={{ fontWeight: "bold" }}>
              Total:
              {formatNumber(totalSales)}
            </Label>
          </div>

          <br />
          {preview ? (
            <Scrollbars style={{ height: 400 }}>
              <Table striped>
                <thead>
                  <tr>
                    <th>Date</th>
                    {/* <th>Mode of Payment</th> */}
                    <th>Drug Name</th>
                    {/* <th>Quantity</th> */}
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index}>
                      <td>{moment(item.date).format("DD-MM-YYYY")}</td>
                      <td>{item.description}</td>
                      <td>{formatNumber(item.amount)}</td>
                      {/* <td>{formatNumber(item.debit)}</td> */}
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={2} className="text-right font-weight-bold">
                      Total:
                    </td>
                    <td>
                      <b>{formatNumber(totalSales) || 0}</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Scrollbars>
          ) : null}
          {/* <center> <Button color="danger" className="pl-5 pr-5 mt-2"> <FaPrint size="20" /> Print </Button></center> */}
          {/* <Label style={{ float: 'right', fontWeight: 'bold' }}>Total:</Label> */}
        </CardBody>
      </Card>
    </>
  );
}
