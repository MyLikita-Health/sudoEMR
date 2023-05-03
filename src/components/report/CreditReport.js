import React, { useState, useCallback, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import { apiURL } from "../../redux/actions";
import { formatNumber } from "../utils/helpers";
import { FaPrint, FaWindowClose } from "react-icons/fa";
import { PDFViewer } from "@react-pdf/renderer";
import { CreditReportPDF } from "./CreditReportPDF";
import { useSelector } from "react-redux";

export default function CreditReport() {
  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState([]);
  const [preview, setPreview] = useState(true);

  const handlePreview = () => {
    setPreview((d) => !d);
  };

  const fetchSupplierAmount = useCallback(
    () => {
      fetch(`${apiURL()}/account/supplier/debitors/${user.facilityId}`)
        .then((raw) => raw.json())
        .then((data) => {
          if (data.success) {
            setData(data.results);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [user.facilityId]
  );

  useEffect(
    () => {
      fetchSupplierAmount();
    },
    [fetchSupplierAmount]
  );

  return (
    <>
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
                  <th className="text-center">Supplier Name</th>
                  <th className="text-center">Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
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
            className="px-3 float-right mb-3 border-rounded"
            onClick={() => handlePreview()}
          >
            <FaWindowClose size="20" /> Close
          </Button>
          <center>
            <PDFViewer height="900" width="600">
              <CreditReportPDF data={data} type="Creditors" />
            </PDFViewer>
          </center>
        </>
      )}
    </>
  );
}
