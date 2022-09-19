const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

describe('Busca pelos sales StoreManager Models', () => {
  before(() => {
    const result = [[], []];
    sinon.stub(connection, 'execute').resolves(result)
  });
  after(() => {
    sinon.restore();
  })
  it('Verificando se retorna um array', async () => {
    const funcGet = await salesModel.getProducts();
    expect(funcGet).to.be.an('array');
  });
});