import React from 'react';
//import {Route, Switch} from 'react-router-dom';

import './app.css';

import { withStoreService } from '../hoc';

import PanelLeft from '../panels/panel-left/';
import PanelMain from '../panels/panel-main/';

const App = ({ storeService }) => {
  return (
    <main role='main' className='d-flex app'>
      <PanelLeft />
      <PanelMain />
    </main>
  );
};

export default withStoreService()(App);
