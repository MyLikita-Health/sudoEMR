import React, { useCallback, useState } from 'react'
import { Alert, Card, Table } from 'reactstrap'
import moment from 'moment'
import { useHistory } from 'react-router'
import { useEffect } from 'react'
import Scrollbars from 'react-custom-scrollbars'
import Loading from '../../comp/components/Loading'
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaHourglass,
  FaPlus,
} from 'react-icons/fa'
import { _fetchApi, _fetchApi2 } from '../../../redux/actions/api'
import { apiURL } from '../../../redux/actions'
import { DOCTOR_LAB_ROUTE } from '.'
import DaterangeSelector from '../../comp/components/DaterangeSelector'
import { useSelector } from 'react-redux'
import SearchBar from '../../record/SearchBar'

function AllLabRequests() {
  const facility = useSelector((state) => state.facility.info)
  const tomorrow = moment().add(1, 'day').format('YYYY-MM-DD')
  const aMonthAgo = moment().subtract(1, 'month').format('YYYY-MM-DD')
  const [loading, toggleLoading] = useState(false)
  const [list, setList] = useState([])
  const [range, setRange] = useState({
    from: aMonthAgo,
    to: tomorrow,
  })
  const [searchTerm, setSearchTerm] = useState('')

  const handleRangeChange = ({ target: { name, value } }) =>
    setRange((p) => ({ ...p, [name]: value }))

  const history = useHistory()
  //   const dispatch = useDispatch();

  //   const lablist = useSelector((state) => state.individualDoc.labTests);

  const getCompletedLabTests = useCallback(() => {
    toggleLoading(true)
    _fetchApi2(
      `${apiURL()}/lab/completed-lab-tests/${facility.facility_id}?from=${
        range.from
      }&to=${range.to}`,
      (data) => {
        toggleLoading(false)
        if (data.success) {
          setList(data.results)
        }
      },
      (err) => {
        toggleLoading(false)
        console.log(err)
      },
    )
  }, [range, facility])

  useEffect(() => {
    //
    // dispatch(getLabList(() => toggleLoading(false)));
    getCompletedLabTests()
  }, [getCompletedLabTests])

  let rows = []
  list.forEach((item) => {
    if (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) return
    rows.push(item)
  })

  return (
    <>
      <div className="d-flex justify-content-end mb-1 mt-1">
        <button
          className="btn btn-outline-dark"
          onClick={() => history.push('/me/doctor/labs/new')}
        >
          <FaPlus size={20} className="mr-1" /> New Lab Request
        </button>
      </div>
      <Card body>
        <Scrollbars style={{ height: '75vh' }}>
          {loading ? <Loading /> : null}
          <h5>All Lab Requisitions</h5>
          <DaterangeSelector
            from={range.from}
            to={range.to}
            handleChange={handleRangeChange}
          />
          <SearchBar
            placeholder="Search for test by patient"
            filterText={searchTerm}
            onFilterTextChange={(v) => setSearchTerm(v)}
          />
          <Table hover>
            <thead>
              <tr>
                {/* <th>S/N</th> */}
                <th>Lab Code</th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Requested On</th>
                <th>Last updated</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item, index) => (
                <tr
                  key={index}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    if (item.completed === item.tests) {
                      history.push(
                        `${DOCTOR_LAB_ROUTE}/view/${item.patient_id}/${item.booking_no}`,
                      )
                    } else {
                      history.push(
                        `${DOCTOR_LAB_ROUTE}/uncompleted/${item.patient_id}/${item.booking_no}`,
                      )
                    }
                  }}
                >
                  {/* <td>{index + 1}</td> */}
                  <td>{item.booking_no}</td>
                  <td>{item.patient_id}</td>
                  <td>{item.name}</td>
                  <td>{moment(item.created_at).calendar()}</td>
                  <td>{moment(item.updatedAt).calendar()}</td>
                  <td className="text-center">
                    {/* {item.completed}/{item.tests}  */}
                    {item.analyzed === item.tests ? (
                      <FaCheckCircle color="green" />
                    ) : (
                      <FaExclamationCircle color="orange" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* {JSON.stringify(list)} */}

          {!list.length ? (
            <Alert className="text-center">
              Nothing to display here, check back later.
            </Alert>
          ) : null}
        </Scrollbars>
      </Card>
    </>
  )
}

export default AllLabRequests
