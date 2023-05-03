import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

export const OptimumLabReceipt = () => (
  <View>
    <View style={styles.flex}>
      <Text style={styles.Fee}>Registration Fee N:</Text>
      <Text style={styles.dotted} />
    </View>
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol2}>
            <Text style={styles.tableCell}>Test Name</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell} />
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol2}>
            <Text style={styles.tableCell}>Price</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell} />
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol2}>
            <Text style={styles.tableCell}>Test Name</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell} />
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol2}>
            <Text style={styles.tableCell}>Price</Text>
          </View>
          <View style={styles.tableCol1}>
            <Text style={styles.tableCell} />
          </View>
        </View>
       
        
      
       
      
      </View>
    </View>
  </View>
);

const BORDER_COLOR = '#000';
const BORDER_STYLE = 'solid';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  Fee: {
    fontSize: 12,
  },
  body: {
    padding: 30,
  },
  dotted: {
    borderBottom: '1 dashed black',
    width: 240,
    marginBottom: 3,
    marginLeft: 2,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  flex: {
    flexDirection: 'row',
  },
  tableCol1: {
    width: 80 + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol2: {
    width: 20 + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },

  tableCell: {
    margin: 5,
    fontSize: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
});
