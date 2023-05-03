import moment from "moment";
import React from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
// import { FaUserTimes } from 'react-icons/fa'
import { ButtonGroup, Table } from "reactstrap";
import CustomButton from "../../comp/components/Button";
import CollapsibleCard from "../../CollapsibleCard.js";
// import CustomTable from '../../comp/components/CustomTable'
import { primaryColor } from "../../utils/constants";

export const columnStyle = { borderWidth: 1, borderColor: primaryColor };

function DrugScheduleItem({
  title,
  list,
  updateSchedule = (f) => f,
  toggleReasonModal = (f) => f,
  freq,
}) {
  //   const fields = [
  //     {
  //       title: 'Drug',
  //       component: (item) => (
  //         <span>
  //           {item.route} {item.drug_name} {item.dosage}
  //         </span>
  //       ),
  //     // },
  //     // {
  //     //   title: 'Action',
  //     //   component: (item) => (
  //     //     Button>
  //     //     </div>
  //     //   ),
  //     // },
  //   ]

  let first = list && list[0];

  return (
    <CollapsibleCard
      style={{ borderWidth: 1, borderColor: "#222" }}
      body="p-1"
      headerText={
        <h5 className="text-center">
          {moment.utc(title).format("hh:mm a")}{" "}
          {first.frequency === "STAT" ? first.frequency : ""}
        </h5>
      }
    >
      {/* {JSON.stringify(first.frequency)} */}
      {/* <div
        style={{ backgroundColor: '#aaa' }}
        className="text-center p-1 rounded"
      >
        <h5>{moment.utc(title).format('hh:mm a')}</h5>
      </div> */}
      {/* <CardHeader className='text-center py-2 font-weight-bold' style={{borderBottomWidth:1, borderColor:'#888'}}>
        <h5>{moment.utc(title).format('hh:mm a')}</h5>
      </CardHeader> */}
      {/* <CardBody className='row p-0 m-0'> */}
      {list.map((item, i) => (
        <div className="border-secondary align-items-center py-1">
          <div className="">
            {/* <h5 className='text-center font-weight-bold'>
              Patient: {item.name} ({item.patient_id})
            </h5>
            <div className='text-center font-weight-bold'>Room: {item.bed_name}</div> */}
            {/* <div className="font-weight-bold">
                Drug(s):
                {item.drugList.map((k, id) => (
                  <div key={id}>{k.drug_name}</div>
                ))}
              </div> */}
            {/* <CustomTable
              size="sm"
              bordered
              fields={fields}
              data={item.drugList}
            /> */}

            <Table size="sm" bordered>
              <thead>
                <tr>
                  <th
                    colSpan={2}
                    style={{
                      backgroundColor: primaryColor,
                      color: "#fff",
                      ...columnStyle,
                    }}
                  >
                    <span className="font-weight-normal">
                      Patient: {item.name} ({item.patient_id})
                    </span>
                    <div className="font-weight-normal">
                      Room: {item.bed_name}
                    </div>
                  </th>
                </tr>
                <tr>
                  <th className="text-center" style={columnStyle}>
                    Drug
                  </th>
                  <th className="text-center" style={columnStyle}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {item.drugList.map((item, i) => (
                  <tr
                    style={
                      item.status !== "scheduled"
                        ? { backgroundColor: "#eee", ...columnStyle }
                        : { ...columnStyle }
                    }
                  >
                    <td style={columnStyle}>
                      <span>
                        {item.route} {item.drug_name} {item.dosage}
                      </span>
                    </td>
                    <td style={columnStyle}>
                      <ActionButton
                        item={item}
                        negative={() => toggleReasonModal(item)}
                        positive={() => updateSchedule(item.id, "Served")}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      ))}

      {/* <div className="d-flex justify-content-center">
          <CustomButton outline size="sm">
            All Served
          </CustomButton>
        </div> */}
      {/* </CardBody> */}
    </CollapsibleCard>
  );
}

export function ActionButton({ positive, negative, item = {} }) {
  return (
    <div className="text-center">
      <ButtonGroup>
        <CustomButton
          outline={item.status !== "Served"}
          size="sm"
          disabled={item.status !== "scheduled"}
          onClick={positive}
        >
          {/* {item.status === "served" && <FaCheck />} */}
          <BsFillPersonCheckFill className="mr-1" /> S
        </CustomButton>
        <CustomButton
          outline={item.status !== "Not Served"}
          //   className="ml-1"
          color="info"
          size="sm"
          disabled={item.status !== "scheduled"}
          onClick={negative}
        >
          {/* <FaUserTimes className='mr-1' /> */}
          NS
        </CustomButton>
      </ButtonGroup>
    </div>
  );
}

export default DrugScheduleItem;
