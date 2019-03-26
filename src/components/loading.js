import React from 'react';
import loading from '../images/loading-preferred.gif';
// import { Spinner } from 'reactstrap';

const Loading = props => (
  // <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
  <img
    className="offset-xs-5 offset-sm-5 offset-md-5 offset-lg-5"
    src={loading}
    height={70}
    width={70}
  />
);

// const Loading = () => (
//   <div className="spinner-grow"  role="status">
//     <span className="sr-only">Loading...</span>
//   </div>
// );

export default Loading;
