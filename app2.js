const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const light2 = {};
light2.value = 0;

app.get('/light2', async (req, res) => {
  console.log('GET /light2:');
  res.json(light2);
});

app.post('/light2/on', async (req, res) => {
  console.log('POST /light2/on:', req.body);
  light2.value = 1;
  res.json(light2);
});

app.post('/light2/off', async (req, res) => {
  console.log('POST /light2/off:', req.body);
  light2.value = 0;
  res.json(light2);
});

app.listen(5001, () => {
  console.log('Simulated endpoint running on port 5001');
})
