import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Header } from '../comp/pdf-templates/title';
// import moment from 'moment';
import { formatNumber } from '../utils/helpers';

const BORDER_COLOR = '#000';
const BORDER_STYLE = 'solid';
const COL1_WIDTH = 20;
const COL2_WIDTH = 20;
const COL3_WIDTH = 39;
const COLN_WIDTH = (100 - COL1_WIDTH) / 8;

export function OverViewReportPDF({
  overView,
  totalAmountBought,
  totalAmountInStore,
  totalAmountInShelf,
  totalAmountSold,
  pharmHasStore,
  from,
  to,
}) {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Header title="Overview Report" />
        <View style={styles.new}>
          <Text>{`Report Date: ${from} / ${to}`}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol1Header}>
              <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                Drugs
              </Text>
            </View>
            {pharmHasStore && (
              <View style={styles.tableCol3Header}>
                <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                  Store
                </Text>
              </View>
            )}
            <View style={styles.tableCol3Header}>
              <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                Shelf
              </Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCol1Header}>
              <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                Drug
              </Text>
            </View>
            {pharmHasStore && (
              <View style={styles.tableColHeader}>
                <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                  Brought
                </Text>
              </View>
            )}
            {pharmHasStore && (
              <View style={styles.tableColHeader}>
                <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                  Cost
                </Text>
              </View>
            )}
            {pharmHasStore && (
              <View style={styles.tableColHeader}>
                <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                  In Store
                </Text>
              </View>
            )}
            {pharmHasStore && (
              <View style={styles.tableColHeader}>
                <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                  Cost
                </Text>
              </View>
            )}

            <View style={styles.tableColHeader}>
              <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                On Self
              </Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                Amount
              </Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                Sold
              </Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                Amount
              </Text>
            </View>
          </View>
          {overView.map((item, i) => (
            <View style={styles.tableRow} key={i}>
              <View style={styles.tableCol1Header}>
                <Text style={[styles.tableCell, { textAlign: 'center' }]}>
                  {item.drug}
                </Text>
              </View>
              {pharmHasStore && (
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, { textAlign: 'center' }]}>
                    {item.quantity_bought}
                  </Text>
                </View>
              )}
              {pharmHasStore && (
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, { textAlign: 'right' }]}>
                    {formatNumber(item.amount_bought) || 0}
                  </Text>
                </View>
              )}
              {pharmHasStore && (
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, { textAlign: 'center' }]}>
                    {item.quantity_in_store}
                  </Text>
                </View>
              )}
              {pharmHasStore && (
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, { textAlign: 'right' }]}>
                    {formatNumber(item.amount_in_store) || 0}
                  </Text>
                </View>
              )}

              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, { textAlign: 'center' }]}>
                  {item.quantity_in_shelf}
                </Text>
              </View>

              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, { textAlign: 'right' }]}>
                  {formatNumber(item.amount_in_shelf) || 0}
                </Text>
              </View>

              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, { textAlign: 'center' }]}>
                  {item.quantity_sold}
                </Text>
              </View>

              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, { textAlign: 'right' }]}>
                  {formatNumber(item.amount_sold) || 0}
                </Text>
              </View>
            </View>
          ))}

          <View style={styles.tableRow}>
            <View style={styles.tableCol1Header}>
              <Text style={[styles.tableCellHeader, { textAlign: 'center' }]}>
                Total
              </Text>
            </View>
            {pharmHasStore && (
              <View style={styles.tableCol2Header}>
                <Text style={[styles.tableCellHeader, { textAlign: 'right' }]}>
                  {formatNumber(totalAmountBought) || 0}
                </Text>
              </View>
            )}
            {pharmHasStore && (
              <View style={styles.tableCol2Header}>
                <Text style={[styles.tableCellHeader, { textAlign: 'right' }]}>
                  {formatNumber(totalAmountInStore) || 0}
                </Text>
              </View>
            )}
            <View style={styles.tableCol2Header}>
              <Text style={[styles.tableCellHeader, { textAlign: 'right' }]}>
                {formatNumber(totalAmountInShelf) || 0}
              </Text>
            </View>
            <View style={styles.tableCol2Header}>
              <Text style={[styles.tableCellHeader, { textAlign: 'right' }]}>
                {formatNumber(totalAmountSold) || 0}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

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
  new: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 12,
  },
  // minitable: {
  //   borderStyle: BORDER_STYLE,
  //   borderColor: BORDER_COLOR,
  //   borderWidth: 1,
  //   borderTopWidth: 0,
  //   borderRightWidth: 0,
  //   borderBottomWidth: 0
  // },
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
  tableCol2Header: {
    width: COL2_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCol3Header: {
    width: COL3_WIDTH + '%',
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
  tableCol2: {
    width: COL2_WIDTH + '%',
    borderStyle: BORDER_STYLE,
    borderColor: BORDER_COLOR,
    borderRadius: 2,
    paddingBottom: 8,
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
