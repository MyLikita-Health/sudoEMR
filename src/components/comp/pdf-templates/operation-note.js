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

export function OperationNote({ operationNote, logo, facilityInfo }) {
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
            title="Operation Note"
            logo={logo}
            facilityInfo={facilityInfo}
          />
          <Text style={{ fontSize: 13 }}>Surgical Details</Text>
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
              <Text style={{ width: 120 }}>Surgeons(s):</Text>
              <Text>{operationNote.surgeons}</Text>
            </View>
            <View style={styles.item}>
              <Text style={{ width: 120 }}>Anesthetist(s):</Text>
              <Text>{operationNote.anesthetist}</Text>
            </View>
            <View style={styles.item}>
              <Text style={{ width: 120 }}>Scrub Nurse:</Text>
              <Text>{operationNote.scrubNurse}</Text>
            </View>
            <View style={styles.item}>
              <View style={{ flexDirection: 'row', width: '50%' }}>
                <Text style={{ width: 120 }}>Anesthetic Used:</Text>
                <Text>{operationNote.anesthetic}</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '50%' }}>
                <Text style={{ width: 120 }}>Intra Op Antibiotics:</Text>
                <Text>{operationNote.intraOpAntibiotics}</Text>
              </View>
            </View>
            <View style={styles.item}>
              <View style={{ flexDirection: 'row', width: '50%' }}>
                <Text style={{ width: 120 }}>Estimated Blood Loss:</Text>
                <Text>{operationNote.bloodLoss}</Text>
              </View>
              <View style={{ flexDirection: 'row', width: '50%' }}>
                <Text style={{ width: 120 }}>
                  Pints of Blood given Intra-Op:
                </Text>
                <Text>{operationNote.pintsGiven}</Text>
              </View>
            </View>
            <View style={styles.item} />
            <View style={styles.item}>
              <Text style={{ width: 120 }}>Procedure Note:</Text>
              <Text style={{ width: 400 }}>{operationNote.procedureNotes}</Text>
            </View>
            <View style={styles.item}>
              <Text style={{ width: 120 }}>Intra-Op Findings:</Text>
              <Text style={{ width: 400 }}>
                {operationNote.intraOpFindings}
              </Text>
            </View>
            <View style={styles.item}>
              <Text style={{ width: 120 }}>Remarks:</Text>
              <Text>{operationNote.remarks}</Text>
            </View>
          </View>
          <Text style={{ fontSize: 13 }}>Post-Op Order</Text>
          <View style={[styles.patientDetails, { marginVertical: 10 }]}>
            <View style={styles.item}>
              <Text>{operationNote.postOpOrder}</Text>
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
