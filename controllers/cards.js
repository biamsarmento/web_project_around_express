const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    // .populate('user')
    .then(cards => res.send({ data: cards }))
    .catch(err => res.status(500).send({ message: err.message }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner})
    .then(card =>
      Card.findById(card._id).populate('owner')
    )
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: err.message }));
};

module.exports.deleteCard = (req, res) => {
  const { id } = req.params;

  Card.findByIdAndDelete(id)
    .then(user => res.send({ data: user }))
    .catch(err => res.status(500).send({ message: err.message }));
};

