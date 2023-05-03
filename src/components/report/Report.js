import React from 'react'
import { Row, Col } from 'reactstrap'
import { Switch, Route, Redirect } from 'react-router-dom'

import CreateAccount from './Account'
import DailySales from './DailySales'
import Summary from './Analytics'
import Profit from './Profit'
import InvertoryOverView from './InventoryOverview'
import SupplierPerformance from './SupplierPerformance'
import TotalSummary from './TotalSummary'
import ExpensesBreakdown from './ExpensesBreakdown'
import ReturnDrugsReport from './ReturnedDrugsReport'
import ReceivablesReports from './ReceivablesReport'
import CustomerPerformance from './CustomerPerformance'
import ReportMenu from './ReportMenu'

function Report() {
  return (
    <Row className="m-0">
      <Col md={3}>
        <ReportMenu />
      </Col>
      <Col md={9} className="m-0">
        <Switch>
          <Redirect exact from="/me/report/" to="/me/report/total/summary" />
          <Route exact path="/me/report/analytics" component={Summary} />
          <Route exact path="/me/report/create" component={CreateAccount} />
          <Route exact path="/me/report/sales" component={DailySales} />
          <Route exact path="/me/report/profit" component={Profit} />
          <Route
            exact
            path="/me/report/returned-drugs"
            component={ReturnDrugsReport}
          />
          <Route
            exact
            path="/me/report/receivables-report"
            component={ReceivablesReports}
          />
          <Route
            exact
            path="/me/report/inventory/overview"
            component={InvertoryOverView}
          />
          <Route
            exact
            path="/me/report/customer/performance"
            component={CustomerPerformance}
          />
          <Route
            exact
            path="/me/report/supplier/performance"
            component={SupplierPerformance}
          />
          <Route
            exact
            path="/me/report/total/summary"
            component={TotalSummary}
          />
          <Route
            exact
            path="/me/report/expenses/breakdown"
            component={ExpensesBreakdown}
          />
        </Switch>
      </Col>
    </Row>
  )
}

export default Report
