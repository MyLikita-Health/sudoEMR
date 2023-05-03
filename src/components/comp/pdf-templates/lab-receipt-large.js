import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import LabReceiptBody from "./lab/receipts/lab-receipt-body";

const LabReceipt = ({
  logo = "",
  // total = 0,
  name = "",
  receiptNo = "",
  discount = 0,
  grandTotal = 0,
  user,
  data = [],
  modeOfPayment = "Cash",
  cashier = "",
  transactionInfo = {},
  patientInfo = {},
  type,
  facilityInfo,
}) => {
  return (
    <Document>
      <Page>
        <LabReceiptBody
          logo={logo}
          // total={total}
          name={name}
          receiptNo={receiptNo}
          discount={discount}
          grandTotal={grandTotal}
          user={user}
          data={data}
          modeOfPayment={modeOfPayment}
          cashier={cashier}
          transactionInfo={transactionInfo}
          patientInfo={patientInfo}
          type={type}
          facilityInfo={facilityInfo}
        />
      </Page>
    </Document>
  );
};


export default LabReceipt;
