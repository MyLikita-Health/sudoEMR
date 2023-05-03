import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
// import { Header } from '../comp/pdf-templates/title';
// import moment from 'moment';
import { formatNumber } from "../utils/helpers";
// import { facilityDetails } from "../comp/pdf-templates/deposit-receipt";
// import moment from 'moment';
import customRobotoNormal from "../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../fonts/Roboto-Bold.ttf";
import customRobotoItalic from "../../fonts/Roboto-Italic.ttf";
// import { useSelector } from "react-redux";

// const BORDER_COLOR = '#000';
// const BORDER_STYLE = 'solid';
// const COL1_WIDTH = 20;
// const COL2_WIDTH = 55;
// const COLN_WIDTH = (100 - COL1_WIDTH) / 2;

export function TotalSummaryPDF({
  to = "",
  from = "",
  summary = "",
  totalCash = "",
  totalBank = "",
  totalPOS = "",
  totalPetty = "",
  title = "",
  otherExpenses = "",
  facilityDetails = {},
  facilityInfo = {},
}) {
  // const facilityInfo = useSelector((state) => state.facility.info);

  const reportDate = to === from ? from : `${from} - ${to}`;
  return (
    <Document>
      <Page size={{ width: 200 }} style={styles.body}>
        {/* <Header title="Report Summary" /> */}
        <View>
          <View style={styles.headerContainer}>
            {/* <Image
              style={styles.image}
              source={{ uri: facilityInfo.logo }}
              // source={require("../../images/optimum-logo.jpg")}
            />
            <Text style={styles.title}>{facilityInfo.facility_name}</Text>
            <Text style={styles.subtitle}>{facilityInfo.address}</Text> */}
            <Image
              style={styles.image}
              source={{ uri: facilityInfo.logo }}
              // source={require("../../images/optimum-logo.jpg")}
            />
            <Text style={styles.title}>{facilityInfo.printTitle}</Text>
            <Text style={styles.subtitle}>{facilityInfo.printSubtitle1}</Text>
            <Text style={styles.subtitle}>{facilityInfo.printSubtitle2}</Text>
            <Text style={styles.docTitle}>{title}</Text>
          </View>
          {/* <Text style={styles.title}>{facility.facility_name|| ''}</Text> */}
          {/* <Text>{JSON.stringify(data)}</Text> */}
        </View>
        <View style={styles.new}>
          <Text>{`Report Date: ${reportDate}`}</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.itemRow}>
            <Text style={styles.itemStyle}>Total Sales:</Text>

            <Text style={styles.valueStyle}>
              ₦{formatNumber(summary.totalSales) || 0}
            </Text>
          </View>

          <View style={styles.itemRow}>
            <Text style={styles.itemStyle}>Total Drug Returned:</Text>

            <Text style={styles.valueStyle}>
              ₦{formatNumber(summary.totalReturned) || 0}
            </Text>
          </View>

          <View style={styles.itemRow}>
            <Text style={styles.itemStyle}>Total Sales on Credit:</Text>

            <Text style={styles.valueStyle}>
              ₦{formatNumber(summary.totalReceivable) || 0}
            </Text>
          </View>

          <View style={styles.itemRow}>
            <Text style={styles.itemStyle}>Total Purchase Drugs:</Text>

            <Text style={styles.valueStyle}>
              ₦{formatNumber(summary.totalPurchases) || 0}
            </Text>
          </View>

          <View style={styles.itemRow}>
            <Text style={styles.itemStyle}>Other Expenses:</Text>

            <Text style={styles.valueStyle}>
              ₦{formatNumber(otherExpenses) || 0}
            </Text>
          </View>

          <View style={styles.itemRow}>
            <Text style={styles.itemStyle}>Total Cash:</Text>

            <Text style={styles.valueStyle}>
              ₦{formatNumber(totalCash ? totalCash.amount : "0") || 0}
            </Text>
          </View>
          <View style={styles.itemRow}>
            <Text style={styles.itemStyle}>Total Cash:</Text>

            <Text style={styles.valueStyle}>
              ₦{formatNumber(totalPetty) || 0}
            </Text>
          </View>
          <View style={styles.itemRow}>
            <Text style={styles.itemStyle}>Total Transfer:</Text>

            <Text style={styles.valueStyle}>
              ₦{formatNumber(totalBank ? totalBank.amount : "0") || 0}
            </Text>
          </View>

          {/* <View style={styles.itemRow}>
            <Text style={styles.itemStyle}>Total POS:</Text>
            <View style={styles.valueStyle}>
              <Text>
                ₦{formatNumber(totalPOS ? totalPOS.amount : '0') || 0}
              </Text>
            </View>
          </View> */}
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

const styles = StyleSheet.create({
  body: {
    paddingVertical: 5,
    fontSize: 8,
    paddingHorizontal: 10,
    fontFamily: "CustomRoboto",
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    marginRight: 20,
  },
  item: {
    flexDirection: "row",
    marginVertical: 3,
  },
  title: {
    fontSize: 12,
    // textAlign: 'center',
    fontFamily: "CustomRoboto",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 8,
    fontFamily: "CustomRoboto",
  },
  new: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: 8,
    marginBottom: 10,
    // textAlign: 'center',
  },

  docTitle: {
    marginVertical: 3,
    fontSize: 10,
    // fontWeight: 'bold',
  },
  itemRow: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "bold",
    // justifyContent: 'flex-between',
    width: 170,
    // borderBottomWidth: 1,
    // borderBottomColor: '#000',
  },
  itemStyle: {
    marginRight: 10,
    marginVertical: 5,
    width: 100,
  },
  valueStyle: {
    marginVertical: 5,
    textAlign: "right",
    width: 70,
    // borderBottomWidth: 1,
    // borderBottomColor: '#000',
  },
});
