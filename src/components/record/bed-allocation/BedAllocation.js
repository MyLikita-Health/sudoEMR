import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
// import { apiURL } from "../../../redux/actions";
// import { _postApi } from "../../../redux/actions/api";
import { getAvailableBeds, getPatients } from "../../../redux/actions/records";
import AutoComplete from "../../comp/components/AutoComplete";
import BackButton from "../../comp/components/BackButton";
import CustomButton from "../../comp/components/Button";
import Loading from "../../comp/components/Loading";
// import { createDrugSchedule } from "../../nurse/drug-schedule";
import { _customNotify, _warningNotify } from "../../utils/helpers";
import BedGroup from "./BedGroup";
import DischargeModal from "./DischargeModal";
import { allocateBedToPatient } from "./helpers";

const BedAllocation = () => {
  const history = useHistory();
  const patientlist = useSelector((state) => state.records.patientlist);
  const bedList = useSelector((state) => state.records.availableBedObj);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [selectedBed, setSelectedBed] = useState({});
  const [selectedAllocation, setSelectedAllocation] = useState({});
  const [modalIsOpen, toggleModal] = useState(false);
  const [dischargeModalOpen, toggleDischargeModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getAvailableBeds(() => setLoading(false)));
    dispatch(getPatients());
  }, [dispatch]);

  const allocateBed = (bed) => {
    setSelectedBed(bed);
    toggleModal(true);
  };

  const dischargePatient = (bed) => {
    setSelectedAllocation(bed);
    // console.log(bed)
    // if (bed.occupied === 1) {
    //   // alert(bed)
    //   _postApi(
    //     `${apiURL()}/beds/allocation`,
    //     {
    //       allocation_id: bed.id,
    //       query_type: "discharge",
    //       timeAllocated: moment().format("YYYY-MM-DD hh:mm:ss"),
    //     },
    //     () => {
    //       _customNotify("Patient discharged! Bed space now available.");
    //       dispatch(getAvailableBeds());
    //     },
    //     () => {
    //       _warningNotify("An error occured, please try again later.");
    //     }
    //   );
    // } else {
    //   toggleDischargeModal(true);
    // }
  };

  return (
    <div>
      <div className="d-flex flex-direction-row justify-content-between align-items-center my-1">
        <BackButton text="Go Back" />
        <CustomButton
          onClick={() => history.push("/me/records/patients/in-patients-list")}
        >
          View In-Patient List
        </CustomButton>
      </div>

      <Card>
        <CardHeader tag="h6" className="text-center">
          Available Bed Spaces
        </CardHeader>
        <CardBody>
          {loading && <Loading />}
          {/* {JSON.stringify(bedList)} */}
          {bedList &&
            Object.keys(bedList).map((bedGroup, id) => {
              return (
                <BedGroup
                  allocateBed={allocateBed}
                  title={bedGroup}
                  list={bedList[bedGroup]}
                  key={id}
                  dischargePatient={dischargePatient}
                />
              );
            })}
        </CardBody>
        <AllocationModal
          patientlist={patientlist}
          info={selectedBed}
          modalIsOpen={modalIsOpen}
          toggle={() => toggleModal((p) => !p)}
        />
        <DischargeModal
          selectedAllocation={selectedAllocation}
          isOpen={dischargeModalOpen}
          toggle={() => toggleDischargeModal((p) => !p)}
        />
      </Card>
    </div>
  );
};

function AllocationModal({
  modalIsOpen = false,
  toggle = (f) => f,
  info = {},
  patientlist = [],
}) {
  // const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});

  const _allocateBedToPatient = () => {
    setLoading(true);
    allocateBedToPatient(
      selectedPatient,
      info,
      () => {
        setLoading(false);
        toggle();
        dispatch(getAvailableBeds());
        _customNotify("Bed space allocated successfully!");
      },
      (err) => {
        setLoading(false);
        // console.log(err);
        _warningNotify("An error occured!");
      }
    );

    // createDrugSchedule(
    //   selectedPatient.patient_id,
    //   allocation_id,
    //   () => {
    //     _customNotify("Drug Schedule Save!");
    //   },
    //   () => {
    //     _warningNotify("Error saving drug schedule");
    //   }
    // );
  };

  const formIsValid = selectedPatient && selectedPatient.patient_id;

  return (
    <Modal isOpen={modalIsOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Allocate bed space</ModalHeader>
      <ModalBody>
        <p>Bed Space: {info.name}</p>
        <p>Class: {info.class_type}</p>
        {/* <p>{JSON.stringify(selectedPatient)}</p> */}
        <AutoComplete
          label="Select Patient"
          labelKey={(p) => `${p.surname} ${p.firstname} (${p.id})`}
          options={patientlist}
          onChange={(val) => {
            if (val.length) {
              let p = val[0];
              setSelectedPatient({ patient_id: p.id });
            }
          }}
        />
        {/* {"facilityId":"1be0a9da-bff9-4ab6-a36c-edfd8ca88f1a","title":"","surname":"Samuel","firstname":"Director","other":"",
        "Gender":"Female","age":0,"maritalstatus":"Married","DOB":"1986-06-04","dateCreated":"2021-06-04T00:00:00.000Z",
        "phoneNo":"07036105884","email":"sudoEMR","state":"","lga":"","occupation":"Student",
        "address":"No 3. Sabo Bakin Zuwo Road, Kano","kinName":"ISAH RABIU","kinRelationship":"Father",
        "kinPhone":"07036105884","kinEmail":"Issa.emaitee@gmail.com","kinAddress":"No 3. Sabo Bakin Zuwo Road, 
        Kano","accountNo":8,"beneficiaryNo":1,"balance":0,"id":"8-1","patient_id":117,"enteredBy":null,"patient
        Status":null,"assigned_to":null,"createdAt":null,"date_assigned":null,"status":"regi */}

        {/*<div>
          <Checkbox label="Save drug schedule" checked />
        </div>*/}

        <CustomButton
          disabled={!formIsValid}
          loading={loading}
          onClick={_allocateBedToPatient}
          // onClick={() => getSchedule(selectedPatient.id)}
        >
          Allocate now
        </CustomButton>
      </ModalBody>
    </Modal>
  );
}

export default withRouter(BedAllocation);
