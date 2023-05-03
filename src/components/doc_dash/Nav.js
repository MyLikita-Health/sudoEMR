import React from 'react';
import { useSelector } from 'react-redux';
import { hasAccess } from '../auth';
import { Navbar, NavbarToggler, Collapse } from 'reactstrap';
import SideNav from './SideNav';
import { useState } from 'react';

export default function DocNav() {
  const user = useSelector((state) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      {user.accessTo ? (
        hasAccess(user, ['Doctors']) && user.accessTo.length > 1 ? (
          <Navbar
            dark
            expand="md"
            style={{
              minHeight: '40px',
              padding: 0,
              margin: 0,
              paddingRight: 5,
              backgroundColor: '#0069D9',
            }}>
            <NavbarToggler onClick={toggle} />
            <Collapse
              isOpen={isOpen}
              navbar
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}>
              <SideNav />
            </Collapse>
          </Navbar>
        ) : null
      ) : null}
    </>
  );
}
