const managersLoaded = newManagers => {
  return {
    type: 'MANAGERS_LOADED',
    payload: newManagers
  };
};

export { managersLoaded };
