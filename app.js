const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/temp', async (req, res) => {
  console.log('GET /temp');
  setTimeout(() => {
    res.json({ value: 25.6 });
  }, 0);
});

app.get('/humid', async (req, res) => {
  console.log('GET /humid');
  setTimeout(() => {
    res.json({ value: 65.7 });
  }, 1000)
});

const light = {};
light.value = 0;

app.get('/light', async (req, res) => {
  console.log('GET /light:');
  res.json(light);
});

app.put('/light', async (req, res) => {
  console.log('PUT /light:', req.body);
  light.value = req.body.value;
  res.json(light);
});

app.listen(5000, () => {
  console.log('Simulated endpoint running on port 5000');
})
