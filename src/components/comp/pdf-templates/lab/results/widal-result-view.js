import { View, Text } from "@react-pdf/renderer";
import React from "react";
import PDFTable from "../../shared/PDFTable";
import styles from "./styles";

function WidalResultPDFView({ list = {} }) {
  const fields = [
    { title: "Test Name", value: "description", alt_value: "", width: "50" },
    {
      title: "O",
      value: "o_value",
      alt_value: "",
      width: "25",
      style: { textAlign: "center" },
    },{
      title: "H",
      value: "h_value",
      alt_value: "",
      width: "25",
      style: { textAlign: "center" },
    },
    
  ];

  return (
    <View>
      {Object.keys(list).map((main, mainIdx) => {
        let showTitle = main.toLowerCase() !== "others";
        // let specimen = list[main][0].specimen;
        return (
          <View style={styles.my1}>
            {showTitle ? (
              <View>
                <Text style={[styles.text, styles.bold]}>
                  Investigation: {main}
                </Text>
                {/* <Text style={styles.text}>Specimen: {specimen}</Text> */}
              </View>
            ) : null}
            <Text style={[styles.text, styles.bold]}>Result:</Text>
            <PDFTable key={mainIdx} fields={fields} data={list[main]} />
          </View>
        );
      })}
    </View>
  );
}

export default WidalResultPDFView;
