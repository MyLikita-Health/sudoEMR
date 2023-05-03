import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
// import { facilityDetails } from "../deposit-receipt";

function ReceiptHeader({ facilityInfo }) {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.image}
        source={{ uri: facilityInfo.logo }}
        // source={require("../../../../images/optimum-logo.jpg")}
      />
      {/* <Text style={styles.title}>{facilityDetails.title}</Text>
      <Text style={styles.subtitle}>{facilityDetails.sub1}</Text>
      <Text style={styles.subtitle}>{facilityDetails.sub2}</Text> */}
      <Text style={styles.title}>{facilityInfo.printTitle}</Text>
      <Text style={styles.subtitle}>{facilityInfo.printSubtitle1}</Text>
      <Text style={styles.subtitle}>{facilityInfo.printSubtitle2}</Text>
      {/* <Text style={styles.subtitle}>{facilityDetails.sub2}</Text> */}
      {/* <Text style={styles.docTitle}>Receipt</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    // textAlign: 'center',
    fontFamily: "CustomRoboto",
  },
  subtitle: {
    fontSize: 11,
    fontFamily: "CustomRoboto",
  },
  image: {
    height: 40,
    width: 40,
  },
});

export default ReceiptHeader;
