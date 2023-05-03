import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Header } from './title';
import moment from 'moment';
import { formatNumber } from '../../utils/helpers';
import { facilityDetails } from './deposit-receipt';

export function AccountStatement({
  data,
  balance,
  accDetails,
  logo,
  facilityInfo = {},
}) {
  const titleDate =
    accDetails.from === accDetails.to
      ? moment(accDetails.from).format('MMMM Do, YYYY')
      : `${moment(accDetails.from).format('MMMM Do, YYYY')} - ${moment(
          accDetails.to,
        ).format('MMMM Do, YYYY')}`;

  return (
    <Document>
      <Page style={styles.body}>
        <View>
          <Header
            title="Account Statement"
            showPatient={false}
            logo={logo}
            facilityInfo={facilityInfo}
          />
        </View>
        <View>
          <View style={styles.patientDetails}>
            <View style={styles.item}>
              <Text style={{ width: 120 }}>Date:</Text>
              <Text>{titleDate}</Text>
            </View>
            <View style={styles.item}>
              <Text style={{ width: 120 }}>Name:</Text>
              <View>
                <Text>{accDetails.name ? accDetails.name : ''}</Text>
                <Text>
                  {facilityDetails.acronym}/
                  {accDetails.accountNo ? accDetails.accountNo : ''}
                </Text>
              </View>
            </View>

            <View style={styles.item}>
              <Text style={{ width: 120 }}>Balance</Text>
              <Text>{balance ? formatNumber(balance) : ''}</Text>
            </View>

            {data && data.length ? (
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tableColHeader}>
                    <Text style={styles.tableCellHeader}>Date</Text>
                  </View>
                  <View style={styles.tableCol1Header}>
                    <Text style={styles.tableCellHeader}>Description</Text>
                  </View>
                  <View style={styles.tableColHeader}>
                    <Text
                      style={[styles.tableCellHeader, { textAlign: 'center' }]}
                    >
                      Debited
                    </Text>
                  </View>
                  <View style={styles.tableColHeader}>
                    <Text
                      style={[styles.tableCellHeader, { textAlign: 'center' }]}
                    >
                      Credited
                    </Text>
                  </View>
                  {/* <View style={styles.tableColHeader}>
                    <Text
                      style={[styles.tableCellHeader, { textAlign: 'center' }]}
                    >
                      Balance
                    </Text>
                  </View> */}
                </View>

                {data
                  ? data.map((item, index) => (
                      <View key={index} style={styles.tableRow}>
                        <View style={styles.tableCol}>
                          <Text style={styles.tableCell}>
                            {moment(item.createdAt).format('DD-MM-YYYY')}
                          </Text>
                        </View>
                        <View style={styles.tableCol1}>
                          <Text style={styles.tableCell}>
                            {item.description}
                          </Text>
                        </View>
                        <View style={styles.tableCol}>
                          <Text
                            style={[styles.tableCell, { textAlign: 'right' }]}
                          >
                            {formatNumber(item.credit)}
                          </Text>
                        </View>
                        <View style={styles.tableCol}>
                          <Text
                            style={[styles.tableCell, { textAlign: 'right' }]}
                          >
                            {formatNumber(item.debit)}
                          </Text>
                        </View>
                        {/* <View style={styles.tableCol}>
                          <Text
                            style={[styles.tableCell, { textAlign: 'right' }]}
                          >
                            {formatNumber(item.bal)}
                          </Text>
                        </View> */}
                      </View>
                    ))
                  : null}
              </View>
            ) : null}
          </View>
        </View>
      </Page>
    </Document>
  );
}

const BORDER_COLOR = '#000';
const BORDER_STYLE = 'solid';
const COL1_WIDTH = 40;
const COLN_WIDTH = (100 - COL1_WIDTH) / 3;

const styles = StyleSheet.create({
  body: {
    padding: 30,
  },
  title: {
    fontSize: 24,
  },
  author: {
    fontSize: 12,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
  },
  image: {
    height: 100,
    width: 100,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 40,
  },
  patientDetails: {
    fontSize: 13,
    marginTop: 20,
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
    marginVertical: 10,
  },
  hr: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginVertical: 20,
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
