import { productActions } from '../_constants';

const updateProductList = (state, action) => {
  if (state === undefined) {
    return {
      products: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
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

    default:
      return state;
  }
};

export default updateProductList;
