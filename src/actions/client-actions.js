import { clientsActions } from '../_constants';

const clientsRequested = () => {
  return {
    type: clientsActions.request
  };
};

const clientsLoaded = newClients => {
  return {
    type: clientsActions.success,
    payload: newClients
  };
};

const clientsError = error => {
  return {
    type: clientsActions.failure,
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
