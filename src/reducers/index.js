const initialState = {
  managers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MANAGERS_LOADED':
      return {
        managers: action.payload
      };

    default:
      return state;
  }
};

export default reducer;

// import updateManagerList from './manager-list';
// import updateSalesTable from './sales-table';

// const reducer = (state, action) => {
//   return {
//     managerList: updateManagerList(state, action),
//     salesTable: updateSalesTable(state, action)
//   };
// };

// export default reducer;
