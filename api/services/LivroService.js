const LivroRepository = require('../repositories/LivroRepository');

class LivroService {
  async createBook(data) {
    return LivroRepository.create(data);
  }

  async getAllBooks() {
    return LivroRepository.findAll();
  }

  async getBookById(id) {
    return LivroRepository.findById(id);
  }

  async updateBook(id, data) {
    return LivroRepository.update(id, data);
  }

  async deleteBook(id) {
    return LivroRepository.delete(id);
  }
}

module.exports = new LivroService();
