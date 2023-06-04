import React, { useCallback, useEffect, useState } from "react";
// import { savePatient } from "./actions/patientsActions";
import {
  _warningNotify,
  _customNotify,
  generateReceiptNo,
  toCamelCase,
} from "../utils/helpers";
import BackButton from "../comp/components/BackButton";
import { iconClass } from "../doc_dash/appointments/NewAppointment2";
import { BsCheck } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { WarningModal } from "../comp/components/Modal";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { _fetchApi } from "../../redux/actions/api";
import { apiURL } from "../../redux/actions";
// import InputGroup from "../comp/components/InputGroup";
import { Label } from "reactstrap";
// import { FallbackComp } from "../comp/components/FallbackSkeleton";
// import Scrollbars from "react-custom-scrollbars";
// import { GrDocumentUpdate } from "react-icons/gr";
import moment from "moment";
import CustomButton from "../comp/components/Button";
// import { ContactPerson } from "../account/components/client-form";
import { savePatient } from "./actions/patientsActions";
import { v4 as uuidv4 } from "uuid";

import BasicInformation from "../doc_dash/patients/BasicInfomation";
import ContactInformation from "../doc_dash/patients/ContactInformation";
import NextOfKin from "../doc_dash/patients/NextOfKin";
import { ContactPerson } from "../client-form";

