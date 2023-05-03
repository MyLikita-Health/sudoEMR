import React from "react";
import { Table } from "reactstrap";
import PrintWrapper from "../../comp/components/print/PrintWrapper";

function PrintPrescription({ data = [], patientInfo = {} }) {
  return (
    <div>
      <PrintWrapper title="Pharmacy Prescription">
        {/* <span>
        <h5>Pa</h5>

        </span> */}
        <Table bordered className="print-only">
          <thead>
            <tr>
              <th className="text-center">Route</th>
              <th className="text-center">Drug Name</th>
              <th className="text-center">Dosage</th>
              <th className="text-center">Period</th>
              <th className="text-center">Frequency</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, i) => (
                <tr key={i}>
                  <td>{item.route}</td>
                  <td className="text-right">{item.drug}</td>
                  <td className="text-right">{item.dosage}</td>
                  <td className="text-right">{item.period}</td>
                  <td className="text-right">{item.frequency}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </PrintWrapper>
    </div>
  );
}
export default PrintPrescription;
