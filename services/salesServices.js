const salesModel = require('../models/salesModel');

const getAll = async () => {
  const result = await salesModel.getProducts();

  return result;
};

const findById = async (id) => {
  const result = await salesModel.findWhereId(id);

  if (result.length === 0) return result[0];

  return result;
};

module.exports = {
  getAll,
  findById,
};