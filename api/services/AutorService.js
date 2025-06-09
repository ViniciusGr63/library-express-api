import AutorRepository from '../repositories/AutorRepository.js';

class AutorService {
  async createAutor(data) {
    return AutorRepository.create(data);
  }

  async getAllAutores() {
    return AutorRepository.findAll();
  }

  async getAutorById(id) {
    return AutorRepository.findById(id);
  }

  async updateAutor(id, data) {
    return AutorRepository.update(id, data);
  }

  async deleteAutor(id) {
    return AutorRepository.delete(id);
  }
}

export default new AutorService();
