const router = require('express').Router();
const { getUsers, getUserById, createUser, updateUser, updateUserAvatar, deleteUser } = require('../controllers/users');

router.get('/', getUsers);;

router.get('/:id', getUserById);

router.post('/', createUser);

router.patch('/me', updateUser);

router.patch('/me/avatar', updateUserAvatar);

// router.delete('/:id', deleteUser);

module.exports = router;
