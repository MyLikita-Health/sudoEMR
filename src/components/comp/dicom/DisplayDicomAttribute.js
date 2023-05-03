import React from 'react'

function DisplayDicomAttribute({
  image: { parseError, sopInstanceUid, patientId, otherPatientIds },
}) {
  return (
    <div>
      <p>SOP InstanceUid: {sopInstanceUid}</p>
      {/* <p>Patient Id: {patientId}</p> */}
      {/* <p>Other Patient IDs: {otherPatientIds}</p> */}
      {parseError && parseError !== '' ? (
        <p>
          Parse Error: <span className="text-danger">{parseError}</span>
        </p>
      ) : null}
    </div>
  )
}

export default DisplayDicomAttribute
