import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios';
import './i18n';
import i18next from 'i18next';

const lang = localStorage.getItem('AppLanguage') || 'en';
axios.defaults.headers.common['Accept-Language'] = lang;
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
i18next.changeLanguage(lang);
document.documentElement.lang = lang;
console.log(document.documentElement.lang)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
