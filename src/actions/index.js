const managersLoaded = newManagers => {
  return {
    type: 'MANAGERS_LOADED',
    payload: newManagers
  };
};

const managersRequested = () => {
  return {
    type: 'MANAGERS_REQUESTED'
  };
};

const managersError = error => {
  return {
    type: 'MANAGERS_ERROR',
    payload: error
  };
};

export { managersLoaded, managersRequested, managersError };
