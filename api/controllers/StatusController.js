const StatusService = require('../services/StatusService');

class StatusController {
  async create(req, res) {
    try {
      const status = await StatusService.createStatus(req.body);
      res.status(201).json(status);
    } catch (error) {
      console.error('Erro ao criar status:', error);
      res.status(500).json({ error: 'Erro ao criar o status' });
    }
  }

  async getAll(req, res) {
    try {
      const status = await StatusService.getAllStatus();
      res.status(200).json(status);
    } catch (error) {
      console.error('Erro ao buscar status:', error);
      res.status(500).json({ error: 'Erro ao buscar status' });
    }
  }

  async getById(req, res) {
    try {
      const status = await StatusService.getStatusById(Number(req.params.id));
      if (status) {
        res.status(200).json(status);
      } else {
        res.status(404).json({ error: 'Status não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao buscar status:', error);
      res.status(500).json({ error: 'Erro ao buscar status' });
    }
  }

  async delete(req, res) {
    try {
      await StatusService.deleteStatus(Number(req.params.id));
      res.status(200).json({ message: 'Status deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar status:', error);
      res.status(500).json({ error: 'Erro ao deletar o status' });
    }
  }
}

module.exports = new StatusController();
