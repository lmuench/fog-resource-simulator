const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app1 = express();

app1.use(cors());
app1.use(bodyParser.json());

app1.get('/temp', async (req, res) => {
  console.log('GET :5000/temp');
  res.json({ value: 25.6 });
//  setTimeout(() => {
//    res.json({ value: 25.6 });
//  }, 0);
});

app1.get('/humid', async (req, res) => {
  console.log('GET :5000/humid');
  res.json({ value: 65.7 })
//  setTimeout(() => {
//    res.json({ value: 65.7 });
//  }, 1000)
});

const light1 = {};
light1.value = 0;

app1.get('/light', async (req, res) => {
  console.log('GET :5000/light:');
  res.json(light1);
});

app1.put('/light', async (req, res) => {
  console.log('PUT :5000/light:', req.body);
  light1.value = req.body.value;
  res.json(light1);
});

// app1.get('/daily-temperatures', async (req, res) => {
//  console.log('GET :5000/daily-temperatures:');
//  res.json([3.1, 3.8, 4.5]);
// });


app1.listen(5000, () => {
  console.log('First simulated endpoint running on port 5000');
})

// --------------------

const app2 = express();

app2.use(cors());
app2.use(bodyParser.json());

const light2 = {};
light2.value = 0;

app2.get('/light', async (req, res) => {
  console.log('GET :5001/light:');
  res.json(light2);
});

app2.put('/light', async (req, res) => {
  console.log('PUT :5001/light:', req.body);
  light2.value = req.body.value;
  res.json(light2);
});

app2.listen(5001, () => {
  console.log('Second simulated endpoint running on port 5001');
})
