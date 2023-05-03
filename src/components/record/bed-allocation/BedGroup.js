import React from "react";
import { FaBed } from "react-icons/fa";
import { Table, Button, Badge } from "reactstrap";
import { formatNumber } from "../../utils/helpers";

function BedGroup({
  title = "",
  list = [],
  allocateBed = (f) => f,
  allocatedText = "Allocate",
  //   dischargePatient = (f) => f,
}) {
  return (
    <div>
      <h6>{title}</h6>
      <Table size="sm" bordered>
        <thead>
          <tr>
            <th className="text-center">Bed</th>
            <th className="text-center">Price</th>
            <th className="text-center">Current status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((bed, i) => (
            <tr key={i}>
              <td>{bed.name}</td>
              <td className="text-right">{formatNumber(bed.price)}</td>
              <td className="text-center">
                {bed.occupied}/{bed.no_of_beds} occupied
              </td>
              <td className="text-center">
                {/*<Button 
                    size="sm"
                    color="success"
                    className='mr-1'
                  >
                    <FaEdit size={18} className="mr-1" />
                    Edit
                  </Button>*/}
                {bed.occupied < bed.no_of_beds ? (
                  <Button
                    onClick={() => allocateBed(bed)}
                    size="sm"
                    color="warning"
                  >
                    <FaBed size={18} className="mr-1" />
                    {allocatedText}
                  </Button>
                ) : (
                  <Badge className="p-1">Not available</Badge>
                )}

                {/* {
                    bed.occupied > 0 ? <Button 
                    size="sm"
                    color="info"
                    className='ml-1'
                    onClick={() => dischargePatient(bed)}
                  >
                    Discharge
                  </Button> : null
                  } */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BedGroup;
