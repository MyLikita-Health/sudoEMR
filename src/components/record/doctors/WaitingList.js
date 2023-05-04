import React from 'react'
import { Alert, Table } from 'reactstrap'
// import Loading from '../../comp/components/Loading'
import { FaTimes } from 'react-icons/fa'

function WaitingList({
  list = [],
  loading = false,
  type = 'waiting',
  undoPatientAssignment = (f) => f,
}) {
  const isWaiting = type === 'waiting'
  // if (loading) return <Loading />;
  // if (list.length) {
  return (
    <div>
      {/* {loading} */}
      {list.length ? (
        <Table striped bordered hover size="sm" className="mt-1">
          <thead>
            <tr>
              <th className="text-center">Patient</th>
              {isWaiting ? null : <th className="text-center">Doctor</th>}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, i) => (
              <tr key={i}>
                <td>
                  {item.name} ({item.id})
                </td>
                {isWaiting ? null : <td>{item.doctorName}</td>}
                <td
                  onClick={() => {
                    undoPatientAssignment(item)
                  }}
                  className="text-right"
                  style={{ cursor: 'pointer' }}
                >
                  <span title="Remove">
                    <FaTimes className="text-danger" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
      {!list.length ? (
        <Alert className="text-center my-2">List is empty</Alert>
      ) : null}
    </div>
  )
  // } else {
  //   return <Alert className="text-center my-2">List is empty</Alert>;
  // }
}

export default WaitingList
