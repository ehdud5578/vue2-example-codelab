export default (key, value) => {
  if (value) {
    return localStorage.setItem(key, value);
  } else {
    return localStorage.getItem(key);
  }
};
