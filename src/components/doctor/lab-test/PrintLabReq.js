import React from "react";
import { FaTimes } from "react-icons/fa";
import { Table } from "reactstrap";
import PrintWrapper from "../../comp/components/print/PrintWrapper";

export default function PrintLabReq({
  data = [],
  id = "doctor-reporting-fees",
  canRemoveTest = true,
  removeTest,
  patientInfo = {},
}) {
  return (
    <div id={id}>
      <PrintWrapper title="Laboratory Investigation">
        <div className="print-only" style={{ marginBottom: 10 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              Full Name: <b>{patientInfo.name}</b>
            </div>
            <div>
              Sex: <b>{patientInfo.gender}</b>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              Age: <b>{patientInfo.ageY}</b>
            </div>
            <div>Ward or Clinic: </div>
            <div>Hospital Number: </div>
          </div>
        </div>
        <Table hover bordered striped size="sm">
          <thead>
            <tr>
              <th className="text-center">Test Request</th>
              {/* {canRemoveTest && (
                <th className="no-print">
                  <span>Sample</span>{" "}
                </th>
              )} */}
              <th className="text-center no-print">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length
              ? data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.description}</td>
                    {/* {canRemoveTest && (
                  <td className="no-print">
                    <span>{item.specimen}</span>
                  </td>
                )} */}
                    <td className="text-right no-print">
                      <span className="d-flex flex-direction-row align-items-center justify-content-end">
                        {item.price}
                        {canRemoveTest && (
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => removeTest(item)}
                          >
                            <FaTimes className="ml-1 text-danger" />
                          </span>
                        )}
                      </span>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      </PrintWrapper>
    </div>
  );
}
