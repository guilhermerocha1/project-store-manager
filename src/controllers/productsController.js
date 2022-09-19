const productsService = require('../services/productsServices');

const MSG_ERROR = 'NOT FOUND';

const getAll = async (_req, res) => {
  try {
    const result = await productsService.getAll();
  
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: MSG_ERROR });
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
    res.status(500).json({ message: MSG_ERROR });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const { parseResult, message, code } = await productsService.create(name);

    if (message) return res.status(code).json({ message });
  
    res.status(code).json(parseResult);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: MSG_ERROR });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productsService.destroy(id);
    if (!result) res.status(404).json({ message: 'Product not found' });
    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: MSG_ERROR });
  }
};

module.exports = {
  getAll,
  findById,
  createProduct,
  destroy,
};
