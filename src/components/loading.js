import React from 'react';
import loading from '../images/loading-preferred.gif';

const Loading = () => (
  <center>
    <img alt="Loading..." src={loading} height={70} width={70} />
  </center>
);

export const LoadingSM = () => (
  <>
    Loading
    <img alt="Loading..." src={loading} height={30} />
  </>
);

export const LoadingXsm = () => (
  <>
    Loading
    <img alt="Loading..." src={loading} height={20} />
  </>
);

export default Loading;
