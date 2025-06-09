const LivroRepository = require('../repositories/LivroRepository');

class LivroService {
  async createBook(data) {
    return LivroRepository.create(data);
  }

  async getAllBooks() {
  try {
    return await LivroRepository.findAll();
  } catch (error) {
    console.error('Erro no LivroService.getAllBooks:', error);
    // Retorna array vazio em caso de erro
    return [];
  }
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
