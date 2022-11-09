export default (key, value) => {
  if (value !== undefined) {
    return localStorage.setItem(key, value);
  } else {
    return localStorage.getItem(key);
  }
};
