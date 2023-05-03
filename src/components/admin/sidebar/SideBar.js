import React from 'react';
import {  FaBriefcase, FaPaperPlane, FaQuestion, FaImage} from 'react-icons/fa';
// import SubMenu from './SubMenu';
import { NavItem, NavLink, Nav } from 'reactstrap';
import {Link} from 'react-router-dom';
// import { FaHome, FaBriefcase, FaCopy, FaImage, FaPaperPlane } from 'react-icons/fa'

const SideBar = props => (
    <div className={props.isOpen ? 'sidebar is-open' : 'sidebar'}>
      {/*<div className="sidebar-header">
              <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
              <h3>Bootstrap Sidebar</h3>
            </div>*/}
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <p>Dummy Heading</p>
          <NavItem>
            <NavLink tag={Link} to={'/about'}>
              <FaBriefcase style={{marginRight:10}} />About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/pages'}>
              <FaImage style={{marginRight:10}} />Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/faq'}>
              <FaQuestion style={{marginRight:10}} />FAQ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/contact'}>
              <FaPaperPlane style={{marginRight:10}}/>Contact
            </NavLink>
          </NavItem>
        </Nav>        
      </div>
    </div>
  );

  // const submenus = [
  //   [
  //     {
  //       title: "Home 1",
  //       target: "Home-1"
  //     },
  //     {
  //       title: "Home 2",
  //       target: "Home-2",        
  //     },
  //     {
  //       itle: "Home 3",
  //       target: "Home-3",      
  //     }
  //   ],
  //   [
  //     {
  //       title: "Page 1",
  //       target: "Page-1",          
  //     },
  //     {
  //       title: "Page 2",
  //       target: "Page-2",        
  //     }
  //   ]
  // ]
  

export default SideBar;