import CategoriaService from '../services/CategoriaService.js';

class CategoriaController {
  async create(req, res) {
    try {
      const categoria = await CategoriaService.createCategoria(req.body);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar a categoria' });
    }
  }

  async getAll(req, res) {
    try {
      const categorias = await CategoriaService.getAllCategorias();
      res.status(200).json(categorias);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar categorias' });
    }
  }

  async getById(req, res) {
    try {
      const categoria = await CategoriaService.getCategoriaById(Number(req.params.id));
      if (categoria) {
        res.status(200).json(categoria);
      } else {
        res.status(404).json({ error: 'Categoria não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar a categoria' });
    }
  }

  async update(req, res) {
    try {
      const categoria = await CategoriaService.updateCategoria(Number(req.params.id), req.body);
      if (categoria) {
        res.status(200).json(categoria);
      } else {
        res.status(404).json({ error: 'Categoria não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar a categoria' });
    }
  }

  async delete(req, res) {
    try {
      const categoria = await CategoriaService.deleteCategoria(Number(req.params.id));
      if (categoria) {
        res.status(200).json({ message: 'Categoria deletada com sucesso' });
      } else {
        res.status(404).json({ error: 'Categoria não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar a categoria' });
    }
  }
}

export default new CategoriaController();
