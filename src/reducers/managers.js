import { managerActions } from '../_constants';

const updateManagerList = (state, action) => {
  if (state === undefined) {
    return {
      managers: [],
      loading: true,
      error: null
    };
  }

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

export default updateManagerList;
