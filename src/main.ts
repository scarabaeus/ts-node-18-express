import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.send('cloudwatch-mock-server');
});

app.listen(3000);
