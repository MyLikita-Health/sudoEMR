import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  // Image,
} from "@react-pdf/renderer";
// import moment from "moment";
// import { toCamelCase } from '../../utils/helpers';
import customRobotoNormal from "../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../fonts/Roboto-Bold.ttf";
// import { formatNumber } from "../../utils/helpers";
// import { facilityDetails } from "./deposit-receipt";

const DrugPurchaseReceipt = ({
  logo = "",
  data = [],
  total = 0,
  name = "",
  receiptNo = "",
  modeOfPayment = "Cash",
  cashier = "",
  discount = 0,
  grandTotal = 0,
  facilityInfo,
}) => {
  return (
    <Document>
      <Page size={{ width: 200 }}>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>{facilityInfo.printTitle}</Text>
            <Text style={styles.subtitle}>{facilityInfo.printSubtitle1}</Text>
            <Text style={styles.subtitle}>{facilityInfo.printSubtitle2}</Text>
            {/* <Text style={styles.title}>{facilityDetails.title}</Text>
            <Text style={styles.subtitle}>{facilityDetails.sub1}</Text>
            <Text style={styles.subtitle}>{facilityDetails.sub2}</Text> */}
            <Text style={styles.docTitle}>Receipt</Text>
          </View>
          {/* <Text style={styles.title}>{facility.facility_name|| ''}</Text> */}

          <View style={styles.goodbyeTextContainer}>
            <Text style={styles.goodbyeText}>
              Thanks for coming, get well soon!
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

Font.register({
  family: "CustomRoboto",
  fonts: [
    { src: customRobotoNormal },
    {
      src: customRobotoBold,
      fontStyle: "normal",
      fontWeight: "bold",
    },
  ],
});

const COL1_WIDTH = 50;
const COLN_WIDTH = (75 - COL1_WIDTH) / 1.7;

const styles = StyleSheet.create({
  body: {
    paddingVertical: 10,
    fontSize: 8,
    paddingHorizontal: 5,
    fontFamily: "CustomRoboto",
  },
  image: {
    height: 50,
    width: 50,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    marginVertical: 3,
  },
  title: {
    fontSize: 12,
    // textAlign: 'center',
    fontFamily: "CustomRoboto",
  },
  subtitle: {
    fontSize: 8,
    fontFamily: "CustomRoboto",
  },
  table: {
    display: "table",
    width: "auto",
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableRowTotal: {
    flexDDirection: "row",
  },
  tableCol1Header: {
    width: COL1_WIDTH + "%",
  },
  tableColHeader: {
    width: COLN_WIDTH + "%",
  },
  tableCol1: {
    width: COL1_WIDTH + "%",
  },
  tableCol: {
    width: COLN_WIDTH + "%",
  },
  tableColTotal: {
    width: 2 * COLN_WIDTH + "%",
  },
  tableCellHeader: {
    marginRight: 5,
    fontWeight: "bold",
  },
  tableCell: {
    marginVertical: 5,
    marginRight: 5,
  },
  goodbyeText: {
    fontSize: 8,
    textTransform: "capitalize",
    textAlign: "center",
  },
  goodbyeTextContainer: { marginTop: 20 },
  docTitle: {
    marginVertical: 10,
    fontSize: 10,
    fontWeight: "bold",
  },
  textRight: { textAlign: "right" },
  mr5: { marginRight: 5 },
  fontWeightBold: { fontWeight: "bold" },
  grandTotal: {
    borderTopWidth: 1,
    borderTopColor: "#000",
    borderTopStyle: "solid",
    paddingTop: 3,
  },
  mt1: {
    marginTop: 2,
  },
});

export default DrugPurchaseReceipt;
