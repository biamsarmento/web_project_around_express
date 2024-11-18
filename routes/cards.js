const router = require('express').Router();
const cards = require('../data/cards.json');

router.get('/', (req, res) => {
  res.send(cards);
});

router.get('/:id', (req, res) => {
  const card = cards.find((eachCard) => eachCard._id === req.params.id);
  if (!card) {
    res.status(404).send({ message: 'Recurso requisitado não encontrado' });
    return;
  }
  res.send(card);
});
module.exports = router;
