import { View, Text } from "@react-pdf/renderer";
import React from "react";
import styles from "./styles";

function Signature({ result_by }) {
  return (
    <View>
      <View style={styles.reportContainer}>
        <View style={[styles.text, styles.reportRowKey]}>
          <Text>Pathologist Signature</Text>
          {/* </View>
            <View style={[styles.text]}> */}
          <Text>{result_by}</Text>
        </View>
      </View>
      {/* <LabFooter /> */}
    </View>
  );
}

export default Signature;
