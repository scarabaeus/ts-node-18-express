import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('ts-node-18-express');
});

app.listen(3000);
