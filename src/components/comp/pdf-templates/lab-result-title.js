import React from 'react'
import { Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
// import { facilityDetails } from "./deposit-receipt";
import customRobotoNormal from '../../../fonts/Roboto-Regular.ttf'
import customRobotoBold from '../../../fonts/Roboto-Bold.ttf'
import customRobotoItalic from '../../../fonts/Roboto-Italic.ttf'
import { getAgeFromDOB, toCamelCase } from '../../utils/helpers'
import moment, { isMoment } from 'moment'

Font.register({
  family: 'CustomRoboto',
  fonts: [
    { src: customRobotoNormal },
    {
      src: customRobotoBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    {
      src: customRobotoItalic,
      fontStyle: 'italic',
    },
  ],
})

const styles = StyleSheet.create({
  body: {
    padding: 30,
    paddingLeft: 40,
  },
  title: {
    fontSize: 14,
    // textAlign: 'center',
    fontFamily: 'CustomRoboto',
  },
  subtitle: {
    fontSize: 11,
    fontFamily: 'CustomRoboto',
  },
  author: {
    fontSize: 12,
    marginBottom: 20,
  },
  subtitle2: {
    fontSize: 12,
    marginTop: 3,
    marginBottom: 15,
  },
  image: {
    height: 50,
    width: 60,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    width: '80%',
  },
  imageContainer: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  patientDetails: {
    fontSize: 12,
    // marginTop: 80,

    // marginTop: 100
  },
  detailItem: {
    flexDirection: 'row',
    // justifyContent: "space-around",
    // borderBottomColor: "#000",
    // borderWidth: 1,
    padding: 3,
    width: '33.33%',
    justifyContent: 'flex-start',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingHorizontal: 5,
    // marginVertical: 5,
  },
  hr: {
    // borderBottomColor: "#000",
    // borderBottomWidth: 1,
    marginTop: 5,
    // marginBottom: 20,
  },
  dateRow: {
    fontSize: 12,
  },
  key: {
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    // marginHorizontal: 5,
  },
  keyRight: {
    width: '35%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueRight: {
    width: '65%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    // marginHorizontal: 5,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  leftContainer: {
    width: '55%',
    display: 'flex',
    flexDirection: 'row',
    // marginRight: '5%'
    // backgroundColor: "green",
  },
  rightContainer: {
    width: '45%',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  bioText: {
    padding: 2,
    width: '100%',
  },
  detailRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 1,
    // borderTopWidth: 1,
    // borderTopColor: "#000",
    // borderBottomWidth: 1,
    // borderBottomColor: "#000",
  },
  valueLast: {
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: 5,
  },
  s1: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  s2: {
    width: '33.33%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
})

export function Header({
  title,
  showPatient,
  id = null,
  date,
  name,
  patientId,
  showDate = false,
  titleDate,
  logo,
  facilityInfo = {},
  dob = '',
  gender = '',
  requestDate = '',
  reportDate = '',
  // facilityDetails={}
}) {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            // source={{ uri: facilityInfo.logo }}
            source={require('../../../images/pscprime_logo.png')}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{facilityInfo.printTitle}</Text>
          <Text style={styles.subtitle}>{facilityInfo.printSubtitle1}</Text>
          <Text style={styles.subtitle}>{facilityInfo.printSubtitle2}</Text>

          <Text style={styles.subtitle2}>{title}</Text>

          {showDate ? (
            <View style={styles.dateRow}>
              <Text>{titleDate}</Text>
            </View>
          ) : null}
        </View>
      </View>

      {showPatient ? (
        <View style={styles.patientDetails}>
          <View style={styles.row}>
            {id && id !== '' ? (
              <View style={[styles.detailItem]}>
                <Text>Serial Number:</Text>
                <Text style={{ marginLeft: 10 }}>{id}</Text>
              </View>
            ) : null}
          </View>

          <View style={[styles.detailRow, styles.borderTop]}>
            <View style={styles.leftContainer}>
              <View style={[styles.key]}>
                <Text>Name</Text>
              </View>
              <View style={[styles.value]}>
                <Text style={styles.bioText}>{name || ''}</Text>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <View style={[styles.keyRight]}>
                <Text>Sex</Text>
              </View>
              <View style={[styles.valueRight]}>
                <Text style={styles.bioText}>
                  {(gender && toCamelCase(gender)) || ''}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.detailRow, styles.borderTop]}>
            <View style={styles.leftContainer}>
              <View style={[styles.key]}>
                <Text>Referred by</Text>
              </View>
              <View style={[styles.value]}>
                <Text style={styles.bioText}>{''}</Text>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <View style={[styles.keyRight]}>
                <Text>Request Date</Text>
              </View>
              <View style={[styles.valueRight]}>
                <Text style={styles.bioText}>
                  {isMoment(moment(requestDate))
                    ? moment(requestDate).format('YYYY/MM/DD hh:mm a')
                    : moment().format('YYYY/MM/DD')}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.detailRow, styles.borderTop, styles.borderBottom]}
          >
            <View style={styles.leftContainer}>
              <View style={[styles.key]}>
                <Text>ID</Text>
              </View>
              <View style={styles.valueLast}>
                <View style={styles.s1}>
                  <Text style={styles.bioText}>{patientId || ''}</Text>
                </View>

                <View style={styles.s2}>
                  <Text>Age</Text>
                </View>
                <View style={styles.s1}>
                  <Text style={styles.bioText}>{getAgeFromDOB(dob) || ''}</Text>
                </View>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <View style={styles.keyRight}>
                <Text>Report Date</Text>
              </View>
              <View style={[styles.valueRight]}>
                <Text style={styles.bioText}>
                  {reportDate
                    ? moment.utc(reportDate).format('YYYY/MM/DD hh:mm a')
                    : moment.utc().format('YYYY/MM/DD')}
                </Text>
              </View>
            </View>
          </View>
          {/* <Text>{reportDate} reportDate - {JSON.stringify(isMoment(moment(reportDate)))} -</Text> */}
          {/* <Text>{requestDate} requestDate</Text> */}
          {/* <View style={styles.row}>
            <View style={[styles.detailItem]}>
              <Text>Name:</Text>
              <Text style={{ marginLeft: 10 }}>{name}</Text>
            </View>
            <View style={[styles.detailItem]}>
              <Text>Sex:</Text>
              <Text style={{ marginLeft: 10 }}>{gender}</Text>
            </View>
            <View style={[styles.detailItem]}>
              <Text>Request Date:</Text>
              <Text style={{ marginLeft: 10 }}>{dob}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.detailItem]}>
              <Text>ID:</Text>
              <Text style={{ marginLeft: 10 }}>{patientId}</Text>
            </View>
            <View style={[styles.detailItem]}>
              <Text>Age:</Text>
              <Text style={{ marginLeft: 10 }}>
                {getAgeFromDOB(dob) || ""} Y
              </Text>
            </View>
            <View style={[styles.detailItem]}>
              <Text>Report Date:</Text>
              <Text style={{ marginLeft: 10 }}>{date}</Text>
            </View>
          </View> */}
        </View>
      ) : null}
      <View style={styles.hr} />
    </View>
  )
}
