import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import moment from 'moment';
import { Header } from './title';
import { formatNumber } from '../../utils/helpers';

const BORDER_COLOR = '#000';
const BORDER_STYLE = 'solid';
const COL1_WIDTH = 40;
const COLN_WIDTH = (100 - COL1_WIDTH) / 4;

const styles = StyleSheet.create({
  body: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
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
  tableCol1Header: {
    width: COL1_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColHeader: {
    width: COLN_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol1: {
    width: COL1_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol: {
    width: COLN_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCellHeader: {
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
  },
});

export default function ExpenditureReportDoc({
  fromDate,
  toDate,
  logo,
  data = [],
  facilityInfo={},
}) {
  const titleDate =
    fromDate === toDate
      ? moment(fromDate).format('MMMM Do, YYYY')
      : `${moment(fromDate).format('MMMM Do, YYYY')} - ${moment(toDate).format(
          'MMMM Do, YYYY',
        )}`;
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Header
          title="Expenditure Report"
          showPatient={false}
          showDate
          titleDate={titleDate}
          logo={logo}
          facilityInfo={facilityInfo}
        />
        {data ? (
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Date</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Account</Text>
              </View>
              <View style={styles.tableCol1Header}>
                <Text style={styles.tableCellHeader}>Description</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                  Credited
                </Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                  Debited
                </Text>
              </View>
            </View>
            {data.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.date}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.Account_Head}</Text>
                </View>
                <View style={styles.tableCol1}>
                  <Text style={styles.tableCell}>{item.description}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, { textAlign: 'right' }]}>
                    {formatNumber(item.debit)}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, { textAlign: 'right' }]}>
                    {formatNumber(item.credit)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ) : null}
      </Page>
    </Document>
  );
}
