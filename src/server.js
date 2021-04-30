const express = require('express');

const random = require('./random');

const closest = require('./closest');

const { getRandomPrimesJsonData } = random.getRandomPrimesJsonData;

const { getClosestPrimeJsonData } = closest.getClosestPrimeJsonData;

const app = express();

app.get('/', (req, res) => {
  res.status(301).redirect('https://github.com/nluka/primeNumberApi');
});

app.get('/random', (req, res) => {
  const queryParams = req.params;
  res.send(getRandomPrimesJsonData(queryParams));
});

app.get('/closest', (req, res) => {
  const queryParams = req.params;
  res.send(getClosestPrimeJsonData(queryParams));
});

app.listen(3000);
