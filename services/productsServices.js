const productsModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productsModel.getProducts();

  return result;
};

const findById = async (id) => {
  const result = await productsModel.findWhereId(id);

  return result;
};

const create = async (name) => {
  const result = await productsModel.create(name);

  const parseResult = {
    id: result.insertId,
    name,
  };

  return parseResult;
};

module.exports = {
  getAll,
  findById,
  create,
};