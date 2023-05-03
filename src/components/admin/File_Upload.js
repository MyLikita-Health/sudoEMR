import React, { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Col,
  Row,
  FormText,
  Button,
  Label,
  FormGroup,
} from 'reactstrap'
import moment from 'moment'
// import Uploader from "./Uploader";
import { _customNotify } from '../utils/helpers'
import { apiURL } from '../../redux/actions'
import CustomTable from '../comp/components/CustomTable'
import { AiFillDelete } from 'react-icons/ai'
import { _fetchApi } from '../../redux/actions/api'
import { SET_LAB_PATIENT_LIST } from '../../redux/actions/actionTypes'
import { useDispatch } from 'react-redux'
import CustomTypeahead from '../comp/components/CustomTypeahead'
import DicomFileUpload from './DICOMFileUpload'
import CustomButton from '../comp/components/Button'
import { FaUpload } from 'react-icons/fa'
import CustomFileUploadDropzone from './CustomFileUploadDropzone'
export const today = moment().format('YYYY-MM-DD')

const _form = {
  patient_id: '',
  file_type: '',
  file_date: today,
}
export default function FileUpload() {
  const dispatch = useDispatch()
  const [form, setForm] = useState(_form)
  const [consultation, setConsultation] = useState([])
  const [doctor, setDoctor] = useState([])
  const [investigation, setInvestigation] = useState([])
  const [nurseChart, setNurseChart] = useState([])
  const [physioReview, setPhysioReview] = useState([])
  const [reports, setReports] = useState([])
  const [other, setOther] = useState([])
  const [fileList, setFileList] = useState([])
  const [data, setData] = useState([])
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState([])

  const getPendingLab = () => {
    let condition = 'Instant'
    let type = null
    _fetchApi(
      `${apiURL()}/lab/patients/${condition}/${type}`,
      (data) => {
        if (data.success) {
          setList(data.results)
          dispatch({
            type: SET_LAB_PATIENT_LIST,
            payload: data.results,
          })
        }
      },
      (err) => {
        console.log(err)
      },
    )
  }
  useEffect(() => {
    getPendingLab()
  }, [])

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({
      ...p,
      [name]: value,
    }))
  }

  const handleDelete = (index) => {
    let newArr = data.filter((it, idx) => index !== it.files_name)
    setData(newArr)
  }

  const handleAdd = () => {
    if (form.file_type === '') {
      alert('Please choose the file type')
    } else {
      for (let index = 0; index < fileList.length; index++) {
        const element = fileList[index].name

        // console.log(files[0]);
        setData((p) => [
          ...p,
          {
            ...form,
            files_name: element,
          },
        ])
      }
      setForm((p) => ({ ...p, file_type: '', files_name: '' }))
      // setKYCInfo((p) => ({ ...p, file_typ

      // console.log("New Arrrrrr:", newArr);
    }
    console.log('Old arrr', data)
  }
  const { patient_id, file_type, file_date } = form

  const submitFiles = (fileType, fileList) => {
    let formdata = new FormData()
    for (let i = 0; i < fileList.length; i++) {
      formdata.append('files', fileList[i])
    }
    formdata.append('patient_id', patient_id)
    formdata.append('file_type', fileType)
    formdata.append('file_date', file_date)
    // formdata.append()

    fetch(`${apiURL()}/upload-files`, {
      method: 'POST',
      body: formdata,
    })
      .then((raw) => raw.json())
      .then((data) => {
        console.log(data)
        _customNotify('File Uploaded successfully')
        // setForm(_form);
      })
      .catch((e) => console.log(e))
  }

  const handleSubmit = (_files, _allFiles) => {
    setLoading(true)
    if (files.length) {
      submitFiles(
        file_type,
        files,
        _allFiles.forEach((a) => a.remove()),
      )
      setForm({
        patient_id: '',
        file_type: '',
        file_date: today,
      })
    }
    // if (consultation.length) {
    //   submitFiles('Consultation', consultation)
    // }
    // if (doctor.length) {
    //   submitFiles('Doctor', doctor)
    // }
    // if (investigation.length) {
    //   submitFiles('Investigation', investigation)
    // }
    // if (nurseChart.length) {
    //   submitFiles('Nurse Chart', nurseChart)
    // }

    // if (physioReview.length) {
    //   submitFiles('Physio Review', physioReview)
    // }
    // if (reports.length) {
    //   submitFiles('Reports', reports)
    // }
    // if (other.length) {
    //   submitFiles('Other', other)
    // }
    setData([])
    setLoading(false)
  }

  // const handleImageAdd = ({ target: { files } }) => {
  const handleImageAdd = (files) => {
    console.log(files)
    setFiles((p) => [...p, files])

    // console.log(files, file, "YYYYYYYYYYYY");
    // setFiles(e.target.files);
    // setFileList(Object.values(files))
    // if (file_type === 'Consultation') {
    //   setConsultation((p) => [...p, ...files])
    // } else if (file_type === 'Doctor') {
    //   setDoctor((p) => [...p, ...files])
    // } else if (file_type === 'Investigation') {
    //   setInvestigation((p) => [...p, ...files])
    // } else if (file_type === 'Nurse Chart') {
    //   setNurseChart((p) => [...p, ...files])
    // } else if (file_type === 'Physio Review') {
    //   setPhysioReview((p) => [...p, ...files])
    // } else if (file_type === 'Reports') {
    //   setReports((p) => [...p, ...files])
    // } else {
    //   setOther((p) => [...p, ...files])
    // }
    // console.log(consultation, "Consultation..........");
  }

  const fields = [
    {
      title: 'File Name',
      value: 'files_name',
    },
    {
      title: 'File Type',
      value: 'file_type',
    },
    {
      title: 'Action',
      custom: true,
      className: 'text-center',
      component: (item) => (
        <>
          <Button
            size="sm"
            onClick={() => handleDelete(item.files_name)}
            color="danger"
          >
            <AiFillDelete />
          </Button>
        </>
      ),
    },
  ]

  const formIsValid =
    form.patient_id &&
    form.patient_id !== '' &&
    form.file_type &&
    form.file_type !== ''

  return (
    <>
      <Card>
        {/* {JSON.stringify(consultation)} */}
        <CardHeader className="h5 text-center">File Uploader</CardHeader>
        <CardBody>
          <Row className="p-0 m-0 mb-5">
            <Col md={4}>
              <CustomTypeahead
                label="Patient ID"
                labelKey={(i) => `${i.name} (${i.id})`}
                options={list}
                onChange={(s) => {
                  if (s.length) {
                    setForm((p) => ({
                      ...p,
                      patient_id: s[0].id,
                      name: s[0].name,
                    }))
                  }
                }}
              />
            </Col>
            <Col md={4}>
              <label>File Type</label>
              <Input
                type="select"
                name="file_type"
                value={file_type}
                onChange={handleChange}
              >
                <option>---select---</option>
                <option value="Consultation">Consultation</option>
                <option value="Doctor">Doctor</option>
                <option value="Investigation">Investigation</option>
                <option value="Nurse">Nurse Chart</option>
                <option value="Physio">Physio Review</option>
                <option value="Reports">Reports</option>
                <option value="DICOM">DICOM</option>
                <option value="Others">Others</option>
              </Input>
            </Col>
            <Col md={4}>
              <label>Date</label>
              <Input
                type="Date"
                name="file_date"
                value={file_date}
                onChange={handleChange}
              />
            </Col>
          </Row>

          {file_type === 'DICOM' ? (
            <DicomFileUpload
              form={form}
              success={() => {
                _customNotify('File Uploaded successfully')
                setData([])
              }}
            />
          ) : (
            <CustomFileUploadDropzone
              onChange={handleImageAdd}
              onSubmit={handleSubmit}
              disabled={!formIsValid}
            />
            // <OtherDetails
            //   handleAdd={handleAdd}
            //   handleImageAdd={handleImageAdd}
            //   data={data}
            //   fields={fields}
            //   handleSubmit={handleSubmit}
            //   loading={loading}
            //   fileList={fileList}
            // />
          )}
        </CardBody>
      </Card>
    </>
  )
}

function OtherDetails({
  handleAdd,
  handleImageAdd,
  data,
  fields,
  handleSubmit,
  loading = false,
  fileList,
}) {
  return (
    <>
      {/* <Col sm={10}>
        <Label>
          <FaUpload size={30} />
          {fileList && fileList.length && fileList[0].name}
          <Input
            type="file"
            name="file"
            id="exampleFile"
            multiple
            onChange={handleImageAdd}
            className="p-2"
            style={{ width: "100%" }}
          />
        </Label>
        <FormText color="muted">
          You can upload all your files here, NOTE: you can upload more than one
          file at a time.
        </FormText>
      </Col> */}

      <CustomFileUploadDropzone onChange={handleImageAdd} />
      <center>
        <Button className="m-2" onClick={handleAdd}>
          Click to add
        </Button>
      </center>
      <CustomTable size="sm" data={data} fields={fields} bordered striped />
      <center>
        <CustomButton
          color="primary"
          size="md"
          className="mt-3"
          onClick={handleSubmit}
          loading={loading}
        >
          Submit
        </CustomButton>
      </center>
    </>
  )
}
