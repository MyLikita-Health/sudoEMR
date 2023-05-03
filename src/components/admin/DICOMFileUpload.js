import axios from 'axios'
import React, { useState } from 'react'
import { Progress } from 'reactstrap'
import { apiURL, DICOM_SERVER } from '../../redux/actions'
import { _postApi } from '../../redux/actions/api'
import DICOMContainer from '../comp/dicom/DICOMContainer'
import CustomButton from '../comp/components/Button'
import { _customNotify } from '../utils/helpers'

function DicomFileUpload({ form = {}, success=f=>f }) {
  const [uploading, setUploading] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [loaded, setLoaded] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [sopInstanceUid, setSopInstanceUid] = useState('')

  const handleInputChange = (files) => {
    // console.log(files);
    // if (isDicomFile(event)) {
    setSelectedFiles(files)
    // }
    // setLoaded(0);
  }

  const updateTestWithDicom = (cb) => {
    _postApi(
      `${apiURL()}/dicom/save-dicom-files`,
      {
        patient_name: form.name,
        patient_id: form.patient_id,
        sop_intance_id: sopInstanceUid,
      },
      (data) => {
        cb(data)
        // _customNotify('Update successful')
      },
      (err) => {
        console.log(err)
      },
    )
  }

  const progressivelyUpload = () => {
    setUploading(true)

    const data = new FormData()
    // data.append("files", selectedFiles);
    for (let v = 0; v < selectedFiles.length; v++) {
      data.append('files', selectedFiles[v])
    }

    axios
      .post(`https://yge.wvi.mybluehost.me/test/dicomweb-server/studies`, data, {
        onUploadProgress: (ProgressEvent) => {
          setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100)
        },
      })
      .then((resp) => {
        console.log('resp', resp)
        updateTestWithDicom(() => {
          setIsComplete(true)
          setUploading(false)
          success()
            // _customNotify('Upload Success!')
          // console.log(resp);
          //   history.push('/me/lab/radiology-analysis-scan/new')
          //   dispatch(refreshPendingList(RADIOLOGY_SAMPLE_SCAN))
          //   dispatch(refreshHistoryList(RADIOLOGY_SAMPLE_SCAN))
        })
      })
      .catch((err) => {
        console.log('err', err)
        setUploading(false)
        console.log(err)
        // _warningNotify('Upload failed!')
      })
  }

  return (
    <div>
      <DICOMContainer
        sopInstanceUid={sopInstanceUid}
        setSopInstanceUid={(val) => setSopInstanceUid(val)}
        handleInputChange={handleInputChange}
      />

      <div className="mb-1">
        <Progress
          max="100"
          color={loaded === 100 && isComplete ? 'success' : 'primary'}
          value={loaded}
        >
          {Math.round(loaded)}%
        </Progress>
      </div>

      {/* {JSON.stringify(form)} */}

      <center>
        <CustomButton loading={uploading} onClick={progressivelyUpload}>
          Upload now
        </CustomButton>
      </center>
    </div>
  )
}

export default DicomFileUpload
