import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  Alert,
} from "reactstrap";
import moment from "moment";
import CustomTable from "../../comp/components/CustomTable";
import Loading from "../../comp/components/Loading";
// import BackButton from "../../comp/components/BackButton";
import {
  getPendingAdmissionList,
  // updateAllocatedPatient,
} from "../actions/bed-allocation";
import { getAvailableBeds } from "../../../redux/actions/records";
import { useDispatch, useSelector } from "react-redux";
import BedGroup from "./BedGroup";
import { allocateBedToPatient } from "./helpers";
import { _customNotify, _warningNotify } from "../../utils/helpers";

function PendingAdmission() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [availableBedModalIsOpen, setAvailableBedModalIsOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});

  const availableBeds = useSelector((state) => state.records.availableBedObj);

  const fields = [
    {
      title: "Date Seen",
      custom: true,
      component: (item) => moment(item.date_seen).format("DD/MM/YYYY"),
    },
    // { title: "Seen By", value: "createdBy", className: "text-center" },
    // { title: "Patient ID", value: "patient_id", className: "text-center" },
    {
      title: "Patient",
      custom: true,
      component: (i) => (
        <div>
          <span>
            {i.surname} {i.firstname} ({i.id})
          </span>
        </div>
      ),
    },
    {
      title: "Action",
      custom: true,
      component: (item) => (
        <button
          className="btn btn-success btn-sm"
          onClick={() => {
            setAvailableBedModalIsOpen(true);
            setSelectedPatient(item);
          }}
        >
          Allocate Bed
        </button>
      ),
      className: "text-center",
    },
  ];

  const getList = () => {
    setLoading(true);
    getPendingAdmissionList((data) => {
      setList(data);
      setLoading(false);
    });
  };

  useEffect(
    () => {
      getList();
      dispatch(getAvailableBeds());
    },
    [dispatch]
  );

  const toggle = () => setAvailableBedModalIsOpen((p) => !p);

  const onBedSelect = (bed) => {
    allocateBedToPatient(
      selectedPatient,
      bed,
      (allocationId) => {
        // updateAllocatedPatient(selectedPatient.id, allocationId, bed.id);
        setAvailableBedModalIsOpen(false);
        getList();
        _customNotify("Bed space allocated successfully!");
      },
      (err) => {
        setAvailableBedModalIsOpen(false);
        _warningNotify("An error occurred");
      }
    );
  };

  return (
    <>
      {/* <BackButton /> */}
      <Card>
        <CardHeader className="h6">Patients on Pending Admission</CardHeader>
        <CardBody className="px-0">
          {loading && <Loading />}
          {/* {JSON.stringify(list)} */}
          <CustomTable size="sm" hover fields={fields} data={list} />
          {!list.length && (
            <Alert className="text-center mx-2" color="primary">
              No data found, check back later
            </Alert>
          )}

          <AvailableBeds
            selected={selectedPatient}
            availableBedModalIsOpen={availableBedModalIsOpen}
            toggle={toggle}
            availableBeds={availableBeds}
            onBedSelect={onBedSelect}
          />
        </CardBody>
      </Card>
    </>
  );
}

function AvailableBeds({
  selected = {},
  availableBedModalIsOpen = false,
  toggle = (f) => f,
  availableBeds = {},
  onBedSelect = (f) => f,
}) {
  return (
    <Modal isOpen={availableBedModalIsOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Available Bed Spaces</ModalHeader>
      <ModalBody>
        {Object.keys(availableBeds).map((bedGroup, id) => {
          return (
            <BedGroup
              type="FROM_PENDIG"
              allocateBed={onBedSelect}
              title={bedGroup}
              list={availableBeds[bedGroup]}
              key={id}
              allocatedText="Select Bed"
              // dischargePatient={dischargePatient}
            />
          );
        })}
      </ModalBody>
    </Modal>
  );
}

export default PendingAdmission;
