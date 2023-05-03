import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserMd, FaUser, FaRegHospital } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';
import { TiArrowBack } from 'react-icons/ti';
import { RiMapPinTimeLine } from 'react-icons/ri';

function AdminSidebar() {
  return (
    <nav id="sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-center">
        {/* <h3>Admin</h3> */}
        <img
          alt="logo"
          src={require('../../images/logo192.png')}
          height="100px"
          width="100px"
        />
      </div>

      <ul className="list-unstyled components">
        <NavItem
          path="/admin/dashboard"
          label="Dashboard"
          icon={<MdDashboard className="mr-2" size={20} />}
        />
        <NavItem
          path="/admin/facilities"
          label="Facilities"
          icon={<FaRegHospital className="mr-2" size={20} />}
        />
        <NavItem
          path="/admin/patients"
          label="Patients"
          icon={<FaUser className="mr-2" size={20} />}
        />
        <NavItem
          path="/admin/doctors"
          label="Doctors"
          icon={<FaUserMd className="mr-2" size={20} />}
        />
        <NavItem
          path="/admin/appointment"
          label="Appointment"
          icon={<RiMapPinTimeLine className="mr-2" size={20} />}
        />
        <NavItem
          path="/admin/feedback"
          label="Feedback"
          icon={<TiArrowBack className="mr-2" size={20} />}
        />
        <NavItem
          path="/admin/settings"
          label="Settings"
          icon={<FiSettings className="mr-2" size={20} />}
        />
      </ul>
    </nav>
  );
}

function NavItem({ path = '', label = '', icon }) {
  const location = useLocation();
  return (
    <li>
      <Link
        className={location.pathname.includes(path) ? '_active' : ''}
        to={path}
      >
        {icon}
        {label}
      </Link>
    </li>
  );
}

export default AdminSidebar;
