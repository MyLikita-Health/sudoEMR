import React from 'react';
import { Card } from 'reactstrap';
import { FaWallet, FaCreditCard } from 'react-icons/fa';

function Wallet({ balance }) {
  return (
    <Card className="p-2 mb-2 mt-2">
      <span className="d-flex flex-row align-items-center">
        <FaWallet className="mr-2" size={20} />
        <h6 className="font-weight-bold">Wallet</h6>
      </span>

      <p style={{ fontSize: 18 }}>
        Balance: <strong>₦ {balance}</strong>
      </p>

      <div className="d-flex flex-row justify-content-center">
        <button className="btn btn-primary" disabled>
          <FaCreditCard className="mr-2" size={20} /> Fund Wallet
        </button>
      </div>
    </Card>
  );
}

export default Wallet;
