import React from 'react';
import { ServiceConsumer } from '../service-context';

const withStoreService = () => Wrapped => {
  return props => {
    return (
      <ServiceConsumer>
        {storeService => {
          return <Wrapped {...props} storeService={storeService} />;
        }}
      </ServiceConsumer>
    );
  };
};

export default withStoreService;
