import React from "react";
import { connect } from "react-redux";
// import ContactForm from './ContactForm';
// import { NavLink } from 'react-router-dom';
import { Col, Row } from "reactstrap";
// import PublicNavbar from '../../routes/PublicNav';
import { Link } from "react-router-dom";
import PublicWrapper from "../../routes/PublicWrapper";
// import { FiCheck } from 'react-icons/fi';
// import moment from 'moment';

const Landing = ({ authenticated }) => (
  <PublicWrapper>
    <Row className="m-0">
      {/* <Col md={4}  className=' align-items-center justify-content-center mt-lg-5'>
    <h5 className="text-center display-4 mt-5">Health Information Management System</h5>
    <p className="lead text-center">
      sudoEMR is a software aimed at managing patient hospital/clinical and
      other related data in a timely, effective and efficient manner. Find out
      more{' '}
      <a href="https://bits-his.com/" target="_blank" rel="noopener noreferrer">
        here
      </a>
    </p>
    <hr className="my-2 " />
    {authenticated ? null :<p className="text-center">Sign up to get started.</p>}
    <center><NavLink to={authenticated ? "/me" : "/auth"} className="btn btn-dark pl-4 pr-4  ">
      {authenticated ? 'Proceed' : 'Sign-up'}
      {/* <span><FaAngleDoubleRight size={18} style={{marginTop:5}} /></span> * </NavLink></center>
    </Col> */}
      <Col md={8}>
        {/* <img alt="hero" src={require('../../images/toDoc.png')} className="img-fluid"/> */}
      </Col>
      <Col className="d-flex flex-column align-items-center justify-content-center">
        <h2
          className="display-4 font-weight-normal"
          style={{ fontSize: "40px" }}
        >
          Access Healthcare from Anywhere
        </h2>
        <p className="lead ">
          sudoEMR is a platform aimed at managing patient hospital/clinical and
          other related data in a timely, effective and efficient manner.
          <Link to="/signup" className="btn btn-primary">
            {" "}
            Get started
          </Link>
        </p>
      </Col>
    </Row>

    <div style={{ backgroundColor: "white", padding: "2em" }}>
      <center>
        <h3 className="display-4 m-0 ">Features</h3>
      </center>
      <center>
        <p className="lead m-3 text-center">
          In order to deliver quality services to our users, Our solution
          includes <br /> but not limited to the following quality-assuring
          features
        </p>
      </center>
      <Row className="m-0 p-1 pt-5">
        <Col sm={3} className="mt-2 boxshadow">
          <div className="text-center">
            <div className="icon d-flex justify-content-center">
              {" "}
              <img
                alt="video"
                // src={require('../../images/undraw_video_call_kxyp.svg')}
                height="130em"
              />
            </div>
            <h5 className="text-center pt-3">Chat/Video Call With Doctor</h5>
            <p className=" text-muted">
              {" "}
              We enable real-time communication and real-time video calling
              features to aid communication between Doctors and Patient.
              Patients can enjoy this feature at the comfort of their homes.
            </p>
          </div>
        </Col>
        <Col sm={3} className="mt-2">
          <div className="text-center">
            <div className="icon d-flex justify-content-center">
              {" "}
              <img
                alt="booking"
                // src={require('../../images/booking_co.svg')}
                height="130em"
              />
            </div>
            <h5 className="text-center pt-3"> Book Appointment </h5>
            <p className="text-muted">
              Automation of daily patient visit and appointment schedules
              allowing the patient to plan ahead, patients can book appointment
              with either a Doctor or a Hospital
            </p>
          </div>
        </Col>
        <Col sm={3} className="mt-2">
          <div className="text-center">
            <div className="icon d-flex justify-content-center">
              {" "}
              <img
                alt="hms"
                // src={require('../../images/undraw_finance_0bdk.svg')}
                height="130em"
              />
            </div>
            <h5 className="text-center pt-3"> Hospital Management </h5>
            <p className=" text-muted">
              We provide a computer-based solution aimed at managing patient
              hospital/clinical and other related data in a timely, effective
              and efficient manner.
            </p>
          </div>
        </Col>
        <Col sm={3} className="mt-2">
          <div className="text-center">
            <div className="icon d-flex justify-content-center">
              {" "}
              <img
                alt="video"
                // src={require('../../images/undraw_group_video_el8e.svg')}
                height="130em"
              />
            </div>
            <h5 className="text-center pt-3"> My Likita </h5>
            <p className=" text-muted">
              Every person needs a doctor for their health checkup. In their
              busy lives, they often forget to make an appointment with doctor
              and miss their regular health checkup. sudoEMR App help these
              people to make appointments for themselves even they are in rush.
            </p>
          </div>
        </Col>
      </Row>
    </div>

    <div className="about-us m-0 p-5">
      <center>
        <p className="display-4">About Us</p>
      </center>
      <Row className="m-0">
        <Col sm={6}>
          <img
            alt="about"
            className="img-fluid"
            // src={require('../../images/undraw_bookmarks_r6up.svg')}
            width="600em"
          />
        </Col>
        <Col sm={6} className="align-items-center justify-content-center">
          {/* <h3 className='mt-4'>Our Mission</h3> */}
          <p
            className="text-muted display-4 text-center pt-lg-5"
            style={{ fontSize: "30px" }}
          >
            We are integrated hospital management solution company aimed at
            digitization of healthcare service delivery. We provide services
            that aid better communication between the Doctor and Patient.
          </p>
          {/* <div className="ml-5">
            <p><FiCheck color='green' size='20px'/> Some texts here</p>
            <p><FiCheck color='green' size='20px'/> Some texts here</p>
            <p><FiCheck color='green' size='20px'/> Some texts here</p>
          </div> */}
          {/* <center>
            <Button outline color="dark" className="mt-3">
              {' '}
              Learn More
            </Button>
          </center> */}
        </Col>
      </Row>
    </div>

    {/* <Row
      className="contact-us overlay justify-content-center m-0 p-0"
      // style={{ backgroundImage: `url(${require('../../images/hero_1.jpg')})` }}>
      <Col md={7} className="mb-5 pb-5">
        <center>
          {' '}
          <h2 className="mt-5 text-white"> Contact Us</h2>
        </center>
      <ContactForm/>
      </Col>
    </Row> */}
  </PublicWrapper>
);

function mapStateToProps({ auth }) {
  return {
    authenticated: auth.authenticated,
  };
}

export default connect(mapStateToProps)(Landing);
