const { expect } = require('chai');
const describe = require('mocha');
const sinon = require('sinon');

const connection = require('../../models/connection');
const productsModel = require('../../models/productsModel');

describe('Busca pelos produtos StoreManager Models', () => {
  before(() => {
    const result = [[], []];
    sinon.stub(connection, 'execute').resolves(result)
  });
  after(() => {
    connection.execute.restore();
  })
  it('Verificando se retorna um array', async () => {
    const funcGet = await productsModel.getProducts();
    expect(funcGet).to.be.an('array');
  });
});