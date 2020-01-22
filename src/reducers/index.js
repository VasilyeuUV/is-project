// import updateManagerList from './managers';
// import updateProductList from './products';
// import updateClientList from './clients';

// const reducer = (state, action) => {
//   return {
//     managerList: updateManagerList(state, action),
//     productList: updateProductList(state, action),
//     clientList: updateClientList(state, action)
//   };
// };

// export default reducer;

import { managerActions, productActions, clientActions } from '../_constants';

const initialState = {
  managers: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case managerActions.request:
      return {
        managers: [],
        loading: true,
        error: null
      };
    case managerActions.success:
      return {
        managers: action.payload,
        loading: false,
        error: null
      };
    case managerActions.failure:
      return {
        managers: [],
        loading: false,
        error: action.payload
      };
    case productActions.request:
      return {
        products: [],
        loading: true,
        error: null
      };
    case productActions.success:
      return {
        products: action.payload,
        loading: false,
        error: null
      };
    case productActions.failure:
      return {
        products: [],
        loading: false,
        error: action.payload
      };
    case clientActions.request:
      return {
        clients: [],
        loading: true,
        error: null
      };
    case clientActions.success:
      return {
        clients: action.payload,
        loading: false,
        error: null
      };
    case clientActions.failure:
      return {
        clients: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
