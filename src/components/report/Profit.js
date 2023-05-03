import React, { Component } from "react";
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
import { _fetchApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import { formatNumber } from "../utils/helpers";
import { FaPrint, FaWindowClose } from "react-icons/fa";
import { ProfitPdf } from "./ProfitPdf";
import { PDFViewer } from "@react-pdf/renderer";
// import { _fetchApi, apiURL } from '../../redux/actions/api';
// import { formatNumber } from '../utilities';

export default class DailySale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: moment().format("YYYY-MM-DD"),
      to: moment().format("YYYY-MM-DD"),
      tableData: [],
      totalProfit: [],
      totalsales: [],
      preview: true,
    };
  }

  handlePreview = () => {
    this.setState((prev) => ({ preview: !prev.preview }));
  };
  // handleChange = ({ target }) => {
  //   this.setState({
  //     [target.name]: target.value,
  //   });
  //   this.fetchDailySale ()
  // };

  componentDidMount() {
    const { from, to } = this.state;
    this.fetchDailySale(from, to);
    this.fetchtotalProfit(from, to);
  }

  fetchDailySale = (from, to) => {
    _fetchApi(
      `${apiURL()}/get/daily/profit/${from}/${to}`,
      (data) => {
        this.setState({
          tableData: data.results,
        });
      },
      (err) => console.log(err)
    );
  };

  fetchtotalProfit = (from, to) => {
    _fetchApi(
      `${apiURL()}/get/daily/totalprofit/${from}/${to}`,
      (data) => {
        this.setState({
          totalsales: data.results[0].total,
          totalProfit: data.results[0].totalprofit,
        });
      },
      (err) => console.log(err)
    );
  };

  render() {
    const { preview } = this.state;
    return (
      <>
        <Card>
          <CardHeader tag="h5" className="text-center">
            Margin
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label style={{ fontWeight: "bold" }}>From:</Label>
                  <Input
                    type="date"
                    value={this.state.from}
                    name="from"
                    onChange={(e) => {
                      let { value } = e.target;
                      this.setState({
                        from: value,
                      });
                      this.fetchDailySale(value, this.state.to);
                      this.fetchtotalProfit(value, this.state.to);
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
                    value={this.state.to}
                    name="to"
                    onChange={(e) => {
                      let { value } = e.target;
                      this.setState({
                        to: value,
                      });
                      this.fetchDailySale(this.state.from, value);
                      this.fetchtotalProfit(this.state.from, value);
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <div>
              {preview ? (
                <Button
                  color="primary"
                  className="pl-5 pr-5 float-right mb-3"
                  onClick={this.handlePreview}
                >
                  <FaPrint size="20" /> Print{" "}
                </Button>
              ) : (
                <>
                  <Button
                    color="danger"
                    className="p-3 float-right mb-3"
                    onClick={() => this.handlePreview()}
                  >
                    <FaWindowClose size="20" /> Close{" "}
                  </Button>
                  <center>
                    <PDFViewer height="900" width="600">
                      <ProfitPdf
                        dataTable={this.state.tableData}
                        totalprofit={this.state.totalProfit}
                        totalsales={this.state.totalsales}
                        from={this.state.from}
                        to={this.state.to}
                      />
                    </PDFViewer>
                  </center>
                </>
              )}
            </div>
            <Row>
              {/* <Col md={4}>
                <CustomInput type="select">
                  <option>---Select Report Type---</option>
                  <option>Daily Sales</option>
                  <option>Employee's Report</option>
                  <option>Returned Goods Report</option>
                  <option>Purchase Report</option>
                </CustomInput>
              </Col> */}

              <Col md={4} />

              {/* <Col md={4}>
                <button className="btn btn-outline-primary" disabled>
                  Download Report
                </button>
              </Col> */}
            </Row>

            <br />
            {/* {JSON.stringify(this.state.tableData)} */}
            {preview ? (
              <Scrollbars style={{ height: 400 }}>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>Date</th>
                      {/* <th>Mode of Payment</th> */}
                      <th>Drug Name</th>
                      <th>Quantity</th>

                      <th>
                        <span className="d-flex flex-row justify-cotent-between">
                          <span className="mr-1">Selling Price: </span>
                          <span>({formatNumber(this.state.totalsales)})</span>
                        </span>
                      </th>
                      <th>
                        <span className="d-flex flex-row justify-cotent-between">
                          <span className="mr-1">Margin: </span>(
                          <span>{formatNumber(this.state.totalProfit)})</span>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.tableData&&this.state.tableData.map(
                      (item, index) => (
                        <tr key={index}>
                          <td>{moment(item.date).format("DD-MM-YYYY")}</td>
                          <td className="">{item.drug}</td>
                          <td className="text-center">
                            {formatNumber(item.quantity) || 0}
                          </td>
                          <td className="text-right">
                            {formatNumber(item.amount) || 0}
                          </td>
                          <td className="text-right">
                            {formatNumber(item.profit) || 0}
                          </td>
                        </tr>
                      )
                    )}
                    <tr>
                      <td colSpan={3} className="text-right">
                        <b>Total:</b>
                      </td>
                      <td className="text-right">
                        <b>{formatNumber(this.state.totalsales) || 0}</b>
                      </td>
                      <td className="text-right">
                        <b>{formatNumber(this.state.totalProfit) || 0}</b>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Scrollbars>
            ) : null}
            {/* <center> <Button color="danger" className="pl-5 pr-5 mt-2"> <FaPrint size="20" /> Print </Button></center> */}
            <Label style={{ float: "right", fontWeight: "bold" }} />
          </CardBody>
        </Card>
      </>
    );
  }
}
