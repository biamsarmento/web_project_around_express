const users = require('../data/users.json');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', (req, res) => {
  const user = users.find(user => user._id === req.params.id);
  if (!user) {
    res.status(404).send({message: `ID do usuário não encontrado`});
    return;
  }
  const { name, about } = user;
  res.send(user);
});
module.exports = router;