const CreateNewPatient = () => {
  const match = useRouteMatch();
  const existingPatientId = match.params.id;
  const isEdit = existingPatientId ? true : false;
  const history = useHistory();
  const facilityId = useSelector((state) => state.facility.info.id);
  const patients_photo = useSelector((state) => state.records.patients_photo);
  const [patient, setPatient] = useState({
    accountType: "Single",
    clientAccount: "",
    clientBeneficiaryAcc: "",

    patientNo: "",
    patientId: "",
    patientHospitalId: "",
    firstname: "",
    surname: "",
    gender: "",
    // dob: "",
    ageY: "",
    ageM: "",
    ageD: "",
    maritalStatus: "",
    occupation: "",
    phone: "",
    email: "",
    address: "",
    nextOfKinName: "",
    nextOfKinRelationship: "",
    nextOfKinPhone: "",
    nextOfKinEmail: "",
    nextOfKinAddress: "",
    contact: "self",
    depositAmount: "",
    modeOfPayment: "",
    website: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    contactAddress: "",
    registrationType: "New",
    patient_passport: "",
  });

  const copyPatientAddr = () => {
    let addr = patient.address;
    setPatient((p) => ({ ...p, nextOfKinAddress: addr }));
  };

  const [updating, setUpdating] = useState(false);

  const setContactPerson = (val) => {
    setPatient((p) => ({ ...p, contact: val }));
  };
  const getNextClientID = async (facId) => {
    try {
      const response = await fetch(
        `${apiURL()}/patientrecords/getAccount/${facId}`
      );
      return await response.json();
    } catch (error) {
      return error;
    }
  };

  const getNextBeneficiaryId = async (acc, facId) => {
    try {
      const response = await fetch(
        `${apiURL()}/client/nextBeneficiaryId/${acc}/${facId}`
      );
      return await response.json();
    } catch (error) {
      return error;
    }
  };

  // const setRegType = (val) => {
  //   setPatient((p) => ({ ...p, accountType: val }));
  //   // getAccountsPerAccountType(val);
  // };

  const getNextPatientId = async () => {
    try {
      const response = await fetch(
        `${apiURL()}/client/next-patient-id/${facilityId}`
      );
      return await response.json();
    } catch (error) {
      return error;
    }
  };

  const getIds = useCallback(() => {
    getNextClientID(facilityId)
      .then((d) => {
        console.log(d);
        // if (d.success) {
        let acc = d.accountNo;
        setPatient((prev) => ({
          ...prev,
          clientAccount: acc,
        }));
        getNextBeneficiaryId(acc, facilityId)
          .then((d) => {
            console.log(d);
            if (d.success) {
              let ben = d.results.beneficiaryNo;
              setPatient((prev) => ({
                ...prev,
                clientBeneficiaryAcc: ben,
              }));
            }
          })
          .catch((err) => {
            console.log(err);
          });
        // console.log(d.results.accountNo);
        // }
      })
      .catch((err) => {
        console.log(err);
      });

    getNextPatientId()
      .then((m) => {
        if (m.success) {
          let id = m.results.id;
          setPatient((prev) => ({
            ...prev,
            patientId: id,
          }));
        }
      })
      .catch((err) => console.log(err));
  }, [facilityId]);

  const getPatientInfo = (_id) => {
    console.log(_id);
    _fetchApi(
      `${apiURL()}/patientrecords/patient/${_id}`,
      (data) => {
        // if (data && data.length) {
        //   console.log(data.results)
        let info = data.results[0];
        let ageY = moment().diff(info.dob, "years");
        let ageM = ageY < 1 ? moment().diff(info.dob, "months") : "";
        let ageD = ageY < 1 && ageM < 1 ? moment().diff(info.dob, "days") : "";
        let passport = info.patient_passport;
        setPatient((p) => ({
          ...p,
          ...info,
          ageY,
          ageM,
          ageD,
          patient_passport: passport,
        }));
        // }
      },
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    if (existingPatientId) {
      getPatientInfo(existingPatientId);
    } else {
      getIds();
    }
    // _fetchApi(`${apiURL()}/patientrecords/getId`, (data) => {});
  }, [getIds, existingPatientId]);

  const [warningIsOpen, setWarningIsOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const exit = () => history.goBack();

  const resetForm = () => {
    setPatient({
      patient: {
        patientNo: "",
        patientId: "",
        patientHospitalId: "",
        firstname: "",
        surname: "",
        gender: "",
        // dob: "",
        maritalStatus: "",
        occupation: "",
        phone: "",
        email: "",
        address: "",
        nextOfKinName: "",
        nextOfKinRelationship: "",
        nextOfKinPhone: "",
        nextOfKinEmail: "",
        nextOfKinAddress: "",
        contact: "self",
        contactPhone: "",
        contactEmail: "",
        contactName: "",
        contactAddress: "",
        website: "",
      },
    });
    history.push("/me/records");
  };

  const submit = () => {
    const {
      // clientAccount,
      // clientBeneficiaryAcc,
      firstname,
      gender,
      // dob,
      phone,
      ageD,
      ageM,
      ageY,
    } = patient;

    if (
      // clientAccount === "" ||
      // clientBeneficiaryAcc === "" ||
      firstname === "" ||
      (patient.accountType !== "Cooporate" && phone === "") ||
      (patient.accountType !== "Cooporate" && gender === "") ||
      (patient.accountType !== "Cooporate" &&
        ageY !== "" &&
        ageM !== "" &&
        ageD !== "")
    ) {
      _warningNotify("Please complete the form");
    } else {
      setSubmitting(true);
      const id = uuidv4();
      let destination =
        patient.modeOfPayment.toLowerCase() === "cash" ? "Cash" : "Bank";
      let dob = moment()
        .subtract(ageY, "years")
        .subtract(ageM, "months")
        .subtract(ageD, "days")
        .format("YYYY-MM-DD");
      generateReceiptNo((rec, receiptNo) => {
        let obj = {
          ...patient,
          dob,
          receiptsn: rec,
          receiptno: receiptNo,
          description: `Deposit from account ${patient.clientAccount}`,
          destination,
          source: "Deposit",
          facilityId,
        };
        let formdata = new FormData();
        formdata.append("file", patients_photo);
        Object.keys(obj).forEach((i) => formdata.append(i, obj[i]));
        // let obj = {

        //   patients_photo,
        // };

        const error = () => {
          _warningNotify("error occured");
        };
        const callBack = () => {
          savePatient({ _id: id, ...patient, dob });
          _customNotify("Patient created successfully!");
          setSubmitting(false);
          resetForm();
        };
        fetch(`${apiURL()}/save/record/info`, {
          method: "POST",
          // headers: { "Content-Type": "application/json" },
          body: formdata,
        })
          .then((raw) => raw.json())
          .then((response) => {
            // console.log(response);
            if (response.status >= 400) {
              error(response);
            } else callBack(response);
          })
          .catch((err) => error(err));
        // _postApi(`${apiURL()}/save/record/info`, obj, callBack, error);
      });
    }
  };

  const updatePatient = () => {
    const {
      // clientAccount,
      // clientBeneficiaryAcc,
      firstname,
      gender,
      // dob,
      phone,
      ageY,
      ageM,
      ageD,
    } = patient;

    if (
      // clientAccount === "" ||
      // clientBeneficiaryAcc === "" ||
      firstname === "" ||
      phone === "" ||
      gender === ""
      // dob === ""
    ) {
      _warningNotify("Please complete the form");
    } else {
      setUpdating(true);
      let dob = moment()
        .subtract(ageY, "years")
        .subtract(ageM, "months")
        .subtract(ageD, "days")
        .format("YYYY-MM-DD");
      let patientPass =
        patients_photo === {} ||
        patients_photo === null ||
        patients_photo === undefined ||
        JSON.stringify(patients_photo) === {}
          ? patient.patient_passport
          : patients_photo;
      console.log(patientPass, "GGGGGG");
      let obj = { ...patient, dob, facilityId };
      let formdata = new FormData();
      formdata.append("file", patientPass);
      Object.keys(obj).forEach((i) => formdata.append(i, obj[i]));
      const error = () => {
        _warningNotify("error occured");
        setUpdating(false);
      };

      const callBack = () => {
        _customNotify("Update successful!");
        setUpdating(false);
        resetForm();
      };
      fetch(`${apiURL()}/patientrecords/update/patient`, {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: formdata,
      })
        .then((raw) => raw.json())
        .then((response) => {
          // console.log(response);
          if (response.status >= 400) {
            error(response);
          } else callBack(response);
        })
        .catch((err) => error(err));
      // _postApi(
      //   `${apiURL()}/patientrecords/update/patient`,
      //   obj,
      //   callBack,
      //   error
      // );
    }
  };

  const toggleWarningModal = () => setWarningIsOpen((p) => !p);

  const onInputChange = ({ target: { name, value } }) => {
    setPatient((prev) => ({ ...prev, [name]: toCamelCase(value) }));
  };

  const handleAccountSelect = (acc) => {
    getNextBeneficiaryId(acc.account_no, facilityId)
      .then((d) => {
        // console.log(d);
        if (d.success) {
          let ben = d.results.beneficiaryNo;
          console.log(d);

          setPatient((prev) => ({
            ...prev,
            clientAccount: acc.account_no,
            clientBeneficiaryAcc: ben,
          }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // setPatient(prev => ({ ...prev,  }))
  };

  const {
    patientId,
    patientHospitalId,
    firstname,
    surname,
    gender,
    dob,
    maritalStatus,
    occupation,
    phone,
    email,
    address,
    nextOfKinName,
    nextOfKinRelationship,
    nextOfKinPhone,
    nextOfKinEmail,
    nextOfKinAddress,
  } = patient;

  return (
    <>
      <BackButton />
      {/* <Scrollbars style={{ height: "90vh" }} autoHide> */}
      {/* {JSON.stringify(patient)} */}
      <BasicInformation
        existingPatientId={existingPatientId}
        customHeader={() => {
          if (existingPatientId)
            return (
              <AccountType patient={patient} onInputChange={onInputChange} />
            );
          return (
            <>
              <div className="d-flex justify-content-between col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
                <div className="col-md-12 form-group">
                  <Label className="font-weight-bold">Registration Type </Label>
                  {/* <div class="form-check form-check-inline ml-2"> */}
                  <label
                    for="existingAccount"
                    className="form-check form-check-inline ml-2 font-weight-bold form-check-label"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="registrationType"
                      id="existingAccount"
                      value="Existing"
                      onChange={(e) => {
                        onInputChange(e);
                        setPatient((p) => ({
                          ...p,
                          clientAccount: "",
                          clientBeneficiaryAcc: "",
                        }));
                      }}
                      checked={patient.registrationType === "Existing"}
                    />
                    Existing
                  </label>
                  {/* </div> */}
                  {/* <div class="form-check form-check-inline"> */}
                  <label
                    className="form-check form-check-inline ml-2 form-check-label font-weight-bold"
                    for="newAccount"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="registrationType"
                      id="newAccount"
                      value="New"
                      onChange={(e) => {
                        onInputChange(e);
                        getIds();
                      }}
                      checked={patient.registrationType === "New"}
                    />
                    New
                  </label>
                  {/* </div> */}

                  {/* <Label>Account Type</Label>
              <Input
                type="select"
                className="form-control"
                value={patient.accountType}
                name="accountType"
                onChange={onInputChange}
              >
                <option value="Family">Family</option>
                {/* <option value="Donor">Donor</option>
                <option value="Organization">Organization </option>
                <option value="Organization Donor">Organization Donor</option>
                <option value="Credit Organization">Credit Organization</option> */}
                  {/* </Input> */}
                </div>
              </div>

              {patient.registrationType === "New" ? (
                <AccountType
                  patient={patient}
                  onInputChange={onInputChange}
                  disabled={
                    patient.beneficiaryNo &&
                    (patient.beneficiaryNo !== 1 ||
                      patient.beneficiaryNo !== "1")
                  }
                />
              ) : null}
            </>
          );
        }}
        patientId={patientId}
        patientHospitalId={patientHospitalId}
        firstname={firstname}
        surname={surname}
        gender={gender}
        dob={dob}
        maritalStatus={maritalStatus}
        occupation={occupation}
        onInputChange={onInputChange}
        handleAccountSelect={handleAccountSelect}
        patient={patient}
      />
      {/* <div className="card">{JSON.stringify(patient)}</div> */}
      {patient.accountType === "Cooporate" ? (
        <ContactPerson
          client={patient}
          onInputChange={onInputChange}
          setContactPerson={setContactPerson}
        />
      ) : (
        <>
          <ContactInformation
            phone={phone}
            email={email}
            address={address}
            onInputChange={onInputChange}
          />
          <NextOfKin
            nextOfKinName={nextOfKinName}
            nextOfKinRelationship={nextOfKinRelationship}
            nextOfKinPhone={nextOfKinPhone}
            nextOfKinEmail={nextOfKinEmail}
            nextOfKinAddress={nextOfKinAddress}
            onInputChange={onInputChange}
            copyPatientAddr={copyPatientAddr}
          />
        </>
      )}

      {/* {mode === 'EDITABLE' ? ( */}
      <div className="d-flex flex-direction-row justify-content-center">
        <div className="btn-group btn-group mt-2 mb-2">
          {isEdit ? (
            <CustomButton
              outline
              color="success"
              className="mr-1"
              loading={updating}
              onClick={updatePatient}
            >
              <BsCheck size={20} className="mr-1" /> Update
            </CustomButton>
          ) : (
            <CustomButton
              outline
              className="mr-1"
              loading={submitting}
              onClick={submit}
            >
              <BsCheck size={20} className="mr-1" /> Submit ....
            </CustomButton>
          )}
          <button className="btn btn-outline-danger" onClick={() => exit()}>
            <span className={iconClass}>
              <FaTimes size={20} className="mr-1" /> Cancel
            </span>
          </button>
        </div>
      </div>
      {/* ) : null} */}

      <WarningModal
        title="Confirm"
        body="All form data will be lost, Exit?"
        isOpen={warningIsOpen}
        toggle={toggleWarningModal}
        okay={() => history.push("/me/doctors/patients")}
        // cancel={() => toggleWarningModal()}
      />
      {/* </Scrollbars> */}
    </>
  );
};

// function mapDispatchToProps(dispatch) {
//   return {
//     savePatient: (data, err, success) =>
//       dispatch(savePatient(data, err, success)),
//   };
// }

function AccountType({
  onInputChange = (f) => f,
  patient = {},
  disabled = false,
}) {
  if (disabled)
    return (
      <>
        <Label className="font-weight-bold">Account Type: </Label>
        <p>{patient.accountType}</p>
      </>
    );
  return (
    <div className="d-flex justify-content-between col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
      <div className="col-md-12 form-group">
        <Label className="font-weight-bold">Account Type: </Label>
        {/* {JSON.stringify((patient.beneficiaryNo))} */}
        {/* <div class="form-check form-check-inline ml-2"> */}
        <label
          className="form-check form-check-inline ml-2 form-check-label"
          for="singleAccount"
        >
          <input
            className="form-check-input"
            type="radio"
            name="accountType"
            id="singleAccount"
            value="Single"
            onChange={onInputChange}
            checked={patient.accountType === "Single"}
          />
          Single
        </label>
        {/* </div> */}
        {/* <div className="form-check form-check-inline"> */}
        <label
          class="form-check form-check-inline ml-2 form-check-label"
          for="familyAccount"
        >
          <input
            className="form-check-input"
            type="radio"
            name="accountType"
            id="familyAccount"
            value="Family"
            onChange={onInputChange}
            checked={patient.accountType === "Family"}
          />
          Family
        </label>
        {/* </div> */}
        {/* <div className="form-check form-check-inline"> */}
        <label
          className="form-check form-check-inline ml-2 form-check-label"
          for="coorporateAccount"
        >
          <input
            className="form-check-input"
            type="radio"
            name="accountType"
            id="coorporateAccount"
            value="Cooporate"
            onChange={onInputChange}
            checked={patient.accountType === "Cooporate"}
          />
          Cooporate
        </label>
        <label
          className="form-check form-check-inline ml-2 form-check-label"
          for="retainershipAccount"
        >
          <input
            className="form-check-input"
            type="radio"
            name="accountType"
            id="retainershipAccount"
            value="Retainership"
            onChange={onInputChange}
            checked={patient.accountType === "Retainership"}
          />
          Retainership
        </label>
        {/* </div> */}

        {/* <Label>Account Type</Label>
              <Input
                type="select"
                className="form-control"
                value={patient.accountType}
                name="accountType"
                onChange={onInputChange}
              >
                <option value="Family">Family</option>
                {/* <option value="Donor">Donor</option>
                <option value="Organization">Organization </option>
                <option value="Organization Donor">Organization Donor</option>
                <option value="Credit Organization">Credit Organization</option> */}
        {/* </Input> */}
      </div>
    </div>
  );
}

export default CreateNewPatient;
