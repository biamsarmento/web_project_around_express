const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    // .populate('director')
    .then(users => res.send({ data: users }))
    .catch(err => res.status(500).send({ message: err.message }));
};

module.exports.getUserById = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then(user => {
      if(!user) {
        return res.status(404).send({ message: 'Usuário não encontrado.' });
      }
      res.send({ data: user })
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  if (!name || !about || !avatar) {
    return res.status(400).send({ message: 'Campos obrigatórios faltando: name, about, avatar.' });
  }

  User.create({ name, about, avatar })
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: err.message }));
};