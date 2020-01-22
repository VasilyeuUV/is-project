import { productsActions } from '../_constants';

const productsRequested = () => {
  return {
    type: productsActions.request
  };
};

const productsLoaded = newProducts => {
  return {
    type: productsActions.success,
    payload: newProducts
  };
};

const productsError = error => {
  return {
    type: productsActions.failure,
    payload: error
  };
};

const fetchProducts = (storeService, dispatch) => () => {
  dispatch(productsRequested());
  storeService
    .getProducts()
    .then(data => dispatch(productsLoaded(data)))
    .catch(err => dispatch(productsError(err)));
};

export { fetchProducts };
