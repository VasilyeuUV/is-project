const initialState = {
  managers: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MANAGERS_REQUESTED':
      return {
        managers: [],
        loading: true,
        error: null
      };
    case 'MANAGERS_LOADED':
      return {
        managers: action.payload,
        loading: false,
        error: null
      };
    case 'MANAGERS_ERROR':
      return {
        managers: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
