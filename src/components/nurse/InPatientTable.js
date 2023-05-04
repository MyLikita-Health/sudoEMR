import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Button } from "reactstrap";
import { useQuery } from "../../hooks";
import { apiURL } from "../../redux/actions";
import { _postApi } from "../../redux/actions/api";
import { getInPatients } from "../../redux/actions/records";
// import { getAllPatientTrans } from "../account/helpers";
// import BackButton from "../comp/components/BackButton";
import CustomTable from "../comp/components/CustomTable";
import Loading from "../comp/components/Loading";
// import CollapsibleCard from "../lab/NewLaboratory/CollapsibleCard";
import {
  generateReceiptNo,
  _customNotify,
  _warningNotify,
} from "../utils/helpers";
import DischargeWarningModal from "./in-patients/DischargePatientWarningModal";
import CollapsibleCard from "../CollapsibleCard.js";

function InPatientTable() {
  const query = useQuery();
  const patient_id = query.get("patient_id");
  const location = useLocation();
  const history = useHistory();
  const isRecords = location.pathname.includes("records");
  const isDoctor = location.pathname.includes("doctor");
  const isNursing = location.pathname.includes("nurse");
  const [drugConsumed, ] = useState([]);
  const [testTaken, ] = useState([]);
  // const [display, setDisplay] = useState(false);

  const isSelected = (id) => patient_id === id;

  const getRowStyles = (item) => {
    if (isSelected(item.patient_id)) {
      return {
        backgroundColor: "#ccc",
      };
    } else {
      return {};
    }
  };

  const recordsModuleOption = [
    {
      title: "Discharge",
      custom: true,
      component: (item) => (
        <div className="text-center">
          <Button
            size="sm"
            color="info"
            onClick={() => {
              dischargePatient(item);
              // getAllPatientTrans(
              //   item.patient_id,
              //   moment(item.allocated).format("YYYY-MM-DD"),
              //   today,
              //   "drug",
              //   (data) => {
              //     setDrugConsumed(data);
              //   },
              //   (err) => console.log(err)
              // );
              // getAllPatientTrans(
              //   item.patient_id,
              //   moment(item.allocated).format("YYYY-MM-DD"),
              //   today,
              //   "test",
              //   (data) => {
              //     setTestTaken(data);
              //   },
              //   (err) => console.log(err)
              // );
              // alert(JSON.stringify(item));
            }}
          >
            Discharge
          </Button>
        </div>
      ),
    },
  ];

  const nursingModuleOptions = [
    {
      title: "Action",
      custom: true,
      component: (item) => (
        <div className="text-center">
          <Button
            color="success"
            size="sm"
            onClick={() => {
              history.push(
                `/me/nurse/nursing-requests/${item.patient_id}?page_type=preview&patient_id=${item.patient_id}&allocation_id=${item.allocation_id}&page_type=preview`
              );
              // history.push(
              //   `${NURSING_ROUTE_ROOT}/vital-signs/new-vitals?patient_id=${item.patient_id}&allocation_id=${item.allocation_id}`,
              // )
            }}
          >
            View Details
          </Button>
        </div>
      ),
    },
    // {
    //   title: 'Drug Schedule',
    //   custom: true,
    //   component: (item) => (
    //     <div className="text-center">
    //       <Button
    //         color="warning"
    //         size="sm"
    //         onClick={() => {
    //           history.push(
    //             `${NURSING_ROUTE_ROOT}/drug-schedule/view?patient_id=${item.patient_id}&allocation_id=${item.allocation_id}`,
    //           )
    //         }}
    //       >
    //         Drug Schedule
    //       </Button>
    //     </div>
    //   ),
    // },
    // {
    //   title: 'Nursing Request',
    //   custom: true,
    //   component: (item) => (
    //     <div className="text-center">
    //       <Button
    //         size="sm"
    //         color="info"
    //         onClick={() => {
    //           history.push(
    //             `${NURSING_ROUTE_ROOT}/vital-signs/nursing-dressing-requests?patient_id=${item.patient_id}&allocation_id=${item.allocation_id}`,
    //           )
    //         }}
    //       >
    //         Nursing Request
    //       </Button>
    //     </div>
    //   ),
    // },
  ];

  const doctorsModuleOptions = [
    {
      title: "Review Patient",
      custom: true,
      component: (item) => (
        <div className="text-center">
          <Button
            color="primary"
            size="sm"
            onClick={() => {
              history.push(
                `/me/doctor/visits/new-summary/${item.patient_id}`
                // }/history/presentingcomplaints`
                // `/me/doctor/patients/view/${item.patient_id}/diagnoses`
              );
            }}
          >
            Review Patient
          </Button>
        </div>
      ),
    },
    {
      title: "View Notes",
      custom: true,
      component: (item) => (
        <div className="text-center">
          <Button
            size="sm"
            color="info"
            onClick={() => {
              history.push(
                `/me/doctor/patients/view/${item.patient_id}/diagnoses`
              );
            }}
          >
            View Patient's notes
          </Button>
        </div>
      ),
    },
  ];

  const otherOptions = isRecords
    ? recordsModuleOption
    : isNursing
    ? nursingModuleOptions
    : isDoctor
    ? doctorsModuleOptions
    : null;

  const fields = [
    {
      title: "Date Admitted",
      custom: true,
      component: (item) => (
        <span>{moment.utc(item.allocated).format("DD/MM/YYYY")}</span>
      ),
      active: (item) => isSelected(item.patient_id),
    },
    // { title: 'Patient ID', value: 'patient_id', className: 'text-center' },
    {
      title: "Name",
      component: (item) => (
        <span>
          {item.patient_name} ({item.patient_id})
        </span>
      ),
      active: (item) => isSelected(item.patient_id),
    },
    {
      title: "Room",
      value: "name",
      active: (item) => isSelected(item.patient_id),
    },
    ...otherOptions,
  ];

  const [dischargeWarningIsOpen, setDischargeWarningOpen] = useState(false);
  const [selectedAllocation, setSelectedAllocation] = useState({});
  const [bill, setBill] = useState({});
  const [discharging, setDischarging] = useState(false);
  const toggleDischargeModal = () => setDischargeWarningOpen((p) => !p);

  const dischargePatient = (allocation) => {
    setSelectedAllocation(allocation);
    setDischargeWarningOpen(true);

    // let data = [];
    let startDate = moment(allocation.allocated);
    let today = moment();
    let noOfDays = moment(today).diff(startDate, "days");
    let totalAmount = noOfDays * parseFloat(allocation.price);
    // console.log(noOfDays);
    // for (let i = 0; i <= noOfDays; i++) {
    //   data.push({
    //     date: moment
    //       .utc(startDate)
    //       .add(i, "days")
    //       .format("DD-MM-YYYY"),
    //     description: allocation.name,
    //     amount: allocation.price,
    //   });
    // }

    // console.log(allocation, data);
    let data = {
      noOfDays,
      totalAmount,
      description:
        "Admission in " + allocation.name + " for " + noOfDays + " days",
    };

    setBill(data);
  };

  const completeDischarge = () => {
    setDischarging(true);
    generateReceiptNo((receiptsn, receiptno) => {
      // bill.forEach((item, i) => {
      _postApi(
        `${apiURL()}/transactions/new-service/from-deposit`,
        {
          amount: bill.totalAmount,
          modeOfPayment: "deposit",
          source: "",
          destination: "",
          description: bill.description,
          receiptsn,
          receiptno,
          patientId: selectedAllocation.patient_id,
          debit: selectedAllocation.accountNo,
          credit: selectedAllocation.account,
          bank: "",
          transaction_source: selectedAllocation.accountNo,
          transaction_date: moment.utc().format("YYYY-MM-DD"),
          discount: "",
        },
        () => {
          _postApi(
            `${apiURL()}/beds/allocation`,
            {
              allocation_id: selectedAllocation.allocation_id,
              query_type: "discharge",
              timeAllocated: moment.utc().format("YYYY-MM-DD hh:mm:ss"),
            },
            () => {
              setDischargeWarningOpen(false);
              setDischarging(false);
              _customNotify("Patient discharged! Bed space now available.");
              _getInPatients();
            },
            () => {
              setDischargeWarningOpen(false);
              setDischarging(false);
              _warningNotify("An error occured, please try again later.");
            }
          );
        }
      );

      // if (i === bill.length - 1) {

      // }
      // });
    });
  };

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const list = useSelector((state) => state.records.inPatientsList);
  // const facilityId = useSelector((state) => state.auth.user.facilityId);
  const _getInPatients = useCallback(() => {
    setLoading(true);
    dispatch(getInPatients(() => setLoading(false)));
  }, [dispatch]);

  useEffect(() => {
    _getInPatients();
  }, [_getInPatients]);

  return (
    <CollapsibleCard
      defaultOpen
      headerText="List of In-Patients"
      style={{ padding: 0 }}
    >
      {/* <Card className="my-1">
        <CardHeader className="h5">List of In-Patients</CardHeader>
        <CardBody className="px-0"> */}
      {loading && <Loading />}
      {/* {JSON.stringify({ drugConsumed })} */}
      {!dischargeWarningIsOpen ? (
        <div style={{ height: "80vh", overflow: "scroll" }}>
          <CustomTable
            bordered
            size="sm"
            hover
            fields={fields}
            data={list}
            rowStyles={getRowStyles}
          />
        </div>
      ) : (
        <DischargeWarningModal
          loading={discharging}
          selectedAllocation={selectedAllocation}
          toggle={toggleDischargeModal}
          bill={bill}
          completeDischarge={completeDischarge}
          drugConsumed={drugConsumed}
          testTaken={testTaken}
        />
      )}
      {/* </CardBody>
      </Card> */}
    </CollapsibleCard>
  );
}

export default InPatientTable;
