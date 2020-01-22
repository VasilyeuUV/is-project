import { managerActions } from '../_constants';

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

    default:
      return state;
  }
};

export default reducer;
