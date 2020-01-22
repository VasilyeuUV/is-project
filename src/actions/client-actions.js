import { clientActions } from '../_constants';

const clientsRequested = () => {
  return {
    type: clientActions.request
  };
};

const clientsLoaded = newClients => {
  return {
    type: clientActions.success,
    payload: newClients
  };
};

const clientsError = error => {
  return {
    type: clientActions.failure,
    payload: error
  };
};

const fetchClients = (storeService, dispatch) => () => {
  dispatch(clientsRequested());
  storeService
    .getClients()
    .then(data => dispatch(clientsLoaded(data)))
    .catch(err => dispatch(clientsError(err)));
};

export { fetchClients };
