import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import Navigation from './components/navbar'
import './index.css';
import reportWebVitals from './reportWebVitals';

const login = React.createElement(Login, {}, null);
const navigation = React.createElement(Navigation, {}, null);
ReactDOM.render(
  [navigation, login],
  document.getElementById('root')
);

reportWebVitals();
