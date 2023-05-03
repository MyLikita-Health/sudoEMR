import React from "react";
import { Text, View, Font, StyleSheet } from "@react-pdf/renderer";
import generalStyles from "../../styles";
import { LabReceiptHeader } from "./lab-receipt-header";
import { getAgeFromDOB } from "../../../../utils/helpers";
import customRobotoNormal from "../../../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../../../fonts/Roboto-Bold.ttf";
import customRobotoItalic from "../../../../../fonts/Roboto-Italic.ttf";

const bordered = {
  borderTopColor: "#000",
  borderTopWidth: 1,
  borderRightColor: "#000",
  borderRightWidth: 1,
  borderBottomColor: "#000",
  borderBottomWidth: 1,
  borderLeftColor: "#000",
  borderLeftWidth: 1,
};

function SampleDetailsBody({
  logo = "",
  data = [],
  total = 0,
  name = "",
  receiptNo = "",
  modeOfPayment = "Cash",
  cashier = "",
  discount = 0,
  transactionInfo = {},
  patientInfo = {},
  grandTotal = 0,
  labels = [],
  facilityInfo = {},
  age = "",
  type,
}) {
  let ss = [];
  labels.forEach((i) => {
    if (!ss.includes(i.specimen)) {
      ss.push(i.specimen);
    }
  });

  const sample = ss.join(", ");

  const isLater = type === "Later";

  return (
    <View style={styles.body}>
      <View>
        <LabReceiptHeader
          title=""
          showPatient={true}
          name={patientInfo.name}
          patientId={isLater ? patientInfo.id : patientInfo.patientId}
          dob={patientInfo.dob}
          age={
            patientInfo.ageY
              ? `${patientInfo.ageY} Y`
              : patientInfo.ageM
              ? `${patientInfo.ageM} M`
              : patientInfo.ageD
              ? `${patientInfo.ageD} D`
              : getAgeFromDOB(patientInfo.dob, "Y")
          }
          gender={patientInfo.gender}
          phone={patientInfo.phone}
          facilityInfo={facilityInfo}
        />

        <View style={[generalStyles.mv5, styles.samplingDetails]}>
          <Text
            style={[
              styles.title,
              styles.textCenter,
              styles.samplingDetailsText,
            ]}
          >
            Sampling Details
          </Text>
        </View>

        {/* <View style={[styles.infoContainer, generalStyles.mv5]}>
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
                <Text>Remaining</Text>
              </View>
              <View style={styles.infoVal}>
                <Text>{moment().format("DD-MM-YYYY - hh:mm")}</Text>
                <Text>-</Text>
                <Text>{patientInfo.gender || "-"}</Text>
                <Text>{`${patientInfo.age} Y` || "-"}</Text>
                <Text>{patientInfo.phone || "-"}</Text>
                <Text>0</Text>
              </View>
            </View>
          </View> */}

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.headerBg]}>
            <View
              style={[
                styles.tableColHeader,
                { borderBottomWidth: 1, borderBottomColor: "#000" },
              ]}
            >
              <Text style={[styles.tableCellHeader, styles.textCenter]}>
                Test Name
              </Text>
            </View>

            <View style={styles.tableColHeader}>
              <Text style={[styles.tableCellHeader, styles.textCenter]}>
                Samples
              </Text>
            </View>
          </View>

          {data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View
                style={[
                  styles.tableCol,
                  index === data.length - 1
                    ? null
                    : { borderBottomWidth: 1, borderBottomColor: "#000" },
                ]}
              >
                <Text style={styles.tableCell}>
                  {isLater ? item.test : item.description}
                </Text>
              </View>

              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, styles.textCenter]}>
                  {index === 0 ? sample : isLater ? item.specimen : ""}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

    </View>
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

const COL1_WIDTH = 40;
// const COL_AMT_WIDTH = 40;
const COLN_WIDTH = 100 / 2;

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
  samplingDetailsText: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
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
  table: {
    display: "table",
    width: "100%",
    marginVertical: 6,
    ...bordered,
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

export default SampleDetailsBody;
