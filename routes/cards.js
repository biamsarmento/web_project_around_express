const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

function readCardsFile(callback) {
  const filePath = path.join(__dirname, '../data/cards.json');
  console.log('Caminho do arquivo JSON:', filePath);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err.message);
      callback(err, null);
      return;
    }

    try {
      const cards = JSON.parse(data);
      callback(null, cards);
    } catch (parseErr) {
      console.error('Erro ao analisar o JSON:', parseErr.message);
      callback(parseErr, null);
    }
  });
}

router.get('/cards', (req, res) => {
  readCardsFile((err, cards) => {
    if (err) {
      res.status(500).send(`Ocorreu um erro no servidor: ${err.message}`);
      return;
    }
    res.send(cards);
  });
});

router.get('/cards/:id', (req, res) => {
  readCardsFile((err, cards) => {
    if (err) {
      res.status(500).send(`Ocorreu um erro no servidor: ${err.message}`);
      return;
    }
    const card = cards.find(card => card._id === req.params.id);
    if (!card) {
      res.status(404).send('Recurso requisitado não encontrado');
      return;
    }
    const { name, link } = card;
    res.send(`Legenda: ${name}, Link: ${link}`);
  });
});

module.exports = router;
