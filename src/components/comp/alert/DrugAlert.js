import React from 'react';
import { connect } from 'react-redux';
import { Card, Table } from 'reactstrap';
import moment from 'moment';
import Scrollbars from 'react-custom-scrollbars';

class DrugAlert extends React.PureComponent {
  state = {
    visible: true,
  };

  onDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    const { expiryAlert, quantityAlert } = this.props;
    if (expiryAlert.length || quantityAlert.length) {
      return (
        <Card
          color="danger"
          body
          outline
          isOpen={this.state.visible}
          style={{ margin: '10px 0' }}
          // toggle={this.onDismiss}
        >
          <Scrollbars style={{ height: '70vh' }}>
            {expiryAlert.length ? (
              <>
                <h6>Expiry Alert</h6>
                <ul style={{ padding: 1 }}>
                  {expiryAlert.map((drug, i) => (
                    <Table key={i}>
                      {drug.drug}{' '}
                      <b>{`(Expires ${moment(drug.expiry_date)
                        .endOf('day')
                        .fromNow()})`}</b>
                    </Table>
                  ))}
                </ul>
              </>
            ) : null}

            {quantityAlert.length ? (
              <>
                <h6>Quantity Alert</h6>
                <ul style={{ padding: 1 }}>
                  {quantityAlert.map((drug, i) => (
                    <li key={i}>
                      {drug.drug}
                      <b>{` (${drug.quantity} left)`}</b>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </Scrollbars>
        </Card>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ pharmacy: { expiryAlert, quantityAlert } }) => ({
  expiryAlert,
  quantityAlert,
});

export default connect(mapStateToProps)(DrugAlert);
