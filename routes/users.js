const users = require('../data/users.json');

const router = require('express').Router();

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:id', (req, res) => {
  const user = users.find(user => user._id === req.params.id);
  if (!user) {
    res.status(404).send(`ID do usuário não encontrado`);
    return;
  }
  const { name, about } = user;
  res.send(`Usuário: ${name}, Descrição: ${about}`);
});

module.exports = router;


// const users = require('../data/users.json');

// const router = require('express').Router();

// console.log(users);

// router.get('/users/:id', (req, res) => {
//   const user = users.find(user => user._id === req.params.id);
//   if (!user) {
//     res.send(`Este usuário não existe`);
//     return;
//   }
//   const { name, about } = user;
//   res.send(`Usuário: ${name}, Descrição: ${about}`);
// });

// module.exports = router;