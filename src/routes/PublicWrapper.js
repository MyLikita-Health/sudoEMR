import React from 'react';
import PublicNavbar from './PublicNav';

function PublicWrapper(props) {
  return (
    <React.Fragment>
      <PublicNavbar />
      <div style={{ height: '5px' }} />
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default PublicWrapper;
