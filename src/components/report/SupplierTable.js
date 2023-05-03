import React, { useEffect, useState, useCallback } from "react";
import { Table, Button } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import moment from "moment";
// import { _fetchApi, apiURL } from '../../redux/actions/api';
// import { formatNumber } from '../utilities';
import DaterangeSelector from "../comp/components/DaterangeSelector";
import { apiURL } from "../../redux/actions";
import { _fetchApi } from "../../redux/actions/api";
import { formatNumber } from "../utils/helpers";
import { FaPrint, FaWindowClose } from "react-icons/fa";
import { PDFViewer } from "@react-pdf/renderer";
import { SupplierTablePDF } from "./SupplierTablePDF";
// import { TextInput, AutoComplete } from '../components';

const today = moment().format("YYYY-MM-DD");

export default function TotalPurchase() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  // const [supplierList, setSupplierList] = useState([]);

  // const [supplier, setSupplier] = useState('');
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

  const fetchSupplierItemsReport = useCallback(
    () => {
      _fetchApi(
        `${apiURL()}/account/get/suppliersummary/all/${range.from}/${range.to}`,
        (data) => {
          if (data.success) {
            setData(data.results.data);
            setTotal(data.results.total);
          }
        },
        (err) => console.log(err)
      );
    },
    [range.from, range.to]
  );

  // const getSuppliers = () => {
  //   _fetchApi(
  //     `${apiURL()}/suppliers/all`,
  //     (data) => {
  //       setSupplierList(data.results);
  //       // setTotal(data.results.total);
  //     },
  //     (err) => console.log(err),
  //   );
  // };

  useEffect(
    () => {
      // getSuppliers();
      fetchSupplierItemsReport();
    },
    [fetchSupplierItemsReport]
  );

  return (
    <>
      <DaterangeSelector
        from={range.from}
        to={range.to}
        handleChange={handleChange}
      />
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
              <SupplierTablePDF data={data} total={total} range={range} />
            </PDFViewer>
          </center>
        </>
      )}

      <br />
      {/* {JSON.stringify(this.state.tableData)} */}
      {preview ? (
        <Scrollbars style={{ height: 400 }}>
          <Table bordered striped responsive>
            <thead>
              <tr>
                <th className="text-center">Date</th>
                <th className="text-center">Supplier</th>
                <th className="text-center">Item</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{moment(item.created_at).format("DD-MM-YYYY")}</td>
                  <td>{item.supplier_name}</td>
                  <td>{item.drug}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-right">
                    {formatNumber(item.amount) || 0}
                  </td>
                </tr>
              ))}
              {data.length ? (
                <tr>
                  <td colSpan={4} className="text-right font-weight-bold">
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
      ) : null}
    </>
  );
}
