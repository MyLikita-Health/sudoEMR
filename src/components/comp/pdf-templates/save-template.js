import RenderPDF from '@react-pdf/renderer'

const Quixote = () => (
    <Document>
      <Page style={styles.body}>
       
        {/**<Text style={styles.title}>Don Quijote de la Mancha</Text>
        <Text style={styles.author}>Miguel de Cervantes</Text>**/}
        <Text style={styles.title}>
          OFFICE OF THE HONORABLE COMMISSIONER OF FINANCE
        </Text>
        <Text style={styles.id}>
          AA002
        </Text>
        <View style={styles.passportContainer}>
          <Image
            style={styles.passport}
            src="/static/images/quijote1.jpg"
          />
          <View style={styles.passportTextContainer}>
            <Text style={styles.passportText}>
            ZAMFARA STATE MINISTRY OF FINANCE GUSAU 
            </Text>
            <Text style={styles.passportText}>
              DATA UPDATE FORM
            </Text>
          </View>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.text}>
            NAME OF MDA:
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            STAFF LOCATION:
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            NAMES IN FULL (SURNAME FIRST) MR/MRS:
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            DATE OF BIRTH:
          </Text>
          <Text style={styles.text}>
            STAFF IDENTITY CARD NO:
          </Text>
          <Text style={styles.text}>
            FILE NO:
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            QUALIFICATION:
          </Text>
            <Text style={styles.text}>
            DEPARTMENT:
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            DATE OF 1ST APPOINTMENT:
          </Text>
          <Text style={styles.text}>
            ENTRY LEVEL:
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            DATE OF CONFIRMATION:
          </Text>
          <Text style={styles.text}>
            DATE OF PRESENT APPOINTMENT/PROMOTION:
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            PRESENT SALARY GRADE LEVEL:
          </Text>
          <Text style={styles.text}>
            STEP:
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            PRESENT DESIGNATION/POST:
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            NAME OF BANK:
          </Text>
          <Text style={styles.text}>
            ACCOUNT NUMBER:
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>
            BANK VERIFICATION NUMBER:
          </Text>
        </View>
  
        <Text style={styles.attestation}>ATTESTATION</Text>
        <Text style={styles.textAttestation}>
          I _______________________________________ hereby affirm that the above 
          information provided by me are absolutely correct. I accept
          that any claim dicovered to be false afterwards will be 
          treated as an act of GROSS MISCONDUCT.
        </Text>
        <Text style={styles.textAttestation}>
          Officer's Signature/Date: ________________________________________________________________________
        </Text>
        <Text style={styles.textAttestation}>
            Name of Head of Department: ____________________________________ Signature/Date: __________________
        </Text>
        <Text style={styles.attestation}>ATTACHMENT REQUIRED:</Text>
        <View>
          <Text style={styles.text}>
            - Letter of First Appointment of Official Gazette
          </Text>
          <Text style={styles.text}>
            - Letter of Confirmation of Appointment of Official Gazette
          </Text>
          <Text style={styles.text}>
            - Letter of Last Promotion
          </Text>
          <Text style={styles.text}>
            - BVN Cirtificate stamped by bank
          </Text>
          <Text style={styles.text}>
            - One copy of present Passport Photograph
          </Text>
          <Text style={styles.text}>
            - Copy of Credentials
          </Text>
          <Text style={styles.text}>
            - Staff ID
          </Text>
          <Text style={styles.text}>
           *   Also come with the originals of the above document
          </Text>
        </View>
        <Text style={styles.textAttestation}>Verifying Officer:</Text>
        <Text style={styles.textAttestation}>Permanent Secretary's/Chief Executive Officers/Principal Name: _______________________________________</Text>
        <Text style={styles.textAttestation}>Signature, Date and Stamp: ____________________</Text>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  );
  
  Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });
  
  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 18,
      textAlign: 'center',
    },
    id: { fontSize: 16 },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    text: {
      margin: 6,
      fontSize: 10,
      textAlign: 'justify',
    },
    textAttestation: {
      margin: 6,
      fontSize: 10,
      textAlign: 'justify',
    },
    attestation: {
      fontSize: 10,
      margin: 4,
      fontWeight: 'bold'
    },
    passportContainer:{
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    passportTextContainer: {
      marginVertical: 20,
      justifyContent: 'center',
      
    },
    passportText:{
      fontSize: 14,
      textAlign:'center'
    },
    passport: {
      height:100,
      width: 100,
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
    id: {
      textAlign:'right'
    }
  });
  
  ReactPDF.render(<Quixote />);
  