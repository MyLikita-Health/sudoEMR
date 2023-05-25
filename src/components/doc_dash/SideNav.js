import React from "react";
import { BsListUl } from "react-icons/bs";
// import { FiCalendar } from 'react-icons/fi';
// import { useHistory, useLocation } from 'react-router';
import { FaClipboardList, FaVideo, FaCalendar } from "react-icons/fa";
// import { IoMdPeople } from 'react-icons/io';
import { GiTestTubes } from "react-icons/gi";
// import { RiUserShared2Line } from 'react-icons/ri';
// import { useSelector } from 'react-redux';
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
// import { useSelector } from 'react-redux';

function SideNav({ toggle = (f) => f }) {
  // const history = useHistory();
  // const location = useLocation();
  // const isMobile = useSelector((state) => state.app.isMobile);
  // const user = useSelector((state) => state.auth.user);
  return (
    <Nav className="ml-auto" navbar>
      {/* <NavElement
        title="Out-Patients"
        icon={<BsListUl className="mr-2" size={22} />}
        toggle={toggle}
        route="/me/doctors/patients"
      /> */}
      {/* <NavElement
        title="In-Patients"
        icon={<BsListUl className="mr-2" size={22} />}
        toggle={toggle}
        route="/me/doctors/in-patients"
      /> */}
      <NavElement
        title="Appointments"
        icon={<FaCalendar className="mr-2" size={22} />}
        toggle={toggle}
        route="/me/doctors/appointments"
      />
      <NavElement
        title="Consultations"
        icon={<FaClipboardList className="mr-2" size={22} />}
        toggle={toggle}
        // route="/me/doctors/visits"
        route="/me/doctors/visits/new-summary/view"
      />
      {/* <NavElement
        title="Lab Results"
        icon={<GiTestTubes className="mr-2" size={22} />}
        toggle={toggle}
        route="/me/doctors/labs"
      /> */}
      {/* <NavElement
        title="Video Chat"
        icon={<FaVideo className="mr-2" size={22} />}
        toggle={toggle}
        route="/me/doctors/videochat"
      /> */}
      {/* <NavElement
        title="Start Consultation"
        icon={<IoMdPeople className="mr-2" size={22} />}
        toggle={toggle}
        route="/me/doctors/consultation"
      /> */}
      {/* <NavElement
        title="Consult/Referral"
        icon={<RiUserShared2Line className="mr-2" size={22} />}
        toggle={toggle}
        route="/me/doctors/consult_referral"
      /> */}

      {/* {user.userType === 'admin' && (
        <NavElement
          icon={<FaUser className="mr-2" size={22} />}
          title="Admin"
          toggle={toggle}
          route="/me/doctors/manage"
        />
      )} */}
    </Nav>
  );
}

function NavElement({ title, icon, toggle, route }) {
  return (
    <NavItem onClick={toggle} className="mr-2">
      <NavLink to={route} className="nav">
        {icon}
        {title}
      </NavLink>
    </NavItem>
  );
}

export default SideNav;

// <div className="mt-2">
//       <button
//         className={`btn col-md-3 col-lg-3 ${
//           location.pathname.includes('/me/doctors/patients')
//             ? 'btn-light'
//             : 'btn-outline-light'
//         } ${isMobile ? 'text-dark' : ''} text-left`}
//         onClick={() => {
//           history.push('/me/doctors/patients');
//           toggle();
//         }}
//       >
//         <span className="d-flex flex-direction-row align-items-center">
//           <BsListUl className="mr-3" size={22} />
//           Patients
//         </span>
//       </button>
//       <button
//         className={`btn col-md-3 col-lg-3 ${
//           location.pathname.includes('/me/doctors/appointments')
//             ? 'btn-light'
//             : 'btn-outline-light'
//         } ${isMobile ? 'text-dark' : ''}  text-left`}
//         onClick={() => {
//           history.push('/me/doctors/appointments');
//           toggle();
//         }}
//       >
//         <span className="d-flex flex-direction-row align-items-center">
//           <FaCalendar className="mr-3" size={22} />
//           Appointments
//         </span>
//       </button>
//       <button
//         className={`btn col-md-3 col-lg-3 ${
//           location.pathname.includes('/me/doctors/visits')
//             ? 'btn-light'
//             : 'btn-outline-light'
//         } ${isMobile ? 'text-dark' : ''}  text-left`}
//         onClick={() => {
//           history.push('/me/doctors/visits');
//           toggle();
//         }}
//       >
//         <span className="d-flex flex-direction-row align-items-center">
//           <FaClipboardList className="mr-3" size={22} />
//           Follow-up Visits
//         </span>
//       </button>
//       <button
//         className={`btn col-md-3 col-lg-3 ${
//           location.pathname.includes('/me/doctors/labs')
//             ? 'btn-light'
//             : 'btn-outline-light'
//         } ${isMobile ? 'text-dark' : ''}  text-left`}
//         onClick={() => {
//           history.push('/me/doctors/labs');
//           toggle();
//         }}
//       >
//         <span className="d-flex flex-direction-row align-items-center">
//           <GiTestTubes className="mr-3" size={22} />
//           Lab
//         </span>
//       </button>
//       <button
//         className={`btn col-md-3 col-lg-3 ${
//           location.pathname.includes('/me/doctors/videochat')
//             ? 'btn-light'
//             : 'btn-outline-light'
//         } ${isMobile ? 'text-dark' : ''}  text-left`}
//         onClick={() => {
//           history.push('/me/doctors/videochat');
//           toggle();
//         }}
//       >
//         <span className="d-flex flex-direction-row align-items-center">
//           <FaVideo className="mr-3" size={22} />
//           Video Chat
//         </span>
//       </button>
//     </div>
