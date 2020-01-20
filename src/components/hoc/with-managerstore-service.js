import React from 'react';
import { ManagerStoreServiceConsumer } from '../managerstore-service-context';

const withManagerStoreService = () => Wrapped => {
  return props => {
    return (
      <ManagerStoreServiceConsumer>
        {managerStoreService => {
          return (
            <Wrapped {...props} managerStoreService={managerStoreService} />
          );
        }}
      </ManagerStoreServiceConsumer>
    );
  };
};

export default withManagerStoreService;
