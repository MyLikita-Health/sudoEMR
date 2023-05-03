import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
// import moment from 'moment';
// import { Header } from "../lab-result-title";
// import LabFooter from "../lab-result-footer";
import customRobotoNormal from "../../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../../fonts/Roboto-Bold.ttf";
import customRobotoItalic from "../../../../fonts/Roboto-Italic.ttf";
// import { convertSignedMoney } from "../../../utils/helpers";

export default function FinancialPositionPDF({
  date = "",
  name = "",
  dob = "",
  gender = "",
  data = [],
  patientId = "",
  // patientInfo={},
  logo = "",
  facilityInfo = {},
  comments = [],
}) {
  //   let department = data.length && data[0].test_group;
  //   let requestDate = data.length && data[0].created_at;
  //   let reportDate = data.length && data[0].result_at;
  //   let result_by = data.length && data[0].result_by;

  //   let title =
  //     department === "Chemical Pathology"
  //       ? "Clinical Chemistry Report"
  //       : department;

  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View>
          {/* <Header
            // title="Laboratory Result"
            showPatient={true}
            name={name}
            patientId={patientId}
            date={date}
            dob={dob}
            gender={gender}
            requestDate={requestDate}
            reportDate={reportDate}
          /> */}

          <View style={styles.testTitleContainer}>
            <Text style={styles.testTitle}>
              STATEMENT OF FINANCIAL POSITION
            </Text>
          </View>
          {/* {
            <View>
              <View style={styles.subContainer}>
                <Text style={styles.subText}>ASSETS</Text>
              </View>

              {Object.keys(data)
                .filter((i) => i.toLowerCase().includes("asset"))
                .map((head) => (
                  <View>
                    <View style={styles.headContainer}>
                      <Text style={{ fontSize: 10 }}>{head}</Text>
                    </View>
                    {data[head].map((item, index) => (
                      <View key={index} style={styles.tableRow}>
                        <View style={styles.subContainer}>
                          <Text
                            style={styles.subText}
                          >S
                            {item.des}
                          </Text>
                        </View>
                        <View style={styles.tableCol1}>
                          <Text
                            style={[styles.tableCell, styles.textRight]}
                          >
                            {item.subhead &&
                            (item.subhead.toString().substr(0, 4) ===
                              "5000" ||
                              item.subhead.toString().substr(0, 4) ===
                                "2000")
                              ? "-"
                              : convertSignedMoney(item.debit)}
                          </Text>
                        </View>
                        <View style={styles.tableCol1}>
                          <Text
                            style={[styles.tableCell, styles.textRight]}
                          >
                            {item.subhead &&
                            (item.subhead.toString().substr(0, 4) ===
                              "4000" ||
                              item.subhead.toString().substr(0, 4) ===
                                "3000")
                              ? "-"
                              : convertSignedMoney(Math.abs(item.credit))}
                          </Text>
                        </View>
                      </View>
                    ))}
                  </View>
                ))}
            </View>
          } */}

          {Object.keys(data)
            .filter((i) => i.toLowerCase().includes("asset"))
            .map((head) => (
              <View style={styles.table}>
                <View style={[styles.tableRow, styles.headerBg]}>
                  <View style={styles.tableCol1Header}>
                    <Text
                      style={[styles.tableCellHeader, { textAlign: "center" }]}
                    >
                      Description
                    </Text>
                  </View>
                  <View style={styles.tableColHeader}>
                    <Text
                      style={[styles.tableCellHeader, { textAlign: "center" }]}
                    >
                      Debit
                    </Text>
                  </View>
                  <View style={styles.tableColHeader}>
                    <Text
                      style={[styles.tableCellHeader, { textAlign: "center" }]}
                    >
                      Credit
                    </Text>
                  </View>
                </View>

                {data[head].map((item, index) => (
                  <View key={index} style={styles.tableRow}>
                    <View style={styles.tableCol1}>
                      <Text style={[styles.tableCell, styles.textCenter]}>
                        something
                      </Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={styles.tableCell}>100</Text>
                    </View>
                    <View style={styles.tableCol}>
                      <Text style={[styles.tableCell, styles.textCenter]}>
                        300
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            ))}
        </View>
      </Page>
    </Document>
  );
}

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

const BORDER_COLOR = "#000";
const BORDER_STYLE = "solid";
const COL1_WIDTH = 35;
const COL2_WIDTH = 10;
const COLN_WIDTH = (100 - COL1_WIDTH) / 2;

const styles = StyleSheet.create({
  body: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "CustomRoboto",
  },
  headerBg: {
    backgroundColor: "#aaa",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: { fontSize: 12 },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    // fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol1Header: {
    width: COL1_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol2Header: {
    width: COL2_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColHeader: {
    width: COLN_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: "#000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol1: {
    width: COL1_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol2: {
    width: COL2_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: COLN_WIDTH + "%",
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "CustomRoboto",
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
    fontFamily: "CustomRoboto",
  },
  f12: { fontSize: 10 },
  textCenter: {
    textAlign: "center",
  },
  reportContainer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  reportRow: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
  },
  reportRowKey: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  commentsContainer: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    padding: 5,
  },
  commentItem: {
    textAlign: "justify",
    fontFamily: "CustomRoboto",
  },
  commentTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "CustomRoboto",
  },
  testTitleContainer: {
    marginVertical: 5,
  },
  testTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "CustomRoboto",
    textAlign: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  subText: {
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    // fontFamily: 'customRoboto',
    fontSize: 12,
  },
  headContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  headText: {
    fontWeight: "bold",
    fontSize: 12,
  },
});
