const express = require('express');
const cors = require('cors'); // Adicione esta linha
const livroRoutes = require('./routes/livroRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const autorRoutes = require('./routes/AutorRoutes');
const usuarioRoutes = require('./routes/UsuarioRoutes');
const emprestimoRoutes = require('./routes/EmprestimoRoutes');
const statusRoutes = require('./routes/StatusRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Corrija para express.json()
app.use(cors());

app.get('/api', (req, res) => {
  res.json({
    message: 'Bem-vindo à API de Gestão de Biblioteca!',
    descricao: 'Esta API permite gerenciar livros, autores, categorias, usuários, empréstimos e status de uma biblioteca.',
    endpoints: {
      livros: '/api/livros',
      autores: '/api/autores',
      categorias: '/api/categorias',
      usuarios: '/api/usuarios',
      emprestimos: '/api/emprestimos',
      status: '/api/status'
    }
  });
});

app.use('/api/livros', livroRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/autores', autorRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/emprestimos', emprestimoRoutes);
app.use('/api/status', statusRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
