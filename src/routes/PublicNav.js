import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

const PublicNavbar = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  const history = useHistory()

  return (
    <div>
      <Navbar
        expand="md"
        light
        style={{
          maxHeight: '50px',
          margin: 0,
          paddingRight: 5,
          backgroundColor: '#f0f0f0',
        }}
      >
        <NavbarBrand>
          <img
            alt="logo"
            src={require('../images/logo.png')}
            height="40"
            // width="100px"
            onClick={() => history.push('/')}
            style={{ cursor: 'pointer' }}
          />
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        {/* <Collapse isOpen={isOpen} navbar> */}
        <Nav className="ml-auto text-dark">
          {/* <NavItem>
            <NavLink
              to="/result-viewer"
              style={{ textDecoration: 'none', color: 'inherit' }}
              className="p-2 pr-3 pl-3 "
            >
              View result
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              to="/auth"
              style={{ textDecoration: 'none', color: 'inherit' }}
              className="p-2 pr-3 pl-3"
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/signup/hospital"
              style={{ textDecoration: 'none', color: 'inherit' }}
              className="p-2 pr-3 pl-3"
            >
              Sign Up
            </NavLink>
          </NavItem>
          {/* <NavItem>
              
                <a
                  href="https://github.com/bits-his/bits-his"
                  target="_blanc"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  GitHub
                </a>
              
            </NavItem> */}
        </Nav>
        {/* </Collapse> */}
      </Navbar>
    </div>
  )
}

export default PublicNavbar
