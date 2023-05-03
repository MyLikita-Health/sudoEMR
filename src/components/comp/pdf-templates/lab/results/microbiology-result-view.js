import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./styles";

function MicrobiologyResultPDFView({ item = {} }) {
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
              <Text style={[styles.text, styles.bold]}>Microscopy:</Text>

              <Text style={styles.text}>{item.serology}</Text>
            </View>
          ) : null}
          {showCulture ? (
            <View style={styles.my1}>
              {/* <h6>Culture yielded:</h6> */}
              <Text style={[styles.text, styles.bold]}>Culture yielded:</Text>

              <Text style={styles.text}>{item.culture_yielded}</Text>
            </View>
          ) : null}
          {/* {JSON.stringify({ test, labno })} */}
          <View>
            <Text style={[styles.text, styles.bold]}>Resistant To:</Text>

            <Text style={styles.text}>{item.resistantTo}</Text>
          </View>
          <View>
            <Text style={[styles.text, styles.bold]}>Sensitive To:</Text>

            <Text style={styles.text}>{item.sensitiveTo}</Text>
          </View>
          <View>
            <Text style={[styles.text, styles.bold]}>
              Intermediate Sensitivity
            </Text>

            <Text style={styles.text}>{item.intermediaryTo}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default MicrobiologyResultPDFView;
