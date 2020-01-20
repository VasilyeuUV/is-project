import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ManagerStoreService from './services/managerstore-service';
import { ManagerStoreServiceProvider } from './components/managerstore-sevice-context';

import store from './store';

const managerStoreService = new ManagerStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ManagerStoreServiceProvider value={managerStoreService}>
        <Router>
          <App />
        </Router>
      </ManagerStoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
