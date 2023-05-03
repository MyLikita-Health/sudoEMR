import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import dicomParser from 'dicom-parser'
import DisplayDicomAttribute from './DisplayDicomAttribute'

function DICOMContainer({
  handleInputChange = (f) => f,
  sopInstanceUid = '',
  setSopInstanceUid = (f) => f,
}) {
  const [parseError, setParseError] = useState('')
  const [parsing, setParsing] = useState(false)
  // const [sopInstanceUid, setSopInstanceUid] = useState("");
  // const [patientId, setPatientId] = useState("");
  // const [otherPatientIds, setOtherPatientIds] = useState("");

  // const clearPage = () => {
  //   setParseError("");
  //   setSopInstanceUid("");
  //   setPatientId("");
  //   setOtherPatientIds("");
  // };

  const parseByteArray = async (byteArray) => {
    try {
      let dataset = dicomParser.parseDicom(byteArray)
      return dataset.string('x0020000d')
      // let _sopInstanceUid = dataset.string("x0020000d");
      // setSopInstanceUid(_sopInstanceUid);
      // $('#sopInstanceUid').text(sopInstanceUid)
      // let _patientId = dataset.string("x00100020");
      // if (_patientId !== undefined) {
      //   setPatientId(_patientId);
      // } else {
      //   alert("element has no patient id");
      // }
      // let _otherPatientId = dataset.string("x00101002");
      // if (_otherPatientId !== undefined) {
      //   setOtherPatientIds(_otherPatientId);
      // } else {
      //   console.log("no other patient ids");
      // }
    } catch (err) {
      return err
      // setParseError(err);
    }
  }

  const loadFiles = (files) => {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = (f) => {
      let arrayBuffer = reader.result
      let byteArray = new Uint8Array(arrayBuffer)
      parseByteArray(byteArray)
        .then((sop_id) => setSopInstanceUid(sop_id))
        .catch((e) => setParseError(e))
    }

    reader.readAsArrayBuffer(file)
  }

  const onDrop = useCallback((acceptedFiles) => {
    setParsing(true)
    // do something with the files
    handleInputChange(acceptedFiles)
    // clearPage();
    loadFiles(acceptedFiles)
  })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div>
      {parsing ? (
        <p className="text-center">Parsing, please waiting..</p>
      ) : null}
      <div
        id="dropzone"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div {...getRootProps()} className="form-group files">
          <input
            {...getInputProps()}
            className="form-control"
            style={{ padding: '120px 0px 85px 35%' }}
          />
          {isDragActive ? (
            <p>Drop files here...</p>
          ) : (
            <p>Drag & Drop some files here or click to select files</p>
          )}
        </div>
      </div>

      <DisplayDicomAttribute image={{ parseError, sopInstanceUid }} />
    </div>
  )
}

export default DICOMContainer
