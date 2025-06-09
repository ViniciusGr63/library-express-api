const express = require('express');

const livroRoutes = require('./routes/livroRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
const cors = require('cors');
app.use(cors());


app.get('/api', (req, res) => {
  res.json({ libraryExpressApi : 'API de Gestão de Biblioteca está online!' });
});


app.use('/api/livros', livroRoutes);
app.use('/api/categorias', categoriaRoutes);



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});