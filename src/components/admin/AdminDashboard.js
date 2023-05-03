import React from "react";
import { FaUserPlus, FaUsers, FaRegHospital, FaAddressBook } from "react-icons/fa";
import VerticalMenu from "../comp/components/vertical-menu/VerticalMenu";
import ListMenuItem from "../comp/components/vertical-menu/ListMenuItem";
import { canUseThis } from "../auth";
import { MdSchedule, MdSettings } from "react-icons/md";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// import { FallbackComp } from '../comp/components/FallbackSkeleton'
import { RiShieldUserLine } from "react-icons/ri";
import { BsShiftFill, BsUpload } from "react-icons/bs";
import ManageLab from "./ManageLab";
import FileUpload from "./File_Upload";

import Clients from "./Clients";
import NewUser from "./NewUser";
import AddHospital from "./AddHospital";
import Users from "./Users";
import Settings from "./Settings";
import StaffReview from "./StaffReview";
import ApproveAdmin from "./ApproveAdmin";
import DrugFrequencySetup from "./pharm-setup/DrugFrequency";
import AddNewBed from "../record/bed-allocation/AddNewBed";
import SurgicalNote from "../doc_dash/visits/components/SurgicalNote";
import { AiOutlineDollarCircle } from "react-icons/ai";
import AppCharges from "../doc_dash/visits/components/AppCharges";
import ConsultationReports from "./ConsultationReports";

const Tabs = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      <VerticalMenu title="What would you like to do?">
        {user.accessTo
          ? canUseThis(user, ["Create User"]) && (
              <ListMenuItem route="/me/admin/create-new-user">
                <FaUserPlus
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                Create User
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ["Manage Users"]) && (
              <ListMenuItem route="/me/admin/manage-users">
                <FaUsers
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                Manage Users
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ["Patients List"]) && (
              <ListMenuItem route="/me/admin/manage-clients">
                <RiShieldUserLine
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                Patients List
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ["Settings"]) && (
              <ListMenuItem route="/me/admin/consultation-reports">
                <FaAddressBook
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                Patient Encounters
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ["Patients List"]) && (
              <ListMenuItem route="/me/admin/manage-lab">
                <RiShieldUserLine
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                Manage Lab Tests
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ["Settings"]) && (
              <ListMenuItem route="/me/admin/settings">
                <MdSettings
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                Settings
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ["Settings"]) && (
              <ListMenuItem route="/me/admin/file-upload">
                <BsUpload
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                File Upload
              </ListMenuItem>
            )
          : null}

        {user.accessTo
          ? canUseThis(user, ["Settings"]) && (
              <ListMenuItem route="/me/admin/setup-drug-frequency">
                <MdSchedule
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                Setup Drug Frequency
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ["Settings"]) && (
              <ListMenuItem route="/me/admin/setup-beds">
                <BsUpload
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                Create Beds
              </ListMenuItem>
            )
          : null}

        {user.accessTo
          ? canUseThis(user, ["Create New Facility"]) &&
            user.username === "emaitee" && (
              <ListMenuItem route="/me/admin/create-new-facility">
                <FaRegHospital
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                Create New Facility
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ["Manage Admin"]) &&
            user.username === "emaitee" && (
              <ListMenuItem route="/me/admin/manage-admin">
                <MdSettings
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                Manage Admin
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ["Settings"]) && (
              <ListMenuItem route="/me/admin/surgical-consent">
                <BsShiftFill
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                Update Surgical Consent
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ["Settings"]) && (
              <ListMenuItem route="/me/admin/app-charges">
                <AiOutlineDollarCircle
                  size={26}
                  fontWeight="bold"
                  style={{ marginRight: 10 }}
                />
                App Charges
              </ListMenuItem>
            )
          : null}
      </VerticalMenu>
    </div>
  );
};

function AdminDashboard() {
  // const [showPatientDeposit, setShowPatientDeposit] = useState(true)
  // const [component, setComponet] = useState('')
  // const [user, setUser] = useState('')
  return (
    <div>
      <Switch>
        <Redirect exact from="/me/admin" to="/me/admin/create-new-user" />
        <Route path="/me/admin/create-new-user" component={NewUser} />
        <Route path="/me/admin/manage-users" component={Users} />
        <Route path="/me/admin/manage-clients" component={Clients} />
        <Route path="/me/admin/manage-lab" component={ManageLab} />
        <Route path="/me/admin/staffreview/:id" component={StaffReview} />
        {/* <Route path="/me/admin/client-review/:id" component={ClientReview} /> */}
        <Route path="/me/admin/create-new-facility" component={AddHospital} />
        <Route path="/me/admin/settings" component={Settings} />
        <Route path="/me/admin/manage-admin" component={ApproveAdmin} />
        <Route path="/me/admin/file-upload" component={FileUpload} />
        <Route
          path="/me/admin/setup-drug-frequency"
          component={DrugFrequencySetup}
        />
        <Route path="/me/admin/setup-beds" component={AddNewBed} />
        <Route path="/me/admin/surgical-consent" component={SurgicalNote} />
        <Route
          path="/me/admin/consultation-reports"
          component={ConsultationReports}
        />
        <Route path="/me/admin/app-charges" component={AppCharges} />
      </Switch>
    </div>
  );
}

export default AdminDashboard;
export { Tabs };
