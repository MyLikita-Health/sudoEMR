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
// import { _fetchApi } from '../../redux/actions/api';
import { apiURL } from "../../redux/actions";
import { formatNumber } from "../utils/helpers";
import { useSelector } from "react-redux";
import { FaPrint, FaWindowClose } from "react-icons/fa";
// import { OverViewReportPDF } from './OverViewReportPdf';
import { PDFViewer } from "@react-pdf/renderer";
import { OverViewReportPDF2 } from "./OverViewReportPDF2";
// import './table.css'
// import { _fetchApi, apiURL } from '../../redux/actions/api';
// import { formatNumber } from '../utilities';

// const today = moment().format('YYYY-MM-DD');

export default function InvertoryOverView() {
  const startOfMonth = moment()
    .startOf("month")
    .format("YYYY-MM-DD");
  const endOfMonth = moment()
    .endOf("month")
    .format("YYYY-MM-DD");

  const [from, setFrom] = useState(startOfMonth);
  const [to, setTo] = useState(endOfMonth);
  const [overView, setOverView] = useState([]);
  const [totalAmountBought, setTotalAmountBought] = useState([]);
  const [totalAmountInStore, setTotalAmountInStore] = useState([]);
  const [totalAmountInShelf, setTotalAmountInShelf] = useState([]);
  const [totalAmountSold, setTotalAmountSold] = useState([]);
  // const [grandTotal, setGrandTotal] = useState({});
  const [preview, setPreview] = useState(true);

  const handlePreview = () => {
    setPreview((d) => !d);
  };
  const user = useSelector((state) => state.auth.user);
  const pharmHasStore = useSelector((state) => state.pharmacy.pharmHasStore);

  // handleChange = ({ target }) => {
  //   setState({
  //     [target.name]: target.value,
  //   });
  //   fetchOverview()
  // };

  const fetchOverview = (from, to, facId) => {
    fetch(`${apiURL()}/account/overview/${from}/${to}/${facId}`)
      .then((raw) => raw.json())
      .then((data) => {
        if (data.success) {
          setOverView(data.results.data);
          setTotalAmountBought(data.results.totals[0].totalamountbought);
          setTotalAmountInStore(data.results.totals[0].totalamountinstore);
          setTotalAmountInShelf(data.results.totals[0].totalamountinshelf);
          setTotalAmountSold(data.results.totals[0].totalamountsold);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchOverviewWithoutStore = (from, to, facId) => {
    fetch(`${apiURL()}/account/overview-without-store/${from}/${to}/${facId}`)
      .then((raw) => raw.json())
      .then((data) => {
        if (data.success) {
          setOverView(data.results.data);
          // setTotalAmountBought(data.results.totals.totalamountbought);
          // setTotalAmountInStore(data.results.totals.totalamountinstore);
          setTotalAmountInShelf(data.results.totals.totalamountinshelf);
          setTotalAmountSold(data.results.totals.totalamountsold);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(
    () => {
      if (pharmHasStore) {
        fetchOverview(from, to, user.facilityId);
      } else {
        fetchOverviewWithoutStore(from, to, user.facilityId);
      }
    },
    [from, to, user.facilityId]
  );

  // const {from,to} =state
  return (
    <>
      <Card>
        <CardHeader tag="h5">
          Overview Report
          {/* {JSON.stringify(grandTotal)} */}
        </CardHeader>
        <CardBody>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>From:</Label>
                <Input
                  type="date"
                  value={from}
                  name="from"
                  onChange={(e) => {
                    let { value } = e.target;
                    setFrom(value);
                    fetchOverview(value, to);
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
                  value={to}
                  name="to"
                  onChange={(e) => {
                    let { value } = e.target;
                    setTo(value);
                    fetchOverview(from, value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          {preview ? (
            <Button
              color="primary"
              className="pl-5 pr-5 float-right mb-3"
              onClick={() => handlePreview()}
            >
              <FaPrint size="20" /> Print{" "}
            </Button>
          ) : (
            <>
              <Button
                color="danger"
                className="p-3 float-right mb-3"
                onClick={() => handlePreview()}
              >
                <FaWindowClose size="20" /> Close{" "}
              </Button>
              <center>
                <PDFViewer height="900" width="600">
                  {/* <OverViewReportPDF
                    overView={overView}
                    totalAmountBought={totalAmountBought}
                    totalAmountInStore={totalAmountInStore}
                    totalAmountInShelf={totalAmountInShelf}
                    totalAmountSold={totalAmountSold}
                    pharmHasStore={pharmHasStore}
                    from={from}
                    to={to}
                  /> */}
                  <OverViewReportPDF2
                    overView={overView}
                    totalAmountBought={totalAmountBought}
                    totalAmountInShelf={totalAmountInShelf}
                    totalAmountSold={totalAmountSold}
                    from={from}
                    to={to}
                  />
                </PDFViewer>
              </center>
            </>
          )}

          <br />
          {/* {JSON.stringify(tableData)} */}
          {preview ? (
            <Scrollbars style={{ height: 400 }}>
              <Table bordered striped responsive className="header-fixed">
                <thead>
                  <tr>
                    <th>Drugs</th>
                    {pharmHasStore && (
                      <th
                        colSpan={4}
                        className="text-center bg-success text-white"
                      >
                        Store
                      </th>
                    )}

                    <th
                      colSpan={4}
                      className="text-center bg-primary text-white"
                    >
                      Shelf
                    </th>
                  </tr>
                  <tr>
                    <th className="text-center">Drug</th>
                    {pharmHasStore && (
                      <th className="text-center  bg-success text-white">
                        Bought
                      </th>
                    )}
                    {pharmHasStore && (
                      <th className="text-center  bg-success text-white">
                        Cost
                      </th>
                    )}

                    {pharmHasStore && (
                      <th className="text-center  bg-success text-white">
                        In Store
                      </th>
                    )}
                    {pharmHasStore && (
                      <th className="text-center  bg-success text-white">
                        Cost
                      </th>
                    )}
                    <th className="text-center bg-primary text-white">
                      On Shelf
                    </th>
                    <th className="text-center bg-primary text-white">
                      Amount
                    </th>
                    <th className="text-center bg-primary text-white">Sold</th>

                    <th className="text-center bg-primary text-white">
                      Amount
                    </th>
                    {/* <th>Purchase date</th>
                    <th>Sales date</th> */}
                    {/* <th>Profit</th> */}
                  </tr>
                </thead>
                <tbody>
                  {overView.map((item, index) => (
                    <tr key={index}>
                      <td>{item.drug}</td>
                      {pharmHasStore && (
                        <td className="text-center bg-success text-white">
                          {item.quantity_bought}
                        </td>
                      )}
                      {pharmHasStore && (
                        <td className="text-right bg-success text-white">
                          {formatNumber(item.amount_bought) || 0}
                        </td>
                      )}
                      {pharmHasStore && (
                        <td className="text-center bg-success text-white">
                          {item.quantity_in_store}
                        </td>
                      )}
                      {pharmHasStore && (
                        <td className="text-right bg-success text-white">
                          {formatNumber(item.amount_in_store) || 0}
                        </td>
                      )}
                      <td className="text-center bg-primary text-white bg-primary text-white">
                        {item.quantity_in_shelf}
                      </td>
                      <td className="text-right bg-primary text-white bg-primary text-white">
                        {formatNumber(item.amount_in_shelf) || 0}
                      </td>
                      <td className="text-center bg-primary text-white bg-primary text-white">
                        {item.quantity_sold}
                      </td>
                      <td className="text-right bg-primary text-white bg-primary text-white">
                        {formatNumber(item.amount_sold) || 0}
                      </td>
                      {/* <td>{item.purchase_date}</td>
                      <td>{item.sales_date}</td> */}
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <b>Total:</b>
                    </td>
                    {/* {pharmHasStore&&<td className=" bg-success text-white" />} */}
                    {pharmHasStore && (
                      <td
                        colSpan={2}
                        className="text-right  bg-success text-white"
                      >
                        <b>{formatNumber(totalAmountBought) || 0}</b>
                      </td>
                    )}
                    {/* {pharmHasStore&&<td className=" bg-success text-white" />} */}
                    {pharmHasStore && (
                      <td
                        colSpan={2}
                        className="text-right bg-success text-white"
                      >
                        <b>{formatNumber(totalAmountInStore) || 0}</b>
                      </td>
                    )}
                    {/* <td className=" bg-primary text-white" /> */}
                    <td
                      colSpan={2}
                      className="text-right  bg-primary text-white"
                    >
                      <b>{formatNumber(totalAmountInShelf) || 0}</b>
                    </td>
                    {/* <td className=" bg-primary text-white" /> */}
                    <td
                      colSpan={2}
                      className="text-right  bg-primary text-white"
                    >
                      <b>{formatNumber(totalAmountSold) || 0}</b>
                    </td>
                    {/* <td></td>
                    <td></td> */}
                  </tr>
                </tbody>
              </Table>
            </Scrollbars>
          ) : null}
          <Label style={{ float: "right", fontWeight: "bold" }} />
        </CardBody>
      </Card>
    </>
  );
}
