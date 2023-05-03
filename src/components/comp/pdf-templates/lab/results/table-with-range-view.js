import { View, Text, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import PDFTable from "../../shared/PDFTable";
import styles from "./styles";

function TableWithRangeView({ list = {} }) {
  const fields = [
    {
      title: "Test Name",
      custom: true,
      component: (item) => `${item.description}`,
      width: "30",
    },
    {
      title: "Result",
      custom: true,
      component: (item) => `${item.result}`,
      width: "23.3",
    },
    {
      title: "Unit",
      custom: true,
      component: (item) => `${item.unit}`,
      width: "23.3",
    },
    {
      title: "Range",
      custom: true,
      component: (item) => `${item.range_from} - ${item.range_to}`,
      width: "23.4",
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
                <Text style={[inStyles.text]}>
                  Investigation: {main}
                </Text>
                {/* <Text style={inStyles.text}>Specimen: {specimen}</Text> */}
              </View>
            ) : null}
            <Text style={[inStyles.text, styles.bold]}>Result:</Text>
            <PDFTable key={mainIdx} fields={fields} data={list[main]} />
          </View>
        );
      })}
    </View>
  );
}

const inStyles = StyleSheet.create({
  text: { fontFamily: "CustomRoboto", fontSize: 12, lineHeight: 1.2 },
})

export default TableWithRangeView;
