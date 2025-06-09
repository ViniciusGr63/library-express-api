const EmprestimoService = require('../services/EmprestimoService');

class EmprestimoController {
  async create(req, res) {
    try {
      const emprestimo = await EmprestimoService.createEmprestimo(req.body);
      res.status(201).json(emprestimo);
    } catch (error) {
      console.error('Erro ao criar empréstimo:', error);
      res.status(500).json({ error: 'Erro ao criar o empréstimo' });
    }
  }

  async getAll(req, res) {
    try {
      const emprestimos = await EmprestimoService.getAllEmprestimos();
      res.status(200).json(emprestimos);
    } catch (error) {
      console.error('Erro ao buscar empréstimos:', error);
      res.status(500).json({ error: 'Erro ao buscar empréstimos' });
    }
  }

  async getById(req, res) {
    try {
      const emprestimo = await EmprestimoService.getEmprestimoById(Number(req.params.id));
      if (emprestimo) {
        res.status(200).json(emprestimo);
      } else {
        res.status(404).json({ error: 'Empréstimo não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao buscar empréstimo:', error);
      res.status(500).json({ error: 'Erro ao buscar o empréstimo' });
    }
  }

  async update(req, res) {
    try {
      const emprestimo = await EmprestimoService.updateEmprestimo(Number(req.params.id), req.body);
      if (emprestimo) {
        res.status(200).json(emprestimo);
      } else {
        res.status(404).json({ error: 'Empréstimo não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao atualizar empréstimo:', error);
      res.status(500).json({ error: 'Erro ao atualizar o empréstimo' });
    }
  }

  async delete(req, res) {
    try {
      await EmprestimoService.deleteEmprestimo(Number(req.params.id));
      res.status(200).json({ message: 'Empréstimo deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar empréstimo:', error);
      res.status(500).json({ error: 'Erro ao deletar o empréstimo' });
    }
  }
}

module.exports = new EmprestimoController();
