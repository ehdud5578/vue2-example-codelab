// TODO: 서비스 작성
export default (...args) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(...args);
    }, 200);
  });
};
