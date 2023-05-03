import React from 'react';
// import { FaMoneyBill } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import HorizontalMenuItem from '../../comp/components/horizontal-menu/HorizontalMenuItem';
import ListMenuItem from '../../comp/components/vertical-menu/ListMenuItem';

function PatientProfileMenu() {
  const isMobile = useSelector((state) => state.app.isMobile);
  return isMobile ? <HorizontalMenu /> : <VerticalMenu />;
}

function VerticalMenu() {
  return (
    <VerticalMenu>
      <ListMenuItem route="/user/profile">Profile</ListMenuItem>
      <ListMenuItem route="/user/profile/payment">Payment</ListMenuItem>
      <ListMenuItem route="/user/profile/healthstatus">
        Health Status
      </ListMenuItem>
      <ListMenuItem route="/user/profile/changepassword">
        Change Password
      </ListMenuItem>
    </VerticalMenu>
  );
}

function HorizontalMenu() {
  return (
    <HorizontalMenu>
      <HorizontalMenuItem route="/user/profile">Profile</HorizontalMenuItem>
      <HorizontalMenuItem route="/user/profile/payment">
        Payment
        {/* <FaMoneyBill /> */}
      </HorizontalMenuItem>
      <HorizontalMenuItem route="/user/profile/healthstatus">
        Health Status
      </HorizontalMenuItem>
      <HorizontalMenuItem route="/user/profile/changepassword">
        Change Password
      </HorizontalMenuItem>
    </HorizontalMenu>
  );
}

export default PatientProfileMenu;
