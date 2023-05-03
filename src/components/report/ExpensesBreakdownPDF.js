import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Header } from '../comp/pdf-templates/title';
import moment from 'moment';
import { formatNumber } from '../utils/helpers';

const BORDER_COLOR = '#000'
const BORDER_STYLE = 'solid'
const COL1_WIDTH = 14.5
const COL2_WIDTH = 23
const COLN_WIDTH = (100 - COL1_WIDTH) / 6.3
// const COLN1_WIDTH = (100 - COL1_WIDTH) /6

export function ExpensesBreakdownPDF ({dataTable=[], totalsales=[], totalprofit, to, from}) {
    return (
  <Document>
     <Page size="A4" style={styles.body}>
     <Header
          title="Expenses Breakdown"
        />
        <View style={styles.new}>
         <Text>{`Report Date: ${from} - ${to}`}</Text>
       </View>
       <View style={styles.table}>
               <View style={styles.tableRow}>
                    <View style={styles.tableColHeader}>
                     <Text style={[styles.tableCellHeader, { textAlign:'center'}]}>Date</Text>
                   </View>
                   <View style={styles.tableCol2}>
                     <Text style={[styles.tableCellHeader, { textAlign:'center'}]}>Account</Text>
                   </View>
                  <View style={styles.tableCol2}>
                     <Text style={[styles.tableCellHeader, { textAlign:'center'}]}>Discription</Text>
                   </View>
                  <View style={styles.tableColHeader}>
                     <Text style={[styles.tableCellHeader, { textAlign:'center'}]}>Mode of payment</Text>
                   </View>
                  <View style={styles.tableColHeader}>
                       <Text style={[styles.tableCellHeader, { textAlign:'center'}]}>Recipient</Text>
                   </View>
                  <View style={styles.tableColHeader}>
                       <Text style={[styles.tableCellHeader, { textAlign:'center'}]}>Amount</Text>
                   </View>

            </View>
                
           
                {dataTable.map((item, i) => (
              <View  style={styles.tableRow} key={i}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{moment(item.date).format('DD-MM-YYYY')}</Text>
                    </View>
                  <View style={styles.tableCol2}>
                    <Text style={styles.tableCell}>{item.acct}</Text>
                    </View>
                
                    <View style={styles.tableCol2}>
                    <Text style={styles.tableCell}> {item.description}</Text>
                    </View>
                
                    <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{item.modeOfPayment}</Text>
                    </View>
                
                    <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{item.client_acct}</Text>
                    </View>
                    
                    <View style={styles.tableCol}>
                    <Text style={[styles.tableCell, { textAlign:'right'}]}> {formatNumber(item.amount) || 0}</Text>
                    </View>
              </View>
                ))}
         	
             

          </View>
 
      </Page>
  </Document>
);
}


const styles = StyleSheet.create({
  body: {
    padding: 30
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
  },new: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 12,
    marginBottom: 10
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
    display: "table", 
    width: "auto", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  }, 
  tableCol1Header: { 
    width: COL1_WIDTH + '%', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0
  }, 
   tableCol2Header: { 
    width: COL2_WIDTH + '%', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0
  }, 
  tableColHeader: { 
    width: COLN_WIDTH + "%", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderBottomColor: '#000',
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0
  },   
  tableCol1: { 
    width: COL1_WIDTH + '%', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },  
   tableCol2: { 
    width: COL2_WIDTH + '%', 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderRadius:2,
    paddingBottom:8, 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  },
  tableCol: { 
    width: COLN_WIDTH + "%", 
    borderStyle: BORDER_STYLE, 
    borderColor: BORDER_COLOR,
    borderWidth: 1, 
    
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCellHeader: {
    margin: 5, 
    fontSize: 12,
    fontWeight: 'bold'
  },  
  tableCell: { 
    margin: 5, 
    fontSize: 10 
  }
});

