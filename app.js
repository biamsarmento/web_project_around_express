const express = require('express');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).send({
    message: 'Rota não encontrada. Verifique o endereço e tente novamente.'
  });
});

app.use((err, req, res, next) => {
  console.error('Erro interno:', err.stack); // Log do erro no console
  res.status(500).send({
    message: 'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.'
  });
});

app.listen(PORT, () => {
    console.log(`O App está escutando na porta ${PORT}`);
});