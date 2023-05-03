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

const borderStyle = {
  borderTopWidth: 1,
  borderTopColor: "#000",
  borderRightWidth: 1,
  borderRightColor: "#000",
  borderBottomWidth: 1,
  borderBottomColor: "#000",
  borderLeftWidth: 1,
  borderLeftColor: "#000",
};

export default function MicrobiologyReport({
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
  isHospital=''
}) {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View>
          <Header
            title="Laboratory Result"
            showPatient={true}
            name={name}
            patientId={patientId}
            date={date}
            dob={dob}
            gender={gender}
            facilityInfo={facilityInfo}
            requestDate={data && data.created_at}
            reportDate={data && data.result_at}
          />

          {/* <Text>{JSON.stringify(data)}</Text> */}

          {data &&
            data.map((item, index) => {
              let showSensitivity = item.sensitivity && item.sensitivity !== "";
              let showResistivity = item.resistivity && item.resistivity !== "";
              let showIntermediary =
                item.intermediaryTo && item.intermediaryTo !== "";
              return (
                <View key={index}>
                  {item.test_group === "Serology" ? (
                    <View style={styles.boxContainer}>
                      <Text style={styles.commentTitle}>{item.test}:</Text>

                      <View style={styles.commentItem}>
                        <Text style={styles.text}>{item.result}</Text>
                      </View>
                    </View>
                  ) :

                  <View style={styles.analysisContainer}>
                    <View style={styles.testTitleContainer}>
                    <Text style={styles.testTitle}>{item.test}</Text>
                  </View>
                    {item.appearance &&
                    item.appearance !== "" &&
                    item.appearance !== "null" ? (
                      <View style={styles.boxContainer}>
                        <Text style={styles.commentTitle}>
                          Appearance/Macroscopy:
                        </Text>

                        <View style={styles.commentItem}>
                          <Text style={styles.text}>{item.appearance}</Text>
                        </View>
                      </View>
                    ) : null}

                    {item.serology &&
                    item.serology !== "" &&
                    item.serology !== "null" ? (
                      <View style={styles.boxContainer}>
                        <Text style={styles.commentTitle}>
                          Microscopy:
                        </Text>

                        <View style={styles.commentItem}>
                          <Text style={styles.text}>{item.serology}</Text>
                        </View>
                      </View>
                    ) : null}

                    {item.culture_yielded &&
                    item.culture_yielded !== "" &&
                    item.culture_yielded !== "null" ? (
                      <View style={styles.boxContainer}>
                        <Text style={styles.commentTitle}>
                          Culture yielded:
                        </Text>

                        <View style={styles.commentItem}>
                          <Text style={styles.text}>
                            {item.culture_yielded}
                          </Text>
                        </View>
                      </View>
                    ) : null}

                    {showSensitivity || showResistivity || showIntermediary ? (
                      <View style={styles.boxContainer}>
                        <Text style={styles.commentTitle}>
                          ANTIBIOTICS SUSCEPTIBILITY TEST
                        </Text>

                        {showSensitivity ? (
                          <View style={styles.analysisItems}>
                            <Text style={styles.commentTitle}>
                              Sensitive to:
                            </Text>

                            <View style={styles.commentItem}>
                              <Text style={styles.text}>
                                {item.sensitivity}
                              </Text>
                            </View>
                          </View>
                        ) : null}

                        {showResistivity ? (
                          <View style={styles.analysisItems}>
                            <Text style={styles.commentTitle}>
                              Resistant to:
                            </Text>

                            <View style={styles.commentItem}>
                              <Text style={styles.text}>
                                {item.resistivity}
                              </Text>
                            </View>
                          </View>
                        ) : null}

                        {showIntermediary ? (
                          <View style={styles.analysisItems}>
                            <Text style={styles.commentTitle}>
                              Intermediate Sensitivity:
                            </Text>

                            <View style={styles.commentItem}>
                              <Text style={styles.text}>
                                {item.intermediaryTo}
                              </Text>
                            </View>
                          </View>
                        ) : null}
                      </View>
                    ) : null}
                  </View>
            }
                </View>
              );
            })}
            
          {comments.length ? (
            <View style={styles.commentsContainer}>
              <Text style={styles.commentTitle}>Report:</Text>

              {comments.map((item, index) => (
                <View key={index} style={styles.commentItem}>
                  <Text style={styles.text}>{item.comment}</Text>
                </View>
              ))}
            </View>
          ) : null}

          {/* <View style={styles.reportContainer}>
            <View style={[styles.text, styles.reportRowKey]}>
              <Text>Sample Collected By: </Text>
              <Text>Analyzed By:</Text>
              <Text>Result:</Text>
            </View>
            <View style={[styles.text]}>
              <Text>Mustapha</Text>
              <Text>Mustapha</Text>
              <Text>Mustapha</Text>
            </View>
          </View> */}
        </View>
        <View>
          {comments.length ? (
            <View style={styles.reportContainer}>
              <View style={[styles.text, styles.reportRowKey]}>
                <Text>Reported By:</Text>
              </View>
              <View style={[styles.text]}>
                <Text>{data.result_by}</Text>
              </View>
            </View>
          ) : null}
          <LabFooter />
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
const COLN_WIDTH = (100 - (COL1_WIDTH + COL2_WIDTH)) / 3;

const styles = StyleSheet.create({
  body: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "CustomRoboto",
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
    fontSize: 18,
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
    marginRight: 5,
  },
  commentsContainer: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    padding: 5,
    marginTop: 10,
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
    marginVertical: 2,
  },
  testTitle: {
    fontSize: 12,
    fontWeight: "bold",
    margin: 3,
    fontFamily: "CustomRoboto",
    textAlign: "center",
  },
  analysisContainer: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 10,
    paddingVertical: 5,
  },
  analysisItems: {
    marginVertical: 5,
  },
  boxContainer: {
    marginVertical: 5,
    ...borderStyle,
    padding: 3,
  },
});