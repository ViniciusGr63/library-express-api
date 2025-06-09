const EmprestimoRepository = require('../repositories/EmprestimoRepository');

class EmprestimoService {
  async createEmprestimo(data) {
    return EmprestimoRepository.create(data);
  }

  async getAllEmprestimos() {
    return EmprestimoRepository.findAll();
  }

  async getEmprestimoById(id) {
    return EmprestimoRepository.findById(id);
  }

  async updateEmprestimo(id, data) {
    return EmprestimoRepository.update(id, data);
  }

  async deleteEmprestimo(id) {
    return EmprestimoRepository.delete(id);
  }
}

module.exports = new EmprestimoService();
