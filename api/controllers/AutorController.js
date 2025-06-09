import AutorService from '../services/AutorService.js';

class AutorController {
  async create(req, res) {
    try {
      const autor = await AutorService.createAutor(req.body);
      res.status(201).json(autor);
    } catch (error) {
      console.error('Erro ao criar autor:', error);
      res.status(500).json({ error: 'Erro ao criar o autor' });
    }
  }

  async getAll(req, res) {
    try {
      const autores = await AutorService.getAllAutores();
      res.status(200).json(autores);
    } catch (error) {
      console.error('Erro ao buscar autores:', error);
      res.status(500).json({ error: 'Erro ao buscar autores' });
    }
  }

  async getById(req, res) {
    try {
      const autor = await AutorService.getAutorById(Number(req.params.id));
      if (autor) {
        res.status(200).json(autor);
      } else {
        res.status(404).json({ error: 'Autor não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao buscar autor:', error);
      res.status(500).json({ error: 'Erro ao buscar o autor' });
    }
  }

  async update(req, res) {
    try {
      const autor = await AutorService.updateAutor(Number(req.params.id), req.body);
      if (autor) {
        res.status(200).json(autor);
      } else {
        res.status(404).json({ error: 'Autor não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao atualizar autor:', error);
      res.status(500).json({ error: 'Erro ao atualizar o autor' });
    }
  }

  async delete(req, res) {
    try {
      const autor = await AutorService.deleteAutor(Number(req.params.id));
      if (autor) {
        res.status(200).json({ message: 'Autor deletado com sucesso' });
      } else {
        res.status(404).json({ error: 'Autor não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao deletar autor:', error);
      res.status(500).json({ error: 'Erro ao deletar o autor' });
    }
  }
}

export default new AutorController();
