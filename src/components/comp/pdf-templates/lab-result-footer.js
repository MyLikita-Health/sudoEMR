import React from "react";
import { Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import customRobotoNormal from "../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../fonts/Roboto-Bold.ttf";
import customRobotoItalic from "../../../fonts/Roboto-Italic.ttf";

function LabFooter() {
  return (
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
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
  footerText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "CustomRoboto",
    fontStyle: "italic",
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

export default LabFooter;
