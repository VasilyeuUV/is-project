import { managersActions } from '../_constants';

const managersRequested = () => {
  return {
    type: managersActions.request
  };
};

const managersLoaded = newManagers => {
  return {
    type: managersActions.success,
    payload: newManagers
  };
};

const managersError = error => {
  return {
    type: managersActions.failure,
    payload: error
  };
};

export { managersLoaded, managersRequested, managersError };
