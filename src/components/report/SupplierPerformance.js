import React, { useState } from 'react';
import {
  Card,
  CardBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import SuppliersAmountTable from './SuppliersAmountTable';
import SupplierName from './SupplierName';
import SupplierTable from './SupplierTable';
import CreditReport from './CreditReport';
import SupplierDebtorsReport from './SupplierDebtorsReport';

// const today = moment().format('YYYY-MM-DD');

export default function SupplierPerformance() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={activeTab === '1' ? 'active' : 'text-primary'}
                onClick={() => {
                  toggle('1');
                }}
                style={{ cursor: 'pointer' }}
              >
                All Suppliers Overview
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === '2' ? 'active' : 'text-primary'}
                onClick={() => {
                  toggle('2');
                }}
                style={{ cursor: 'pointer' }}
              >
                Items per Supplier
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === '3' ? 'active' : 'text-primary'}
                onClick={() => {
                  toggle('3');
                }}
                style={{ cursor: 'pointer' }}
              >
                Purchases
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === '4' ? 'active' : 'text-primary'}
                onClick={() => {
                  toggle('4');
                }}
                style={{ cursor: 'pointer' }}
              >
                Creditors Report
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === '5' ? 'active' : 'text-primary'}
                onClick={() => {
                  toggle('5');
                }}
                style={{ cursor: 'pointer' }}
              >
                Debtors Report
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1" className="bg-light">
              <SuppliersAmountTable />
            </TabPane>
            <TabPane tabId="2" className="bg-light">
              <SupplierName />
            </TabPane>
            <TabPane tabId="3" className="bg-light">
              <SupplierTable />
            </TabPane>
            <TabPane tabId="4" className="bg-light">
              <CreditReport />
            </TabPane>
            <TabPane tabId="5" className="bg-light">
              <SupplierDebtorsReport />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </div>
  );
}
