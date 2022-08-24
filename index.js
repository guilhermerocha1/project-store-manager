const bodyParser = require('body-parser');
const app = require('./app');
require('dotenv').config();
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

app.use(bodyParser.json());

app.get('/products', productsController.getAll);

app.get('/products/:id', productsController.findById);

app.post('/products', productsController.createProduct);

app.get('/sales', salesController.getAll);

app.get('/sales/:id', salesController.findById);

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
