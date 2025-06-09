const CategoriaRepository = require('../repositories/CategoriaRepository');

class CategoriaService {
  async createCategoria(data) {
  
    return CategoriaRepository.createCategoria(data);
  }

  async getAllCategorias() {
    return CategoriaRepository.getAllCategorias();
  }

  async getCategoriaById(id) {
    return CategoriaRepository.getCategoriaById(id);
  }

  async updateCategoria(id, data) {
   
    return CategoriaRepository.updateCategoria(id, data);
  }

  async deleteCategoria(id) {
 
    return CategoriaRepository.deleteCategoria(id);
  }
}

module.exports = new CategoriaService();
