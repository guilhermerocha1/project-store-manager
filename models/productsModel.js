const connection = require('./connection');

const getProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return result;
};

const findWhereId = async (id) => {
  const [result] = await connection.execute(
    'SELECT id, name FROM StoreManager.products WHERE id = ?;', [id],
  );

  return result[0];
};

const create = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES(?);', [name],
  );
  return result;
};

module.exports = {
  getProducts,
  findWhereId,
  create,
};