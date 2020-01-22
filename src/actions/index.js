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

const fetchManagers = (storeService, dispatch) => () => {
  dispatch(managersRequested());
  storeService
    .getManagers()
    .then(data => dispatch(managersLoaded(data)))
    .catch(err => dispatch(managersError(err)));
};

export { fetchManagers };
