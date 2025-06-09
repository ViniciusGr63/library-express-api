import express, { json } from 'express';
import cors from 'cors';

import livroRoutes from './routes/livroRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import autorRoutes from './routes/AutorRoutes.js';
import usuarioRoutes from './routes/UsuarioRoutes.js';
import emprestimoRoutes from './routes/EmprestimoRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ libraryExpressApi: 'API de Gestão de Biblioteca está online!' });
});

app.use('/api/livros', livroRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/autores', autorRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/emprestimos', emprestimoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
