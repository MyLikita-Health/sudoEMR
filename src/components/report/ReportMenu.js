import React from 'react';
import VerticalMenu from '../comp/components/vertical-menu/VerticalMenu';
import ListMenuItem from '../comp/components/vertical-menu/ListMenuItem';

import { FaArchway, FaFileAlt } from 'react-icons/fa';
import { GiChart, GiExpense, GiTwoCoins } from 'react-icons/gi';
import { RiDatabase2Line } from 'react-icons/ri';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { canUseThis } from '../auth';
import { GrNotes } from 'react-icons/gr';
import { BsArrowReturnLeft } from 'react-icons/bs';

export default function ReportMenu() {
  const user = useSelector((state) => state.auth.user);

  return (
    <React.Fragment>
      <VerticalMenu title="Menu Items">
        {user.accessTo
          ? canUseThis(user, ['Report Summary']) && (
              <ListMenuItem route="/me/report/total/summary">
                <GrNotes size={26} style={{ marginRight: 5 }} />
                Report Summary
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ['Inventory Overview']) && (
              <ListMenuItem route="/me/report/inventory/overview">
                <FaArchway size={26} style={{ marginRight: 5 }} />
                Inventory Overview
              </ListMenuItem>
            )
          : null}
        {user.accessTo
          ? canUseThis(user, ['Analytics']) && (
              <ListMenuItem route="/me/report/analytics">
                <GiChart size={26} style={{ marginRight: 5 }} />
                Analytics
              </ListMenuItem>
            )
          : null}
        {/* <ListMenuItem route="/me/report/create">
          <FaChartBar size={26} style={{ marginRight: 5 }} />
          Account Chart
        </ListMenuItem> */}
        {user.accessTo
          ? canUseThis(user, ['Daily Sales']) && (
              <ListMenuItem route="/me/report/sales">
                <FaFileAlt size={26} style={{ marginRight: 5 }} />
                Daily Sales
              </ListMenuItem>
            )
          : null}

        {user.accessTo
          ? canUseThis(user, ['Profit']) && (
              <ListMenuItem route="/me/report/profit">
                <FaArchway size={26} style={{ marginRight: 5 }} />
                Margin
              </ListMenuItem>
            )
          : null}

        {/* {user.accessTo
          ? canUseThis(user, ['Returned Drugs']) && ( */}
        <ListMenuItem route="/me/report/returned-drugs">
          <BsArrowReturnLeft size={26} style={{ marginRight: 5 }} />
          Returned Drugs
        </ListMenuItem>
        {/* )
          : null} */}

        <ListMenuItem route="/me/report/receivables-report">
          <MdKeyboardBackspace size={26} style={{ marginRight: 5 }} />
          Sales on Credit Report
        </ListMenuItem>

        {/* {user.accessTo
          ? canUseThis(user, ['Suppliers Overview']) && ( */}
        <ListMenuItem route="/me/report/customer/performance">
          <GiTwoCoins size={26} style={{ marginRight: 5 }} />
          Customers Overview
        </ListMenuItem>
        {/* )
          : null} */}
        {user.accessTo
          ? canUseThis(user, ['Suppliers Overview']) && (
              <ListMenuItem route="/me/report/supplier/performance">
                <RiDatabase2Line size={26} style={{ marginRight: 5 }} />
                Suppliers Overview
              </ListMenuItem>
            )
          : null}
        <ListMenuItem route="/me/report/expenses/breakdown">
          <GiExpense size={26} style={{ marginRight: 5 }} />
          Expenses Breakdown
        </ListMenuItem>
      </VerticalMenu>
    </React.Fragment>
  );
}
