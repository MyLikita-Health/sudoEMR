import { View, Text } from "@react-pdf/renderer";
import React from "react";
import styles from "./styles";

const InputResultPDFView = ({ item = {} }) => {
  return (
    <View style={[styles.borderBox, styles.my1]}>
      <View>
        <Text style={[styles.text, styles.bold]}>
          Investigation: {item.description}
        </Text>
        {/* <Text style={[styles.text]}>Specimen: {item.specimen}</Text> */}
      </View>
      <Text style={[styles.text, styles.bold]}>Result:</Text>
      <Text style={[styles.text]}>{item.result}</Text>
    </View>
  );
};

export default InputResultPDFView;
