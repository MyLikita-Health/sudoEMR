import React from "react";
import {
  // Document,
  // Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
// import { toCamelCase } from '../../utils/helpers';
import customRobotoNormal from "../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../fonts/Roboto-Bold.ttf";
import customRobotoItalic from "../../../fonts/Roboto-Italic.ttf";

function CreditFooter() {
  return (
    <View style={styles.pageNumber}>
      <View style={styles.goodbyeTextContainer}>
        <Text style={styles.goodbyeText}>Thanks for coming!</Text>
      </View>
      <Text
        style={styles.poweredBy}
        render={() => `Powered by: brainstormng.com`}
        fixed
      />
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

const styles = StyleSheet.create({
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  poweredBy: {
    fontSize: 12,
    marginTop: 6,
    textAlign: "center",
    fontFamily: "CustomRoboto",
    fontStyle: "italic",
  },
});

export default CreditFooter;
