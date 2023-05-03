import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import moment from 'moment';
import { connect } from 'react-redux';
import {
  getTotalSalesByUser,
  getAmountHandedOver,
  getAmountReceived,
} from '../../redux/actions/transactions';

class SalesDetails extends React.PureComponent {
  componentDidMount() {
    const {
      getTotalSalesByUser,
      getAmountHandedOver,
      getAmountReceived,
      user,
    } = this.props;
    getTotalSalesByUser(user);
    getAmountHandedOver(user);
    getAmountReceived(user);
  }
  render() {
    const {
      totalSales,
      amountHandedover,
      amountReceived,
      // balance,
    } = this.props;
    return (
      <Card body outline color="secondary">
        <CardTitle tag="h6">Sales Details</CardTitle>
        <CardText>
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>Date: </span>
          <span>{moment().format('MMMM Do, YYYY')}</span>
        </CardText>
        <CardText>
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>
            Total Received:{' '}
          </span>
          <span>{amountReceived || 0}</span>
        </CardText>
        <CardText>
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>
            Total Sales:{' '}
          </span>
          <span>{totalSales || 0}</span>
        </CardText>
        <CardText>
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>
            Total Handed over:{' '}
          </span>
          <span>{amountHandedover || 0}</span>
        </CardText>
        {/* <CardText>
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>
            Total Sales:{' '}
          </span>
          <span>{totalSales || 0}</span>
        </CardText> */}
        <CardText>
          <span style={{ fontWeight: 'bold', marginRight: 5 }}>Balance: </span>
          <span>
            {parseInt(totalSales) ||
              0 -
                (parseInt(amountHandedover) ||
                  0 + parseInt(amountReceived) ||
                  0)}
          </span>
        </CardText>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalSales: state.transactions.totalSales.totalSalesByUser,
    amountHandedover: state.transactions.totalSales.amountHandedover,
    amountReceived: state.transactions.totalSales.amountReceived,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTotalSalesByUser: user => dispatch(getTotalSalesByUser(user)),
    getAmountHandedOver: user => dispatch(getAmountHandedOver(user)),
    getAmountReceived: user => dispatch(getAmountReceived(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesDetails);
