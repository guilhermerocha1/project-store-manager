const salesService = require('../services/salesServices');

const MSG_ERROR = 'NOT FOUND';

const getAll = async (_req, res) => {
  try {
    const result = await salesService.getAll();

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: MSG_ERROR });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await salesService.findById(id);

    if (!result) res.status(404).json({ message: 'Sale not found' });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: MSG_ERROR });
  }
};

module.exports = {
  getAll,
  findById,
};