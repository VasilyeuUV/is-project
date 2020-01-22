import { clientActions } from '../_constants';

const updateClientList = (state, action) => {
  if (state === undefined) {
    return {
      clients: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
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

export default updateClientList;
