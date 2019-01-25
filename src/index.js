import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Admin from './components/AdminModule/Admin'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render( <App /> , document.getElementById('root'));
registerServiceWorker();
