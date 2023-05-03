import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import LabReceiptBody from "./lab-receipt-body";
import SampleDetailsBody from "./sample-details-body";
// import CreditFooter from "../../credit-footer";

const CombinedReceiptSample = ({
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
      <Page>
        <SampleDetailsBody
          logo={logo}
          data={data}
          // total={total}
          name={name}
          receiptNo={receiptNo}
          modeOfPayment={modeOfPayment}
          cashier={cashier}
          discount={discount}
          transactionInfo={transactionInfo}
          patientInfo={patientInfo}
          grandTotal={grandTotal}
          // labels={labels}
          facilityInfo={facilityInfo}
          // age={age}
          type={type}
        />
      </Page>
    </Document>
  );
};

export default CombinedReceiptSample;
