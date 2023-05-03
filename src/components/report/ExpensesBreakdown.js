import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  TabContent,
  NavItem,
  Nav,
  TabPane,
  NavLink,
} from 'reactstrap';
import SupplierPaymentReport from './SupplierPaymentReport'
import NormalExpensesReport from './NormalExpenses'

export default function ExpensesBreakdown() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Card>
        <CardHeader tag="h5" className="text-center">
          Expenses Breakdown
        </CardHeader>
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
                Normal Expenses
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
                Supplier Payment
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1" className="bg-light">
              <NormalExpensesReport />
            </TabPane>
            <TabPane tabId="2" className="bg-light">
              <SupplierPaymentReport />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </>
  );
}
