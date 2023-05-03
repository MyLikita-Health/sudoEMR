import React from "react";
import {
  Document,
  Page,Text
} from "@react-pdf/renderer";
import SampleDetailsBody from "./lab/receipts/sample-details-body";
// import moment from "moment";
// import { toCamelCase } from '../../utils/helpers';

// import { formatNumber } from "../../utils/helpers";
// import { facilityDetails } from "./deposit-receipt";

const LabSamplingDetails = ({
  logo = "",
  data = [],
  total = 0,
  name = "",
  receiptNo = "",
  modeOfPayment = "Cash",
  cashier = "",
  discount = 0,
  transactionInfo = {},
  patientInfo = {},
  grandTotal = 0,
  labels = [],
  facilityInfo = {},
  age = "",
  type,
}) => {
  // (labels &&
  //   labels.length &&
  //   labels.length > 0 &&
  //   labels[1] &&
  //   labels[1].sample) ||
  // "";
  return (
    <Document>
      <Page>
        {/* <Text>{JSON.stringify(patientInfo)}</Text> */}
        <SampleDetailsBody
          logo={logo}
          data={data}
          total={total}
          name={name}
          receiptNo={receiptNo}
          modeOfPayment={modeOfPayment}
          cashier={cashier}
          discount={discount}
          transactionInfo={transactionInfo}
          patientInfo={patientInfo}
          grandTotal={grandTotal}
          labels={labels}
          facilityInfo={facilityInfo}
          age={age}
          type={type}
        />
      </Page>
    </Document>
  );
};

export default LabSamplingDetails;
