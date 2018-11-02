const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/temp1', async (req, res) => {
  console.log('GET /temp1');
  res.json({ value: 25.6 });
});

app.get('/humid1', async (req, res) => {
  console.log('GET /humid1');
  res.json({ value: 65.3 });
});

const light1 = {};
light1.value = 0;

app.get('/light1', async (req, res) => {
  console.log('GET /light1:');
  res.json(light1);
});

app.put('/light1', async (req, res) => {
  console.log('PUT /light1:', req.body);
  light1.value = req.body.value;
  res.json(light1);
});

app.listen(5000, () => {
  console.log('Simulated endpoint running on port 5000');
})
