const router = require('express').Router();
const { getUsers, getUserById, createUser } = require('../controllers/users');
// const users = require('../data/users.json');

router.get('/', getUsers);

// router.get('/:id', (req, res) => {
//   const user = users.find((eachUser) => eachUser._id === req.params.id);
//   if (!user) {
//     res.status(404).send({ message: 'ID do usuário não encontrado' });
//     return;
//   }
//   res.send(user);
// });

router.get('/:id', getUserById);

router.post('/', createUser);

module.exports = router;
