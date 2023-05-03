import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FcInspection } from 'react-icons/fc';
import { MdLocationOn } from 'react-icons/md';
import { FaRegCalendarCheck } from 'react-icons/fa';

function DoctorList({ list = [], filterTerm = '' }) {
  const rows = [];

  list.forEach((item, index) => {
    if (
      item.firstname.toLowerCase().indexOf(filterTerm.toLowerCase()) === -1 &&
      item.lastname.toLowerCase().indexOf(filterTerm.toLowerCase()) === -1 &&
      item.address.toLowerCase().indexOf(filterTerm.toLowerCase()) === -1 &&
      item.speciality.toLowerCase().indexOf(filterTerm.toLowerCase()) === -1
    ) {
      return;
    }

    rows.push(<DocItem item={item} key={index} />);
  });

  return rows;
}

function DocItem({ item }) {
  return (
    <div class="card m-2" style={{ maxWidth: '420px' }}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={item.image}
            alt="doc-avatar"
            className="img-fluid"
            // style={{ maxWidth: '150px' }}
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {item.firstname} {item.lastname}
            </h5>

            {item.speciality !== '' ? (
              <p class="card-text">
                <FcInspection className="mr-2" size={20} />
                {item.speciality}
              </p>
            ) : null}
            {item.address !== '' ? (
              <p class="card-text">
                <MdLocationOn className="mr-2" size={20} />
                {item.address}
              </p>
            ) : null}
            <Link
              className="btn btn-primary"
              to={`/user/appointments/new/${item.id}`}
            >
              <FaRegCalendarCheck className="mr-2" size={20} />
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorList;

// old item component
// eslint-disable-next-line no-unused-vars
function Item({ index, item }) {
  return (
    <Col md={3} key={index}>
      <Card className="mb-3 align-items-center">
        <CardImg
          top
          // width="100%"
          style={{ height: 150, width: 150 }}
          src={require('../../../images/docAvater.png')}
          alt="doc-avatar"
        />
        <CardBody>
          <CardTitle className="font-weight-bold">
            {item.firstname} {item.lastname}
          </CardTitle>

          {item.speciality !== '' ? (
            <CardText>
              <FcInspection className="mr-2" size={20} />
              {item.speciality}
            </CardText>
          ) : null}

          {item.speciality !== '' ? (
            <CardText>
              <MdLocationOn className="mr-2" size={20} />
              {item.address}
            </CardText>
          ) : null}

          <Link
            className="btn btn-primary"
            to={`/user/appointments/new/${item.id}`}
          >
            <FaRegCalendarCheck className="mr-2" size={20} />
            Book Appointment
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
}
