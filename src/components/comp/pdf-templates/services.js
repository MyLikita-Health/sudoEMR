import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import moment from "moment";
// import primeLogo from '../../../images/logo-p.jpg';
import { formatNumber, toCamelCase } from "../../utils/helpers";
import { Header } from "./title";

const COL1_WIDTH = 50;
const COLN_WIDTH = (75 - COL1_WIDTH) / 1.7;

const styles = StyleSheet.create({
  body: {
    paddingVertical: 10,
    fontSize: 12,
    paddingHorizontal: 5,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  image: {
    height: 30,
    width: 40,
    borderRadius: 5,
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
  table: {
    display: "table",
    width: "auto",
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: "row",
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
  tableCellHeader: {
    marginRight: 5,
    fontWeight: "bold",
  },
  tableCell: {
    marginVertical: 5,
    marginRight: 5,
  },
});

export const HeaderPdf = ({ logo, type }) => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.image} source={logo} />
      <Text style={{ marginVertical: 10, fontSize: 12 }}>{type}</Text>
    </View>
  );
};

export function ServicesReceipt({
  data,
  type = "service",
  mode = "cash",
  outstanding,
  cash_paid = 0,
  logo,
  totals,
  facilityInfo,
  serviceDetails = {},
  groupName,
}) {
  // let pId =
  //   data && data.servicesList && data.servicesList.length
  //     ? data.servicesList[0].patientId
  //     : data.accountNo;

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Header
          title="Revenue Report"
          showPatient={false}
          showDate
          titleDate={moment().format("DD-MM-YYY")}
          logo={logo}
          facilityInfo={facilityInfo}
        />
        <View>
          <View style={styles.headerContainer}>
            <Image style={styles.image} source={logo} />
            <Text style={{ marginVertical: 10, fontSize: 17 }}>
              {type === "bill"
                ? "Bill Statement"
                : groupName
                ? groupName
                : "Service Receipt"}
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={{ marginRight: 5 }}>Date:</Text>
            <Text>{moment(data.date).format("LL")}</Text>
          </View>
          <View style={styles.item}>
            <Text style={{ marginRight: 5 }}>Name:</Text>
            <View>
              <Text>{data.name}</Text>
              <Text>{`${facilityInfo.code ? facilityInfo.code : ""}/${
                serviceDetails.accountNo
              }`}</Text>
            </View>
          </View>
          {data.servicesList.length ? (
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableCol1Header}>
                  <Text style={styles.tableCellHeader}>Services</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Cost</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Qty</Text>
                </View>
                <View style={styles.tableColHeader}>
                  <Text style={styles.tableCellHeader}>Amount</Text>
                </View>
              </View>
              {data.servicesList.map((item, index) => (
                <View key={index} style={styles.tableRow}>
                  <View style={styles.tableCol1}>
                    <Text style={styles.tableCell}>{item.service}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={[styles.tableCell, { textAlign: "right" }]}>
                      {formatNumber(item.cost)}
                    </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={[styles.tableCell, { textAlign: "center" }]}>
                      {item.qtty}
                    </Text>
                  </View>

                  <View style={styles.tableCol}>
                    <Text style={[styles.tableCell, { textAlign: "right" }]}>
                      {formatNumber(item.amount)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          ) : null}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 20,
            }}
          >
            <Text>Total: {formatNumber(totals)}</Text>
          </View>

          {outstanding ? (
            <View style={styles.item}>
              <Text style={{ marginRight: 20, textAlign: "right" }}>
                Outstanding balance: {formatNumber(outstanding)}
              </Text>
            </View>
          ) : null}

          {cash_paid ? (
            <View style={styles.item}>
              <Text style={{ marginRight: 20, textAlign: "right" }}>
                Cash amount paid: {formatNumber(cash_paid)}
              </Text>
            </View>
          ) : null}

          {type === "bill" ? null : (
            <View style={styles.item}>
              <Text style={{ marginRight: 5 }}>Mode of payment:</Text>
              <Text>{toCamelCase(mode)}</Text>
            </View>
          )}
          {type === "bill" ? null : (
            <View style={styles.item}>
              <Text style={{ marginRight: 5 }}>Receipt Number:</Text>
              <Text>{data.receiptNo}</Text>
            </View>
          )}
          <View style={styles.item}>
            <Text style={{ marginRight: 5 }}>
              {type === "bill" ? "Prepared by" : "Cashier"}:
            </Text>
            <Text>{data.user}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
