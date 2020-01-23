import { saleActions } from '../_constants';

const salesRequested = () => {
  return {
    type: saleActions.request
  };
};

const salesLoaded = newSales => {
  return {
    type: saleActions.success,
    payload: newSales
  };
};

const salesError = error => {
  return {
    type: saleActions.failure,
    payload: error
  };
};

const fetchSales = (storeService, dispatch) => () => {
  dispatch(salesRequested());
  storeService
    .getSales()
    .then(data => dispatch(salesLoaded(data)))
    .catch(err => dispatch(salesError(err)));
};

export { fetchSales };
