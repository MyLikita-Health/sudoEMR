import React from "react";
import { Text, View, StyleSheet, Image, Font } from "@react-pdf/renderer";
import { facilityDetails } from "./deposit-receipt";
import customRobotoNormal from "../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../fonts/Roboto-Bold.ttf";
// import { checkEmpty } from '../../utils/helpers';
// import primeLogo from '../../../images/logo-p.jpg'

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
    padding: 30,
    paddingLeft: 40,
    fontFamily: "CustomRoboto",
  },
  title: {
    fontSize: 18,
    // textAlign: 'center',
    fontFamily: "CustomRoboto",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "CustomRoboto",
    fontWeight: "bold",
  },
  author: {
    fontSize: 12,
    marginBottom: 20,
  },
  subtitle2: {
    fontSize: 13,
    marginBottom: 15,
    fontWeight: "bold",
  },
  image: {
    height: 80,
    width: 90,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: "row",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 40,
    justifyContent: "center",
  },
  patientDetails: {
    fontSize: 12,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  hr: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginTop: 5,
    marginBottom: 20,
  },
  dateRow: {
    fontSize: 12,
  },
});

export function Header({
  title,
  showPatient,
  id = null,
  date,
  name,
  patientId,
  showDate = false,
  titleDate,
  logo,
  facilityInfo,
  facilityDetails = {},
}) {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          // source={{ uri: facilityDetails.logo }}
          source={logo}
        />
        <View style={styles.titleContainer}>
          {/* <Text style={styles.title}>{facilityDetails.title}</Text>
          <Text style={styles.subtitle}>{facilityDetails.sub1}</Text>
          <Text style={styles.subtitle}>{facilityDetails.sub2}</Text> */}
          <Text style={styles.title}>{facilityInfo.printTitle}</Text>
          <Text style={styles.subtitle}>{facilityInfo.printSubtitle1}</Text>
          <Text style={styles.subtitle}>{facilityInfo.printSubtitle2}</Text>
          {/* <Text style={styles.subtitle}>{facilityDetails.sub2}</Text> */}
          <Text style={styles.subtitle2}>{title}</Text>
          {showDate ? (
            <View style={styles.dateRow}>
              <Text>{titleDate}</Text>
            </View>
          ) : null}
        </View>
      </View>

      {showPatient ? (
        <View style={styles.patientDetails}>
          <View style={styles.row}>
            {id && id !== "" ? (
              <View
                style={[
                  styles.detailItem,
                  { width: "50%", justifyContent: "flex-start" },
                ]}
              >
                <Text>Serial Number:</Text>
                <Text style={{ marginLeft: 10 }}>{id}</Text>
              </View>
            ) : null}
            <View
              style={[
                styles.detailItem,
                { width: "50%", justifyContent: "flex-start" },
              ]}
            >
              <Text>Date:</Text>
              <Text style={{ marginLeft: 10 }}>{date}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.detailItem,
                { width: "50%", justifyContent: "flex-start" },
              ]}
            >
              <Text>Patient Name:</Text>
              <Text style={{ marginLeft: 10 }}>{name}</Text>
            </View>
            <View
              style={[
                styles.detailItem,
                { width: "50%", justifyContent: "flex-start" },
              ]}
            >
              <Text>Patient ID:</Text>
              <Text style={{ marginLeft: 10 }}>{patientId}</Text>
            </View>
          </View>
        </View>
      ) : null}
      <View style={styles.hr} />
    </View>
  );
}
