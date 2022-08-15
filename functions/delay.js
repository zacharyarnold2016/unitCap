const delay = (cb) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cb);
    }, 500);
  });
};

export default delay;
