const express = require('express');
  // escute a porta 3000
  const { PORT = 3000 } = process.env;

  const app = express();

  app.listen(PORT, () => {
      console.log(`O App está escutando na porta ${PORT}`);
  });