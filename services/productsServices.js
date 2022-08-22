const productsModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModel.getProducts();

  return result;
};

const findById = async (id) => {
  const result = await productsModel.findWhereId(id);

  return result;
};

module.exports = {
  getAll,
  findById,
};