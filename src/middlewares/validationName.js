const MAX_LENGTH = 5;

const isValidName = (name) => {
  if (!name) return { code: 400, message: '"name" is required' };
  if (name.length < MAX_LENGTH) {
    return { code: 422, message: '"name" length must be at least 5 characters long' };
  }
  return {};
};

module.exports = isValidName;