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

export const Prescriptions = ({
  prescriptionRequest,
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
        title="Prescriptions"
        logo={logo}
        facilityInfo={facilityInfo}
      />
      {/* <Text style={styles.title}>Prescriptions</Text> */}
      {prescriptionRequest.map((prescription, i) => (
        <View style={styles.container}>
          <Text style={styles.text}>
            {`${i + 1}. ${prescription.route} ${prescription.drug} ${
              prescription.dosage
            } every ${prescription.frequency} for ${prescription.duration} ${
              prescription.period
            }(s) ${prescription.additionalInfo ? prescription.additionalInfo : ''}`}
          </Text>
        </View>
      ))}

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
