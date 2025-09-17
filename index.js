const express = require('express');
const tiqueteraRoutes = require('./src/infrastructure/TiqueteraRoutes');

const app = express();
app.use(express.json());

app.use('/tiqueteras', tiqueteraRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto: http://localhost:${PORT}`);
});
