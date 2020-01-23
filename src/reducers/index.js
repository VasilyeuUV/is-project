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

import {
  managerActions,
  productActions,
  clientActions,
  saleActions
} from '../_constants';

const initialState = {
  managers: [],
  products: [],
  clients: [],
  loading: true,
  error: null,
  sales: []
  //   {
  //     id: 1,
  //     date: '10.01.2020',
  //     count: 1,
  //     sum: 1111,
  //     manager: 'Ivanov',
  //     product: 'House',
  //     client: 'Client_02',
  //     filename: 'Ivanov_10.01.2020.csv'
  //   },
  //   {
  //     id: 2,
  //     date: '10.01.2020',
  //     count: 1,
  //     sum: 22222,
  //     manager: 'Petrov',
  //     product: 'Car',
  //     client: 'Client_01',
  //     filename: 'Petrov_10.01.2020.csv'
  //   }
  // ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case managerActions.request:
      return {
        ...state,
        managers: [],
        products: [],
        clients: [],
        loading: true,
        error: null
      };
    case managerActions.success:
      return {
        ...state,
        managers: action.payload,
        products: [],
        clients: [],
        loading: false,
        error: null
      };
    case managerActions.failure:
      return {
        ...state,
        managers: [],
        products: [],
        clients: [],
        loading: false,
        error: action.payload
      };
    case productActions.request:
      return {
        ...state,
        managers: [],
        products: [],
        clients: [],
        loading: true,
        error: null
      };
    case productActions.success:
      return {
        ...state,
        managers: [],
        products: action.payload,
        clients: [],
        loading: false,
        error: null
      };
    case productActions.failure:
      return {
        ...state,
        managers: [],
        products: [],
        clients: [],
        loading: false,
        error: action.payload
      };
    case clientActions.request:
      return {
        ...state,
        managers: [],
        products: [],
        clients: [],
        loading: true,
        error: null
      };
    case clientActions.success:
      return {
        ...state,
        managers: [],
        products: [],
        clients: action.payload,
        loading: false,
        error: null
      };
    case clientActions.failure:
      return {
        ...state,
        managers: [],
        products: [],
        clients: [],
        loading: false,
        error: action.payload
      };
    case saleActions.request:
      return {
        ...state,
        sales: [],
        loading: true,
        error: null
      };
    case saleActions.success:
      return {
        ...state,
        sales: action.payload,
        loading: false,
        error: null
      };
    case saleActions.failure:
      return {
        ...state,
        sales: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
