import React from "react";
import {
  FaUserPlus,
  FaUsers,
  FaAddressBook,
  FaBed,
} from "react-icons/fa";
import VerticalMenu from "../comp/components/vertical-menu/VerticalMenu";
import ListMenuItem from "../comp/components/vertical-menu/ListMenuItem";
import { canUseThis } from "../auth";
import { MdSchedule } from "react-icons/md";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RiShieldUserLine } from "react-icons/ri";
import FileUpload from "./File_Upload";
import NewUser from "./NewUser";
import Users from "./Users";
import Settings from "./Settings";
import ApproveAdmin from "./ApproveAdmin";
import DrugFrequencySetup from "./pharm-setup/DrugFrequency";
import AddNewBed from "../record/bed-allocation/AddNewBed";
import SurgicalNote from "../doc_dash/visits/components/SurgicalNote";
import ConsultationReports from "./ConsultationReports";
import { BsUpload } from "react-icons/bs";
import StaffReview from "./StaffReview";

export const adminFunctionalites = [
  {
    name: "Create User",
    display_name: "Create User",
    route: "/me/admin/create-new-user",
    icon: (
      <FaUserPlus size={26} fontWeight="bold" style={{ marginRight: 10 }} />
    ),
  },
  {
    name: "Manage Users",
    display_name: "Manage Users",
    route: "/me/admin/manage-users",
    icon: <FaUsers size={26} fontWeight="bold" style={{ marginRight: 10 }} />,
  },
  {
    name: "Settings",
    display_name: "Patient Encounters",
    route: "/me/admin/consultation-reports",
    icon: (
      <FaAddressBook size={26} fontWeight="bold" style={{ marginRight: 10 }} />
    ),
  },
  {
    name: "Settings",
    display_name: "Settings",
    route: "/me/admin/settings",
    icon: (
      <RiShieldUserLine
        size={26}
        fontWeight="bold"
        style={{ marginRight: 10 }}
      />
    ),
  },
  {
    name: "File Upload",
    display_name: "File Upload",
    route: "/me/admin/file-upload",
    icon: <BsUpload size={26} fontWeight="bold" style={{ marginRight: 10 }} />,
  },
  {
    name: "Settings",
    display_name: "Setup Drug Frequency",
    route: "/me/admin/setup-drug-frequency",
    icon: (
      <MdSchedule size={26} fontWeight="bold" style={{ marginRight: 10 }} />
    ),
  },
  {
    name: "Settings",
    display_name: "Create Beds",
    route: "/me/admin/setup-beds",
    icon: <FaBed size={26} fontWeight="bold" style={{ marginRight: 10 }} />,
  },
];

const Tabs = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <VerticalMenu title="What would you like to do?">
        {adminFunctionalites.map((item) =>
          user.accessTo
            ? canUseThis(user, [item.name]) && (
                <ListMenuItem route={item.route}>
                  {item.icon}
                  {item.display_name}
                </ListMenuItem>
              )
            : null
        )}
      </VerticalMenu>
    </div>
  );
};

function AdminDashboard() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/me/admin" to="/me/admin/create-new-user" />
        <Route path="/me/admin/create-new-user" component={NewUser} />
        <Route path="/me/admin/manage-users" component={Users} />
        {/* <Route path="/me/admin/manage-clients" component={Clients} /> */}
        <Route path="/me/admin/settings" component={Settings} />
        <Route path="/me/admin/manage-admin" component={ApproveAdmin} />
        <Route path="/me/admin/file-upload" component={FileUpload} />
        <Route
          path="/me/admin/setup-drug-frequency"
          component={DrugFrequencySetup}
        />
        <Route path="/me/admin/setup-beds" component={AddNewBed} />
        <Route path="/me/admin/surgical-consent" component={SurgicalNote} />
        <Route path="/me/admin/staffreview/:id" component={StaffReview} />
        <Route
          path="/me/admin/consultation-reports"
          component={ConsultationReports}
        />
      </Switch>
    </div>
  );
}

export default AdminDashboard;
export { Tabs };
