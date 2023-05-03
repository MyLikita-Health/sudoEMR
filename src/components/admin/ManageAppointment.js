import React, { useEffect } from 'react';
import { Table, CardHeader, Row, Col, Card } from 'reactstrap';
import { RiMapPinTimeLine, RiEyeOffLine } from 'react-icons/ri';
import { BsPersonLinesFill } from 'react-icons/bs';
import { FaUserNurse } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { allAppointments } from '../../redux/actions/admin';
import moment from 'moment';

export default function ManageAppointment() {
  const dispatch = useDispatch();
  const allAppointment = useSelector((state) => state.admin.allAppointment);
  const totalAppointment = useSelector((state) => state.admin.totalAppointment);
  const totalOnline = useSelector((state) => state.admin.totalOnline);
  const totalOffline = useSelector((state) => state.admin.totalOffline);
  const totalPatientAppointment = useSelector(
    (state) => state.admin.totalPatientAppointment,
  );

  useEffect(() => {
    dispatch(allAppointments());
  }, []);

  return (
    <>
      <h3>Appointments</h3>
      <Row className="m-0 mt-3">
        <Col sm={3}>
          <Card className="p-3">
            <div className="d-flex align-items-center">
              <div>
                <RiMapPinTimeLine className="mr-2" size={40} />
                <p>All Appointment</p>
              </div>
              <div className="ml-auto">
                <h5 className="h3">{totalAppointment}</h5>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={3}>
          <Card className="p-3">
            <div className="d-flex align-items-center">
              <div>
                <BsPersonLinesFill className="mr-2" size={40} />
                <p>Online</p>
              </div>
              <div className="ml-auto">
                <h5 className="h3">{totalOnline}</h5>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={3}>
          <Card className="p-3">
            <div className="d-flex align-items-center">
              <div>
                <RiEyeOffLine className="mr-2" size={40} />
                <p>Offline</p>
              </div>
              <div className="ml-auto">
                <h5 className="h3">{totalOffline}</h5>
              </div>
            </div>
          </Card>
        </Col>
        <Col sm={3}>
          <Card className="p-3">
            <div className="d-flex align-items-center">
              <div>
                <FaUserNurse className="mr-2" size={40} />
                <p>Patient</p>
              </div>
              <div className="ml-auto">
                <h5 className="h3">{totalPatientAppointment}</h5>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Card body className="mt-3 p-0 m-2">
        <CardHeader> Appointments </CardHeader>
        <Table size="sm" striped>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Created by</th>
              <th>Doctor</th>
              <th>Time</th>
              <th>Location</th>
              <th>Created at</th>
              <th>Last updated</th>
            </tr>
          </thead>
          <tbody>
            {allAppointment.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.createdBy}</td>
                <td>{item.doctorName}</td>
                <td>{moment(item.start).format('DD-MM-YYYY hh:mm:ss a')}</td>
                <td>{item.location}</td>
                <td>{moment(item.createdAt).format('DD-MM-YYYY')}</td>
                <td>{moment(item.updatedAt).fromNow()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
