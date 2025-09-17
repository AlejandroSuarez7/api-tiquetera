const express = require('express');
const tiqueteraRoutes = require('./infrastructure/TiqueteraRoutes');

const app = express();
app.use(express.json());
app.use('/tiqueteras', tiqueteraRoutes);

module.exports = app;
