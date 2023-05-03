import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import moment from "moment";
// import { toCamelCase } from '../../utils/helpers';
import customRobotoNormal from "../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../fonts/Roboto-Bold.ttf";
import customRobotoItalic from "../../../fonts/Roboto-Italic.ttf";
import { formatNumber } from "../../utils/helpers";
import { facilityDetails } from "./deposit-receipt";

const ReturnedDrugReceipt = ({
  logo = "",
  data = [],
  total = 0,
  name = "",
  receipNumber = "",
  modeOfPayment = "Cash",
  cashier = "",
  discount = 0,
  grandTotal = 0,
  facilityInfo={}
}) => {
  return (
    <Document>
      <Page size={{ width: 200 }} style={styles.body}>
        <View>
          <View style={styles.headerContainer}>
            <Image
              style={styles.image}
              // source={require("../../../images/optimum-logo.jpg")}
              source={{ uri: facilityInfo.logo }}
              // source={{ uri: facilityInfo.logo }}
            />
            <Text style={styles.title}>{facilityDetails.title}</Text>
            <Text style={styles.subtitle}>{facilityDetails.sub1}</Text>
            <Text style={styles.subtitle}>{facilityDetails.sub2}</Text>
            <Text style={styles.docTitle}>Returned Drugs</Text>
          </View>
          {/* <Text style={styles.title}>{facility.facility_name|| ''}</Text> */}
          {/* <Text>{JSON.stringify(data)}</Text> */}
          <View style={styles.dateContainer}>
            <Text style={styles.receiptNo}>Receipt No: {receipNumber}</Text>
            <View style={[styles.item, { marginVertical: 0 }]}>
              <Text style={styles.mr5} />
              <Text>{moment().format("DD-MM-YY - hh:mm")}</Text>
            </View>
          </View>

          {name && name !== "" ? (
            <View style={styles.item}>
              <Text style={styles.mr5}>Name:</Text>
              <View>
                <Text>{name}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.item}>
              <Text style={styles.mr5}>Customer Type:</Text>
              <View>
                <Text>Walk-In</Text>
              </View>
            </View>
          )}

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Drug</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Cost</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={[styles.tableCellHeader]}>Qty</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={[styles.tableColAmtHeader]}>Amount (₦)</Text>
              </View>
            </View>
            {data.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCol1}>
                  <Text style={styles.tableCell}>{item.drug}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell]}>
                    {item.price.toLocaleString()}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell]}>
                    {item.quantityReturned.toLocaleString()}
                  </Text>
                </View>

                <View style={styles.tableColAmt}>
                  <Text style={[styles.tableCell, styles.textRight]}>
                    {item.amount.toLocaleString()}
                  </Text>
                </View>
              </View>
            ))}

            <View style={[styles.tableRow, styles.mt1]}>
              <View style={styles.tableCol1}>
                <Text style={styles.tableCell}>Total</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell} />
              </View>

              {/* {parseInt(total - discount) <= 0 ? ( */}
              <View style={[styles.tableColTotal, styles.fontWeightBold]}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.textRight,
                    styles.grandTotal,
                  ]}
                >
                  {`₦ ${formatNumber(total) || 0}`}
                </Text>
              </View>
              {/* ) : null} */}
            </View>
          </View>

          <View style={styles.paymentRow}>
            <View style={styles.item}>
              <Text style={styles.mr5}>Mode of payment:</Text>
              <Text>{modeOfPayment}</Text>
            </View>
            {/* <View style={styles.item}>
            <Text style={styles.mr5}>Receipt Number:</Text>
            
          </View> */}
            <View style={styles.item}>
              <Text style={styles.mr5}>Cashier:</Text>
              <Text>{cashier}</Text>
            </View>
          </View>
        </View>

        <View style={styles.goodbyeTextContainer}>
          <Text style={styles.goodbyeText}>
            Thanks for coming, get well soon!
          </Text>
        </View>

        <Text style={styles.poweredBy}>Powered by: brainstormng.com</Text>
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
    {
      src: customRobotoItalic,
      fontStyle: "italic",
    },
  ],
});

const COL1_WIDTH = 40;
const COL_AMT_WIDTH = 20;
const COLN_WIDTH = (100 - (COL1_WIDTH + COL_AMT_WIDTH)) / 2;

const styles = StyleSheet.create({
  body: {
    paddingVertical: 5,
    fontSize: 8,
    paddingHorizontal: 10,
    fontFamily: "CustomRoboto",
  },
  image: {
    height: 40,
    width: 40,
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
    width: "100%",
    marginVertical: 6,
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
  tableColAmtHeader: {
    width: COL_AMT_WIDTH + "%",
  },
  tableCol1: {
    width: COL1_WIDTH + "%",
  },
  tableColAmt: {
    width: COL_AMT_WIDTH + "%",
  },
  tableCol: {
    width: COLN_WIDTH + "%",
  },
  tableColTotal: {
    width: 2 * COLN_WIDTH + "%",
  },
  tableCellHeader: {
    // marginRight: 5,
    fontWeight: "bold",
  },
  tableCell: {
    marginVertical: 1,
    // marginRight: 4,
  },
  goodbyeText: {
    fontSize: 8,
    textTransform: "capitalize",
    textAlign: "center",
  },
  goodbyeTextContainer: {
    marginTop: 2,
  },
  docTitle: {
    marginVertical: 6,
    fontSize: 10,
    fontWeight: "bold",
  },
  textRight: { textAlign: "right" },
  textCenter: { textAlign: "center" },
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
  receiptNo: {
    fontWeight: "bold",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  poweredBy: {
    fontSize: 8,
    marginTop: 6,
    textAlign: "center",
    fontFamily: "CustomRoboto",
    fontStyle: "italic",
  },
  amtCol: {},
});

export default ReturnedDrugReceipt;
