const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello World !');
});

// Middleware de gestion d'erreurs
app.use((err, req, res, next) => {
  res.status(500).json({ err });
});

module.exports = { app };
