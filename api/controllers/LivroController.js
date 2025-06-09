const LivroService = require('../services/LivroService');

class LivroController {
  async create(req, res) {
    try {
      const livro = await LivroService.createBook(req.body);
      res.status(201).json(livro);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar o livro' });
    }
  }

  async getAll(req, res) {
    try {
      const livros = await LivroService.getAllBooks();
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar livros' });
    }
  }

  async getById(req, res) {
    try {
      const livro = await LivroService.getBookById(Number(req.params.id));
      if (livro) {
        res.status(200).json(livro);
      } else {
        res.status(404).json({ error: 'Livro não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar o livro' });
    }
  }

  async update(req, res) {
    try {
      const livro = await LivroService.updateBook(Number(req.params.id), req.body);
      if (livro) {
        res.status(200).json(livro);
      } else {
        res.status(404).json({ error: 'Livro não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar o livro' });
    }
  }

  async delete(req, res) {
    try {
      const livro = await LivroService.deleteBook(Number(req.params.id));
      if (livro) {
        res.status(200).json({ message: 'Livro deletado com sucesso' });
      } else {
        res.status(404).json({ error: 'Livro não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar o livro' });
    }
  }
}

module.exports = new LivroController();
