const sinon = require('sinon');
const { expect } = require('chai');

const salesController = require('../../../controllers/salesController');
const salesService = require('../../../services/salesServices');

describe('Busca pelos produtos StoreManager Controller', () => {
  const response = {};
  const request = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(salesService, 'getAll').resolves([{
      saleId: 1, date: 'test', productId: 3, quantity: 2,
    }]);
  });
  after(function () {
    salesService.getAll.restore();
  });

  it('Verificando dados salesController', async function () {
    await salesController.getAll(request, response);
    console.log(salesController);
    expect(response.json.calledWith([{
      saleId: 1, date: 'test', productId: 3, quantity: 2,
    }])).to.be.equal(true);
  });
})