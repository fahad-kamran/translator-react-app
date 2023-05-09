import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// global css
import './App.css';
import Header from './Components/Header';
import Posts from './Components/Posts';

function App() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className='container-lg'>
        <Header />
        <h1>{t('HomePageTitle')}</h1>
        <h2>{t('submitText')}</h2>
        <p>{t('left')}</p>
        <p>{t('right')}</p>
        <p>{t('top')}</p>
        <p>{t('bottom')}</p>
        <p>{t('discription')}</p>
        <Posts />
      </div>
    </Fragment>
  )
}

export default App;

// Author: Fahad Kamran;
// Date: 09 - MAY - 2023;
// Message: multi language App, change languages for application;

// package install
// npm i bootstrap react-bootstrap
// npm i axios
// npm i react-i18next
// npm i i18next