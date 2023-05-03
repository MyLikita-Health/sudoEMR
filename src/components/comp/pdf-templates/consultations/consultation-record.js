import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import moment from "moment";
// import {PresentingComplaintsView} from '../../../doctor/PreviewForm'
import { Header } from "../title";
import customRobotoNormal from "../../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../../fonts/Roboto-Bold.ttf";

export function ConsultationRecord({
  logo='',
  complaints=[],
  vitalSigns={},
  historyOfPComplaints={},
  systemExam={},
  problems=[],
  provisionalDiagnosis=[],
  athropometry={},
  managementPlan={},
  labDetails=[],
  dressingRequest={},
  patientDetails={},

  facilityInfo = {},
}) {
  return (
    <Document>
      <Page style={styles.body}>
        <Header
          showPatient={true}
          date={moment().format("MMMM Do, YYYY")}
          name={patientDetails.surname + " " + patientDetails.firstname}
          patientId={patientDetails.patientHospitalId}
          title="Consultation Records"
          logo={logo}
          facilityInfo={facilityInfo}
        />
        <View>
          <Text style={styles.subtitle}>Presenting Complaints</Text>
          <Text style={styles.text}>{complaints}</Text>

          <Text style={styles.subtitle}>History of Presenting Complaints</Text>

          {historyOfPComplaints.hypertensive ? (
            <Text style={styles.text}>
              {" "}
              Hypertensive: {historyOfPComplaints.hypertensive}{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.hypertensiveDuration ? (
            <Text style={styles.text}>
              {" "}
              Hypertensive Duration:{
                historyOfPComplaints.hypertensiveDuration
              }{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.hypertensiveRegularOnMedication ? (
            <Text style={styles.text}>
              {" "}
              Regular on Medication:
              {historyOfPComplaints.hypertensiveRegularOnMedication}{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.diabetic ? (
            <Text style={styles.text}>
              {" "}
              Diabetic:{historyOfPComplaints.diabetic}{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.optimalSugarControl ? (
            <Text style={styles.text}>
              {" "}
              Optimal Sugar Control:{
                historyOfPComplaints.optimalSugarControl
              }{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.asthmatic ? (
            <Text style={styles.text}>
              {" "}
              Asthmatic: {historyOfPComplaints.asthmatic}{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.other ? (
            <Text style={styles.text}>
              {" "}
              Other: {historyOfPComplaints.other}{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.pastMedicalHistory ? (
            <Text style={styles.text}>
              {" "}
              Past Medical History: {historyOfPComplaints.pastMedicalHistory}
            </Text>
          ) : null}
          {historyOfPComplaints.pastSurgicalHistory ? (
            <Text style={styles.text}>
              {" "}
              Past Surgical History: {historyOfPComplaints.pastSurgicalHistory}
            </Text>
          ) : null}
          {historyOfPComplaints.allergy ? (
            <Text style={styles.text}>
              {" "}
              Allergy: {historyOfPComplaints.allergy}
            </Text>
          ) : null}
          {historyOfPComplaints.social ? (
            <Text style={styles.text}>
              {" "}
              Social: {historyOfPComplaints.social}{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.otherAllergies ? (
            <Text style={styles.text}>
              {" "}
              Other Allergies: {historyOfPComplaints.otherAllergies}{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.otherSocialHistory ? (
            <Text style={styles.text}>
              {" "}
              Other Social History: {
                historyOfPComplaints.otherSocialHistory
              }{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.obtsGyneaHistory ? (
            <Text style={styles.text}>
              {" "}
              Obts & Gynea History: {historyOfPComplaints.obtsGyneaHistory}{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.drugHistory ? (
            <Text style={styles.text}>
              {" "}
              Drug History: {historyOfPComplaints.drugHistory}{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.pbnh ? (
            <Text style={styles.text}> PBNH: {historyOfPComplaints.pbnh} </Text>
          ) : null}
          {historyOfPComplaints.nutrition ? (
            <Text style={styles.text}>
              {" "}
              Nutrition: {historyOfPComplaints.nutrition}{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.immunization ? (
            <Text style={styles.text}>
              {" "}
              Immunization: {historyOfPComplaints.immunization}{" "}
            </Text>
          ) : null}
          {historyOfPComplaints.development ? (
            <Text style={styles.text}>
              {" "}
              Development: {historyOfPComplaints.development}{" "}
            </Text>
          ) : null}

          <Text style={styles.subtitle}> System Examination</Text>
          {systemExam.palor ? (
            <Text style={styles.text}> Palor: {systemExam.palor} </Text>
          ) : null}
          {systemExam.dehydration ? (
            <Text style={styles.text}>
              {" "}
              Dehydration: {systemExam.dehydration}{" "}
            </Text>
          ) : null}
          {systemExam.icterus ? (
            <Text style={styles.text}> Icterus: {systemExam.icterus} </Text>
          ) : null}
          {systemExam.cyanosis ? (
            <Text style={styles.text}> Cyanosis: {systemExam.cyanosis} </Text>
          ) : null}
          {systemExam.rDistress ? (
            <Text style={styles.text}>
              {" "}
              Respiratory Distress: {systemExam.rDistress}{" "}
            </Text>
          ) : null}
          {systemExam.pedalEdema ? (
            <Text style={styles.text}>
              {" "}
              Pedal Edema: {systemExam.pedalEdema}{" "}
            </Text>
          ) : null}
          {systemExam.gLymphadenopathy ? (
            <Text style={styles.text}>
              {" "}
              General Lymphadenopathy: {systemExam.gLymphadenopathy}{" "}
            </Text>
          ) : null}
          {systemExam.otherFinding ? (
            <Text style={styles.text}>
              {" "}
              Other Finding: {systemExam.otherFinding}
            </Text>
          ) : null}

          <Text style={styles.subtitle}>Cardiovascular Examination:</Text>
          {systemExam.cvsInspection ? (
            <Text style={styles.text}>
              Palpation: {systemExam.cvsInspection}
            </Text>
          ) : null}
          {systemExam.cvsPalpation ? (
            <Text style={styles.text}>
              {" "}
              Inspection:{systemExam.cvsPalpation}{" "}
            </Text>
          ) : null}
          {systemExam.cvsPercussion ? (
            <Text style={styles.text}>
              {" "}
              Percussion:{systemExam.cvsPercussion}{" "}
            </Text>
          ) : null}
          {systemExam.cvsAuscultation ? (
            <Text style={styles.text}>
              {" "}
              Auscultation: {systemExam.cvsAuscultation}{" "}
            </Text>
          ) : null}

          <Text style={styles.subtitle}>Chest / Respiratory Examination:</Text>
          {systemExam.respiratoryInspection ? (
            <Text style={styles.text}>
              Palpation: {systemExam.respiratoryInspection}{" "}
            </Text>
          ) : null}
          {systemExam.respiratoryPalpation ? (
            <Text style={styles.text}>
              {" "}
              Inspection:{systemExam.respiratoryPalpation}{" "}
            </Text>
          ) : null}
          {systemExam.respiratoryPercussion ? (
            <Text style={styles.text}>
              {" "}
              Percussion:{systemExam.respiratoryPercussion}{" "}
            </Text>
          ) : null}
          {systemExam.respiratoryAuscultation ? (
            <Text style={styles.text}>
              {" "}
              Auscultation:{systemExam.respiratoryAuscultation}{" "}
            </Text>
          ) : null}

          <Text style={styles.subtitle}>Abdominal Examination:</Text>
          {systemExam.abdomenInspection ? (
            <Text style={styles.text}>
              Palpation:{systemExam.abdomenInspection}{" "}
            </Text>
          ) : null}
          {systemExam.abdomenPalpation ? (
            <Text style={styles.text}>
              {" "}
              Inspection: {systemExam.abdomenPalpation}{" "}
            </Text>
          ) : null}
          {systemExam.abdomenPercussion ? (
            <Text style={styles.text}>
              {" "}
              Percussion: {systemExam.abdomenPercussion}{" "}
            </Text>
          ) : null}
          {systemExam.abdomenAuscultation ? (
            <Text style={styles.text}>
              {" "}
              Auscultation: {systemExam.abdomenAuscultation}{" "}
            </Text>
          ) : null}

          <Text style={styles.subtitle}>CNS Examination:</Text>
          {systemExam.cnsInspection ? (
            <Text style={styles.text}>
              Palpation:{systemExam.cnsInspection}{" "}
            </Text>
          ) : null}
          {systemExam.cnsPalpation ? (
            <Text style={styles.text}>
              {" "}
              Inspection:{systemExam.cnsPalpation}{" "}
            </Text>
          ) : null}
          {systemExam.cnsPercussion ? (
            <Text style={styles.text}>
              {" "}
              Percussion:{systemExam.cnsPercussion}{" "}
            </Text>
          ) : null}
          {systemExam.cnsAuscultation ? (
            <Text style={styles.text}>
              {" "}
              Auscultation: {systemExam.cnsAuscultation}{" "}
            </Text>
          ) : null}
          {systemExam.eye_opening ? (
            <Text style={styles.text}>
              {" "}
              Eye Opening: {systemExam.eye_opening}{" "}
            </Text>
          ) : null}
          {systemExam.BVR ? (
            <Text style={styles.text}> BVR: {systemExam.BVR} </Text>
          ) : null}
          {systemExam.BMR ? (
            <Text style={styles.text}> BMR: {systemExam.BMR}</Text>
          ) : null}

          <Text style={styles.subtitle}>Musculoskeletal Examination:</Text>
          {systemExam.mssInspection ? (
            <Text style={styles.text}>
              Palpation:{systemExam.mssInspection}{" "}
            </Text>
          ) : null}
          {systemExam.mssPalpation ? (
            <Text style={styles.text}>
              {" "}
              Inspection: {systemExam.mssPalpation}{" "}
            </Text>
          ) : null}
          {systemExam.mssPercussion ? (
            <Text style={styles.text}>
              {" "}
              Percussion: {systemExam.mssPercussion}{" "}
            </Text>
          ) : null}
          {systemExam.mssAuscultation ? (
            <Text style={styles.text}>
              {" "}
              Auscultation: {systemExam.mssAuscultation}{" "}
            </Text>
          ) : null}
          {systemExam.RUL ? (
            <Text style={styles.text}> RUL:{systemExam.RUL} </Text>
          ) : null}
          {systemExam.LUL ? (
            <Text style={styles.text}> LUL: {systemExam.LUL} </Text>
          ) : null}
          {systemExam.RLL ? (
            <Text style={styles.text}> RLL:{systemExam.RLL} </Text>
          ) : null}
          {systemExam.LLL ? (
            <Text style={styles.text}> LLL:{systemExam.LLL} </Text>
          ) : null}

          <Text style={styles.subtitle}>Athropometry</Text>
          {athropometry.weight ? (
            <Text style={styles.text}>Weight: {athropometry.weight}</Text>
          ) : null}
          {athropometry.headcircumference ? (
            <Text style={styles.text}>
              {" "}
              Head Circumference:{athropometry.headcircumference}{" "}
            </Text>
          ) : null}
          {athropometry.height ? (
            <Text style={styles.text}> Height: {athropometry.height} </Text>
          ) : null}
          {athropometry.muac ? (
            <Text style={styles.text}> MUAC: {athropometry.muac}</Text>
          ) : null}

          <Text style={styles.subtitle}>Management Plan</Text>
          {managementPlan.addedcare ? (
            <Text style={styles.text}>
              Added Care:{managementPlan.addedcare}{" "}
            </Text>
          ) : null}

          <Text style={styles.subtitle}>Vital Signs</Text>
          {vitalSigns.tempreture ? (
            <Text style={styles.text}>
              {" "}
              Tempreture: {vitalSigns.tempreture}
            </Text>
          ) : null}
          {vitalSigns.pulse ? (
            <Text style={styles.text}> Pulse: {vitalSigns.pulse} </Text>
          ) : null}
          {vitalSigns.bloodpressure ? (
            <Text style={styles.text}>
              {" "}
              Blood Pressure:{vitalSigns.bloodpressure}{" "}
            </Text>
          ) : null}
          {vitalSigns.respiratoryRate ? (
            <Text style={styles.text}>
              {" "}
              Respiratory Rate:{vitalSigns.respiratoryRate}{" "}
            </Text>
          ) : null}
          {vitalSigns.vital_weight ? (
            <Text style={styles.text}>
              {" "}
              Vital Weight:{vitalSigns.vital_weight}{" "}
            </Text>
          ) : null}

          <Text style={styles.subtitle}>Problems</Text>
          <Text style={styles.text}>{problems} </Text>

          <Text style={styles.subtitle}>Provisional Diagnosis</Text>
          <Text style={styles.text}>{provisionalDiagnosis}</Text>

          {dressingRequest.partToDress ? (
            <>
              <Text style={styles.subtitle}>Nursing/Dressing Request</Text>

              <Text style={styles.text}>{dressingRequest.partToDress} </Text>
            </>
          ) : null}

          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </View>
      </Page>
    </Document>
  );
}
Font.register({
  family: "CustomRoboto",
  fonts: [
    { src: customRobotoNormal },
    {
      src: customRobotoBold,
      fontStyle: "normal",
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  body: {
    padding: 30,
    fontFamily: "CustomRoboto",
  },
  title: {
    fontSize: 14,
  },
  author: {
    fontSize: 12,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 12,
    textAlign: "justify",
    marginVertical: 5,
  },
  headerContainer: {
    flexDirection: "row",
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 40,
  },
  patientDetails: {
    fontSize: 13,
    marginTop: 20,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  hr: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    marginVertical: 3,
  },
  pageNumber: {
    textAlign: "center",
    alignContent: "center",
    fontSize: 12,
  },
});
