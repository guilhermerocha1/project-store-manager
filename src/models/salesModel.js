const connection = require('./connection');

const queryGetProducts = `
  SELECT pro.sale_id, sale.date, pro.product_id, pro.quantity
  FROM StoreManager.sales_products AS pro
  INNER JOIN StoreManager.sales AS sale 
  ON pro.sale_id = sale.id
  ORDER BY sale_id, product_id;
`;

const queryfindWhereId = `
  SELECT sale.date, pro.product_id, pro.quantity
  FROM StoreManager.sales_products AS pro
  INNER JOIN StoreManager.sales AS sale 
  ON pro.sale_id = sale.id
  WHERE sale_id = ?
  ORDER BY sale_id, product_id;
`;

const camelCase = (sale) => ({
  saleId: sale.sale_id,
  date: sale.date,
  productId: sale.product_id,
  quantity: sale.quantity,
});

const getProducts = async () => {
  const [result] = await connection.execute(
    queryGetProducts,
  );
  return result.map(camelCase);
};

const findWhereId = async (id) => {
  const [result] = await connection.execute(
    queryfindWhereId, [id],
  );

  return result.map(camelCase);
};

module.exports = {
  getProducts,
  findWhereId,
};