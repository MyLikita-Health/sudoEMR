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
import { Header } from "./lab-result-title";
import LabFooter from "./lab-result-footer";
import customRobotoNormal from "../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../fonts/Roboto-Bold.ttf";
import customRobotoItalic from "../../../fonts/Roboto-Italic.ttf";
// import { isUndefined } from "lodash";
import LabResultView from "./lab/results/result-view";

export default function LabResult({
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
  rawList = [],
}) {
  let head = Object.keys(data)[0];
  // let department = data[head].test_group;

  let requestDate = rawList[0] && rawList[0].created_at;
  let reportDate = rawList[0] && rawList[0].result_at;
  // let result_by = data[head][0].result_by;
  let result_by = comments.length ? comments[0].user : "";

  // let title =
  //   department && department === "Chemical Pathology"
  //     ? "Clinical Chemistry Report"
  //     : department;

  return (
    <Document>
      <Page
        size="A4"
        style={[
          styles.body,
          { paddingTop: facilityInfo.useLetterHead === "yes" ? 120 : 30 },
        ]}
      >
        <View>
          <Header
            // title="Laboratory Result"
            showPatient={true}
            name={name}
            patientId={patientId}
            date={date}
            dob={dob}
            gender={gender}
            facilityInfo={facilityInfo}
            requestDate={requestDate}
            reportDate={reportDate}
          />
          {/* <Text>{JSON.stringify(data)}</Text> */}
          {/*<View style={styles.testTitleContainer}>
           <Text style={styles.testTitle}>{JSON.stringify(data)}</Text> */}
          {/* <Text style={styles.testTitle}>Good here yogi ============</Text> */}
          {/* <Text style={styles.testTitle}>{title.toUpperCase()}</Text>
          </View> */}

          <LabResultView
            inputLabs={data.inputList}
            microbiology={data.microbiology}
            tabledLabs={data._tabledLab}
            tabledLabsList={data._tabledLabList}
            hoWidalLabs={data._hoWidalLabs}
            hoWidalLabsList={data._hoWidalLabsList}
            macroscopyList={data.macroscopyList}
          />

          {/* <Text style={styles.testTitle}>{JSON.stringify(data)}</Text> */}

          {/* {data &&
            Object.keys(data).map((main, mainIdx) => {
              return (
                <View style={styles.labListContainer} key={mainIdx}>
                  <Text style={styles.mainLabHead}>
                    {main || !isUndefined(main)
                      ? main === "Others"
                        ? ""
                        : main
                      : ""}
                  </Text>
                  <View style={styles.table}>
                    {/* table header starts here *
                    <View style={[styles.tableRow, styles.headerBg]}>
                      <View style={styles.tableCol2Header}>
                        <Text
                          style={[
                            styles.tableCellHeader,
                            { textAlign: "center" },
                          ]}
                        >
                          S/N
                        </Text>
                      </View>
                      <View style={styles.tableCol1Header}>
                        <Text
                          style={[
                            styles.tableCellHeader,
                            { textAlign: "center" },
                          ]}
                        >
                          Test
                        </Text>
                      </View>
                      <View style={styles.tableColHeader}>
                        <Text
                          style={[
                            styles.tableCellHeader,
                            { textAlign: "center" },
                          ]}
                        >
                          Result
                        </Text>
                      </View>
                      <View style={styles.tableColHeader}>
                        <Text
                          style={[
                            styles.tableCellHeader,
                            { textAlign: "center" },
                          ]}
                        >
                          Unit
                        </Text>
                      </View>
                      <View style={styles.tableColHeader}>
                        <Text
                          style={[
                            styles.tableCellHeader,
                            { textAlign: "center" },
                          ]}
                        >
                          Normal Range
                        </Text>
                      </View>
                    </View>

                    {data[main].map((item, index) => {
                      return (
                        <View key={index} style={styles.tableRow}>
                          <View style={styles.tableCol2}>
                            <Text style={[styles.tableCell, styles.textCenter]}>
                              {index + 1}
                            </Text>
                          </View>
                          <View style={styles.tableCol1}>
                            <Text style={styles.tableCell}>{item.test}</Text>
                          </View>
                          <View style={styles.tableCol}>
                            <Text style={[styles.tableCell, styles.textCenter]}>
                              {item.result ? item.result : "Result Not Ready"}
                            </Text>
                          </View>
                          <View style={styles.tableCol}>
                            <Text style={styles.tableCell}>{item.unit}</Text>
                          </View>
                          <View style={styles.tableCol}>
                            <Text style={[styles.tableCell, styles.textCenter]}>
                              {`${item.range_from} - ${item.range_to}`}
                            </Text>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })} */}

          {/* {data.map((item, index) => (
                <View key={index} style={styles.tableRow}>
                  <View style={styles.tableCol2}>
                    <Text style={[styles.tableCell, styles.textCenter]}>
                      {index + 1}
                    </Text>
                  </View>
                  <View style={styles.tableCol1}>
                    <Text style={styles.tableCell}>{item.test}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={[styles.tableCell, styles.textCenter]}>
                      {item.result ? item.result : "Result Not Ready"}
                    </Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{item.unit}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={[styles.tableCell, styles.textCenter]}>
                      {`${item.range_from} - ${item.range_to}`}
                    </Text>
                  </View>
                </View>
              ))} */}
          {/*<Text>Tesing this page {JSON.stringify(result_by)}</Text>*/}
          {!comments.length ? (
            <View>
              <Text style={[styles.text, { marginVertical: 5 }]}>
                No Comment
              </Text>
            </View>
          ) : (
            <View style={styles.commentsContainer}>
              <Text style={[styles.commentTitle, styles.text]}>
                Pathologist Report:
              </Text>
              {comments.map((item, index) => (
                <View key={index} style={styles.commentItem}>
                  <Text style={styles.text}>{item.comment}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        <View>
          <View style={styles.reportContainer}>
            <View style={[styles.text, styles.reportRowKey]}>
              <Text>Pathologist Signature</Text>

              <Text>{result_by}</Text>
            </View>
          </View>
        </View>
        <LabFooter result_by={result_by} />
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
const COLN_WIDTH = (100 - (COL1_WIDTH + COL2_WIDTH)) / 3;

const styles = StyleSheet.create({
  body: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 50,
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
  text: { fontSize: 13 },
  labListContainer: {
    marginVertical: 5,
  },
  // mainLabHead: {
  //   fontSize: 12,
  //   fontWeight: "bold",
  //   marginVertical: 2,
  // },
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
  // tableCellHeader: {
  //   margin: 5,
  //   fontSize: 12,
  //   fontWeight: "bold",
  //   fontFamily: "CustomRoboto",
  // },
  // tableCell: {
  //   margin: 5,
  //   fontSize: 10,
  //   fontFamily: "CustomRoboto",
  // },
  textCenter: {
    textAlign: "center",
  },
  reportContainer: {
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 30,
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
    marginTop: 5,
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
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "CustomRoboto",
  },
  testTitleContainer: {
    marginVertical: 5,
  },
  // testTitle: {
  //   fontWeight: "bold",
  //   marginBottom: 5,
  //   fontFamily: "CustomRoboto",
  //   textAlign: "center",
  // },
});
