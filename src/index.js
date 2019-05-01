import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Maintenance from './maintenance'
// import Admin from './components/AdminModule/Admin'

import registerServiceWorker from './registerServiceWorker';
import { isMoment } from 'moment';


ReactDOM.render( <Maintenance /> , document.getElementById('root'));
registerServiceWorker();
