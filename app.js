const express = require('express');
const app = express();
const axios = require('axios');

const NasaController = require('./controller/NasaController');

const nasaController = new NasaController(axios);

app.get('/nasa', async (req, res) => await nasaController.accessData(req, res));

app.listen(3000, () => console.log('Up on port 3000'));