import React from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { apiURL, DICOM_CLIENT_WEB_URL } from '../../../../redux/actions'
import { _fetchApiGeneral } from '../../../../redux/actions/api'
import CustomButton from '../../../comp/components/Button'
import CustomTable from '../../../comp/components/CustomTable'
import Loading from '../../../comp/components/Loading'

function DICOMList() {
  const { patientId } = useParams()
  const [fileList, setFileList] = useState([])
  const [loading, setLoading] = useState(false)

  const getList = useCallback(() => {
    _fetchApiGeneral(
      `${apiURL()}/dicom/patient-dicom-list?patient_id=${patientId}`,
      (d) => {
        setLoading(false)
        if (d && d.results) {
          setFileList(d.results)
        }
      },
      (e) => {
        setLoading(false)
        console.log(e)
      },
    )
  }, [patientId])

  useEffect(() => getList(), [getList])

  const openViewer = (item) => {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=1000,height=1000,left=-500,top=350`
    window.open(
      `${DICOM_CLIENT_WEB_URL}/viewer/${item.sop_intance_id}`,
      'DICOM Viewer',
      params,
    )
  }

  return (
    <div>
      <h4 className="text-center my-3">DICOM FILES FOR PATIENT {patientId}</h4>

      {loading && <Loading size="sm" />}

      {/* {JSON.stringify(fileList)} */}
      <CustomTable
        size="sm"
        bordered
        fields={[
          { title: 'Date Recorded', value: 'date_recorded' },
          { title: 'Instance UID', value: 'sop_intance_id' },
          {
            title: 'Action',
            custom: true,
            component: (i) => (
              <div className='text-center'>
                <CustomButton onClick={() => openViewer(i)}>View</CustomButton>
              </div>
            ),
          },
        ]}
        data={fileList}
      />

      {fileList.length ? null : (
        <h5>No DICOM Data uploaded at this time, please check back later</h5>
      )}
    </div>
  )
}

export default DICOMList
