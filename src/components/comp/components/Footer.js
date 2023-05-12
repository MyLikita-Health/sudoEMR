import React from 'react';
import moment  from 'moment';
function Footer() {
  return (
    <p
      className="text-center"
      style={{
        borderTop: '0px solid #E7E7E7',
        textAlign: 'center',
        padding: '10px',
        left: '0',
        bottom: '0',
        height: '10px',
        width: '100%',
      }}
    >
      {/* Copyright {moment().format('YYYY')} - sudoEMR */}
    </p>
  );
}

export default Footer;
