const localStorage = () => (next) => (action) => {
  const response = next(action);
  const { meta } = action;
  if (meta && meta.localStorage) {
    const { key, value } = meta.localStorage;
    console.log(key, value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  return response;
};

export default localStorage;
