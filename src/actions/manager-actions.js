import { managerActions } from '../_constants';

const managersRequested = () => {
  return {
    type: managerActions.request
  };
};

const managersLoaded = newManagers => {
  return {
    type: managerActions.success,
    payload: newManagers
  };
};

const managersError = error => {
  return {
    type: managerActions.failure,
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
