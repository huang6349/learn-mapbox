const onError = (err) => {
  err.preventDefault();

  console.error(err.message);
};

export default onError;
