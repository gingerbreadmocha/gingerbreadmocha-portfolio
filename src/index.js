import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import jquery from 'jquery';
window.jQuery = window.$ = jquery; 
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
