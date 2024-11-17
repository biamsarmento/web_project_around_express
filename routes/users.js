const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();


function readUsersFile(callback) {

  const filePath = path.join(__dirname, '../data/users.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    try {
      const users = JSON.parse(data);
      callback(null, users);
    } catch (parseErr) {
      callback(parseErr, null);
    }
  });
}

router.get('/users', (req, res) => {
  readUsersFile((err, users) => {
    if (err) {
      res.status(500).send('Ocorreu um erro no servidor.');
      console.error(err);
      return;
    }
    res.send(users);
  });
});

router.get('/users/:id', (req, res) => {
  readUsersFile((err, users) => {
    if (err) {
      res.status(500).send('Ocorreu um erro no servidor.');
      console.error(err);
      return;
    }
    const user = users.find(user => user._id === req.params.id);
    if (!user) {
      res.status(404).send('ID do usuário não encontrado');
      return;
    }
    const { name, about } = user;
    res.send(`Usuário: ${name}, Descrição: ${about}`);
  });
});

module.exports = router;
