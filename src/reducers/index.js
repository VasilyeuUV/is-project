import { managersActions } from '../_constants';

const initialState = {
  managers: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case managersActions.request:
      return {
        managers: [],
        loading: true,
        error: null
      };
    case managersActions.success:
      return {
        managers: action.payload,
        loading: false,
        error: null
      };
    case managersActions.failure:
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
