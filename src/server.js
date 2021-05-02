const express = require('express');

// const random = require('./random');

const closest = require('./closest');

const app = express();

app.use(express.urlencoded({ extended: false }));

// #region Routes
app.get('/', (req, res) => {
  res.status(301).redirect('https://github.com/nluka/primeNumberApi');
});

// app.get('/random', (req, res) => {
//   const queryParams = req.params;
//   res.json(getRandomPrimesJsonData(queryParams));
// });

app.get('/closest', (req, res) => {
  const queryParams = req.query;
  try {
    const data = closest.getClosestPrimeJsonData(queryParams);
    res.json(data);
  } catch (error) {
    const statusCode = 400;
    res.status(statusCode).json({ statusCode, statusMessage: error.message });
  }
});

// #endregion

app.listen(3000);
