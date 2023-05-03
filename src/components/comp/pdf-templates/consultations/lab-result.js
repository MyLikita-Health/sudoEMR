import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import moment from "moment";
import { customRobotoNormal } from "../../../../fonts/Roboto-Regular.ttf";
import { customRobotoBold } from "../../../../fonts/Roboto-Bold.ttf";
import { Header } from "../title";

export const LabResults = ({
  labDetails,
  logo,
  patientDetails,
  facilityInfo = {},
}) => (
  <Document>
    <Page style={styles.body}>
      <Header
        showPatient={true}
        date={moment().format("MMMM Do, YYYY")}
        name={patientDetails.surname + " " + patientDetails.firstname}
        patientId={patientDetails.patientId}
        title="Laboratory Investigations"
        logo={logo}
        facilityInfo={facilityInfo}
      />
      {/* <Text style={styles.title}>Lab Requests</Text> */}

      <View style={styles.container}>
        <Text style={styles.text}>Test: {labDetails.test}</Text>
        {labDetails.sample && labDetails.sample !== "" ? (
          <Text style={styles.text}>Sample: {labDetails.sample}</Text>
        ) : null}
      </View>

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

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

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  container: {
    marginTop: 10,
  },
  text: {
    margin: 3,
    fontSize: 14,
    textAlign: "justify",
    marginVertical: 5,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
