import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./styles";

function MacroscopyResultPDFView({ item = {} }) {
  // const showAppearance = !isBlood;
  const showAppearance = true;
  // const showSerology = !isBlood;
  const showSerology = true;
  const showCulture = true;
  // const showSensitivity = true;
  // const showResistivity = true;

  return (
    <View style={[styles.borderBox, styles.my1]}>
      <View>
        <Text style={[styles.text, styles.bold]}>
          Investigation: {item.description}
        </Text>
        {/* <Text style={styles.text}>Specimen: {item.specimen}</Text> */}
      </View>
      <View style={styles.my1}>
        <View>
          {showAppearance ? (
            <View style={styles.my1}>
              {/* <h6>Appearance/Macroscopy:</h6> */}
              <Text style={[styles.text, styles.bold]}>
                Appearance/Macroscopy:
              </Text>

              <Text style={styles.text}>{item.appearance}</Text>
            </View>
          ) : null}
          {showSerology ? (
            <View style={styles.my1}>
              {/* <h6>Microscopy:</h6> */}
              <Text style={[styles.text, styles.bold]}></Text>

              <Text style={styles.text}>{item.serology}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

export default MacroscopyResultPDFView;
