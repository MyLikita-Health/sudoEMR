import React, { useEffect, useState, useCallback } from "react";
import { Table, FormGroup, Button } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import moment from "moment";
import DaterangeSelector from "../comp/components/DaterangeSelector";
import AutoComplete from "../comp/components/AutoComplete";
import { _fetchApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
import { formatNumber } from "../utils/helpers";
import { FaPrint, FaWindowClose } from "react-icons/fa";
import { SupplierNamePDF } from "./SupplierNamePDF";
import { PDFViewer } from "@react-pdf/renderer";
// import { TextInput, AutoComplete } from '../components';

const today = moment().format("YYYY-MM-DD");

export default function SupplierTable() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [supplierList, setSupplierList] = useState([]);
  const [supplierName, setSupplierName] = useState("");

  const [supplier, setSupplier] = useState("");
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
        `${apiURL()}/account/get/supplierbreakdown/${supplier}/${range.from}/${
          range.to
        }`,
        (data) => {
          setData(data.results.data);
          setTotal(data.results.total);
        },
        (err) => console.log(err)
      );
    },
    [range.from, range.to, supplier]
  );

  const getSuppliers = () => {
    _fetchApi(
      `${apiURL()}/drugs/supplier/all`,
      (data) => {
        setSupplierList(data.results);
        // setTotal(data.results.total);
      },
      (err) => console.log(err)
    );
  };

  useEffect(
    () => {
      getSuppliers();
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
              <SupplierNamePDF
                data={data}
                total={total}
                range={range}
                supplierName={supplierName}
              />
            </PDFViewer>
          </center>
        </>
      )}
      {preview ? (
        <>
          <FormGroup>
            <AutoComplete
              label="Select Supplier"
              labelKey="supplier_name"
              placeholder="Select a supplier"
              options={supplierList}
              onChange={(val) => {
                if (val.length) {
                  let supp = val[0].id;
                  let supName = val[0].supplier_name;
                  setSupplier(supp);
                  setSupplierName(supName);
                  // fetchSupplierItemsReport(supp);
                }
              }}
            />
          </FormGroup>

          {/* {JSON.stringify(supplierName)} */}
          <Scrollbars style={{ height: 400 }}>
            {supplier === "" ? (
              <div className="alert alert-warning mt-3 mx-5 py-3">
                <p className="text-center h5">
                  Select a supplier to get started.
                </p>
              </div>
            ) : (
              <Table bordered striped responsive>
                <thead>
                  <tr>
                    <th className="text-center">Date</th>
                    {/* <th className="text-center">Supplier</th> */}
                    <th className="text-center">Item</th>

                    <th className="text-center">Quantity</th>
                    <th className="text-center">Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{moment(item.created_at).format("DD-MM-YYYY")}</td>
                      {/* <td className="text-center">{item.supplier}</td> */}
                      <td>{item.drug}</td>
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-right">
                        {formatNumber(item.amount) || 0}
                      </td>
                    </tr>
                  ))}
                  {data.length ? (
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
            )}
          </Scrollbars>
        </>
      ) : null}
      {/* <center> <Button color="danger" className="pl-5 pr-5 mt-2"> <FaPrint size="20" /> Print </Button></center> */}
      {/* <Label style={{ float: 'right', fontWeight: 'bold' }}>
        Total: {total}
      </Label> */}
      {/* </CardBody> */}
      {/* </Card> */}
    </>
  );
}
