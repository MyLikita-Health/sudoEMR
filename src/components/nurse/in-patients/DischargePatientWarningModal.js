import moment from "moment";
import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";
import { CustomTable } from "../../comp/components";
import CustomButton from "../../comp/components/Button";
import PrintWrapper from "../../comp/components/print/PrintWrapper";
import { formatNumber } from "../../utils/helpers";

function DischargeWarningCard({
  toggle = (f) => f,
  selectedAllocation = {},
  completeDischarge = (f) => f,
  bill = [],
  loading = false,
  drugConsumed = [],
  testTaken = [],
}) {
  const fields = [
    {
      title: "S/N",
      custom: true,
      component: (item, i) => <div>{i + 1}</div>,
    },
    { title: "Description", value: "description" },
    { title: "Reference no.", value: "reference_no" },
    {
      title: "Amount",
      custom: true,
      component: (item) => (
        <div className="text-right">{formatNumber(item.dr || 0)}</div>
      ),
    },
    {
      title: "Date",
      custom: true,
      component: (item) => (
        <div>{moment(item.createdAt).format("DD-MM-YYYY")}</div>
      ),
    },
  ];
  const _fields = [
    {
      title: "S/N",
      custom: true,
      component: (item, i) => <div>{i + 1}</div>,
    },
    { title: "Test Name", value: "description" },
    {
      title: "Amount",
      custom: true,
      component: (item) => (
        <div className="text-right">{formatNumber(item.cr || 0)}</div>
      ),
    },
    {
      title: "Date",
      custom: true,
      component: (item) => (
        <div>{moment(item.createdAt).format("DD-MM-YYYY")}</div>
      ),
    },
  ];
  const printBill = () => {
    window.frames[
      "print_frame"
    ].document.body.innerHTML = document.getElementById(
      "bill_container"
    ).innerHTML;
    window.frames["print_frame"].window.focus();
    window.frames["print_frame"].window.print();
  };
  const [drop, setDrop] = useState(true);
  const [drops, setDrops] = useState(true);
  const dropDown = () => {
    setDrop(!drop);
  };
  const dropDowns = () => {
    setDrops(!drops);
  };
  const drugTotal = drugConsumed.reduce(
    (item, idx) => item + parseFloat(idx.dr),
    0
  );
  const testTakenTotal = testTaken.reduce(
    (item, idx) => item + parseFloat(idx.cr),
    0
  );

  const lastTotal =
    parseFloat(bill.totalAmount) +
    parseFloat(drugTotal) +
    parseFloat(testTakenTotal);

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between">
        <Button onClick={toggle} size="sm" color="primary">
          {"<- Go Back"}
        </Button>
        <div>Discharge Confirmation</div>
      </CardHeader>
      <CardBody>
        <div id="bill_container">
          <style>
            {`@media print {
                .row {
                  display: flex;
                  flex-direction: row;
                }
                .col-md-4 {
                  width: 40%;
                }
                .col-md-6 {
                  width: 60%;
                }
                .text-right {
                    text-align: right;
                }
                .text-center {
                    text-align: center;
                }
                .font-weight-bold {
                    font-weight: bold;
                }
                .print-start{
                    margin: 2em;
                    margin-top: 4em;
                }
                .print-only{
                  display: block;
                }
            }

            @media screen {
              .print-only{
                display: none;
              } 
           }   
          `}
          </style>

          <PrintWrapper title="Patient Admission Bill">
            <div className="row">
              <div className="col-md-4">
                <div className="my-1">Patient:</div>
                <div className="my-1">Room description:</div>
                <div className="my-1">Room Cost (per day):</div>
                <div className="my-1">Total Number of days:</div>
                <div className="my-1">Total Cost of Admission:</div>
                <div className="my-1">Date Admitted:</div>
                <div className="my-1">Date Discharged:</div>
              </div>
              <div className="col-md-8">
                <div className="my-1">
                  {selectedAllocation.patient_name} (
                  {selectedAllocation.patient_id})
                </div>
                <div className="my-1">
                  {selectedAllocation.name} ({selectedAllocation.class_type})
                </div>
                <div className="my-1">
                  ₦{formatNumber(selectedAllocation.price) || 0}
                </div>
                <div className="my-1">
                  {bill.noOfDays} {parseInt(bill.noOfDays) > 1 ? "days" : "day"}
                </div>
                <div className="my-1">₦{formatNumber(lastTotal) || "0"}</div>
                <div className="my-1">
                  {moment
                    .utc(selectedAllocation.allocated)
                    .format("DD/MM/YYYY hh:mm")}
                </div>
                <div className="my-1">
                  {moment.utc().format("DD/MM/YYYY hh:mm")}
                </div>
              </div>
            </div>
            {/* {JSON.stringify(testTakenTotal)} */}
            <div
              className="d-flex justify-content-between"
              onClick={dropDown}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                fontWeight: "bold",
                marginTop: "8px",
              }}
            >
              <div style={{ cursor: "pointer" }}>
                {!drop ? (
                  <MdArrowDropDown className="text-primary font-weight-bold" />
                ) : (
                  <MdArrowDropUp className="text-primary font-weight-bold" />
                )}
                Medicine Consumed
              </div>
              <div>Total Medicine Consumed: {formatNumber(drugTotal || 0)}</div>
            </div>
            {drugConsumed.length && drop && (
              <CustomTable
                bordered
                size="sm"
                hover
                fields={fields}
                data={drugConsumed}
              />
            )}
            <div
              // className="d-flex justify-content-between"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                fontWeight: "bold",
                marginTop: "8px",
              }}
              onClick={dropDowns}
            >
              <div style={{ cursor: "pointer" }}>
                {!drops ? (
                  <MdArrowDropDown className="text-primary" />
                ) : (
                  <MdArrowDropUp className="text-primary" />
                )}
                Lab Tests
              </div>
              <div>Total Lab Test: {formatNumber(testTakenTotal || 0)}</div>
            </div>
            {testTaken.length && drops && (
              <CustomTable
                bordered
                size="sm"
                hover
                fields={_fields}
                data={testTaken}
              />
            )}
            <div
              className="d-flex justify-content-between"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                fontWeight: "bold",
                marginTop: "8px",
              }}
            >
              <div>Grand Total</div>
              <div>{formatNumber(lastTotal || 0)}</div>
            </div>
          </PrintWrapper>
        </div>

        <iframe
          title="print_admission_bill"
          name="print_frame"
          width="0"
          height="0"
          src="about:blank"
        />

        {/* <div className="my-1">
          <h6>Billing Information</h6>
          <CustomTable fields={fields} data={bill} size="sm" bordered />
        </div> */}
        {/* {JSON.stringify(bill)} */}
      </CardBody>
      <CardFooter>
        <CustomButton color="success" onClick={printBill} className="mx-2">
          Print Bill
        </CustomButton>
        <CustomButton loading={loading} onClick={completeDischarge}>
          Proceed
        </CustomButton>
      </CardFooter>
    </Card>
  );
}

export default DischargeWarningCard;
