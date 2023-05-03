import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Font,
  // Image,
} from "@react-pdf/renderer";
// import moment from "moment";
// import { toCamelCase } from '../../utils/helpers';
import customRobotoNormal from "../../../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../../../fonts/Roboto-Bold.ttf";
import customRobotoItalic from "../../../../../fonts/Roboto-Italic.ttf";
import { formatNumber, getAgeFromDOB } from "../../../../utils/helpers";
// import { facilityDetails } from "./deposit-receipt";
import generalStyles from "../../styles";
// import CreditFooter from "../../credit-footer";
// import ReceiptHeader from "./lab/receipt-header";
// import PatientBio from "./lab/patient-bio";
import { LabReceiptHeader } from "./lab-receipt-header";

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

export default function LabReceiptBody({
  logo = "",
  // total = 0,
  name = "",
  receiptNo = "",
  discount = 0,
  grandTotal = 0,
  user,
  data = [],
  modeOfPayment = "Cash",
  cashier = "",
  transactionInfo = {},
  patientInfo = {},
  type,
  facilityInfo,
}) {
  let total = data.reduce((a, b) => a + parseFloat(b.price), 0) || 0;
  const showDiscount =
    transactionInfo.discount &&
    transactionInfo.discount !== "0" &&
    transactionInfo.discount !== 0;
  const isLater = type === "Later";
  const showPartPayment =
    transactionInfo.partPayment && transactionInfo.partPayment.enabled;
  const amountPaid = showPartPayment ? transactionInfo.partPayment.amount : 0;
  const balanceAmount = parseFloat(total) - parseFloat(amountPaid);

  return (
    <View style={styles.body}>
      <View>
        {/* <ReceiptHeader />
          <PatientBio patientInfo={patientInfo} /> */}

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
          facilityInfo={facilityInfo}
          phone={patientInfo.phone}
        />

        <View style={[generalStyles.mv5, styles.receiptContainer]}>
          <Text style={[styles.title, styles.receipt]}>Receipt</Text>
        </View>

        {/* <Text>{JSON.stringify(data)}</Text> */}

        {/* <View style={styles.details}>
            <Text>Date: {moment().format("DD-MM-YYYY - hh:mm")}</Text>
            <Text>Tel.: {patientInfo.phone || "-"}</Text>
            <Text>Receptionist: {`${user.firstname} ${user.lastname}`}</Text>
          </View> */}

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
                styles.borderBottom,
                styles.borderRight,
              ]}
            >
              <Text style={styles.tableCellHeader}>S/N</Text>
            </View>
            <View style={[styles.tableCol1Header, styles.borderBottom]}>
              <Text style={styles.tableCellHeader}>Test Name</Text>
            </View>
            {/* <View style={[styles.tableColHeader, styles.borderBottom, styles.borderRight]}>
                <Text style={styles.tableCellHeader}>Cost</Text>
              </View> */}
            {/* <View style={[styles.tableColHeader, styles.borderBottom, styles.borderRight]}>
                <Text style={[styles.tableCellHeader]}>Qty</Text>
              </View> */}
            <View style={[styles.tableColHeader, styles.borderBottom]}>
              <Text style={[styles.tableCellHeader]}>Amount (₦)</Text>
            </View>
          </View>
          {data.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View
                style={[
                  styles.tableCol,
                  styles.borderBottom,
                  styles.borderRight,
                ]}
              >
                <Text style={styles.tableCell}>{index + 1}</Text>
              </View>
              <View
                style={[
                  styles.tableCol1,
                  styles.borderBottom,
                  styles.borderRight,
                ]}
              >
                <Text style={styles.tableCell}>{item.description}</Text>
              </View>

              <View style={[styles.tableCol, styles.borderBottom]}>
                <Text style={[styles.tableCell, styles.textRight]}>
                  {formatNumber(item.price)}
                </Text>
              </View>
            </View>
          ))}

          <View style={styles.tableRow}>
            <View style={[styles.tableCol, styles.borderRight]}>
              <Text style={styles.tableCell} />
            </View>
            <View style={[styles.tableCol1, styles.borderRight]}>
              <Text style={styles.tableCell}>Total</Text>
            </View>

            <View style={[styles.tableCol]}>
              <Text style={[styles.tableCell, styles.textRight]}>
                {/* {`₦ ${formatNumber(total) || 0}`} */}
                {isLater
                  ? `₦ ${formatNumber(total) || 0}`
                  : `₦ ${formatNumber(transactionInfo.totalAmount) || 0}`}
              </Text>
            </View>
          </View>

          {showPartPayment ? (
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.borderRight]}>
                <Text style={styles.tableCell} />
              </View>
              <View style={[styles.tableCol1, styles.borderRight]}>
                <Text style={styles.tableCell}>Amount Paid</Text>
              </View>

              <View style={[styles.tableCol]}>
                <Text style={[styles.tableCell, styles.textRight]}>
                  {/* {`₦ ${formatNumber(total) || 0}`} */}
                  {`₦ ${formatNumber(amountPaid) || 0}`}
                </Text>
              </View>
            </View>
          ) : null}

          {showPartPayment ? (
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.borderRight]}>
                <Text style={styles.tableCell} />
              </View>
              <View style={[styles.tableCol1, styles.borderRight]}>
                <Text style={styles.tableCell}>Balance</Text>
              </View>

              <View style={[styles.tableCol]}>
                <Text style={[styles.tableCell, styles.textRight]}>
                  {/* {`₦ ${formatNumber(total) || 0}`} */}
                  {`₦ ${formatNumber(balanceAmount) || 0}`}
                </Text>
              </View>
            </View>
          ) : null}

          {showDiscount ? (
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.borderRight]}>
                <Text style={styles.tableCell} />
              </View>
              <View style={[styles.tableCol1, styles.borderRight]}>
                <Text style={styles.tableCell}>Discount</Text>
              </View>

              <View style={[styles.tableCol]}>
                <Text style={[styles.tableCell, styles.textRight]}>
                  {`₦ ${formatNumber(transactionInfo.discount) || 0}`}
                </Text>
              </View>
            </View>
          ) : null}
          {showDiscount ? (
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, styles.borderRight]}>
                <Text style={styles.tableCell} />
              </View>
              <View
                style={[
                  styles.tableCol1,
                  styles.borderBottom,
                  styles.borderRight,
                ]}
              >
                <Text style={styles.tableCell}>Grand Total</Text>
              </View>

              <View style={[styles.tableCol, styles.borderBottom]}>
                <Text style={[styles.tableCell, styles.textRight]}>
                  {`₦ ${formatNumber(transactionInfo.finalTotal) || 0}`}
                </Text>
              </View>
            </View>
          ) : null}
        </View>
        {/* <Text>{JSON.stringify(transactionInfo)}</Text> */}
        {/* {parseInt(discount) <= 0 ? null : (
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{""}</Text>
                </View>
                <View style={styles.tableCol1}>
                  <Text style={styles.tableCell}>Total</Text>
                </View>
                {/* <View style={styles.tableCol}>
                <Text style={styles.tableCell} />
              </View> 

                <View style={[styles.tableColTotal, styles.fontWeightBold]}>
                  <Text style={[styles.tableCell, styles.textRight]}>
                    {`₦ ${formatNumber(parseInt(total) + parseInt(discount))}`}
                  </Text>
                </View>
              </View>
            )} */}

        {/* {parseInt(discount) <= 0 ? null : (
              <View style={[styles.tableRow, styles.mt1]}>
                <View style={styles.tableCol1}>
                  <Text style={styles.tableCell}>Discount</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell} />
                </View>

                <View style={[styles.tableColTotal, styles.fontWeightBold]}>
                  <Text style={[styles.tableCell, styles.textRight]}>
                    {`₦ ${formatNumber(discount)}`}
                  </Text>
                </View>
              </View>
            )}

            <View style={[styles.tableRow, styles.mt1]}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{""}</Text>
              </View>
              <View style={styles.tableCol1}>
                <Text style={[styles.tableCell, styles.fontWeightBold]}>
                  Grand Total
                </Text>
              </View>
              {/* <View style={styles.tableCol}>
                <Text style={styles.tableCell} />
              </View> *
              <View style={[styles.tableColTotal, styles.fontWeightBold]}>
                <Text
                  style={[
                    styles.tableCell,
                    styles.textRight,
                    styles.grandTotal,
                  ]}
                >
                  {`₦ ${formatNumber(total) || 0}`}
                </Text>
              </View>
            </View>
          </View> */}

        <View style={styles.paymentRow}>
          <View style={styles.item}>
            <Text style={styles.mr5}>Receipt Number:</Text>
            <Text>{receiptNo}</Text>
          </View>
        </View>
        <View style={styles.paymentRow}>
          <View style={styles.item}>
            <Text style={styles.mr5}>Mode of payment:</Text>
            <Text>{modeOfPayment}</Text>
          </View>
        </View>
        <View style={styles.paymentRow}>
          <View style={styles.item}>
            <Text style={styles.mr5}>Receptionist:</Text>
            <Text>{isLater ? data[0] && data[0].enteredBy : cashier}</Text>
          </View>
        </View>
      </View>

      {/* <CreditFooter /> */}
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
const COLN_WIDTH = (100 - COL1_WIDTH) / 2;

const styles = StyleSheet.create({
  body: {
    padding: 20,
    fontSize: 12,
    paddingHorizontal: 40,
    fontFamily: "CustomRoboto",
  },
  headerBg: {
    backgroundColor: "#aaa",
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
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
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
    paddingHorizontal: 5,
  },
  tableColHeader: {
    width: COLN_WIDTH + "%",
    paddingHorizontal: 5,
  },
  // tableColAmtHeader: {
  //   width: COL_AMT_WIDTH + '%',
  // },
  tableCol1: {
    width: COL1_WIDTH + "%",
    paddingHorizontal: 5,
  },
  // tableColAmt: {
  //   width: COL_AMT_WIDTH + '%',
  // },
  tableCol: {
    width: COLN_WIDTH + "%",
    paddingHorizontal: 5,
  },
  tableColTotal: {
    width: COLN_WIDTH + "%",
    marginTop: 3,
    paddingHorizontal: 5,
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
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: "#000",
  },
  receipt: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  receiptContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  // textAlign: {
  //   textAlign: "center",
  // },
});
