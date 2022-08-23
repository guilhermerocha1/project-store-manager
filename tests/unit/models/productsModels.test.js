const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

describe('Busca pelos produtos StoreManager Models', () => {
  before(() => {
    const result = [[], []];
    sinon.stub(connection, 'execute').resolves(result)
  });
  after(() => {
    sinon.restore();
  })
  it('Verificando se retorna um array', async () => {
    const funcGet = await productsModel.getProducts();
    console.log(funcGet);
    expect(funcGet).to.be.an('array');
  });
});