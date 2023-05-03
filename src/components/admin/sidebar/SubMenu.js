import React, { useState } from "react";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const SubMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const { icon, title, items } = props;

  return (
    <div>
      <NavItem onClick={toggleNavbar} className={!collapsed ? "menu-open" : ""}>
        <NavLink className="dropdown-toggle">
          {icon}
          {title}
        </NavLink>
      </NavItem>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={!collapsed ? "items-menu mb-1" : "items-menu"}
      >
        {items.map((item, index) => (
          <NavItem key={index} className="pl-4">
            <NavLink tag={Link} to={item.target}>
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  );
};

export default SubMenu;
