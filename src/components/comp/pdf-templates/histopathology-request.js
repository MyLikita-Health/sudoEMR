import React from 'react';
import { Text, View, StyleSheet, Document, Page } from '@react-pdf/renderer';
import { Header } from './title';

const styles = StyleSheet.create({
  body: {
    padding: 30,
    paddingLeft: 40,
    fontSize: 12,
  },
  patientDetails: {
    fontSize: 12,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  hr: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    marginVertical: 5,
    //   marginRight:30
  },
});

export function HistopathReq({ operationNote, logo, facilityInfo }) {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View>
          <Header
            showPatient={true}
            id={operationNote.id}
            date={operationNote.date}
            name={operationNote.name}
            patientId={operationNote.patientId}
            title="Histopathology Request Form"
            logo={logo}
            facilityInfo={facilityInfo}
          />
          <View style={[styles.patientDetails, { marginVertical: 10 }]}>
            <View style={styles.item}>
              <Text style={{ width: 120 }}>Diagnosis:</Text>
              <Text>{operationNote.diagnosis}</Text>
            </View>
            <View style={styles.item}>
              <Text style={{ width: 120 }}>Procedure:</Text>
              <Text>{operationNote.surgery}</Text>
            </View>
            <View style={styles.item}>
              <Text style={{ width: 120 }}>Request Details:</Text>
              <Text>{operationNote.pathologyRequest}</Text>
            </View>
          </View>
          <View
            style={{
              fontSize: 13,
              width: '100%',
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'flex-end',
            }}
          >
            <Text>Sign: ____________________</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
