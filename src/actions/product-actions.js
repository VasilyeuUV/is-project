import { productActions } from '../_constants';

const productsRequested = () => {
  return {
    type: productActions.request
  };
};

const productsLoaded = newProducts => {
  return {
    type: productActions.success,
    payload: newProducts
  };
};

const productsError = error => {
  return {
    type: productActions.failure,
    payload: error
  };
};

const fetchProducts = (storeService, dispatch) => () => {
  dispatch(productsRequested());
  storeService
    .getProsucts()
    .then(data => dispatch(productsLoaded(data)))
    .catch(err => dispatch(productsError(err)));
};

export { fetchProducts };
