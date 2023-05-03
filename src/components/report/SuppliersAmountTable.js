import React, { useState, useCallback, useEffect } from "react";
import { Label, Table, Button } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import moment from "moment";
import DaterangeSelector from "../comp/components/DaterangeSelector";
import { _fetchApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import { formatNumber } from "../utils/helpers";
import { FaPrint, FaWindowClose } from "react-icons/fa";
import { SupplierOverviewPDF } from "./SuppliersOverviewPDF";
import { PDFViewer } from "@react-pdf/renderer";

const today = moment().format("YYYY-MM-DD");

export default function SuppliersAmountTable() {
  const [data, setData] = useState([]);
  const [range, setRange] = useState({
    from: today,
    to: today,
  });
  const [preview, setPreview] = useState(true);

  const handlePreview = () => {
    setPreview((d) => !d);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const fetchSupplierAmount = useCallback(
    () => {
      _fetchApi(
        `${apiURL()}/account/total/amount/${range.from}/${range.to}`,
        (data) => {
          setData(data.results);
        },
        (err) => console.log(err)
      );
    },
    [range.from, range.to]
  );

  useEffect(
    () => {
      fetchSupplierAmount();
    },
    [fetchSupplierAmount]
  );

  return (
    <>
      <DaterangeSelector
        from={range.from}
        to={range.to}
        handleChange={handleChange}
      />{" "}
      {preview ? (
        <>
          <Button
            color="primary"
            className="pl-5 pr-5 float-right mb-3"
            onClick={() => handlePreview()}
          >
            <FaPrint size="20" /> Print{" "}
          </Button>
          <Scrollbars style={{ height: 400 }}>
            <Table bordered striped responsive>
              <thead>
                <tr>
                  {/* <th className="text-center">Date</th> */}
                  <th className="text-center">Supplier</th>
                  <th className="text-center">Amount</th>
                </tr>
              </thead>
              <tbody>
                {data&&data.map((item, index) => (
                  <tr key={index}>
                    <td className="">{item.supplier}</td>
                    <td className="text-center">{formatNumber(item.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Scrollbars>
        </>
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
              <SupplierOverviewPDF data={data} range={range} />
            </PDFViewer>
          </center>
        </>
      )}
      {/* <center> <Button color="danger" className="pl-5 pr-5 mt-2"> <FaPrint size="20" /> Print </Button></center> */}
      <Label style={{ float: "right", fontWeight: "bold" }} />
      {/* </CardBody> */}
      {/* </Card> */}
    </>
  );
}
