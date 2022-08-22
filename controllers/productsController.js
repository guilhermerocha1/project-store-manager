const productsService = require('../services/productsServices');

const MSG_ERROR = 'NOT FOUND';

const getAll = async (_req, res) => {
  try {
    const result = await productsService.getAll();
  
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: MSG_ERROR });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productsService.findById(id);
    
    if (!result) res.status(404).json({ message: 'Product not found' });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: MSG_ERROR });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await productsService.create(name);
  
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: MSG_ERROR });
  }
};

module.exports = {
  getAll,
  findById,
  createProduct,
};