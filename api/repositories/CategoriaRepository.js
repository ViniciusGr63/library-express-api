const prisma = require('../../prisma/PrismaClient');

class CategoriaRepository {
  async createCategoria(data) {
    return prisma.categorias.create({ data });
  }

  async getAllCategorias() {
    return prisma.categorias.findMany({
      include: { livros: true }, // inclui os livros relacionados
    });
  }

  async getCategoriaById(id) {
    return prisma.categorias.findUnique({
      where: { id },
      include: { livros: true },
    });
  }

  async updateCategoria(id, data) {
    return prisma.categorias.update({
      where: { id },
      data,
    });
  }

  async deleteCategoria(id) {
    return prisma.categorias.delete({
      where: { id },
    });
  }
}

module.exports = new CategoriaRepository();
