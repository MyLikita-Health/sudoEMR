import React from "react";
import {
  // Document,
  // Page,
  Text,
  View,
  StyleSheet,
  Font,
  // Image,
} from "@react-pdf/renderer";
import moment from "moment";
// import { toCamelCase } from '../../utils/helpers';
import customRobotoNormal from "../../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../../fonts/Roboto-Bold.ttf";
import customRobotoItalic from "../../../../fonts/Roboto-Italic.ttf";
import generalStyles from "../styles";

const PatientBio = ({ patientInfo = {} }) => {
  return (
    <View style={[styles.infoContainer, generalStyles.mv5]}>
      <View style={styles.leftInfo}>
        <View style={styles.infoKey}>
          <Text>Acc. No.:</Text>
          <Text>Patient No</Text>
          <Text>Patient Name:</Text>
          <Text>Rank/Relative:</Text>
          <Text>Doctor:</Text>
        </View>
        <View style={styles.infoVal}>
          <Text>{patientInfo.clientAccount || "-"}</Text>
          <Text>
            {`${patientInfo.clientAccount}-${
              patientInfo.clientBeneficiaryAcc
            }` || "-"}
          </Text>
          <Text>{patientInfo.name || "-"}</Text>
          <Text>Patient - Normal</Text>
          <Text>-</Text>
        </View>
      </View>
      <View style={styles.leftInfo}>
        <View style={styles.infoKey}>
          <Text>Date:</Text>
          <Text>Address:</Text>
          <Text>Age:</Text>
          <Text>Sex:</Text>
          <Text>Tel. No.:</Text>
          {/* <Text>Remaining</Text> */}
        </View>
        <View style={styles.infoVal}>
          <Text>{moment().format("DD-MM-YYYY - hh:mm")}</Text>
          <Text>-</Text>
          <Text>{patientInfo.gender || "-"}</Text>
          <Text>{`${patientInfo.age} Y` || "-"}</Text>
          <Text>{patientInfo.phone || "-"}</Text>
          {/* <Text>0</Text> */}
        </View>
      </View>
    </View>
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
// const COL_AMT_WIDTH = 40;
const COLN_WIDTH = (100 - COL1_WIDTH) / 3;

const styles = StyleSheet.create({
  body: {
    padding: 20,
    fontSize: 12,
    paddingHorizontal: 40,
    fontFamily: "CustomRoboto",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'space-between'
  },
  leftInfo: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
  },
  headerBg: {
    backgroundColor: "#aaa",
  },
  samplingDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  infoItem: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 1,
  },
  infoKey: {
    marginRight: 10,
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
    fontSize: 16,
    // textAlign: 'center',
    fontFamily: "CustomRoboto",
  },
  subtitle: {
    fontSize: 11,
    fontFamily: "CustomRoboto",
  },

  tableRow: {
    flexDirection: "row",
  },
  tableRowTotal: {
    flexDDirection: "row",
  },
  tableCol1Header: {
    width: COL1_WIDTH + "%",
    borderRightWidth: 1,
    borderRightColor: "#000",
  },
  tableColHeader: {
    width: COLN_WIDTH + "%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    marginHorizontal: 5,
  },
  // tableColAmtHeader: {
  //   width: COL_AMT_WIDTH + '%',
  // },
  tableCol1: {
    width: COL1_WIDTH + "%",
  },
  // tableColAmt: {
  //   width: COL_AMT_WIDTH + '%',
  // },
  tableCol: {
    width: COLN_WIDTH + "%",
    borderRightWidth: 1,
    borderRightColor: "#000",
    marginHorizontal: 5,
  },
  tableColTotal: {
    width: COLN_WIDTH + "%",
    marginTop: 3,
    borderRightWidth: 1,
    borderRightColor: "#000",
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
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "center",
  },
  goodbyeTextContainer: {
    marginTop: 2,
  },
  docTitle: {
    marginVertical: 6,
    fontSize: 12,
    fontWeight: "bold",
  },
  textRight: { textAlign: "right" },
  snter: { textAlign: "center" },
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
    fontSize: 12,
    marginTop: 6,
    textAlign: "center",
    fontFamily: "CustomRoboto",
    fontStyle: "italic",
  },
  amtCol: {},
});

export default PatientBio;
