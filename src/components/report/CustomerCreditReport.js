import React, { useState, useCallback, useEffect } from "react";
import { Table } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import { apiURL } from "../../redux/actions";
import { formatNumber } from "../utils/helpers";
import { useSelector } from "react-redux";

export default function CustomerCreditReport() {
  const user = useSelector((state) => state.auth.user);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const getData = useCallback(
    () => {
      fetch(`${apiURL()}/account/customer/debitors/${user.facilityId}`)
        .then((raw) => raw.json())
        .then((data) => {
          if (data.success) {
            setData(data.data);
            setTotal(data.total);
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
      getData();
    },
    [getData]
  );

  return (
    <>
      {/* {preview ? (
        <> */}
      {/* <Button
        color="primary"
        className="pl-5 pr-5 float-right mb-3"
        onClick={() => handlePreview()}
      >
        <FaPrint size="20" /> Print{' '}
      </Button> */}
      <Scrollbars style={{ height: 400 }}>
        <Table bordered striped responsive>
          <thead>
            <tr>
              {/* <th className="text-center">Date</th> */}
              <th className="text-center">Customer Name</th>
              <th className="text-center">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="">{item.account}</td>
                <td className="text-right">{formatNumber(item.amount)}</td>
              </tr>
            ))}
            <tr>
              <th className="font-weight-bold">Total</th>
              <th className="text-right">{formatNumber(total)}</th>
            </tr>
          </tbody>
        </Table>
      </Scrollbars>
      {/* </>
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
      )} */}
    </>
  );
}
