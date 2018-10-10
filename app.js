const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/temp1', async (req, res) => {
  console.log('GET /temp1');
  res.json({ value: 25.6 });
});

app.get('/humid1', async (req, res) => {
  console.log('GET /humid1');
  //res.json({ value: 65.8 });
  res.json([1.2, 1.4, 1.7]);
});

app.put('/light1', async (req, res) => {
  console.log('PUT /light1:', req);
});

app.post('/light1/on', async (req, res) => {
  console.log('POST /light1/on:', req);
});

app.post('/light1/off', async (req, res) => {
  console.log('POST /light1/off:', req);
});

app.listen(5000, () => {
  console.log('Simulated endpoint running on port 5000');
})
