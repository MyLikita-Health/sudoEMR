import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import FeedbackTable from './FeedbackTable';
import ContactusTable from './ContactusTable';



export default function Feedback ()  {
    const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
    <div>
      <Nav tabs style={{backgroundColor: "rgb(9, 96, 189)"}} >
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Feedback
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           Contact us
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1" style={{backgroundColor: "#fff"}}>
       <FeedbackTable />
        </TabPane>

        <TabPane tabId="2" style={{backgroundColor: "#fff"}}>
            <ContactusTable />
        </TabPane>
      </TabContent>
    </div>
  );
}