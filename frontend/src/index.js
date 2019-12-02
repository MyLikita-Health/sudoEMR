import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Maintenance from '.maintenance-page/maintenance'
// import Admin from './components/AdminModule/Admin'

import registerServiceWorker from './registerServiceWorker';
import { isMoment } from 'moment';


ReactDOM.render( <App /> , document.getElementById('root'));
registerServiceWorker();
