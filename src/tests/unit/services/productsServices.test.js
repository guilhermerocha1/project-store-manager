const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsServices');

describe('Busca pelos produtos StoreManager Service', () => {

  before(() => {
    sinon.stub(productsModel, 'getProducts').resolves([]);
  })
  after(() => {
    productsModel.getProducts.restore();
  })

  it('Verificando se retorna um array', async () => {
    const funcGetAll = await productsService.getAll();
    expect(funcGetAll).to.be.an('array');
  });
})