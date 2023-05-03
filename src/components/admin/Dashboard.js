import React, { useState, useEffect } from 'react';
import {
  Card,
  Row,
  Col,
  CardHeader,
  CardBody,
  Table,
  FormGroup,
  Input,
} from 'reactstrap';
import { FaRegHospital, FaUser, FaUserMd } from 'react-icons/fa';
import { MdLocalPharmacy } from 'react-icons/md';
import { apiURL } from '../../redux/actions';
import MyResponsiveBar from './AdminChart';
// import Container from '../record/Container';
import { useSelector } from 'react-redux';
import { patients_db } from '../doc_dash/actions/patientsActions';
import Loading from '../loading';
import moment from 'moment';
import { _customNotify } from '../utils/helpers';

function Dashboard() {
  const [data, setData] = useState({ hospital: 0, pharmacy: 0 });
  const [docCount, setDocCount] = useState(0);
  const [patientCount, setPatientCount] = useState(0);
  const [loading, toggle] = useState(false);
  const [unApprovedUser, setUnApprovedUser] = useState([]);

  const getHospitalCount = () => {
    fetch(`${apiURL()}/facility/count`)
      .then((raw) => raw.json())
      .then((result) => {
        setData(result.counts);
      })
      .catch((err) => console.log(err));
  };

  const getDoctorsCount = () => {
    fetch(`${apiURL()}/doctors/count`)
      .then((raw) => raw.json())
      .then((result) => {
        setDocCount(result.doctors);
      });
  };

  const getPatientsCount = () => {
    patients_db
      .find({ selector: { _id: { $gte: null } } })
      .then(({ docs }) => {
        // console.log(data)
        setPatientCount(docs.length);
      })
      .catch((err) => console.log(err));
  };
  const getUnApprovedUser = () => {
    fetch(`${apiURL()}/admin/unapprovedusers`)
      .then((raw) => raw.json())
      .then((result) => {
        setUnApprovedUser(result.results);
        toggle(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getHospitalCount();
    getDoctorsCount();
    getPatientsCount();
    getUnApprovedUser();
  }, []);

  const handleActionSelectChange = async (user, value) => {
    switch (value) {
      case 'approve': {
        toggle(true);
        let userId = user.id;
        let response = await fetch(`${apiURL()}/users/approve/${userId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'aplication/json' },
        });
        let data = await response.json();
        if (data) {
          console.log(data);
          _customNotify('Data updated!');
          getUnApprovedUser();
        }
        toggle(false);
        break;
      }
      case 'suspend': {
        toggle(true);
        let userId = user.id;
        let response = await fetch(`${apiURL()}/users/suspend/${userId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'aplication/json' },
        });
        let data = await response.json();
        if (data) {
          console.log(data);
          _customNotify('Data updated!');
          getUnApprovedUser();
        }
        toggle(false);
        break;
      }
      default:
        return null;
    }
  };

  const isMobile = useSelector((state) => state.app.isMobile);

  return (
    <Row className="m-0">
      <Col sm={3}>
        <Card className="p-3">
          <div className="d-flex align-items-center">
            <div>
              <FaRegHospital className="mr-2" size={40} />
              <p>Hospitals</p>
            </div>
            <div className="ml-auto">
              <h5 className="h3">{data.hospital}</h5>
            </div>
          </div>
        </Card>
      </Col>
      <Col sm={3}>
        <Card className="p-3">
          <div className="d-flex align-items-center">
            <div>
              <FaUser className="mr-2" size={40} />
              <p>Patients</p>
            </div>
            <div className="ml-auto">
              <h5 className="h3">{patientCount}</h5>
            </div>
          </div>
        </Card>
      </Col>
      <Col sm={3}>
        <Card className="p-3">
          <div className="d-flex align-items-center">
            <div>
              <FaUserMd className="mr-2" size={40} />
              <p>Doctors</p>
            </div>
            <div className="ml-auto">
              <h5 className="h3">{docCount}</h5>
            </div>
          </div>
        </Card>
      </Col>
      <Col sm={3}>
        <Card className="p-3">
          <div className="d-flex align-items-center">
            <div>
              <MdLocalPharmacy className="mr-2" size={40} />
              <p>Pharmacies</p>
            </div>
            <div className="ml-auto">
              <h5 className="h3">{data.pharmacy}</h5>
            </div>
          </div>
        </Card>
      </Col>
      {loading && <Loading />}
      <Card body className="mt-3 p-0 m-2">
        <CardHeader> New User Registration </CardHeader>
        <Table size="sm" bordered hover striped>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Full Name</th>
              <th>Role</th>
              <th>Facility</th>
              <th>Registered</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {unApprovedUser
              .map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {item.firstname} {item.lastname}
                  </td>
                  <td>{item.role}</td>
                  <td>{item.facility}</td>
                  <td>{moment(item.createdAt).fromNow()}</td>
                  <td>
                    {' '}
                    <span
                      className={`form-control text-center text-light border-0
                    ${
                      item.status === 'approved'
                        ? 'bg-success'
                        : item.status === 'pending'
                        ? 'bg-warning'
                        : item.status === 'suspended'
                        ? 'bg-danger'
                        : 'bg-secondary'
                    }
                  `}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <FormGroup>
                      <Input
                        type="select"
                        className="mt-2"
                        onChange={(e) =>
                          handleActionSelectChange(item, e.target.value)
                        }
                      >
                        <option value="">Select Action</option>
                        <option value="approve">Approve</option>
                        <option value="suspend">Suspend</option>
                      </Input>
                    </FormGroup>
                  </td>
                </tr>
              ))
              .slice(0, 5)}
          </tbody>
        </Table>
      </Card>
      <Card
        className="m-4 "
        style={{ height: '60vh', width: isMobile ? '100vw' : '73vw' }}
      >
        <CardHeader>Chart</CardHeader>
        <CardBody>
          <MyResponsiveBar />
        </CardBody>
      </Card>
    </Row>
  );
}

export default Dashboard;
