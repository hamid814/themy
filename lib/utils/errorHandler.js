const errors = [];

const createError = (err) => {
  if (errors.indexOf(err) === -1) {
    console.error(new Error(err));
    errors.push(err);
  }
};

module.exports = createError;
