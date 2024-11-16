const cards = require('../data/cards.json');

const router = require('express').Router();

router.get('/cards', (req, res) => {
  res.send(cards);
});

router.get('/cards/:id', (req, res) => {
  const card = cards.find(card => card._id === req.params.id);

  if (!card) {
    res.status(404).send(`ID do card não encontrado`);
    return;
  }
  const { name, link } = card;
  res.send(`Legenda: ${name}, Link: ${link}`);
});

module.exports = router;

// const cards = require('../data/cards.json');

// const router = require('express').Router();

// console.log(cards);

// router.get('/cards/:id', (req, res) => {
//   const card = cards.find(card => card._id === req.params.id);

//   if (!card) {
//     res.send(`Este cartão não existe`);
//     return;
//   }
//   const { name, link } = card;
//   res.send(`Legenda: ${name}, Link: ${link}`);
// });

// module.exports = router;