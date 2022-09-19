const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../models/salesModel');
const salesService = require('../../../services/salesServices');

describe('Busca pelos sales StoreManager Service', () => {

  before(() => {
    sinon.stub(salesModel, 'getProducts').resolves([]);
  })
  after(() => {
    salesModel.getProducts.restore();
  })

  it('Verificando se retorna um array', async () => {
    const funcGetAll = await salesService.getAll();
    expect(funcGetAll).to.be.an('array');
  });
})