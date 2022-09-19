const productsModel = require('../models/productsModel');
const isValidName = require('../middlewares/validationName');

const getAll = async () => {
  const result = await productsModel.getProducts();

  return result;
};

const findById = async (id) => {
  const result = await productsModel.findWhereId(id);

  return result;
};

const create = async (name) => {
  const validations = isValidName(name);

  if (validations.message) return validations;

  const result = await productsModel.create(name);

  const parseResult = {
    id: result.insertId,
    name,
  };

  return {
    parseResult,
    code: 201,
  };
};

const destroy = async (id) => {
  const findBy = await productsModel.findWhereId(id);
  if (!findBy) return null;
  await productsModel.destroy(id);
  return true;
};

module.exports = {
  getAll,
  findById,
  create,
  destroy,
};
