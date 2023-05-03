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
// import primeLogo from '../../../images/logo-p.jpg'
import { formatNumber, toCamelCase } from "../../utils/helpers";

// let remedix = {
//   title: "Remedix Pharmacy Ltd.",
//   sub1: "Sheikh Jafar road, Opposite Brains College,",
//   sub2: "Dorayi, Kano",
//   acronym: "RPL",
// };

let optimum = {
  title: "OPTIMUM DIAGNOSTICS AND CLINICAL SERVICES LIMITED",
  sub1: "Plot 302, New Hospital Road, Opposite AKTH Exit Gate, Kano",
  sub2: "Tel: +234 701 3989553, email: optimumdiagnostics@gmail.com",
  acronym: "ODC",
};

// let asymco = {
//   title: "Asymco Pharmacy",
//   sub1: "ZC Kundila Housing Est. Bashir Othman Tofa,",
//   sub2: "Street Off Zoo Rd. Gandun Albasa, Kano",
//   acronym: "ASP",
// };

export const facilityDetails = optimum;

export function DepositReceipt({ depositDetails, logo, facilityInfo }) {
  return (
    <Document>
      <Page size={{ width: 200 }} style={styles.body}>
        <View>
          <View style={styles.headerContainer}>
            <Image
              style={styles.image}
              source={{ uri: facilityInfo.logo }}
              // source={require("../../../images/optimum-logo.jpg")}
            />

            <Text style={styles.title}>{facilityInfo.printTitle}</Text>
            <Text style={styles.subtitle}>{facilityInfo.printSubtitle1}</Text>
            <Text style={styles.subtitle}>{facilityInfo.printSubtitle2}</Text>
          </View>
          <View style={styles.item}>
            <Text style={{ marginRight: 5 }}>Date:</Text>
            <Text>{moment(depositDetails.date).format("LL")}</Text>
          </View>
          <View style={styles.item}>
            <Text style={{ marginRight: 5 }}>Name:</Text>
            <View>
              <Text>{depositDetails.name}</Text>
              <Text>{`${facilityInfo.code}/${depositDetails.accountNo}`}</Text>
            </View>
          </View>

          <View style={styles.item}>
            <Text style={{ marginRight: 5 }}>Description:</Text>
            <Text>{depositDetails.description}</Text>
          </View>
          <View style={styles.item}>
            <Text style={{ marginRight: 5 }}>Amount:</Text>
            <Text>
              {formatNumber(depositDetails.amount)}
            </Text>
          </View>

          <View style={styles.item}>
            <Text style={{ marginRight: 5 }}>Mode of payment:</Text>
            <Text>{toCamelCase(depositDetails.mode)}</Text>
          </View>

          <View style={styles.item}>
            <Text style={{ marginRight: 5 }}>Receipt Number:</Text>
            <Text>{depositDetails.receiptNo}</Text>
          </View>
          <View style={styles.item}>
            <Text style={{ marginRight: 5 }}>Cashier:</Text>
            <Text>{depositDetails.user}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: 3,
    fontSize: 8,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
    // textAlign: 'center',
    fontFamily: "CustomRoboto",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "CustomRoboto",
  },
  author: {
    fontSize: 12,
    marginBottom: 20,
  },
  subtitle2: {
    fontSize: 18,
    marginBottom: 30,
  },
  image: {
    height: 60,
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
  amtStyle: {
    textAlign: "right",
  },
});
