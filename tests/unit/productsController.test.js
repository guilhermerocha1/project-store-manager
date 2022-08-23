const sinon = require('sinon');
const { expect } = require('chai');
const { before } = require('mocha');

const productsController = require('../../controllers/productsController');
const productsService = require('../../services/productsServices');

describe('Busca pelos produtos StoreManager Controller', () => {
  const response = {};
  const request = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(productsService, 'getAll').resolves([{ id: 1, name: 'test' }]);
  });
  after(function () {
    productsService.getAll.restore();
  });

  it('Adicionand dados', async function () {
    await productsController.getAll(request, response);
    expect(response.json.calledWith([{ id: 1, name: 'test' }])).to.be.equal(true);
  });
})